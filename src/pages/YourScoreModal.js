import React from 'react'

function YourScoreModal(props) {
  console.log(props)
  return (
    <div className="modal">
      <div className="score--modal--inner">
        <h1>You finished in {props.time} </h1>
        <hr></hr>
        <p>Enter your name to save your score on the global leaderboard.</p>
        <h4>Username</h4>
        <input maxLength={13}></input>
        <hr></hr>
        <div className="score--modal--button-container">
          <button
            className="cancel--button"
            onClick={() => props.setShowScore(false)}
          >
            CANCEL
          </button>
          <button
            className="submit--button"
            onClick={() => {
              props.setShowLeaderBoard(true);
              props.setShowScore(false);
            }}
          >
            Submit Score
          </button>
        </div>
      </div>
    </div>
  );
}

export default YourScoreModal