import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  function deletingNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchNote} />
        <NotesList
          handleAddNote={addNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchNote.toLowerCase())
          )}
          handleDelete={deletingNote}
        />
      </div>
    </div>
  );
}

export default App;
