import React, { useRef } from "react";

const Refer = () => {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
};

export default Refer;
