import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./reducers"

export const rootStore = configureStore({
  reducer: {
    isLogged: loggedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  },
});
