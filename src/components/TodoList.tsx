import React from "react";
// import Button from "./Button";
import TodoItem from "./TodoItem";
import Todo from "../models/Todo";

interface Props {
  type: "todo" | "completed";
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ type, todos, setTodos }) => {
  return (
    <div
      id="todo-list"
      className="grid-container todo-list"
      style={{ marginTop: "60px" }}
    >
      <div className="column-12 column-sm-6 column-md-4 column-lg-3">
        <TodoItem type="active" />
      </div>
      <div className="column-12 column-sm-6 column-md-4 column-lg-3">
        <TodoItem type="todo" />
      </div>
      <div className="column-12 column-sm-6 column-md-4 column-lg-3">
        <TodoItem type="completed" />
      </div>
    </div>
  );
};

export default TodoList;
