import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState(
      {firstName: "", lastName: ""}
  )
  const [names, setNames] = React.useState([])

  function handleChange(event) {
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [event.target.name]: event.target.value
          }
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNames(prevNames =>{
      return[
        ...prevNames,
        formData
      ]
    })
}

const namesLists = names.map((name, i) =>{
  return(
    <h1 key = {i}>{name.firstName} {name.lastName}</h1>
  )
})
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
          />
        <br/>
      <button>Submit</button>
      </form>
    {namesLists}
    </div>
  )
}