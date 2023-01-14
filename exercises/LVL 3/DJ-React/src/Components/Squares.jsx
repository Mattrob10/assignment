import React from "react";

export default function Squares(props){
    return(
      <div className="squares" style={{backgroundColor: props.color}} onClick={props.handleClick}>
      </div>
    )
}