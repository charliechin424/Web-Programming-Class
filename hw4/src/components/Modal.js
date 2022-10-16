/****************************************************************************
  FileName      [ Modal.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Modal component. ]
  Copyright     [ 2022 10 ]
****************************************************************************/


import './css/Modal.css'
// import React, { useEffect, useState } from "react";

export default function Modal({ restartGame, backToHome, win, gameOver}) {
    // const [render1, setRender1] = useState(false);
    // const [render2, setRender2] = useState(false);
    // const [count, setCount] = useState(0);
    // // const [end, setEnd] = useState(false);
    // useEffect(() => {
    //     if (gameOver){
    //         setTimeout(() => {
    //             setRender1(true);
    //             console.log(1);
    //         }, 1000);
    //     }
    //     if (win){
    //         setTimeout(() => {
    //             setRender2(true);
    //             console.log(1);
    //         }, 1000);
    //     }
    //     setTimeout(() => {setCount(count+1)}, 1000);
    // }, [count]);

    // const handlerestart = () => {
    //     setRender1(false);
    //     setRender2(false);
    // } 

    return (
        // Advanced TODO: Implement the structure of Modal
        // Useful Hint: style = {{opacity: 1 or 0 }}
        <div>
            <div className='modal' style={{display: gameOver ? 'block' : 'none'}}>
                <div className='modalWrapper'></div>
                <div className='modalContent'>
                    <div className='modalResult'>Game Over</div>
                    <div className='modalBtnWrapper'>
                        <div className='modalBtn' onClick={restartGame}>Try again</div>
                        <div className='modalBtn' onClick={(event) => { backToHome(); restartGame();}}>Back to Home</div>
                    </div>
                </div>
                <div className='modalWrapper'></div>
            </div>
            <div className='modal' style={{display: win ? 'block' : 'none'}}>
                <div className='modalWrapper'></div>
                <div className='modalContent'>
                    <div className='modalResult'>Win</div>
                    <div className='modalBtnWrapper'>
                        <div className='modalBtn' onClick={restartGame}>New Gmae</div>
                        <div className='modalBtn' onClick={(event) => { backToHome(); restartGame();}}>Back to Home</div>
                    </div>
                </div>
                <div className='modalWrapper'></div>
            </div>
        </div>
        
        // {}
    );
}