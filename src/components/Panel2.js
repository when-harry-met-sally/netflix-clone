import React from "react";
import "./Panel2.css";
import sample1 from "../assets/sample1.jpg";
function Panel2() {
  return (
    <div className="container">
      <div className="row flex">
        <div className="col s5 panel-text2 z-depth-1"><div className='panel-col2' panel-col2></div></div>
         
        <div className="col s7 panel-col2"><img className='z-depth-1 panel-col2 ' src={sample1}/></div>
        
      </div>
    </div>
  );
}

export default Panel2;
