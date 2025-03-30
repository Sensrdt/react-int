import React, { useEffect } from 'react'
import './Carousel.css'

export default function Carousel({images}) {
    const [currentImage, setCurrentImage] = React.useState(0)

    useEffect(() => {
        const changeImageTimeout = setTimeout(() => {
            setCurrentImage(prev => prev === images.length - 1? 0 : prev + 1)
        }, 2000)

        return () => {
            clearInterval(changeImageTimeout)
        }
    }, [currentImage])

  return (
    <div style={{position: "relative"}}>
        <div style={{display: "flex", alignItems: "center"}}>
            <button style={{ position:"abosulte", marginRight: '10px'}} onClick={() => setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)}>Previous</button>

            <img style={{width: "350px", height: "350px"}} src={images[currentImage]} alt="carousel" className="fade-in" />
            
            <button style={{ marginLeft: '10px'}} onClick={() => setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)}>Next</button>
        </div>
        <div style={{
                position: "absolute", 
                bottom: "10px",
                left: "50%", 
                transform: "translateX(-50%)", 
                display: "flex", 
                gap: "8px", 
                padding: "5px 10px", 
                borderRadius: "20px",
                width: "200px",
                zIndex: 2 
            }}>
            {
                images.map((_, index) => (
                  <button style={{backgroundColor: "white", marginRight: "10px"}} key={index} onClick={() => setCurrentImage(index)}></button>
                ))
            }
        </div>
    </div>
  )
}
