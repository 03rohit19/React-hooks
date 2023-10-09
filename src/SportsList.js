// import React, { useState } from "react";

// function SportsList() {
//   const [sports, setSports] = useState([
//     { name: "cricket", isChecked: false },
//     { name: "football", isChecked: false },
//     { name: "badminton", isChecked: false },
//   ]);

//   const handleCheckboxChange = (index) => {
//     const updatedSports = [...sports];
//     updatedSports[index].isChecked = !updatedSports[index].isChecked;
//     setSports(updatedSports);
//   };

//   const handleDeleteClick = () => {
//     const updatedSports = sports.filter((sport) => !sport.isChecked);
//     setSports(updatedSports);
//   };

//   return (
//     <div>
//       {sports.map((sport, index) => (
//         <div key={index}>
//           <input
//             type="checkbox"
//             checked={sport.isChecked}
//             onChange={() => handleCheckboxChange(index)}
//           />
//           {sport.name}
//           {sport.isChecked && (
//             <button onClick={handleDeleteClick}>Delete</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SportsList;

import React, { useState } from "react";

function SportsList() {
  const [sports, setSports] = useState([
    { name: "cricket", isChecked: false },
    { name: "football", isChecked: false },
    { name: "badminton", isChecked: false },
  ]);

  const handleClick = (index) => {
    const updatedSports = [...sports];
    updatedSports[index].isChecked = !updatedSports[index].isChecked;
    setSports(updatedSports);
  };

  const handleDeleteClick = () => {
    const updatedSports = sports.filter((sport) => !sport.isChecked);
    setSports(updatedSports);
  };

  return (
    <>
      {sports.map((sport, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={sport.isChecked}
            onChange={() => handleClick(index)}
          />
          {sport.name}
          {sport.isChecked && (
            <button onClick={handleDeleteClick}>Delete</button>
          )}
        </div>
      ))}
    </>
  );
}

export default SportsList;
