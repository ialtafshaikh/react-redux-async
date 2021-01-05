import { userActionTypes } from "../constants/usersAction.types";

const usersActionGenerator = (actionType, payload = []) => {
  switch (actionType) {
    case userActionTypes.LOAD:
      return { type: userActionTypes.LOAD, payload: { users: [...payload] } };

    default:
      return {
        type: "Invalid Action",
      };
  }
};

export default usersActionGenerator;
