import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movieSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root", // root key in storage
  version: 1,
  storage,
};

const reducer = combineReducers({
  movie: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
