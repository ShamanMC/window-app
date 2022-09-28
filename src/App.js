import React, { useState, useEffect } from "react";

import "./styles.css";

import window_pic from "./pictures/window-front-final.png";
import porta_pic from "./pictures/porta.png";


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
    "#7B5152", //0107 Prosperity-1
    "#5F3D3D", //0107 Prosperity-2
    "#664242", //0107 Prosperity-3
    "#6F574B", //0142 Ranch House-1
    "#46352E", //0142 Ranch House-2
    "#503D36", //0142 Ranch House-3
    "#968A7C", //0197 Thistle Gray-1
    "#63594F", //0197 Thistle Gray-2
    "#71675D", //0197 Thistle Gray-3
    "#B1AAA0", //0355 Twinkle Twinkle-1
    "#837C74", //0355 Twinkle Twinkle-2
    "#8D867E", //0355 Twinkle Twinkle-3
    "#434746", //0501 Calm Interlude-1
    "#25292A", //0501 Calm Interlude-2
    "#2E3232", //0501 Calm Interlude-3
    "#463F39", //0543 November Storms-1
    "#2F2A26", //0543 November Storms-2
    "#342F2B", //0543 November Storms-3
    "#B2B5BC", //0587 Atmospheric Pressure-1
    "#82868F", //0587 Atmospheric Pressure-2
    "#9397A0", //0587 Atmospheric Pressure-3
    "#978E55", //0793 Motherland-1
    "#676034", //0793 Motherland-2
    "#726A3B", //0793 Motherland-3
    "#A38233", //0865 Lemon Bar-1
    "#7A5B22", //0865 Lemon Bar-2
    "#866927", //0865 Lemon Bar-3
    "#945E38", //1019 Orange Ballad-1
    "#60381F", //1019 Orange Ballad-2
    "#6E4227", //1019 Orange Ballad-3
    "#7E3838", //1138 Romantic Night-1
    "#602827", //1138 Romantic Night-2
    "#733333", //1138 Romantic Night-3
    "#B2ABA5", //1265 White Shoulders-1
    "#8D8680", //1265 White Shoulders-2
    "#99928D", //1265 White Shoulders-3
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
    "#605D5A", //F5000 ALLOY
    "#F4F4F4", //F0030
    "#8F8B8A", //F2638
    "#262523", //F2630
    "#83746F", //F2629
    "#21334B", //F0754
    "#653C3A", //F751
    "#748887", //F750
    "#3C2C2C", //F0749
    "#B1A79D", //F748
    "#8F8E8C", //F0725
    "#35363B", //F0724
    "#000000", //F0720
    "#EBD2B6", //F0719
    "#7C7A6D", //F0718
    "#9D8C7C", //F0717
    "#597380", //
    "#4B5B4E", //
    "#A0C8BF", //
    "#3E2E1F", //
    "#F6FFFE", //
    "#FFF1D4", //RAL MAT
    "#FCF3D3", //RAL MAT
    "#C5B39F", //RAL MAT
    "#052D10", //RAL MAT
    "#908E7F", //RAL MAT
    "#5F6D87", //RAL MAT
    "#B2B2B4", //RAL MAT
    "#839299", //RAL MAT
    "#7B7D89", //RAL MAT
    "#D2D3CE", //RAL MAT
    "#5B3614", //RAL MAT
    "#978E65", //
    porta_pic
  ];


  const [background, setBackground] = useState("#DADAD3");
  const [windowBackground, setWindowBackground] = useState("#8f9897");
  const [current, setCurrent] = useState("#CBB6C0");

  function windowClickHandler(windowColor) {
    setWindowBackground(windowColor);
    setCurrent(windowColor);

  }
  

  return (
    <div className="App" style={{ background: background }}>
    
      <h1 className="header_title">Συνδύασε τα χρώματα κουφωμάτων αλουμινίου με τον τοίχο σου!</h1><br />
      <p className="text">Δεν είσαι σίγουρος/η τι χρώματα κουφωμάτων να επιλέξεις για να ταιριάζουν με το χώρο σου;<br/><br/>
      Χρησιμοποίησε την εφαρμογή και συνδύασε το χρώμα των κουφωμάτων με τον τοίχο σου για να πετύχεις την καλύτερη χρωματική αρμονία και το χρωματικό στυλ που σου ταιριάζει!<br/><br /> 
      Τα κουφώματα αλουμινίου και PVC μπορούν να βαφτούν σε πολλές <a href ="https://www.unionprofile.gr/xromatologio-koufomaton">αποχρώσεις RAL</a>. Συνεπώς μπορούν να συνδυαστούν εύκολα με οποιοδήποτε χρώμα και το ύφος του χώρου σας και να αντικατοπτρίζουν τη δική σας μοναδική αισθητική!</p>
      <img className="window_pic" style={{background: windowBackground}}src={window_pic} alt="window"/>
      <p className="color_code">Window color code: {current}</p>
        
      <div className="titles">
        <h2 className="title">Χρώμα Τοίχου</h2>
        <h2 className="title">Χρώμα Παραθύρου</h2>
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