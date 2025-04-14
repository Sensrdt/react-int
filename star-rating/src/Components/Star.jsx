import React from 'react';
import './Star.css'
import { useState } from 'react';
export default function Star({count = 6}) {
    const [starCount, setStarCount] = useState(new Array(count).fill(0))
    const [markedValues, setMarkedValues] = useState(-1)
    const [trackMouseEnter, setTrackMouseEnter] = useState(-1)
    console.log(starCount)

    const handleClick = (index) => {
        console.log(index)
        setMarkedValues(index)
    }
    const handleMouseEnter = (index) => {
        setTrackMouseEnter(index)
    }

  return (
    <div>
    {
        starCount.map((_, index) => {

            const markedStar = index <= markedValues ? 'marked-star' : '';
            const trackMouseEnterStar = index <= trackMouseEnter ? 'track-star' : '';

            return <span onMouseLeave={()=> setTrackMouseEnter(-1)} onMouseEnter={() => handleMouseEnter(index)} onClick={() => handleClick(index)} key={index} className={`hollow-star ${markedStar} ${trackMouseEnterStar}`}>☆</span>
        })
    }
    </div>
  );
}
