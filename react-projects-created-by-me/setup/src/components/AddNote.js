import { useState } from "react";

function AddNote({ handleAddNote }) {
  // state which updates as we type something in input
  const [noteText, setNoteText] = useState("");
  // we set the charactet limit in input element
  const charLimit = 250;
  // this function runs when we make a change input,
  function handleChange(e) {
    // this state updates only when the value is less than charLimit
    if (e.target.value.length <= charLimit) {
      setNoteText(e.target.value);
    }
  }
  // this runs when we submit the input
  // which updates the note state in app component
  // here the note state is brought via props
  // I am not required to show how props work!!!
  function onSubmit() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      // finally we empty the input
      setNoteText("");
    }
  }
  return (
    <div className="note new">
      {/* here whatever change happens in input,
      it is reflected again in input
      meaning it will stop when characters are more than 250 */}
      <textarea
        cols="10"
        rows="8"
        placeholder="Add a New Note..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        {/* And this is how the character value decreases when we */}
        {/* type something in input */}
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={onSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
