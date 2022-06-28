import { MdDeleteForever } from "react-icons/md";

function Note({ id, text, date, handleDelete }) {
  // accesing data via props
  return (
    <div className="note">
      {/* we render it here */}
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        {/* we then use this react-icon to trigger a function 
        which will delete this component in the App Component, thus deleting that note
        */}
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
}

export default Note;
