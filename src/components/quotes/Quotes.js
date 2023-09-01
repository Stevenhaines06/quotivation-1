import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

const Quotes = ({ filteredQuotes, category, categories, handleCategoryChange }) => {

    return (
        <section className="all-quotes">

            <div className="quotes wrapper">
                <div className="category-header">
                    <p>Browse through your collection of quotes</p>
                    <CategoryForm categories={categories} category={category} handleCategoryChange={handleCategoryChange} />
                </div>

                {filteredQuotes.map((quote) => (<QuoteCard quote={quote} key={quote.id} />))}
            </div>

            {/* reminder of mistake - remember to ask about mapping over and using { instead of ( for the return )} */}
        </section>
    )


}

export default Quotes;