import React from "react";
import "./Matches.css";

const Matches = props => (
  
<span onClick={() => props.clickToMatch(props.id)}>
  <div className="match btn">
    <div className="img-container">
      <img id={props.id}alt={""} src={props.image} />
    </div>  
  </div>  
</span>

  
);

export default Matches;