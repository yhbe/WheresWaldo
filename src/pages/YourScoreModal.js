import React from 'react'
import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

function YourScoreModal(props) {
  const [newName, setNewName] = React.useState("")
  
  const usersCollectionRef = collection(db, "names");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, time: props.time})
  } 

  return (
    <div className="modal">
      <div className="score--modal--inner">
        <h1>You finished in {props.time} </h1>
        <hr></hr>
        <p>Enter your name to save your score on the global leaderboard.</p>
        <h4>Username</h4>
        <input onChange={(event) => setNewName(event.target.value)} maxLength={13} placeholder="Username"></input>
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
              createUser()
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