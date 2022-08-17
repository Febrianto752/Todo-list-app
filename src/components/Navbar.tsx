import React from "react";

const Navbar: React.FC = () => {
  let crashHref = "#";
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item active-todo">
          <a className="nav-link" href={crashHref}>
            Todo
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={crashHref}>
            Completed
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
