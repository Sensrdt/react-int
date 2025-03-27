import React from 'react';
import './Suggestions.css';
import { useEffect } from 'react';
import './Suggestions.css';
import { useRef } from 'react';

export default function Suggestions({ listOfItems, searchItem }) {

  const [selectedItem, setSelectedItem] = React.useState(-1);
  const itemRef = useRef([]);

  const highlightText = (text, highlight) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        setSelectedItem((prev) => {
          const newIndex = prev < listOfItems.length - 1 ? prev + 1 : prev
          handleScroll(newIndex)
          return newIndex;
        });
      }

      if (event.key === 'ArrowUp') {
        setSelectedItem((prev) => {
          const newIndex = prev > 0  ? prev - 1 : prev
          handleScroll(newIndex)
          return newIndex;
        });
      }

      if (event.key === 'Enter') {
        console.log(listOfItems[selectedItem])
      }

    }

    const handleScroll = (idx) => {
      if (itemRef.current[idx]) {
        itemRef.current[idx].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start"
        })
      }

    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }

  })


  if (listOfItems.length === 0) {
    return <></>
  }

  return (
    <React.Fragment>
        <div className='list'>
            {listOfItems.map((item, idx) => (
                <div ref={(e) => (itemRef.current[idx] = e)} className={ `itemList ${selectedItem == idx ? "key_highlight" : ""}`} key={item.id}>
                  <p>{highlightText(item.name, searchItem)}</p>
                </div>
            ))}
        </div>
    </React.Fragment>
  );
}
