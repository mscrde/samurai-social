import { createAction, createReducer } from "@reduxjs/toolkit";

const SEND_MESSAGE = 'SEND_MESSAGE';

const initState = {
    messagesData: [
        {id: 1, message: 'Привет', authorName: 'Саша'},
        {id: 2, message: 'Пока', authorName: 'Челикс'},
        {id: 3, message: 'Почему', authorName: 'Саша'},
        {id: 4, message: 'Потому', authorName: 'Челикс'},
    ],
    dialogsData: [
        {id: 1, userName: 'Саша'},
        {id: 2, userName: 'Таня'},
        {id: 3, userName: 'Петя'},
        {id: 4, userName: 'Вася'},
        {id: 5, userName: 'Алла'},
    ],
};

const sendMessageAction = createAction<string>(SEND_MESSAGE);

const dialogReducer = createReducer(initState, (builder) => {
    builder
        .addCase(sendMessageAction, (state, action) => ({
            ...state,
            messagesData: [
                ...state.messagesData,
                {
                    id: Math.round(Math.random() * 1000),
                    message: action.payload,
                    authorName: 'Челикс Челиксов'
                }
            ]
        }))
});

export { dialogReducer, sendMessageAction };