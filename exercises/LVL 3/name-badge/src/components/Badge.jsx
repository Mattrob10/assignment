import React from "react";

export default function Badge(){
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      comments: ""
    })

  const [names, setNames] = React.useState([])
  const [errorMsg, setErrorMsg] = React.useState("")
  function handleChange(event) {
    setErrorMsg("")
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  function handleSubmit(event) {
    event.preventDefault()
    if(formData.firstName.length < 3)
        setErrorMsg("input must be a mininmum of 3 characters")
        else{
    console.log(formData)
    setNames(prevNames => ([
        ...prevNames,
        formData
      ]
    ))
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      comments: ""
    })
  }
}
const badgeLists = names.map((name, i) =>{
  return(
    <div className="badgeList" key={i}>
    <header className="badge-header">Badge: </header>
    <div className="leftItems">
    <p key = {i}>Name: {name.firstName} {name.lastName}</p>
    <p key={i}>Place of Birth: {name.birthPlace}</p>
    <p key={i}>Email: {name.email} </p>
    </div>
    <div className="rightItems">
    <p key={i}>Phone: {name.phone}</p>
    <p key={i}> Favorite food: {name.favFood}</p>
    </div>
    <textarea key={i} id="text">{name.comments}</textarea>
    </div>
  )
})
  return(
    <div className="badge-wrapper">
     <form className="form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <input 
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            required/>
        <input 
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            minLength="3"
            required/>  
        <input 
            type="email"
            placeholder="Matt@gmail.com"
            onChange={handleChange}
            name="email"
            value={formData.email}
            minLength="3"
            required/>  
        <input 
            type="text"
            placeholder="Place of Birth:"
            onChange={handleChange}
            name="birthPlace"
            value={formData.birthPlace}
            minLength="3"
            required/>  
        <input 
            type="tel"
            placeholder="Phone:"
            onChange={handleChange}
            name="phone"
            value={formData.phone}
            minLength="3"
            required/>
         <input
            type="text"
            placeholder="Favorite Food"
            onChange={handleChange}
            name="favFood"
            value={formData.favFood}
            minLength="3"
            required/>
         <br />
         </div>
         <textarea 
            type="comments"
            placeholder="Tell us about yourself!"
            onChange={handleChange}
            name="comments"
            maxLength={200}
            value={formData.comments}
          required/>
          {errorMsg ? <p>{errorMsg}</p>:null}
        <button id="btn">Submit</button>
     </form>
     <div className="badges">
     {badgeLists}
     </div>
    </div>
    
  )
}
