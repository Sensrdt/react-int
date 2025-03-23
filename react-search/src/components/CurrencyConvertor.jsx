import React, { useEffect, useState } from 'react'

export default function CurrencyConvertor() {
    const [currency, setCurrency] = useState(0);

    const currencyExchangeList = {
        // USD: {
        //     EUR: 0.85,
        //     GBP: 0.75,
        //     INR: 82.5,
        // },
        // EUR: {
        //     USD: 1.18,
        //     GBP: 0.88,
        //     INR: 97.1,
        // },
        // GBP: {
        //     USD: 1.33,
        //     EUR: 1.14,
        //     INR: 110.5,
        // },
        // INR: {
            USD: 0.012,
            EUR: 0.0103,
            GBP: 0.009,
        // },
    };

    useEffect(() => {
        console.log(currency)
    }, [currency])

    const convertCurrency = (convertionRate) => {
        console.log(convertionRate);
        let convertedValue = currency * convertionRate;
        return convertedValue.toFixed(2);
    }

    return (
        <>
        <div>CurrencyConvertor</div>
        <div>
            <h3>Input in INR: </h3>
            <input type="number" value={currency} onChange={(e) => setCurrency(e.target.value)}/>
        </div>
        {/* List 
            Currency <> Converted Value
        */}
        {
            Object.keys(currencyExchangeList).map((val) => {
                return (
                    <li>
                        {val} - {convertCurrency(currencyExchangeList[val])}
                    </li>
                )
            })
        }
        <ul>

        </ul>
        </>
    )
}
