import Card from './Card'
import React from 'react'


const Deck = () => {
    const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const deck = []
    for (let suit of suits){
        for (let value of values) {
            deck.push(Card(value, suit))
        }
    }
    return deck
}

export default Deck