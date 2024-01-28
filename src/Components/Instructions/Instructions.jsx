// Instructions.jsx

import React from "react";
import "./Instructions.css"; // Import the CSS file for styling

const Instructions = () => {
  return (
    <div className="instructionsContainer">
      <h2>Game Instructions</h2>
      <ul>
        <li>Guess the correct number between 1 and 100.</li>
        <li>You have a maximum of 10 chances to guess the number.</li>
        <li>Enter your guess in the input field and click "Submit".</li>
        <li>
          You will receive feedback on whether the correct number is smaller or
          larger.
        </li>
        <li>If you guess the correct number, you win!</li>
        <li>If you use all 10 chances without guessing correctly, you lose.</li>
        <li>
          Invalid guesses (less than 0 or greater than 100) will be marked as
          invalid.
        </li>
      </ul>
    </div>
  );
};

export default Instructions;
