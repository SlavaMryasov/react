import {  combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
})

let store = legacy_createStore(reducers);

export default store;