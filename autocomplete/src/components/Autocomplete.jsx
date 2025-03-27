import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions';

export default function Autocomplete() {
    const [input, setInput] = useState('');
    const [apiResult, setApiResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cache, setCache] = useState({});

    const handleOnChange = (e) => {
        setInput(e.target.value)
        if (e.target.value.length < 1) {
            setApiResult([]);
            return;
        }
    }

    const fetchData = async () => {
        if (input.length < 1) {
            return;
        }
        setLoading(true);
        if (cache[input]) {
            setApiResult(cache[input]);
            setLoading(false);
            return;
        }
        try {
            let result;
            console.log(input)
            let response = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
            result = await response.json();
            setCache({
                ...cache,
                [input]: result.recipes
            })
            setApiResult(result.recipes);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        let timer = setTimeout(() => {fetchData()}, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [input])

  return (
    <div>
        <input style={{height: "50px", width: "100%", fontSize: "20px"}} placeholder='Enter value to search' value={input} onChange={(e) => handleOnChange(e)} />
        {
            loading ? <p>Loading...</p> : <Suggestions listOfItems={apiResult} searchItem={input}/>
        }
    </div>
  )
}
