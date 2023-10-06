import React, { useState } from "react";

const Updaterfn = () => {
  const [age, setAge] = useState(42);
  function Increment(a) {
    setAge((a) => a + 1);
  }

  return (
    <div>
      <h1>Your age : {age}</h1>
      <button
        onClick={() => {
          Increment();
          Increment();
          Increment();
        }}
      >
        +3
      </button>
    </div>
  );
};

export default Updaterfn;
