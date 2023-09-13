import React from "react";


const FavoriteQuoteCard = ({ quote, removeFromFavorites, listPosition }) => {

    return (
        <li className="quote-card" data-list-position={listPosition}>
            <span onClick={() => removeFromFavorites(quote.id)} className="close-quote">X</span>
            <h3>{quote.text}</h3>
            <p>{quote.author}</p>
        </li>
    )

}

export default FavoriteQuoteCard