import React, { useContext, useEffect, useState } from 'react'
import { CatelougeContext } from '../context/Catelouge';

export default function CatelougeList() {
    const PAGE_SIZE = 10;
    const [productValues, setProductValues] = useState([]);
    const [loading, setLoading] = useState(false);
    const {page, setPage, _, setTotalItemCount} = useContext(CatelougeContext);

    let start = page * PAGE_SIZE;
    //
    let end = start + PAGE_SIZE;

    useEffect(() => {
        setLoading(true)
        fetch("https://dummyjson.com/products?limit=200")
        .then(val => {
            return val.json();
        }).then((response) => {
            console.log(response);
            setProductValues(response.products)
            setTotalItemCount(response.products.length)
        }).finally(() => {
            setLoading(false);
        })
    }, [])
  return (
        loading ? <h1>Loading!!!</h1> : (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                productValues.slice(start, end).map((val) => {
                    return (
                        <div style={{borderStyle: "solid", borderColor: "white", margin: "2px", padding:"5px"}}>
                            <img style={{width: "100px", height: "100px"}} key={val.id} src={val?.images[0]} />
                            <p>{val.title}</p>
                        </div>
                    )
                })
            }
        </div>
        )
  )
}
