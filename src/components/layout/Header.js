import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-10 mb-10 text-white gap-x-5">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movie"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
