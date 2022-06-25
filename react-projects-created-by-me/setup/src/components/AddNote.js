import { useState } from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const charLimit = 250;
  function handleChange(e) {
    if (e.target.value.length <= 250) {
      setNoteText(e.target.value);
    }
  }
  function onSubmit() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Add a New Note..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={onSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
