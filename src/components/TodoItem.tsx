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

  if ((freshlyMadeTodo && index === 0) || editable === true) {
    return (
      <div className="card todo">
        <div className="card-body">
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
        </div>
        <div className="actions">
          <Button editTodo={true} setEditableTodo={setEditableTodo} />
          <Button
            deleteTodo={true}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
          <Button completedTodo={true} />
        </div>
      </div>
    );
  }

  if (type === "todo") {
    textareaRef.current?.focus();
    return (
      <div className="card todo">
        <div className="card-body">
          <p
            className="text-white line-clamp"
            style={{ lineHeight: "30px", fontSize: "24px" }}
          >
            {todo.todo}
          </p>
        </div>
        <div className="actions">
          <Button editTodo={true} setEditableTodo={setEditableTodo} />
          <Button
            deleteTodo={true}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
          <Button completedTodo={true} />
        </div>
      </div>
    );
  }

  if (type === "completed") {
    return (
      <div className="card completed-todo">
        <div className="card-body">
          <p
            className="text-white line-clamp"
            style={{ lineHeight: "30px", fontSize: "24px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            dolorem voluptatum excepturi, deserunt neque atque aliquid tempora
            doloribus quibusdam vero recusandae totam non debitis quod cumque,
            quia voluptate reiciendis. Beatae.
          </p>
        </div>
        <div className="actions">
          <Button
            deleteTodo={true}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
          <Button undoTodo={true} />
        </div>
      </div>
    );
  }

  return <div>Empty Todo</div>;
};

export default TodoItem;
