import { createSelector } from "reselect";

export const getUsersFromState = (state) => {
    return state.usersPage.users;
}

export const getFilterableUsers = createSelector(getUsersFromState, (users) => {
    return users.filter(u => true);
})