import { createAction, createReducer } from "@reduxjs/toolkit";
import { samuraiClient } from "../../clients/samuraiClient";

const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_IS_USER_INFO_FETCHING = 'SET_IS_USER_INFO_FETCHING';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initState = {
    userInfo: null,
    userStatus: null,
    postsData: [
        {message: 'я проснулся', authorName: 'Вадим', id: 1},
        {message: 'я покакал', authorName: 'Олег', id: 2},
        {message: 'я поел', authorName: 'Андрей', id: 3},
        {message: 'я пошел', authorName: 'Дима', id: 4},
        {message: 'я пришел', authorName: 'Иван', id: 5},
        {message: 'я ушел', authorName: 'Олеся', id: 6},
    ],
    isUserInfoFetching: true,
}

const addNewPostAction = createAction(ADD_NEW_POST);
const setUserInfoAction = createAction(SET_USER_INFO);
const setIsUserInfoFetchingAction = createAction(SET_IS_USER_INFO_FETCHING);
const setUserStatusAction = createAction(SET_USER_STATUS);

const getUserThunk = (userId) => (dispatch) => {
    dispatch(setIsUserInfoFetchingAction(true));
    samuraiClient.getUserInfoById(userId).then(result => {
        dispatch(setIsUserInfoFetchingAction(false));
        dispatch(setUserInfoAction(result));
    });
}

const getUserStatusThunk = (userId) => (dispatch) => {
    samuraiClient.getUserStatus(userId)
        .then(result => dispatch(setUserStatusAction(result)))
}

const updateUserStatusThunk = (newStatus) => (dispatch) => {
    samuraiClient.changeUserStatus(newStatus)
        .then(result => {
            if (result.resultCode === 0) {
                dispatch(setUserStatusAction(newStatus));
            }
        })
}

const profileReducer = createReducer(initState, (builder) => {
    builder
        .addCase(addNewPostAction, (state, action) => ({
            ...state,
            postsData: [
                ...state.postsData,
                {
                    id: Math.round(Math.random() * 1000),
                    authorName: state.userInfo.fullName,
                    message: action.payload,
                }
            ]
        }))
        .addCase(setUserInfoAction, (state, action) => ({
            ...state,
            userInfo: action.payload,
        }))
        .addCase(setIsUserInfoFetchingAction, (state, action) => ({
            ...state,
            isUserInfoFetching: action.payload
        }))
        .addCase(setUserStatusAction, (state, action) => ({
            ...state,
            userStatus: action.payload
        }));
});

export { profileReducer, addNewPostAction, getUserThunk, getUserStatusThunk, updateUserStatusThunk };