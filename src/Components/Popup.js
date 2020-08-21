import React from 'react'
import {checkWin} from '../Helpers/helpers'

const Popup = ({correctLetters,wrongLetters,selectedWord, playAgain }) => {
    let finalMessage = ''

    if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
        finalMessage = 'Congratulations! You won! 😃';
      } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
        finalMessage = 'Unfortunately you lost. 😕';
      }

    return (
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <button onClick={playAgain}> Play Again</button>
            </div>
        </div>
    )
}

export default Popup
