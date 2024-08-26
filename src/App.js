// import React from "react";
// import Component from "./Component";
// function App() {
//   return (
//     <div>
//       <Component />
//     </div>
//   );
// }
// export default App;

//JSX PRACTICE

// import "./styles.css";
// import React from "react";
// const name = "prassu";
// let a = 15;
// let msg = "";
// if (a > 10) {
//   msg = "hello";
// } else {
//   msg = "bye";
// }
// function App() {
//   return (
//     <div>
//       <h1>HIII</h1>
//       <ul>
//         <li>apple</li>
//         <li>apple</li>
//       </ul>
//       <h1>{name}</h1>
//       <p>{msg}</p>
//     </div>
//   );
// }
// export default App;

//Inline styles

// import React from "react";
// let obj = {
//   fontSize: "100px",
// };
// let obj2 = {
//   color: "blue",
// };
// function App() {
//   return (
//     <div>
//       <h1 style={{ color: "red", backgroundColor: "yellow" }}>hELLO</h1>
//       <p style={obj}>prasu</p>
//       <p style={{ ...obj, ...obj2 }}>kathar</p>
//     </div>
//   );
// }
// export default App;

//React components

// import React from "react";
// import Header from "./Header";
// import List from "./List";
// function App() {
//   return (
//     <div>
//       <Header />
//       <List />
//     </div>
//   );
// }
// export default App;

// import React from "react";

// import TodoList from "./TodoList";
// function App() {
//   return (
//     <div>
//       <TodoList />
//     </div>
//   );
// }
// export default App;

//keeper app

// import React from "react";
// import Header from "./Header";
// import Note from "./Note";
// import Footer from "./Footer";
// import notes from "./notes";
// function createNote(note) {
//   return <Note key={note.key} title={note.title} content={note.content} />;
// }
// function App() {
//   return (
//     <div>
//       <Header />
//       {notes.map(createNote)}
//       <Footer />
//     </div>
//   );
// }
// export default App;

//props in react

// import React from "react";
// import Hello from "./Hello.js";
// function App() {
//   return (
//     <div>
//       <Hello name="rohan" age="45" />
//       <Hello name="sushant" age="35" />
//     </div>
//   );
// }
// export default App;

//map function

// import React from "react";
// import Hello from "./Hello";
// import info from "./info";
// function createHello(info) {
//   return (
//     <div>
//       <Hello name={info.name} number={info.number} />
//     </div>
//   );
// }
// function App() {
//   return <div>{info.map(createHello)}</div>;
// }
// export default App;

//keeper2

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note1 from "./Note1";
import CreateArea from "./CreateArea";
function createNote(notes1) {
  return <Note1 title={notes1.title} content={notes1.content} />;
}
function App() {
  const [notes1, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      {/* {notes1.map(createNote)} */}
      <CreateArea onAdd={addNote} />
      {notes1.map((noteItem, index) => {
        return (
          <Note1
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;

// //condiitonal rendering

// // import React from "react";
// // import Component1 from "./Component1";
// // import Component2 from "./Component2";
// // function App() {
// //   const name = "Roh";
// //   const age = 23;
// //   // if (name == "Roh") {
// //   //   return <Component1 />;
// //   // } else {
// //   //   return <Component2 />;
// //   // }
// //   return (
// //     <div>
// //       {name == "Rohan" && age >= 18 ? (
// //         <h1>you are eligible</h1>
// //       ) : (
// //         <h1>you are not eligible</h1>
// //       )}
// //     </div>
// //   );
// // }
// // export default App;

// // import React from "react";
// // import Component1 from "./Component1";
// // function App() {
// //   return (
// //     <div>
// //       <Component1 />
// //     </div>
// //   );
// // }
// // export default Component1;

// //event handling

// // import React from "react";
// // import CompA from "./CompA";
// // const App = () => <CompA />;
// // export default App;

// //spread operator

// // var animals = ["cat", "dog", "hen"];
// // var animal2 = ["pen", "book", ...animals];
// // console.log(animal2);

// src/App.js

// import React from "react";
// import Calculator from "./Calculator";

// function App() {
//   return (
//     <div className="App">
//       <Calculator />
//     </div>
//   );
// }

// export default App;
