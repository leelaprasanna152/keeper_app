// import React, { Component } from "react";
// class CompA extends Component {
//   render() {
//     const HelloFunction = (name) => {
//       alert("helo " + name);
//     };
//     return (
//       <div>
//         <button onClick={() => HelloFunction("amit")}>click</button>
//       </div>
//     );
//   }
// }
// export default CompA;

//form

import React, { useState } from "react";
function CompA() {
  const [name, setName] = useState("Rohan");
  const HandleForm = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={HandleForm}>
        <label>Enter name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default CompA;
