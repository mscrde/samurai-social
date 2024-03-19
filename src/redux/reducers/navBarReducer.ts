import { createReducer } from "@reduxjs/toolkit";

const initState = {
    sections: [
        {url: '/profile/', name: 'Профиль'},
        {url: '/dialogs', name: 'Сообщения'},
        {url: '/users', name: 'Пользователи'},
        {url: '/music', name: 'Музыка'},
        {url: '/videos', name: 'Видео'},
        {url: '/games', name: 'Игры'},
    ],
};

const navBarReducer = createReducer(initState, (builder) => {
    
});

export { navBarReducer };