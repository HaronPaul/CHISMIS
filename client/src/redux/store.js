import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import sectionReducer from './sectionSlice'
import errorReducer from './errorSlice'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedReducer,
        section: sectionReducer,
        error: errorReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
