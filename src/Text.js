import React, { useState } from "react";

const Text = () => {
  const [text, setText] = useState("hello");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input value={text} onChange={handleChange}></input>
      <p>You typed : {text}</p>
      <button onClick={() => setText("")}>Reset</button>
    </>
  );
};

export default Text;
