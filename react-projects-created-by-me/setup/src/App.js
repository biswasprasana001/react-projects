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
    // date created the moment the data is submitted
    const date = new Date();
    // a object is created to store metadata as well
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // then we update it by adding newNote as well as previous
    const newNotes = [...notes, newNote];
    // now the new data is passed which will update the note state
    setNotes(newNotes);
  }
  function deletingNote(id) {
    // we filter it and store it
    const newNotes = notes.filter((note) => note.id !== id);
    // and then update it, thus rendering updated data
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search setSearchNote={setSearchNote} />
        <NotesList
          handleAddNote={addNote}
          // as the states updates, so also this filtered value which then is passed via props displaying whatever we searched
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
