import React from 'react'

export default function Tasks({task}) {
  return (
    <div style={{padding: "15px", border: "1px solid black", marginBottom: "10px"}}>
        {task.title}
    </div>
  )
}
