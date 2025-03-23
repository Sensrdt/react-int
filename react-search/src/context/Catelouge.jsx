import React, { createContext, useEffect, useState } from 'react'

export const CatelougeContext = createContext(null);

export const CatelougeProvider = (props) => {
    const [page, setPage] = useState(0);
    const [totalItemCount, setTotalItemCount] = useState(100);
    useEffect(() => {
        console.log("log2", totalItemCount)
    }, [totalItemCount])
  return (
    <CatelougeContext.Provider value={{page, setPage, totalItemCount, setTotalItemCount}}>
        {props.children}
    </CatelougeContext.Provider>
  )
}
