import React from "react"

export default function Pet(props) {
    // console.log('props from pets', props)

    return (
            <div className="animal-wrapper">
                <img src={props.pet.imgUrl}
                 alt="" className="animal-image" />
                <div className="animal-info">
                    <h2 className="animal-name">{props.pet.name}</h2>
                    <h3 className="animal-breed">Breed: {props.pet.breed}</h3>
                    <p className="animal-about">{props.pet.about}</p>
                </div>
            </div>
    )
  }