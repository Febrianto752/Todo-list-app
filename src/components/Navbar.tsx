import React from "react";

interface Props {
  activeMenu: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<"todo" | "completed">>;
}

const Navbar: React.FC<Props> = ({ activeMenu, setActiveMenu }) => {
  const handleClickTodoMenu = () => {
    setActiveMenu("todo");
  };

  const handleClickCompletedMenu = () => {
    setActiveMenu("completed");
  };

  let crashHref = "#";
  return (
    <nav className="navbar">
      <ul>
        <li
          className={`nav-item ${
            activeMenu.toString() === "todo" ? "active-todo" : ""
          }`}
          onClick={handleClickTodoMenu}
        >
          <a className="nav-link" href={crashHref}>
            Todo
          </a>
        </li>
        <li
          className={`nav-item ${
            activeMenu.toString() === "completed" ? "active-completed" : ""
          }`}
          onClick={handleClickCompletedMenu}
        >
          <a className="nav-link" href={crashHref}>
            Completed
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
