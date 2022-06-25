import AddNote from "./AddNote";
import Note from "./Note";

function NotesList({ handleAddNote, notes, handleDelete }) {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note {...note} handleDelete={handleDelete} />;
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
