import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../reducers/root.reducer";

// middlewares
import logger from "../middlewares/logger";
import fetcUsers from "../middlewares/fetchUsers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, fetcUsers, thunk))
);

export default store;
