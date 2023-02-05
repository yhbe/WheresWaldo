import React from 'react'
import { db } from "../firebase/firebase-config";
import { collection, getDocs} from "firebase/firestore";

function LeaderBoards(props) {
   const usersCollectionRef = collection(db, "names");
   const [leaderboard, setLeaderBoard] = React.useState([])

   React.useEffect(() => {
     const getLeaderBoard = async () => {
       const data = await getDocs(usersCollectionRef);
       console.log(data, "NAMES");
       setLeaderBoard(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };
     getLeaderBoard();
   }, []);
   console.log(leaderboard, "<===")

   let leaderboardList = leaderboard.sort((personA, personB) => {
     return personA.time - personB.time
   })

   leaderboardList = leaderboardList.map((person,index) => {
    return (
      <div className='leaderboard--content'>
      <p>{index + 1}</p>
      <h3>{person.name}</h3>
      <h3>{person.time}s</h3>
      </div>
    )
   })


  return (
  <div className="modal">
    <div className="leaderboard-modal-inner">
      <h1>Leaderboards!</h1>
      <hr></hr>
      {leaderboardList ? leaderboardList : "...loading"}
    </div>
  </div>
  );
}

export default LeaderBoards