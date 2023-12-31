import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>you pressed me {count} times</button>;
}
export default Counter;
