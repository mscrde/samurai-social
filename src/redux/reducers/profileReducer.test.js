import React from "react";
import { addNewPostAction, profileReducer } from "./profileReducer"

it('new post should be add', () => {
    const action = addNewPostAction('new post text');

    const newState = profileReducer({userInfo: {fullname: 'Cheliks'}, postsData: []}, action);

    expect(newState.postsData.length).toBe(1)
    expect(newState.postsData[0].message).toBe('new post text')
})