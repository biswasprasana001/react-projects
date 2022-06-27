import AddNote from "./AddNote";
import Note from "./Note";

function NotesList({ handleAddNote, notes, handleDelete }) {
  return (
    <div className="notes-list">
      {/* we will render the data here */}
      {notes.map((note) => {
        return <Note {...note} handleDelete={handleDelete} />;
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
