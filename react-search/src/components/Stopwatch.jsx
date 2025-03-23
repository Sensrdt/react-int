import React, { useEffect, useState } from 'react'

export default function Stopwatch() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    // const [timeLeft, setTimeLeft] = useState(0);
    const [startTimer, setStartTimer] = useState(false);

    const handleStartTimer = () => {
        setTotalTime(hours * 60 * 60 + minutes * 60 + seconds)
        setStartTimer(true);
    }

    const handleStopTimer = () => {
        setTotalTime(hours * 60 * 60 + minutes * 60 + seconds)
        setStartTimer(false);
    }

    useEffect(() => {
        let timer;
        if (totalTime && startTimer) {
            timer = setInterval(() => {
                setTotalTime(prev => prev-1);
            }, 1000)
            console.log(totalTime)
        } else if (totalTime == 0) {
            console.log(totalTime)
            setStartTimer(false)
        }

        return ()=>{
            console.log("First this")
            clearInterval(timer)
        }
    }, [startTimer, totalTime])

    const formatTimer = (time) => {
        const hrs = Math.floor(time / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = time % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    
    return (
        <div className='stopwatch'>
            <h2>Stopwatch</h2>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '10px', alignItems: 'center' }}>
                <input type="number" placeholder='Enter hours'
                    value={hours} 
                    onChange={(e) => setHours(e.target.value)} 
                    />

                <input type="number" placeholder='Enter minutes' 
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)} 
                />

                <input type="number" placeholder='Enter seconds'
                    value={seconds} 
                    onChange={(e) => setSeconds(e.target.value)} 
                />

                <button onClick={() => handleStartTimer()}>
                    Start timer
                </button>

                <button onClick={() => handleStopTimer()}>
                    Stop timer
                </button>
            </div>
            <h3>Time Left: {formatTimer(totalTime)}</h3>
        </div>
    )
}
