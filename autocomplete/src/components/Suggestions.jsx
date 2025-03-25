import React from 'react';
import './Suggestions.css';

export default function Suggestions({ listOfItems, searchItem }) {

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

  if (listOfItems.length === 0) {
    return <></>
  }

  return (
    <div className='list'>
        {listOfItems.map((item) => (
            <div className='itemList' key={item.id}>
            <p>{highlightText(item.name, searchItem)}</p>
            </div>
        ))}
    </div>
  );
}
