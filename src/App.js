import React from 'react';
import './style.css';
import Frontpage from './pages/Frontpage';
import { db } from './firebase/firebase-config';
import {collection, getDocs} from "firebase/firestore"

function App() {
  const [locations,setLocations] = React.useState([])
  const usersCollectionRef = collection(db, "location")
  
  React.useEffect(() => {
    const getLocations = async () => {
      const data = await getDocs(usersCollectionRef)
      setLocations(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getLocations()
  }, [])

  return (
    <div className="App">
      <Frontpage locations={locations}/>
    </div>
  );
}

export default App;
