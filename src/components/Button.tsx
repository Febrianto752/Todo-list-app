import React from "react";
import Todo from "../models";
import { Icon } from "@iconify/react";

interface Props {
  createTodo?: boolean;
  editTodo?: boolean;
  deleteTodo?: boolean;
  completedTodo?: boolean;
  undoTodo?: boolean;
}

const Button: React.FC<Props> = ({
  createTodo,
  editTodo,
  deleteTodo,
  completedTodo,
  undoTodo,
}) => {
  // console.log(createTodo);
  if (createTodo) {
    return (
      <button className="btn-add-todo ">
        <Icon icon="akar-icons:circle-plus" width="40" height="40" />
      </button>
    );
  }

  if (editTodo) {
    return (
      <button
        className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
        title="edit todo"
      >
        <Icon icon="akar-icons:edit" width="32" height="32" />
      </button>
    );
  }

  if (deleteTodo) {
    return (
      <button
        className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
        title="delete todo"
      >
        <Icon icon="material-symbols:delete-outline" width="32" height="32" />
      </button>
    );
  }

  if (completedTodo) {
    return (
      <button
        className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
        title="done"
      >
        <Icon icon="ic:round-done" width="32" height="32" />
      </button>
    );
  }
  if (undoTodo) {
    return (
      <button
        className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
        title="done"
      >
        <Icon icon="icon-park-outline:undo" width="30" height="30" />
      </button>
    );
  }
  return <div>Button</div>;
};

export default Button;
