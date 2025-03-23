import React, { useState, useCallback } from "react";

export default function Debounce() {
    const [value, setValue] = useState("");

    const debounce = (callback, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(...args);
            }, delay);
        };
    };

    const fetchSomething = (values) => {
        console.log("Fetching:", values);
    };

    const debouncedFetch = useCallback(debounce(fetchSomething, 1000), []);

    const handleOnChange = (e) => {
        setValue(e.target.value);
        debouncedFetch(e.target.value);
    };

    return (
        <div>
            <input type="text" value={value} onChange={handleOnChange} placeholder="Type something..." />
        </div>
    );
}
