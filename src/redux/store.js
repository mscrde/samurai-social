import { dialogReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer";

const store = {
    _state: {
        profilePage: {
            userInfo: {
                name: 'Челикс Челиксов',
                avatarUrl: 'images/anime.jpg',
            },
            postsData: [
                {message: 'я проснулся', authorName: 'Вадим', id: 1},
                {message: 'я покакал', authorName: 'Олег', id: 2},
                {message: 'я поел', authorName: 'Андрей', id: 3},
                {message: 'я пошел', authorName: 'Дима', id: 4},
                {message: 'я пришел', authorName: 'Иван', id: 5},
                {message: 'я ушел', authorName: 'Олеся', id: 6},
            ],
            newPostControlValue: '',
        },
        dialogsPage: {
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
            newMessageControlValue: '',
        },
        navBar: [
          {url: '/profile', name: 'Профиль'},
          {url: '/dialogs', name: 'Сообщения'},
          {url: '/music', name: 'Музыка'},
          {url: '/videos', name: 'Видео'},
          {url: '/games', name: 'Игры'},
        ],
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('miss subcriber');
    },
    subscribe(callback) {
        this._callSubscriber = callback;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.profilePageS = profileReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export { store };