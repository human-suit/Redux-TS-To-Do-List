import { taskReducer } from "./taskReduser";
import { countReducer } from "./countReduser";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  tasks: taskReducer,
  count: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
