import React, { useState } from "react";

const TwoVar = () => {
  const [name, setName] = useState("Rohit");
  const [age, setAge] = useState(42);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleChange}></input>
      <button onClick={() => setAge(age + 1)}>Increment age</button>

      <p>
        Your name is : {name} and your age is : {age}
      </p>
    </div>
  );
};

export default TwoVar;
