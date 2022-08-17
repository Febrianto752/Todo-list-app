import React from "react";
import Todo from "../models";
import { Icon } from "@iconify/react";

interface Props {
  create: boolean;
}

const Button: React.FC<Props> = ({ create }) => {
  console.log(create);
  if (create) {
    return (
      <button className="btn-add-todo">
        <Icon icon="akar-icons:circle-plus" width="32" height="32" />
      </button>
    );
  }
  return <div>Button</div>;
};

export default Button;
