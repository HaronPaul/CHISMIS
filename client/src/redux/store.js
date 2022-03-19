import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import sectionReducer from './sectionSlice'
import errorReducer from './errorSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        section: sectionReducer,
        error: errorReducer
    },
})