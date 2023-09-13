import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";


const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {

    const remainingQuotes = maxFaves - favoriteQuotes.length
    // remember using variables for better readability and to be more concise

    return (

        <section className="favorite-quotes">
            <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length > 0 && <ul>{favoriteQuotes.map((quote, index) => <FavoriteQuoteCard quote={quote} listPosition={index+1}
                removeFromFavorites={removeFromFavorites} key={quote.id} />)}</ul>}
                {/* could also just use zero instead of greater or equal to one */}
                { favoriteQuotes.length < maxFaves && (
                    //ask about maxFaves jquery entries (maxfaves < 3)... why didn't this work? also remember how you can return like this
                     <div className="favorite-quotes-description">
                      <p>You can add {remainingQuotes} more {remainingQuotes === 1 ? "quote" : "quotes"} to your top three favorites by selecting from the options below</p> 
                      {/* remember you can directly insert syntax conditionals without if/else for tenerary operators in react */}
                        <p>Once you choose, they'll appear here.</p>
                </div>
                )}
               
            </div>
        </section>


    )


}

export default FavoriteQuotes;