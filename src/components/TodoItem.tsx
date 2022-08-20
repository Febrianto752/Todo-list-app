import React from "react";
import Button from "./Button";
import Todo from "../models/Todo";

interface Props {
  type: "todo" | "completed";
  todos: Todo[];
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index?: number;
  freshlyMadeTodo?: boolean;
  setFreshlyMadeTodo?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoItem: React.FC<Props> = ({
  index,
  type,
  todos,
  todo,
  setTodos,
  freshlyMadeTodo,
  setFreshlyMadeTodo,
}) => {
  const textareaRef = React.createRef<HTMLTextAreaElement>();
  const [editable, setEditableTodo] = React.useState<boolean>(false);
  const [editTodo, setEditTodo] = React.useState<string>(todo.todo);

  React.useEffect(() => {
    if (freshlyMadeTodo) {
      textareaRef.current?.focus();
    }
  });

  const handleOnBlurTextarea = (
    event: React.FocusEvent<HTMLTextAreaElement, Element>,
    id: string
  ) => {
    if (setFreshlyMadeTodo && freshlyMadeTodo) {
      setFreshlyMadeTodo(false);
    }

    setEditableTodo(false);

    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, todo: editTodo } : todo
      )
    );
  };

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditTodo(e.target.value);
  };

  return (
    <div className={`card ${type === "todo" ? "todo" : "completed-todo"}`}>
      <div className="card-body">
        {(freshlyMadeTodo && index === 0) || Boolean(editable) !== false ? (
          <textarea
            ref={textareaRef}
            value={editTodo}
            onChange={handleChangeTextarea}
            autoFocus
            onFocus={(event) => {
              const end = event.target.value.length;
              event.target.setSelectionRange(end, end);
            }}
            onBlur={(event) => {
              handleOnBlurTextarea(event, todo._id);
            }}
          ></textarea>
        ) : type === "todo" ? (
          <p
            className="text-white line-clamp"
            style={{ lineHeight: "30px", fontSize: "24px" }}
          >
            {todo.todo}
          </p>
        ) : (
          <p
            className="text-white line-clamp"
            style={{ lineHeight: "30px", fontSize: "24px" }}
          >
            {todo.todo}
          </p>
        )}
      </div>
      <div className="actions">
        {type === "todo" ? (
          <>
            <Button type="edit" setEditableTodo={setEditableTodo} />
            <Button
              type="delete"
              todos={todos}
              setTodos={setTodos}
              todo={todo}
            />
            <Button
              type="completed"
              todos={todos}
              todo={todo}
              setTodos={setTodos}
            />
          </>
        ) : (
          <>
            <Button
              type="delete"
              todos={todos}
              setTodos={setTodos}
              todo={todo}
            />
            <Button type="undo" todos={todos} todo={todo} setTodos={setTodos} />
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
