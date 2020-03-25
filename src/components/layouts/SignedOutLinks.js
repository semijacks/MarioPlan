import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <ul className="right">
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SignedOutLinks;
