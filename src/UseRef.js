import React, { useRef } from "react";

const UseRef = () => {
  const logo = useRef(null);

  function rotateImage() {
    logo.current.style.transform = "rotate(15deg)";
  }

  return (
    <div>
      <h1>Hello this is useref</h1>
      <img
        src="https://www.phpclasses.org/browse/view/image/file/330407/name/logo192.png"
        alt="react-logo"
        ref={logo}
        onClick={rotateImage}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default UseRef;
