import React from 'react'

const Card = (val, suit) => {
    const url = '/cards/card' + suit + val + ".png"
    const alt = suit + ' ' + val
    return (
        <div>
            <img src = {url} alt = {alt}/>
        </div>
    )
}

export default Card