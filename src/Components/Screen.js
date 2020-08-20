import React, { children } from "react";

const Screen = ({ name, children }) => {
  return (
    <>
      <h1>Hellow {name}</h1>
      <p>{children}</p>
    </>
  );
};

export default Screen;
