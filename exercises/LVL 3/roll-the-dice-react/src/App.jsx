import React from 'react'
import Header from './components/Header'
import Button from './components/Button'
import DiceBox from './components/Dicebox'
// import './assets/dice1.png'
import Footer from './components/Footer'



function App() {
  // const img1 = './assets/dice1.png'
  const [dice, setDice] = React.useState([1, 1, 1, 1, 1])

  const randomDice1 =Math.floor(Math.random() * 6 + 1)
  const randomDice2 =Math.floor(Math.random() * 6 + 1)
  const randomDice3 =Math.floor(Math.random() * 6 + 1)
  const randomDice4 =Math.floor(Math.random() * 6 + 1)
  const randomDice5 =Math.floor(Math.random() * 6 + 1)
  
  const diceElements = dice.map((dice, item) => {
    return (
      <DiceBox
          key={item}
          dice={dice}
      />
    )
  })

  function roll() {
    setDice([randomDice1, randomDice2, randomDice3, randomDice4, randomDice5])
  }  

  return (
    <div className="App">
      <Header />
      <div className='btn'>
        <Button onClick={roll} />
      </div>
      <div className='container'>
        {diceElements}
        </div>

      <Footer />
    </div>
  )
}

export default App
