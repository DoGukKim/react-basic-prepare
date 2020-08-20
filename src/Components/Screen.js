import React, { children } from "react";

const Screen = ({ name, children, favNum }) => {
  return (
    <>
      <h1>Hellow {name}</h1>
      <p>{children}</p>
      <p>{favNum}</p>
    </>
  );
};

export default Screen;
