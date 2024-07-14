import './App.css';
import React, { useState } from 'react'
import Deck from './components/Deck'


function App() {

  const [deck, setDeck] = useState([])
  const [suitPiles, setSuitPiles] = useState([])
  const [tablePiles, setTablePiles] = useState([])

  const orderedDeck = Deck()

  const shuffleDeck = (_deck) => {
    const indices = []
    const newDeck = []
    for (let i = 0; i < 52; i++){
      indices.push(i)
    }
    while(indices.length > 0){
      const random = Math.floor(Math.random()*indices.length)
      const index = indices[random]
      indices.splice(random, 1)
      newDeck.push(_deck[index])
    }
    return newDeck
  }

  setDeck(shuffleDeck(orderedDeck)) //sets the deck state to be a new shuffled deck 

  return (
    <div className="App">
      <h1>Solitaire</h1>
    </div>
  );
}

export default App;
