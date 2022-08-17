import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Content from "./Content";

const Main: React.FC = () => {
  return (
    <div className="container">
      <Button createTodo={true} />
      <Navbar />
      <Content />
    </div>
  );
};

export default Main;
