import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [currenState, setCurrentState] = useState("red")
  const [trafficController, setTrafficController] = useState([
    {
      color: "red",
      duration: 10,
      next: "yellow"
    },
    {
      color: "yellow",
      duration: 3,
      next: "green"
    },
    {
      color: "green",
      duration: 15,
      next: "red"
    }
  ])
  const [remainingTime, setRemainingTime] = useState(trafficController[0].duration)
  const [updateTime, setUpdateTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prev => prev-1);
      if (remainingTime === 0) {
        const currentState = trafficController.find(state => state.color == currenState)
        const nextState = trafficController.find(state => state.color == currentState.next)
        setCurrentState(nextState.color)
        setRemainingTime(nextState.duration)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [currenState, remainingTime, trafficController])

  const handleClick = (color) => {
    setCurrentState(color)
    const currentState = trafficController.find(state => state.color == color)
    setRemainingTime(currentState.duration)
  }

  const handleInputChange = (value) => {
    setUpdateTime(parseInt(value))
  }

  useEffect(() => {

    const listenToKeyPress = (e) => {
      if (e.key == "Enter") {
        console.log("after enter", updateTime, typeof updateTime)
        setRemainingTime(prev => {
          return prev + updateTime
        })
      }
    }

    window.addEventListener("keydown", listenToKeyPress)

    return () =>{
      window.removeEventListener("keydown", listenToKeyPress)
    }
  }, [updateTime])

  return (
    <div>
      <button onClick={() => handleClick("red")}>Red</button>
      <button onClick={() => handleClick("yellow")}>Yellow</button>
      <button onClick={() => handleClick("green")}>Green</button>
      <input type="number" placeholder='enter time value' onChange={(e) => handleInputChange(e.target.value)} />
    <div style={{backgroundColor: "white", width: "500px", height: "500px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h1 style={{color: "black"}}>Traffic Signal</h1>
      <div style={{marginBottom: "5px", width:"100px", height:"100px", backgroundColor: "red", 
       opacity: currenState == "red" ? 1 : 0.3, borderRadius: "50px"}}>
        { currenState == "red" ?remainingTime : ""}
      </div>
      <div style={{marginBottom: "5px", width:"100px", height:"100px", backgroundColor: "yellow",
        opacity: currenState == "yellow" ? 1 : 0.3, borderRadius: "50px", color: "black"}}>
          { currenState == "yellow" ?remainingTime : ""}
        </div>
      <div style={{marginBottom: "5px", width:"100px", height:"100px", backgroundColor: "green", 
        opacity: currenState == "green" ? 1 : 0.3, borderRadius: "50px"}}>
          { currenState == "green" ?remainingTime : ""}
        </div>
      
    </div>
    </div>
  )
}

export default App
