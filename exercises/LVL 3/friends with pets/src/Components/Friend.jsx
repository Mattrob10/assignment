import React from "react";
import Pet from './Pet'

export default function Friend(props){

    const pets = props.friend.pets.map(pet =>{
      return (
        <Pet
            pet = {pet}
        />
      )
    })

  return(
      <div className="card-container">
          <h2 className="owner">Meet {props.friend.name} who is {props.friend.age} Years old and their Animal friends are:</h2>
          
          <ul className="pet-list">
            <li>{pets}</li>
          </ul>
      </div>
  )
}