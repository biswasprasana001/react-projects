import { MdDeleteForever } from "react-icons/md";

function Note({ id, text, date, handleDelete }) {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
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
