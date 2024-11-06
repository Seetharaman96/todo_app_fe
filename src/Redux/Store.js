import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./Notes/Reducer";
import { loadState, saveState } from "./Sessionstorage";
import { throttle } from "lodash";

const rootReducer = combineReducers({
  note: notesReducer,
});

const persistedState = loadState();

export const Store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

Store.subscribe(
  throttle(() => {
    saveState(Store.getState());
  }, 1000)
);
