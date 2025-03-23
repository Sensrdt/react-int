import React, { useContext, useState } from 'react'
import { CatelougeContext } from '../context/Catelouge';

export default function Pagination() {
    const {page, setPage, totalItemCount, _} = useContext(CatelougeContext);
    const pagerSize = [...Array(Math.ceil(totalItemCount/10)).keys()];
    const handlePaginationUpdate = (val) => {
        setPage(val);
    }
  return (
    <div style={{marginBottom: "5px"}}>
        {
            pagerSize.map((val) => {
               return (
                    <span onClick={() => handlePaginationUpdate(val)} style={{padding: "2px", cursor: "pointer", border: "solid", borderColor: "white", margin: "2px"}}>{val}</span>
                )
            })
        }
    </div>
  )
}
