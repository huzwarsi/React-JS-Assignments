
import { combineReducers, createStore } from "redux";
import { counterReducer } from "../Reducers/counterReducer";

const combinedReducers = combineReducers ({
    counter : counterReducer
})


export const store = createStore(combinedReducers)