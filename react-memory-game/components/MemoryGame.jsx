import React, { useState } from 'react'
import './MemoryGame.css'
const data = ["😎", "😈", "👽", "🤖", "🎃"];

export default function MemoryGame() {
    const [cards, setCards] = useState(prepareCards);
    const [start, setStart] = useState(false);


    function prepareCards() {
        const array = [...data, ...data];

        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
        }
        return array;
    }

  return (
    <div>
        <button> Start Game </button>
        <div className='memory-game'>
            {
                cards?.map((element, index) => {
                    return <div className='card' key={index}>  
                                <div className='front' key={index}>
                                    ?
                                </div>
                                <div className='back' key={index}>
                                    {element}
                                </div> 
                        </div>
                })
            }
        </div>
    </div>
  )
}
