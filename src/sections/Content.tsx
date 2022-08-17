import React from "react";

const Content: React.FC = () => {
  return (
    <div className="content" style={{ marginTop: "60px" }}>
      <div className="container grid-container">
        <div className="column-3">
          <div className="card">
            <div className="card-body"></div>
            <div className="actions"></div>
          </div>
        </div>
        <div className="column-3">
          <div className="card">
            <div className="card-body"></div>
            <div className="actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
