import React, { useState, useCallback } from 'react';

export default function Throttle() {
    const [input, setInput] = useState("");

    const throttle = (callback, delay) => {
        let lastCallTime = 0;
        return (...args) => {
            const now = Date.now();
            if (now - lastCallTime > delay) {
                lastCallTime = now;
                callback(...args);
            }
        };
    };

    const handleThrottle = useCallback(
        throttle((val) => console.log("fetching", val), 3000),
        []
    );

    const handleInputChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
        handleThrottle(e.target.value);
    };

    return (
        <div>
            <h2>Throttle</h2>
            <input type="text" value={input} onChange={handleInputChange} />
        </div>
    );
}
