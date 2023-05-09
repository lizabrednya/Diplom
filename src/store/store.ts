import { configureStore } from "@reduxjs/toolkit";
import { loggedReducer, themeReducer } from "./reducers"

export const rootStore = configureStore({
  reducer: {
    isLogged: loggedReducer,
    theme: themeReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
  },
});
