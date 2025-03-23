import React, {useState, useEffect} from 'react';
import { items } from '../items';

export const SearchAndFind = () => {
const [searchText, setSearchText] = useState("");
  const [internalItems, _] = useState(items);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  const filteredItems = internalItems.filter(val => val.name.toLowerCase().includes(searchText.toLowerCase()))

  useEffect(() => {
    console.log(items)
  }, [])

  return (
      <div>
        <input type="text" value={searchText} onChange={(e) => handleChange(e)}/>
        {
          filteredItems.map((val, key) => {
            return (
              <li key={key}>
                {val.name} : {val.email}
              </li>
            )
          })
        }
      </div>
  )
}