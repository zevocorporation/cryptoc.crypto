import React from "react";
import { Link, withRouter } from "react-router-dom";

const Conditional = () => {
  if (sessionStorage.getItem("email")){
      return (
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link className="nav-link active" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/profile">Profile</Link>
          </li>
        </ul>
      );
  } else {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link to="/login" className="nav-link active">
            Login
          </Link>
        </li>
      </ul>
    );
  }
};

export default withRouter(Conditional);
