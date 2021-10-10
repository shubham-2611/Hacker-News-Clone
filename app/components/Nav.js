import React from "react";
import { NavLink } from "react-router-dom";
import { func } from "prop-types";

const activeStyle = {
  color: "rgb(187, 26, 31)",
};

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Top
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeStyle={activeStyle}>
            New
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
