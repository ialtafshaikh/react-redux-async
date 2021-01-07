import { combineReducers } from "redux";
import usersReducer from "./users.reducer";
import usersThunkReducer from "./users.thunk.reducer";

const rootReducer = combineReducers({
  usersReducer,
  usersThunkReducer,
});

export default rootReducer;
