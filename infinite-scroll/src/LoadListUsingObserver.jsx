import React, { useEffect, useRef, useState } from 'react'

export default function LoadListUsingObserver() {
    const [data, setData] = useState([...new Array(15)])
    const [loading, setLoading] = useState(false)
    const listRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                loadMore()
            }
        })
        const lastElement = listRef.current[listRef.current.length - 1]
        observer.observe(lastElement)

        return ()=> {
            observer.unobserve(lastElement)
        }
    }, [data])


    const loadMore = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setData(prev => [...prev, ...new Array(10)])
        }, 2000)
    }

  return (
    <div className="scroll-list">
        {
            data.map((val, idx) => {
                return <span ref={(e) => listRef.current[idx] = e} className='list-elements' key={idx}>
                    Item: {idx}
                </span>
            })
        }
        {loading && <div style={{color: 'black'}}>Loading....</div>}
    </div>
  )
}
