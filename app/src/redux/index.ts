import { configureStore } from "@reduxjs/toolkit";
import { userMenuReducer } from "./reducers/userMenuReducer";

const store = configureStore({
  reducer: {
    userMenu: userMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
