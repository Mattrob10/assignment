import React from "react";

export default function Card(props){


    const price = props.card.price
    let cost 
      if(price < 500){
          cost = "$"
      } else if ( price > 500 && price < 1000){
        cost = "$$"
      } else {
        cost = "$$$"
      }
    
        const seasons = props.card.timeToGo
    let color

    switch (seasons) {
        case "🌼 Spring":
            color = "#D0F682"
            break;
        case "☃️ Winter":
            color = "#73D7F0"
            break;
        case "☀️ Summer":
            color = "#F6F8A8 "
            break;
        case "🍁 Fall":
            color = "#F69F0E"
            break;
    }

  return(
    <div className="card">
      <div className="cards"style={{backgroundColor: color}}>
        <div className="image">
        <img src={props.card.imageUrl} alt="" className="imgUrl"/>
        </div>
        <div className="card-text">
        <div className="place"><i class="fa-solid fa-location-dot" id="marker"></i>{props.card.place}</div>
        <div className="price"><span className="cost">Average Price: {cost}{props.card.price}</span></div>
        <div className="timeToGo">Season: {props.card.timeToGo}</div>
        </div>
      </div>
    </div>
  )
}