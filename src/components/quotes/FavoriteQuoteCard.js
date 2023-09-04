import React from "react";


const FavoriteQuoteCard = ({ quote }) => {

    return (
        <li className="quote-card">
            <span className="close-quote">X</span>
            <h3>{quote.text}</h3>
            <p>{quote.author}</p>
        </li>
    )

}

export default FavoriteQuoteCard