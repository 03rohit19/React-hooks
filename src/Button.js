import React, { createContext, useContext } from "react";

const Button = () => {
  const ThemeContext = createContext({ background: "white", color: "red" });
  const theme = useContext(ThemeContext);

  return (
    <>
      <button style={{ background: "white", color: "red" }}> Change</button>
    </>
  );
};

export default Button;
