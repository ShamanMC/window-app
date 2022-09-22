import React, { useState, useEffect } from "react";

import "./styles.css";

import window_pic from "./pictures/window-front-final.png";
import porta_pic from "./pictures/porta.png"



export default function App() {
  const colors = [
    "#CBB6C0", //Desiree 1219
    "#F2E7C1", //Martica 0811
    "#EEE5D0", //Ivory Parchment 0300
    "#DADAD3", //Lady Nicole 0030
    "#E6E3DB", //Dove White 0018
    "#D0C278", //Yellow Ubrella 0800
    "#EEDCC5", //Turkscap 1006
    "#AAB7C5", //Blue Pot 0624
    "#C7C3B9", //Sheepskin 0566
    "#BEBE9C", //Rediscover 0408
    "#B48873", //Autumn's Hill 0038
    "#7686A3", //Madonna Blue 0590
    "#8F897E", //Fireplace Mantel 0569
    "#6C6E5B", //Vegeterian 0430
    "#CCA169", //Impulse 0989
    "#546982", //Happy Tune 0648
    "#645F56", //Terra Pin 0571
  ];

  const windowColors = [
    "#fefefe", //exalco-white
    "#f8f5e4",//1013
    "#faf6d3", //1015
    "#c8bb9b", //1019
    "#7e0001", //3005
    "#839cd5", //5014
    "#003c13", //6005
    "#011e00", //6009
    "#8bb666", //6011
    "#8f9897", //7005
    "#526778", //7011
    "#4c5574", //7015
    "#3b4161", //7024
    "#b7b7ad", //7030
    "#dee6e8", //7035
    "#9ea3a9", //7037
    "#bec4d0", //7040
    "#d6d9d2", //7044
    "#b64f00", //8003
    "#6d1501", //8011
    

  ];


  const [background, setBackground] = useState("#CBB6C0");
  const [windowBackground, setWindowBackground] = useState("#faf6d3");
  const [current, setCurrent] = useState("#CBB6C0");

  function windowClickHandler(windowColor) {
    setWindowBackground(windowColor);
    setCurrent(windowColor);

  }
  

  return (
    <div className="App" style={{ background: background }}>
      <h2>Window-App</h2>
        <img className="window_pic" style={{background: windowBackground}}src={porta_pic} alt="window"/>
        {current !== null && <h3>Window color code: {current}</h3>}
        
      <div className="titles">
        <h2>Wall Colors</h2>
        <h2>Window Colors</h2>
      </div>



      <div className="containers">  
        <div className="container">
          {colors.map((color, index) => (
            <div key={index} className="card">
              <div 
                style={{
                  background: color,
                  filter: "brightness(85%)",
                  boxShadow: color === background ? "0 0 5px #000" : ""
                }}
                className="box"
                onClick={() => setBackground(color)}
              />
          
               {/* <p
                  style={{ color: color === background ? "#fff" : color }}
                  onClick={() => setCurrent(color)}
                >
                  {color}
                </p>
                 */}
            </div>
          ))}
        </div>
      


        
        <div className="window_container">
          {windowColors.map((windowColor, index) => (
            <div key={index} className="card">
              <div
                style={{
                  background: windowColor,
                  filter: "brightness(85%)",
                  boxShadow: windowColor === windowBackground ? "0 0 5px #000" : ""
                }}
                className="box"
                onClick={() => windowClickHandler(windowColor)} 
              />
          
               {/*  <p
                  style={{ color: windowColor === background ? "#fff" : windowColor }}
                  onClick={() => setCurrent(windowColor)}
                >
                  {windowColor}
                </p>
                */}

            </div>
          ))}
        </div>       
        
      </div>



    </div>
  );
}
