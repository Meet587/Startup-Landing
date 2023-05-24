import React from "react";
import { Button } from "reactstrap";

const Button1 = (props) => {
  const { name, color } = props;
  return (
    <>
      <Button color={`${color}`}>{name}</Button>
    </>
  );
};

export default Button1;
