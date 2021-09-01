import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BsClockFill } from "react-icons/bs";

let name ="Pranjal";

let greeting ="";

const hr= new Date().getHours();
const min= new Date().getMinutes();    
const dt= new Date().toLocaleDateString();



if(hr>=4 && hr<12) {
  greeting = "Morning";
}

else if(hr>=12 && hr<16) {
  greeting ="Afternoon";
}

else if(hr>=16 && hr<20) {
  greeting="Evening";
}

else {
  greeting ="Night";
}

ReactDOM.render(
  <div className="img">
    <h2> Good {greeting} {name}. </h2>
    <br></br>
    <div className="time-wrap">
    {hr}:{min}
    <br/>
    <BsClockFill/>
    </div>
    
    <h3 > {dt} </h3>
  </div>,
 document.getElementById('root')
);

