import React from "react";
import Button from "./Button";

interface Props {
  type: "active" | "todo" | "completed";
}

const TodoItem: React.FC<Props> = ({ type }) => {
  const textareaRef = React.createRef<HTMLTextAreaElement>();

  if (type === "active") {
    return (
      <div className="card todo">
        <div className="card-body">
          <textarea ref={textareaRef}></textarea>
        </div>
        <div className="actions">
          <Button editTodo={true} />
          <Button deleteTodo={true} />
          <Button completedTodo={true} />
        </div>
      </div>
    );
  }

  if (type === "todo") {
    return (
      <div className="card todo">
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
          <Button editTodo={true} />
          <Button deleteTodo={true} />
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
          <Button deleteTodo={true} />
          <Button undoTodo={true} />
        </div>
      </div>
    );
  }

  return <div>Empty Todo</div>;
};

export default TodoItem;
