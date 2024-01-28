import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1 className='homeTitle'>Guess The Number With Hints</h1>
        <h3 className='homeSubtitle'>Lets see how smart you are!</h3>
        <Link className='gameButton' to="/game">Get Started</Link>
      </div>
      <div className="right">
      </div>
    </div>
  );
}

export default Home
