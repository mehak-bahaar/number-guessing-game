import React from 'react'
import { useState } from 'react'
import './Game.css'
import { useEffect } from 'react';
const Game = () => {
  //states
  const [chances, setChances] = useState(0);
  const [guess, setGuess] = useState(0);
  const [success, setsuccess] = useState('');
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [number, setNumber] = useState(randomNumber);
  const [score, setScore] = useState(0);
  const onClick= (e) =>{
    //prevent page reload
    e.preventDefault()
    if(guess == ''){
        setSuccess('empty')
      
      }
    else(
    //count chances used
      setChances(chances+1)
      setScore(10 - (chances + 1 ))
      // conditions
      if(guess == ''){
        setSuccess('empty')
      }
      else if (10 - chances < 1) {
        setsuccess("lose");
        setChances(0);
        setScore(0);
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setNumber(randomNumber);
      } else if (guess >= 100 || guess < 0) {
        setsuccess("invalid");
      } else if (number > guess) {
        setsuccess("smaller");
      } else if (number < guess) {
        setsuccess("larger");
      } else if (guess === number) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        setNumber(randomNumber);
        setsuccess("success");
        setScore(chances);
        setChances(0);
        
      })
      
      
    
  }
  const onRestart = (e) =>{
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
    setsuccess('restart');
    setChances(0);
    setScore(0);
  }
  const onChange = (e) => {
    setGuess(parseInt(e.target.value))
  }
  return (
    <div className="gameContainer">
      <form action="" onSubmit={onClick}>
        <label htmlFor="guess" className="gameTitle">
          Guess the Number between <span>1</span> to <span>100</span>
        </label>
        <input
          type="number"
          name="guess"
          className="input"
          id="guess"
          onChange={onChange}
        />
        {success == 'empty' && (
          <div className = 'g lose'>This field cannot be empty.</div>
        )}
        {success == "lose" && (
          <div className=" g lose">You lose. You used all your chances.</div>
        )}
        {success == "smaller" && (
          <div className=" g smaller">
            Your Number Is <b className="b">smaller</b>. Please Enter a larger
            number
          </div>
        )}
        {success == "larger" && (
          <div className="g larger">
            Your Number Is <b className="b">larger</b>. Please Enter a smaller
            number
          </div>
        )}
        {success == "invalid" && (
          <div className="g invalid">Please Enter a valid number</div>
        )}
        {success == "success" && (
          <div className="g success">You Won. Your Score is {score} out of 10</div>
        )}

        {success !== "success" && (
          <div className="chances">
            Chances left: <span>{10-chances}</span>
          </div>
        )}
        <button
          disabled={success === "lose" || success === "success" || success === "empty"}
          type="submit"
          className="gameSubmit"
        >
          Submit
        </button>
        <button className="gameRestart" onClick={onRestart}>
          restart
        </button>
      </form>
    </div>
  );
}

export default Game
