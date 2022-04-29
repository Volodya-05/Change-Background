import React, { useState }from "react";
import "./App.css";

const App = () => {
   const pur = "Black";
   const [bg, setBg] = useState(pur);

    const bkChange = () => {
    let newBg = "Red";
    setBg(newBg) 
    };

    const blChange = () => {
        let newBgn = "Blue";
        setBg(newBgn) 
        };
   
    const yeChange = () => {
        let newBgn = "Orange";
        setBg(newBgn) 
        };
        
    return (
      <div>
       <div className="back">
         <p>Background color -</p>
         <h1 style={{color: bg}}>{bg}</h1>
       </div>
          <div style={{backgroundColor: bg}}>
              <h2>React events(change background)</h2>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis quam iste eum dolores, nulla aliquid, ab enim natus, veritatis nesciunt voluptatibus suscipit animi est quisquam harum recusandae neque pariatur.</h5>

              <div className="but">
                <button onClick={bkChange} style ={{backgroundColor: "Red"}} >Red</button>
                <button onClick={blChange} style ={{backgroundColor: "blue"}} >BLUE</button>
                <button onClick={yeChange} style ={{backgroundColor: "Orange"}} >Orange</button>
              </div>
              
          </div>
      </div>
   )
}

export default App;