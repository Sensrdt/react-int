import React, { useEffect, useState } from 'react'

export default function Checkboxes({values, updateCheckboxes}) {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(values.isChecked)
    }, [values])

    const handleOnChange = () => {
        const newChecked = !checked;
        setChecked(newChecked)

        updateCheckboxes(newChecked, values.name, values.children || [])
    }

    return (
        <div style={{paddingLeft: "20px"}}>
            <input type='checkbox' name={values.name} checked={checked} onChange={() => handleOnChange()} /> {values.name}
            {
                values.children ? 
                values.children.map((val, index) => {
                    return <Checkboxes values={val} key={index} updateCheckboxes={updateCheckboxes}/>
                }) :
                <></>
            }
        </div>
    )
}
