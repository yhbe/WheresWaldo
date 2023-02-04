import React from 'react'
import image from "../waldoimage.jpg";


function Frontpage(props) {
  // const [won,setWon] = React.useState(false)
  const [searchList, setSearchList] = React.useState([
    "Waldo","Odlaw","Wizard"
  ])
  console.log(searchList)

  let currentMouseClick 

  function getEvent(event) {
    if (event.target["localName"] === "button") {
      return checkTarget(currentMouseClick, event.target.innerText);
    } 
    let x = event.nativeEvent["offsetX"] - 40;
    let y = event.nativeEvent["offsetY"] - 40;
    currentMouseClick = [x,y]
    setTarget(x, y);
  }
  
  function setTarget(x, y) {
    let target = document.querySelector(".cursortargetcontainer");
    target.style.left = `${x}px`
    target.style.top = `${y}px`
  }

  function checkTarget(target,name){
    if (name === "Waldo"){
      const [waldoX, waldoY] = [
        props.locations[0].waldo[0],
        props.locations[0].waldo[1],
      ];
      const [targetX,targetY] = [target[0], target[1]]
      if (targetX + 25 > waldoX && targetX -25 < waldoX && targetY + 50 > waldoY && targetY - 50 < waldoY){
        setSearchList(prevstate => {
          let arr = [...prevstate]
          arr = arr.filter(character => character !== name)
          return arr
        })
      }
    } else if (name === "Wizard"){
      const [wizardX, wizardY] = [
        props.locations[0].wizard[0],
        props.locations[0].wizard[1],
      ];
      const [targetX, targetY] = [target[0], target[1]];
      if (
        targetX + 25 > wizardX &&
        targetX - 25 < wizardX &&
        targetY + 25 > wizardY &&
        targetY - 25 < wizardY
      ) {
          setSearchList((prevstate) => {
            let arr = [...prevstate];
            arr = arr.filter((character) => character !== name);
            return arr;
          });
      }
    } else if (name === "Odlaw"){
      const [odlawX, odlawY] = [
        props.locations[0].odlaw[0],
        props.locations[0].odlaw[1],
      ];
      const [targetX, targetY] = [target[0], target[1]];
      if (
        targetX + 25 > odlawX &&
        targetX - 25 < odlawX &&
        targetY + 25 > odlawY &&
        targetY - 25 < odlawY
      ) {
         setSearchList((prevstate) => {
           let arr = [...prevstate];
           arr = arr.filter((character) => character !== name);
           return arr;
         });
      }
    }
  }

  let namesList = searchList.map(name => {
    return  <li>{name}</li>
  })
  
  return (
    <div className="main--container">
      <h1>Where's:</h1>
      <ul>
        {namesList}
      </ul>
      <div className="image--container">
        <div className="cursortargetcontainer">
          <div className="cursortarget"></div>
          <button onClick={(event) => getEvent(event)}>Waldo</button>
          <button onClick={(event) => getEvent(event)}>Odlaw</button>
          <button onClick={(event) => getEvent(event)}>Wizard</button>
        </div>
        <img
          onClick={(event) => getEvent(event)}
          src={image}
          alt="where's waldo"
        ></img>
      </div>
    </div>
  );
}

export default Frontpage