// import React, { useState } from "react";
// import "./styles1.css";

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     title: "",
//     content: "",
//   });
//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => {
//       return {
//         ...prevNote,
//         [name]: value,
//       };
//     });
//   }
//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: "",
//     });
//     event.preventDefault();
//   }
//   return (
//     <div>
//       <form>
//         <input
//           name="title"
//           onChange={handleChange}
//           value={note.title}
//           placeholder="title"
//         />
//         <textarea
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           rows="3"
//         />
//         <button onClick={submitNote}>Add</button>
//       </form>
//     </div>
//   );
// }
// export default CreateArea;

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="form-input"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="form-textarea"
        />
        <button type="submit" className="form-button">
          Add
        </button>
      </form>
    </div>
  );
}

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
