import { createAction, createReducer } from "@reduxjs/toolkit";
import { samuraiClient } from "../../clients/samuraiClient";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT';
const SUCCESS_INITIALIZED = 'SUCCESS_INITIALIZED';

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    initialized: false,
};

const setAuthDataAction = createAction(SET_AUTH_DATA);
const successLogoutAction = createAction(SUCCESS_LOGOUT);
const successInitializedAction = createAction(SUCCESS_INITIALIZED);

const authReducer = createReducer(initState, (builder) => {
    builder
        .addCase(setAuthDataAction, (state, action) => ({
            ...state,
            ...action.payload,
            isAuth: true,
        }))
        .addCase(successLogoutAction, (state, action) => ({
            ...state,
            isAuth: false,
        }))
        .addCase(successInitializedAction, (state, action) => ({
            ...state,
            initialized: true
        }))
});

const authThunk = () => (dispatch) => {
    return samuraiClient.auth().then(result => {
        if (result.resultCode === 0) {
            dispatch(setAuthDataAction(result.data));
        }
    });
}

const loginThunk = (login, password) => (dispatch) => {
    samuraiClient.login(login, password).then(result => {
        if (result.resultCode === 0) {
            dispatch(authThunk())
        } else {
            const errorMessage = result.messages.join(', ') || 'Неизвестная ошибка при авторизации';
            dispatch(stopSubmit('login', { _error: errorMessage }));
        }
    })
}

const logoutThunk = () => (dispatch) => {
    samuraiClient.logout().then(result => {
        if (result.resultCode === 0) {
            dispatch(successLogoutAction())
        }
    })
}

export { authReducer, authThunk, loginThunk, logoutThunk, successInitializedAction};