import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers/profileReducer.ts";
import { dialogReducer } from "./reducers/dialogsReducer";
import { navBarReducer } from "./reducers/navBarReducer";
import { usersReducer } from "./reducers/usersReducer";
import { authReducer } from "./reducers/authReducer.ts";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: reduxFormReducer,
});

const store = configureStore({reducer});
window.store = store.getState.bind(store);

export { store };