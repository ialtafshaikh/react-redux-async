import React, { Component } from "react";

import { connect } from "react-redux";
import { userActionTypes } from "../redux/constants/usersAction.types";
import usersActionGenerator from "../redux/actions/usersAction.generator";
import store from "../redux/store/store";

class Users extends Component {
  load = () => {
    store.dispatch(usersActionGenerator(userActionTypes.LOAD));

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
  render() {
    return (
      <div>
        <h1>Users Lists</h1>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.usersReducer.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: (payload = []) => {
      return dispatch(usersActionGenerator(userActionTypes.LOAD, payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
