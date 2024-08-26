//conditional rendering

// import React from "react";
// function Component1() {
//   return (
//     <div>
//       <h1>Hello everyone</h1>
//     </div>
//   );
// }
// export default Component1;

//states

// import React, { Component } from "react";
// class Component1 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Rohan",
//     };
//   }
//   changeName() {
//     this.setState({
//       name: "aryan",
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <button onClick={() => this.changeName()}>click</button>
//       </div>
//     );
//   }
// }
// export default Component1;

//usehookstate

// import React, { useState } from "react";
// function Component1() {
//   const [name, setName] = useState("Rohan");
//   let changeState = () => {
//     setName("aryan");
//   };
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={changeState}>Update</button>
//     </div>
//   );
// }
// export default Component1;

//useEffectHook

import React, { useState, useEffect } from "react";
function Component1() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("state is rendered");
  });
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
export default Component1;
