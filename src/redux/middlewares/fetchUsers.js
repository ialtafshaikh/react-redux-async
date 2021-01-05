import { userActionTypes } from "../constants/usersAction.types";

const url = "https://jsonplaceholder.typicode.com/users";

function fetcUsers() {
  return (next) => async (action) => {
    if (action.type === userActionTypes.LOAD) {
      let response = await fetch(url);
      let data = await response.json();
      action.payload.users = [...data];
    }

    return next(action);
  };
}

export default fetcUsers;
