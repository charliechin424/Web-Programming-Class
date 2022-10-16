/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import './css/Board.css'
import Cell from './Cell';
import Modal from './Modal';
import Dashboard from './Dashboard';
import  {revealed}  from '../util/reveal';
import createBoard from '../util/createBoard';
import React, { useEffect, useState } from 'react';
// import { set } from 'cypress/types/lodash';


const Board = ({ boardSize, mineNum, backToHome, startGame }) => {
    const [board, setBoard] = useState([]);                     // An 2-dimentional array. It is used to store the board.
    const [nonMineCount, setNonMineCount] = useState(boardSize*boardSize-mineNum);        // An integer variable to store the number of cells whose value are not '💣'.
    // const [mineLocations, setMineLocations] = useState([]);     // An array to store all the coordinate of '💣'.
    const [gameOver, setGameOver] = useState(false);            // A boolean variable. If true, means you lose the game (Game over).
    const [remainFlagNum, setRemainFlagNum] = useState(mineNum);      // An integer variable to store the number of remain flags.
    const [win, setWin] = useState(false);                      // A boolean variable. If true, means that you win the game.
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Calling the function
        freshBoard();
    }, [startGame, count]);

    // Creating a board
    const freshBoard = () => {
        const newBoard = createBoard(boardSize, mineNum);
        // Basic TODO: Use `newBoard` created above to set the `Board`.
        setBoard(newBoard.board);
        setRemainFlagNum(mineNum);
        setNonMineCount(boardSize*boardSize-mineNum);

        // setMineLocations(newBoard.mineLocations);
        
        // Hint: Read the definition of those Hook useState functions and make good use of them.

    }

    const restartGame = () => {
        setCount(count => count +1);
        setGameOver(false);
        setWin(false);
    }

    // On Right Click / Flag Cell
    const updateFlag = (e, x, y) => {
        // To not have a dropdown on right click
        e.preventDefault();
        if (remainFlagNum > 0 && board[x][y].flagged === false && board[x][y].revealed === false){
            // Deep copy of a state
            let newBoard = JSON.parse(JSON.stringify(board));
            newBoard[x][y].flagged = true;
            // newBoard[x][y].revealed = true;
            setBoard(newBoard);
            let newFlagNum = remainFlagNum-1;
            setRemainFlagNum(newFlagNum);
        }
        if (board[x][y].flagged === true && board[x][y].revealed === false){
            let newBoard = JSON.parse(JSON.stringify(board));
            newBoard[x][y].flagged = false;
            let newFlagNum = remainFlagNum+1;
            setBoard(newBoard);
            setRemainFlagNum(newFlagNum);
        }
        // Basic TODO: Right Click to add a flag on board[x][y]
        // Remember to check if board[x][y] is able to add a flag (remainFlagNum, board[x][y].revealed)
        // Update board and remainFlagNum in the end

    };

    const revealCell = (x, y) => {
        if (board[x][y].revealed || gameOver || board[x][y].flagged) return;
        let newBoard = JSON.parse(JSON.stringify(board));
        if (newBoard[x][y].value === '💣'){
            newBoard[x][y].revealed = true;
            setBoard(newBoard);
            setGameOver(true);
        } else {
            let reveal = revealed(newBoard, x, y, nonMineCount);
            setBoard(reveal.arr);
            setNonMineCount(reveal.newNonMines);
            console.log(nonMineCount);
            if (nonMineCount-1 === 0){
                setWin(true);
            }
        }

        // Basic TODO: Complete the conditions of revealCell (Refer to reveal.js)
        // Hint: If `Hit the mine`, check ...?
        //       Else if `Reveal the number cell`, check ...?
        // Reminder: Also remember to handle the condition that after you reveal this cell then you win the game.

    };

    const renderRows = () => {
        return board.map((row, rowIndex) => {
          return <div id={rowIndex} style={{display:"flex"}}>{renderCellForRow(row, rowIndex)}</div>;
        });
    }

    const renderCellForRow = (row, rowIndex) => {
        return row.map((cell, colIndex) => (
            <Cell colIdx={colIndex} detail={cell} rowIdx={rowIndex} updateFlag={updateFlag} revealCell={revealCell}/>
        ));
    };

    return (
        <div className='boardPage' style={{display : startGame === true ? 'block' : 'none'}}>
            <div className='boardWrapper' >
                <div className='boardContainer'>
                    <Dashboard remainFlagNum={remainFlagNum} gameOver={gameOver} startGame={startGame} win={win}/>
                    <div>{renderRows()}</div>
                </div>
                <Modal restartGame={restartGame} backToHome={backToHome} win={win} gameOver={gameOver}/>
                {/* Advanced TODO: Implement Modal based on the state of `gameOver` */}

                {/* Basic TODO: Implement Board 
                Useful Hint: The board is composed of BOARDSIZE*BOARDSIZE of Cell (2-dimention). So, nested 'map' is needed to implement the board.
                Reminder: Remember to use the component <Cell> and <Dashboard>. See Cell.js and Dashboard.js for detailed information. */}
                
            </div>
        </div>
    );



}

export default Board
