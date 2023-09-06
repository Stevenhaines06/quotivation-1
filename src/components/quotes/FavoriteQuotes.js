import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";


const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {

    return (

        <section className="favorite-quotes">
            <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length > 0 && <ul>{favoriteQuotes.map(quote => <FavoriteQuoteCard quote={quote} removeFromFavorites={removeFromFavorites} key={quote.id} />)}</ul>}
                {/* could also just use zero instead of greater or equal to one */}
            </div>
        </section>


    )


}

export default FavoriteQuotes;