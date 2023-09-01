import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm.js";

const Quotes = ({ filteredQuotes, category, categories, handleCategoryChange, addToFavorites }) => {

    return (
        <section className="all-quotes">

            <div className="quotes wrapper">
                <div className="category-header">
                    <h2 className="category-header">Pick Your Favorite Quotes Below</h2>
                    <p>Browse through your collection of quotes</p>
                    <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
                </div>

                {filteredQuotes.map((quote) => (<QuoteCard quote={quote} key={quote.id} addToFavorites={addToFavorites}/>))}
            </div>

            {/* reminder of mistake - remember to ask about mapping over and using { instead of ( for the return )} */}
        </section>
    )


}

export default Quotes;