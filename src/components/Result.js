import React from 'react';

const Result = (props) => {
    const {score, playAgain} = props;
    return ( 
       <div className='card text-center'>
        <div className='card-header'>
             You have {score} / 5 correct answers!!!
        </div>
        <div className='card-body'>
          <h5 className='card-title'>Congrats on your game</h5>
          <p className='card-text'>If you want to play again click the button bellow.</p>
          <hr />
          <button className='btn btn-primary' onClick={playAgain}>
               Play Again
          </button>
        </div>
       </div>
     );
}
 
export default Result;