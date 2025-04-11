import { useState } from 'react'
import './App.css'

const ITEM_HEIGHT = 40
const BUFFER = 5
const THRESHOLD = 100

function LoadListUsingScroll() {
  const [data, setData] = useState([...Array(20)])
  const [loading, setLoading] = useState(false)


  const handleScroll = (e) => {
    const scrollTop  = e.target.scrollTop
    const clientHeigtht  = e.target.clientHeight
    const scrollHeight  = e.target.scrollHeight

    console.log(scrollTop, scrollHeight, clientHeigtht)

    let remainingScroll = scrollHeight - (scrollTop + clientHeigtht);

    if (remainingScroll < THRESHOLD) {
      loadMore()
    }

  }

  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setData((prev) => {
        return [...prev, new Array(10)]
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="scroll-list" onScroll={(e) => handleScroll(e)}>
      {
        data.map((val, idx) => {
          return <span className='list-elements' key={idx} >Item : {idx}</span>
        })
      }
      {loading && <div style={{color: "#000"}}>Loading...</div>}
    </div>
  )
}

export default LoadListUsingScroll
