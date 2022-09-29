
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../reducers/menu.reducer";
import rootReducer from "../reducers/root.reducer";

export const AppStore = configureStore({
  reducer: {
    root: rootReducer,
    menu: menuReducer
  },

})