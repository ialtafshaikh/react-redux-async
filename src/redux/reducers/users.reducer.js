import { userActionTypes } from "../constants/usersAction.types";

const initialState = { users: [] };

const usersReducer = (state = initialState, action) => {
  console.log("received action", action);
  switch (action.type) {
    case userActionTypes.LOAD:
      return { ...state, users: [...action.payload.users] };

    default:
      return { ...state };
  }
};

export default usersReducer;
