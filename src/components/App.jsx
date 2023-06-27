import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function displayName(event) {
    validateInput("nameField", "warningMessage", name);
    if (isValid(name)) {
      setHeading(name);
      setName("");
    }
    event.preventDefault();
  }
  return (
    <div className="container">
      <form onSubmit={displayName}>
        <h1>Hello {headingText}</h1>
        <span id="warningMessage" className="warning-message">
          Invalid input.
        </span>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
          id="nameField"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

function validateInput(inputElementId, warningElementId, name) {
  const inputElement = document.getElementById(inputElementId);
  const warningElement = document.getElementById(warningElementId);
  const value = name || inputElement.value;

  // Toggle warning message visibility based on validation result
  if (isValid(value)) {
    warningElement.style.display = "none";
  } else {
    warningElement.style.display = "block";
  }
}
function isValid(str) {
  const obj = { " ": 1, "-": 1, _: 1 };

  for (const char of str) {
    if (!/[a-zA-Z0-9]/.test(char) && !(char in obj)) return false;
  }
  return str !== null && str!=='';
}
