import React, { Component } from "react";

import { connect } from "react-redux";
import { userActionTypes } from "../redux/constants/usersAction.types";
import usersActionGenerator from "../redux/actions/usersAction.generator";
import store from "../redux/store/store";

class Users extends Component {
  load = () => {
    store.dispatch(usersActionGenerator(userActionTypes.LOAD));
    // store.dispatch(usersActionGenerator(userActionTypes.THUNK_LOAD));

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.props.loadUsers(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  loadThunk = () => {
    store.dispatch(usersActionGenerator(userActionTypes.THUNK_LOAD));
  };
  render() {
    return (
      <div>
        <h1>Users Lists using middleware</h1>
        <button onClick={this.load}>Load Users</button>
        {this.props.users.length === 0 ? (
          <p>no users to show</p>
        ) : (
          <div>
            {this.props.users.map((user) => {
              return <p key={user.id}>{user.name}</p>;
            })}
          </div>
        )}
        <h1>Users Lists using Thunk middleware</h1>
        <button onClick={this.loadThunk}>Load Users using thunk</button>
        {this.props.thunkUsers.length === 0 ? (
          <p>no users to show</p>
        ) : (
          <div>
            {this.props.thunkUsers.map((user) => {
              return <p key={user.id}>{user.name}</p>;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    thunkUsers: state.usersThunkReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (payload = []) => {
      return dispatch(usersActionGenerator(userActionTypes.LOAD, payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
