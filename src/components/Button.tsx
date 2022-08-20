import React from "react";
import { Icon } from "@iconify/react";
import Todo from "../models/Todo";

interface Props {
  type: "create" | "edit" | "delete" | "completed" | "undo";
  setFreshlyMadeTodo?: React.Dispatch<React.SetStateAction<boolean>>;
  todos?: Todo[];
  todo?: Todo;
  setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
  setActiveMenu?: React.Dispatch<React.SetStateAction<"todo" | "completed">>;
  setEditableTodo?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.FC<Props> = ({
  type,
  setFreshlyMadeTodo,
  todos,
  todo,
  setTodos,
  setActiveMenu,
  setEditableTodo,
}) => {
  const handleClickAddTodo = (): void => {
    if (setFreshlyMadeTodo && todos && setTodos && setActiveMenu) {
      setFreshlyMadeTodo(true);

      const todo = {
        _id: (
          new Date().getTime() + Math.floor(Math.random() * 100)
        ).toString(),
        todo: "",
        isDone: false,
      };
      setTodos([todo, ...todos]);
      setActiveMenu("todo");
    }
  };

  if (type === "create") {
    return (
      <button className="btn-add-todo" onClick={handleClickAddTodo}>
        <Icon icon="akar-icons:circle-plus" width="40" height="40" />
      </button>
    );
  }

  if (type === "edit") {
    if (setEditableTodo) {
      const handleClickEditableTodo = () => {
        setEditableTodo(true);
      };

      return (
        <button
          className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
          title="edit todo"
          onClick={handleClickEditableTodo}
        >
          <Icon icon="akar-icons:edit" width="32" height="32" />
        </button>
      );
    }

    throw new Error("setEditable function is undefined");
  }

  if (type === "delete") {
    if (todo && todos && setTodos) {
      const handleClickDeleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo._id !== id));
      };

      return (
        <button
          className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
          title="delete todo"
          onClick={(e) => {
            handleClickDeleteTodo(todo._id);
          }}
        >
          <Icon icon="material-symbols:delete-outline" width="32" height="32" />
        </button>
      );
    }

    throw new Error("todo or todos or setTodos is undefined");
  }

  if (type === "completed") {
    if (setTodos && todos && todo) {
      const handleClickCompletedTodo = (id: string): void => {
        setTodos(
          todos.map((todo) =>
            todo._id === id ? { ...todo, isDone: true } : todo
          )
        );
      };

      return (
        <button
          className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
          title="done"
          onClick={(e) => {
            handleClickCompletedTodo(todo._id);
          }}
        >
          <Icon icon="ic:round-done" width="32" height="32" />
        </button>
      );
    }

    throw new Error("setTodos or todos is undefined!");
  }

  if (type === "undo") {
    if (setTodos && todos && todo) {
      const handleClickUndoTodo = (id: string): void => {
        setTodos(
          todos.map((todo) =>
            todo._id === id ? { ...todo, isDone: false } : todo
          )
        );
      };

      return (
        <button
          className="d-block border-0 bg-transparent cursor-pointer press-effect text-white"
          title="done"
          onClick={(e) => {
            handleClickUndoTodo(todo._id);
          }}
        >
          <Icon icon="icon-park-outline:undo" width="30" height="30" />
        </button>
      );
    }

    throw new Error("setTodos or todos is undefined!");
  }
  return <div>Button</div>;
};

export default Button;
