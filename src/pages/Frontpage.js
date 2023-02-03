import React from 'react'
import image from "../waldoimage.jpg";


function Frontpage() {
  function getEvent(event) {
    let x = event.nativeEvent["offsetX"] - 40;
    let y = event.nativeEvent["offsetY"] - 40;
    setTarget(x, y);
  }
  
  function setTarget(x, y) {
    let target = document.querySelector(".cursortargetcontainer");
    target.style.left = `${x}px`
    target.style.top = `${y}px`
  }
  
  return (
    <div className="main--container">
      <h1>Where's:</h1>
      <ul>
        <li>Waldo</li>
        <li>Odlaw</li>
        <li>Wizard</li>
      </ul>
      <div className="image--container">
        <div className='cursortargetcontainer'>
          <div className="cursortarget"></div>
          <button>Waldo</button>
          <button>Odlaw</button>
          <button>Wizard</button>
        </div>
        <img onClick={(event) => getEvent(event)} src={image} alt="where's waldo"></img>
      </div>
    </div>
  );
}

export default Frontpage