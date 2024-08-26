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

