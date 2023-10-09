import { useState } from "react";

function ToggleButton() {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggle ? "toggle off" : "toggle on"}
      </button>
      {isToggle && <p>Toggle is on</p>}
    </div>
  );
}

export default ToggleButton;
