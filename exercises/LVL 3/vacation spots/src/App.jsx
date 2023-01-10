import './App.css'
import Nav from './Components/Nav'
import Card from './Components/Card'
import data from './data'


function App() {
  const cards = data.map(card => {
    return (
      <Card
          key={card.id}
              card={card}
          />
    )
  })


  return (
    <div className="App">
      <Nav />
      <div className='card'>
        {cards}
      </div>
        
    </div>
  )
}

export default App
