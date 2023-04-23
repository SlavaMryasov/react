import {  combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
})

let store = legacy_createStore(reducers);

export default store;