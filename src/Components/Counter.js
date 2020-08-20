import React, { useState } from "react";

const Counter = () => {
  const [userId, setId] = useState("");
  const getId = e => {
    setId(e.target.value);
  };
  const getUserInfo = e => {
    e.preventDefault();
    console.log(userId);
  };
  return (
    <>
      <form onSubmit={getUserInfo}>
        <input type="text" placeholder="ID" onChange={getId} value={userId} />
      </form>
    </>
  );
};

export default Counter;
