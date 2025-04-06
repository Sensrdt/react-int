import './App.css'
import {useEffect, useState} from 'react'
import  data  from './data.js';

function App() {
  const [gameArr, setGameArr] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [answered, setAnswered] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  useEffect(() => {
    let country = Object.keys(data)
    let capital = Object.keys(data).map(val => {
      return data[val];
    })
    let tempArr = [...capital, ...country]
    shuffle(tempArr)
    setGameArr(tempArr)
  }, [])

  const handleClick = (newValue) => {
    if (selectedOption.includes(newValue)) return;
    const newSelection = selectedOption.concat(newValue);
    if (newSelection.length == 2) {
      const [first, second] = newSelection;
      if (data[first] == second || data[second] == first) {
        setCorrectAnswer(newSelection)
        setTimeout(() => {
          setAnswered(prev => prev.concat(newSelection));
          setCorrectAnswer([])
          setSelectedOption([]);
        }, 1500)
      } else {
        setSelectedOption(newSelection)
        setTimeout(() => {
          setSelectedOption([]);
        }, 1500)
      }
    } else {
      setSelectedOption(newSelection);
    }
  }

  useEffect(() => {
    console.log("setAnswered", setAnswered)
  }, [setAnswered])

  if (answered.length == gameArr.length) {
    return <div>
      <h1>Congratulations!</h1>
    </div>
  } else {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      {
        gameArr.map((val, idx) => {
          if (answered.includes(val) ){
            return;
          }
          const isSelected = selectedOption.includes(val)
          const isCorrect = correctAnswer.includes(val) 
          const isIncorrect = selectedOption.length == 2 && isSelected;
          return <button 
            key={idx} 
            className={`button ${isSelected ? 'selected' : ''} ${isIncorrect ? 'wrong' : ''} ${isCorrect ? 'correct' : ''}`}
            onClick={() => handleClick(val)}> 
                {val}
            </button>
        })
      }
    </div>
  )
}
}

export default App
