import './App.css'
import { useRef } from 'react';

function App() {
  const otpLength = 5;
  const inputRef = useRef([])

  const handleInputOnChange = (e, idx) => {
    if (e.target.value.length === 1) {
      if (idx < otpLength - 1) {
        inputRef.current[idx + 1].focus()
      }
    }
    if (e.target.value.length === 0) {
      if (idx > 0) {
        inputRef.current[idx - 1].focus()
      }
    }
  }
  

  return (
    <div style={{display: "flex"}}>
      Enter OTP
      <div>
        {
          Array.from({length: otpLength}).map((_, idx) => {
            return <input ref={(e) => (inputRef.current[idx] = e)} onChange={(e) => handleInputOnChange(e, idx)} maxLength={1} key={idx} type="text" style={{width:"35px", margin: "5px", height: "40px", fontSize: "30px"}}/>
          })
        }
      </div>
    </div>
  )
}

export default App
