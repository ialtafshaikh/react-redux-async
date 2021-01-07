import { userActionTypes } from "../constants/usersAction.types";

const url = "https://jsonplaceholder.typicode.com/users";

const usersActionGenerator = (actionType, payload = []) => {
  switch (actionType) {
    case userActionTypes.LOAD:
      return { type: userActionTypes.LOAD, payload: { users: [...payload] } };

    case userActionTypes.THUNK_LOAD:
      return async (dispatch) => {
        let response = await fetch(url);
        let data = await response.json();
        dispatch({
          type: userActionTypes.THUNK_LOAD,
          payload: { users: [...data] },
        });
      };

    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default usersActionGenerator;
