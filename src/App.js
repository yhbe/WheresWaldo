import React from 'react';
import './style.css';
import Frontpage from './pages/Frontpage';
import { db } from './firebase/firebase-config';
import {collection, getDocs} from "firebase/firestore"


function App() {
  const [locations,setLocations] = React.useState([])
  const usersCollectionRef = collection(db, "location")
  const [wonGame, setWonGame] = React.useState(false)
  const [time, setTime] = React.useState([])
  
  React.useEffect(() => {
    const getLocations = async () => {
      const data = await getDocs(usersCollectionRef)
      setLocations(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getLocations()
    setTime(Date.now())
  }, [])


  return (
    <div className="App">
      {!wonGame && <Frontpage locations={locations} setTime={setTime} time={time} setWonGame={setWonGame}/>}
    </div>
  );
}

export default App;
