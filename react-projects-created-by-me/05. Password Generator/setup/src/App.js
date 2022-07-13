import { MdContentCopy } from "react-icons/md";

function App() {
  return (
    <div className="container">
      <div className="generator">
        <h2 className="header">Password Generator</h2>
        <div className="password">
          <h4>abcdefghijklmnopqrstuvwxyz</h4>
          <MdContentCopy />
        </div>
        <form className="form">
          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input
              className="pw"
              type="number"
              id="password-stregth"
              name="password-strength"
              max="26"
              min="8"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            />
          </div>
          <button className="btn">Generate Password</button>
        </form>
      </div>
    </div>
  );
}

export default App;
