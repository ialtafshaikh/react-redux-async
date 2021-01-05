import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

// middlewares
import logger from "../middlewares/logger";
import fetcUsers from "../middlewares/fetchUsers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, fetcUsers))
);

export default store;
