import React from "react";
import Todo from "../models";
import { Icon } from "@iconify/react";

interface Props {
  createTodo?: boolean;
  editTodo?: boolean;
  deleteTodo?: boolean;
  completedTodo?: boolean;
}

const Button: React.FC<Props> = ({
  createTodo,
  editTodo,
  deleteTodo,
  completedTodo,
}) => {
  console.log(createTodo);
  if (createTodo) {
    return (
      <button className="btn-add-todo">
        <Icon icon="akar-icons:circle-plus" width="32" height="32" />
      </button>
    );
  }

  if (editTodo) {
    return (
      <button className="d-block border-0 bg-transparent">
        <Icon icon="akar-icons:edit" />
      </button>
    );
  }
  return <div>Button</div>;
};

export default Button;
