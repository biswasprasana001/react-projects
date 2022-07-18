import { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Character";

function App() {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const handleCopy = () => {
    setCopiedToClipboard(true);
    navigator.clipboard.writeText(password);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setCopiedToClipboard(false);
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert("You Must Atleast Select One Checkbox!!");
    } else {
      let charList = "";
      if (includeNumbers) {
        charList += numbers;
      }
      if (includeUpperCase) {
        charList += upperCaseLetters;
      }
      if (includeLowerCase) {
        charList += lowerCaseLetters;
      }
      if (includeSymbols) {
        charList += specialCharacters;
      }
      setPassword(createPassword(charList));
    }
  };
  const createPassword = (charList) => {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.round(Math.random() * charList.length);
      password += charList.charAt(randomIndex);
    }
    return password;
  };
  return (
    <div className="container">
      <div className="generator">
        <h2 className="header">Password Generator</h2>
        <div className="passwordContainer">
          <h4 className="the-password">{password}</h4>
          {password && (
            <button className="btn-copy" onClick={() => handleCopy()}>
              {copiedToClipboard ? `Copied` : ` Copy`}
            </button>
          )}
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
              onChange={(e) => setPasswordLength(e.target.value)}
              value={passwordLength}
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
          <button className="btn" onClick={handlePassword}>
            Generate Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
