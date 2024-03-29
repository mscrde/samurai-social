import { createAction, createReducer } from "@reduxjs/toolkit";
import { samuraiClient } from "../../clients/samuraiClient";

const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_IS_USERS_FETCHING = 'SET_IS_USERS_FETCHING';
const TOGGLE_FOLLOWING_PROCESS = 'TOGGLE_FOLLOWING_PROCESS';

type UsersReduserStateType = {
    users: any[],
    usersTotalCount: number,
    pages: number[],
    pageSize: number,
    isUsersFetching: boolean,
    followingInProcessUserIds: number[]
}

const initState: UsersReduserStateType = {
    users: [],
    usersTotalCount: 0,
    pages: [],
    pageSize: 5,
    isUsersFetching: true,
    followingInProcessUserIds: [],
}

const followAction = createAction<number>(FOLLOW);
const unfollowAction = createAction<number>(UNFOLLOW);
const setUsersAction = createAction<any[]>(SET_USERS);
const setUsersTotalCountAction = createAction<number>(SET_USERS_TOTAL_COUNT);
const setIsUsersFetchingAction = createAction<boolean>(SET_IS_USERS_FETCHING);
const toggleFollowingProcessAction = createAction<{active: boolean, userId: number}>(TOGGLE_FOLLOWING_PROCESS);

const usersReducer = createReducer(initState, (builder) => {
    builder
        .addCase(followAction, (state, action) => ({
            ...state,
            users: state.users.map(user => {
                if (action.payload === user.id) {
                    return { ...user, followed: true };
                }
                return user;
            }),
        }))
        .addCase(unfollowAction, (state, action) => ({
            ...state,
            users: state.users.map(user => {
                if (action.payload === user.id) {
                    return { ...user, followed: false };
                }
                return user;
            }),
        }))
        .addCase(setUsersAction, (state, action) => ({
            ...state,
            users: action.payload
        }))
        .addCase(setUsersTotalCountAction, (state, action) => ({
            ...state,
            usersTotalCount: action.payload,
            pages: (() => {
                let i = 1;
                const pages = [];
                while (i <= Math.ceil(action.payload / state.pageSize)) {
                    pages.push(i);
                    i++;
                }
                return pages;
            })()
        }))
        .addCase(setIsUsersFetchingAction, (state, action) => ({
            ...state,
            isUsersFetching: action.payload,
        }))
        .addCase(toggleFollowingProcessAction, (state, action) => ({
            ...state,
            followingInProcessUserIds: action.payload.active ?
                [action.payload.userId, ...state.followingInProcessUserIds] :
                state.followingInProcessUserIds.filter(id => id !== action.payload.userId)
        }));
});

const getUsersThunk = (page: number, pageSize: number) => (dispatch: Function) => {
    samuraiClient.getUsers(pageSize, page).then(result => {
        dispatch(setIsUsersFetchingAction(false));
        dispatch(setUsersAction(result.items));
        dispatch(setUsersTotalCountAction(result.totalCount));
    })
}

const followThunk = (userId: number) => (dispatch: Function) => {
    dispatch(toggleFollowingProcessAction({active: true, userId: userId}));
    samuraiClient.follow(userId).then(result => {
        if (result.resultCode === 0) {
            dispatch(followAction(userId));
        }
        dispatch(toggleFollowingProcessAction({active: false, userId: userId}));
    });
}

const unfollowThunk = (userId: number) => (dispatch: Function) => {
    dispatch(toggleFollowingProcessAction({active: true, userId: userId}));
    samuraiClient.unfollow(userId).then(result => {
        if (result.resultCode === 0) {
            dispatch(unfollowAction(userId));
        }
        dispatch(toggleFollowingProcessAction({active: false, userId: userId}));
    });
}

export { usersReducer, getUsersThunk, followThunk, unfollowThunk };