import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    <li>
      <Link to="/profile">My Profile</Link>
    </li>
  </nav>
);

export default Navigation;
