import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/Todo";

interface Props {
  type: "todo" | "completed";
  todos: Todo[];
  // activeMenu: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  freshlyMadeTodo: boolean;
  setFreshlyMadeTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoList: React.FC<Props> = ({
  type,
  todos,
  // activeMenu,
  setTodos,
  freshlyMadeTodo,
  setFreshlyMadeTodo,
}) => {
  return (
    <div
      id="todo-list"
      className={`grid-container todo-list`}
      style={{ marginTop: "60px" }}
    >
      {(todos.length === 0 || !todos.find((todo) => todo.isDone === false)) &&
      type === "todo" ? (
        <div className="column-12 text-center">
          There are no activities planned for today
        </div>
      ) : (todos.length === 0 || !todos.find((todo) => todo.isDone === true)) &&
        type === "completed" ? (
        <div className="column-12 text-center">Completed todo not found</div>
      ) : type === "todo" ? (
        todos.map((todo, index) => {
          if (!todo.isDone) {
            return (
              <div
                key={todo._id}
                className="column-12 column-sm-6 column-lg-4 column-xl-3"
              >
                <TodoItem
                  index={index}
                  type="todo"
                  todos={todos}
                  todo={todo}
                  setTodos={setTodos}
                  freshlyMadeTodo={freshlyMadeTodo}
                  setFreshlyMadeTodo={setFreshlyMadeTodo}
                />
              </div>
            );
          } else {
            return "";
          }
        })
      ) : (
        todos.map((todo, index) => {
          if (todo.isDone) {
            return (
              <div
                className="column-12 column-sm-6 column-md-4 column-lg-3"
                key={todo._id}
              >
                <TodoItem
                  type="completed"
                  todos={todos}
                  setTodos={setTodos}
                  todo={todo}
                />
              </div>
            );
          } else {
            return "";
          }
        })
      )}
    </div>
  );
};

export default TodoList;
