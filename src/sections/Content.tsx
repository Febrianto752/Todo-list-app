import React from "react";
import Button from "../components/Button";

const Content: React.FC = () => {
  return (
    <div className="content" style={{ marginTop: "60px" }}>
      <div className="container grid-container">
        <div className="column-12 column-sm-6 column-md-4 column-lg-3">
          <div className="card todo">
            <div className="card-body">
              <textarea></textarea>
            </div>
            <div className="actions">
              <Button editTodo={true} />
              <Button deleteTodo={true} />
              <Button completedTodo={true} />
            </div>
          </div>
        </div>
        <div className="column-12 column-sm-6 column-md-4 column-lg-3">
          <div className="card todo">
            <div className="card-body">
              <p
                className="text-white line-clamp"
                style={{ lineHeight: "30px", fontSize: "24px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolorem voluptatum excepturi, deserunt neque atque
                aliquid tempora doloribus quibusdam vero recusandae totam non
                debitis quod cumque, quia voluptate reiciendis. Beatae.
              </p>
            </div>
            <div className="actions">
              <Button editTodo={true} />
              <Button deleteTodo={true} />
              <Button completedTodo={true} />
            </div>
          </div>
        </div>
        <div className="column-12 column-sm-6 column-md-4 column-lg-3">
          <div className="card completed-todo">
            <div className="card-body">
              <p
                className="text-white line-clamp"
                style={{ lineHeight: "30px", fontSize: "24px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores dolorem voluptatum excepturi, deserunt neque atque
                aliquid tempora doloribus quibusdam vero recusandae totam non
                debitis quod cumque, quia voluptate reiciendis. Beatae.
              </p>
            </div>
            <div className="actions">
              <Button deleteTodo={true} />
              <Button undoTodo={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
