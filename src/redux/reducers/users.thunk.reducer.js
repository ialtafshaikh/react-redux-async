import { userActionTypes } from "../constants/usersAction.types";

const initialState = { users: [] };

const usersThunkReducer = (state = initialState, action) => {
  console.log("received thunk action", action);
  switch (action.type) {
    case userActionTypes.THUNK_LOAD:
      return { ...state, users: [...action.payload.users] };

    default:
      return { ...state };
  }
};

export default usersThunkReducer;
