import React, { Component } from "react";

export class UserCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <p className="description text-center">{/*this.props.user.email*/}</p>
        <hr />
        <div className="text-center">
          <a href="#">
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default UserCard;


