import React, {useState} from 'react'
import Nav from './Header'
import Squares from "./Components/Squares"
import Header from './Header'

function App() {


const [squareColor, setSquareColor] = React.useState(["black", "black", "black", "black"])

function smallTimeDJ(){
  // setSquareColor(prevColors => ["white", "white", "white", "white"])
  setSquareColor(prevColors => prevColors.map(each => each === "black" ? "crimson" : "black" ))

}

function partyDJ() {
  setSquareColor(prevColors => [prevColors, prevColors, "purple", "purple"])
}

function ProDJ() {
  setSquareColor(prevColors => [...prevColors.slice(0, 2).map(each => each === "purple" ? "black" : "purple"), ...prevColors.slice(2, 4)])
}

function ProDJ(){
  setSquareColor(prevColors => prevColors.map(each => each === "white" ? "crimson" : "white" ))
}

function bigTimeDJ() {
  setSquareColor(prevColors => ["white", "red", "blue", "black"])
}

  return (
    <div className="App">
      <Header />
      <div className="container">
        
        <Squares color={squareColor[0]} />
        <Squares color={squareColor[1]} />
        <Squares color={squareColor[2]} />
        <Squares color={squareColor[3]} />
      </div>
    <div className='btn-wrapper'>
    <div className="button" onClick={smallTimeDJ}>Small Time DJ</div>
    <div className="button" onClick={partyDJ}>Party DJ</div>
    <div className="button" onClick={ProDJ}>Professional DJ</div>
    <div className="button" onClick={bigTimeDJ}>Big Time DJ</div>
    {/* <div className="button" onClick={masterDJ}>One of the Greats</div> */}
    </div>
    </div>
  )
}

export default App
