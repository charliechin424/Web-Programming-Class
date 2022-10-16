/****************************************************************************
  FileName      [ HomePage.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Home page.  ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import './css/HomePage.css';
import React, { useState } from 'react';

const HomePage = ({ startGameOnClick, mineNumOnChange, boardSizeOnChange, mineNum, boardSize, startGame /* -- something more... -- */ }) => {
  // const [showPanel, setShowPanel] = useState(true);      // A boolean variable. If true, the controlPanel will show.  
  // const [error, setError] = useState(false);
  const [error, setError] = useState(false);           // A boolean variable. If true, means that the numbers of mines and the board size are invalid to build a game.
  const [showBar, setshowBar] = useState(false);
  

  /* Advanced TODO: Implementation of Difficult Adjustment Some functions may be added here! */

  const handleStart = () => {
    if (error === false){
      startGameOnClick();
    }
  }

  const handleDifficulty = () => {
    setshowBar(true);
  }

  const handlemineNum = (event) => {
    mineNum = event.target.value;
    mineNumOnChange(mineNum);
    if (mineNum >= boardSize*boardSize){
      setError(true);
    }
    if (mineNum < boardSize*boardSize){
      setError(false);
    }
  }

  const handleboardSize= (event) => {
    boardSize = event.target.value;
    boardSizeOnChange(boardSize);
    if (mineNum >= boardSize*boardSize){
      setError(true);
    }
    if (mineNum < boardSize*boardSize){
      setError(false);
    } 
  }



  return (
    <div className='HomeWrapper' style={{display: startGame === false ? 'block' : 'none'}}>
      <p className='title'>MineSweeper</p>
      {/* Basic TODO:  Implemen start button */}
      <button className='btn' onClick={handleStart}>Start Game</button>
      <div className='controlContainier'>
        <button className='btn' onClick={handleDifficulty}>Difficulty Adjustment</button>
        <div className='controlWrapper' style={{display: showBar === true ? 'block' : 'none'}}>
          <div className="error" style={{visibility: error ? 'visible' : 'hidden'}}>ERROR: Mines number and board size are invalid !</div>
          <div className='controlPanel'>
            <div className='controlCol'>
              <p className='controlTitle'>Mines Number</p>
              <input type = 'range' step='1' min = '1' max = '100' defaultValue = '10' onChange={handlemineNum}/>
              <p className='controlNum' style={{color: error ? 'red' : 'blue'}}>{mineNum}</p>
            </div>
            <div className='controlCol'>
              <p className='controlTitle'>Board Sizes</p>
              <input type = 'range' step='1' min = '0' max = '25' defaultValue = '8' onChange={handleboardSize}/>
              <p className='controlNum' style={{color: error ? 'red' : 'blue'}}>{boardSize}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Advanced TODO: Implementation of Difficult Adjustment
                Useful Hint: <input type = 'range' min = '...' max = '...' defaultValue = '...'> 
                Useful Hint: Error color: '#880000', default text color: '#0f0f4b', invisible color: 'transparent' 
                Reminder: The defaultValue of 'mineNum' is 10, and the defaultValue of 'boardSize' is 8. */}

    </div>
  );

}
export default HomePage;   