import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

const Quotes = ({ quotes, category, categories }) => {

    return (
        <section className="all-quotes">
            <div className="category-header">
                <p>Browse through your collection of quotes</p>
                <CategoryForm categories={categories} category={category} />
            </div>
            <div className="quotes wrapper">


                {quotes.map((quote) => (<QuoteCard quote={quote} key={quote.id} />))}
            </div>

            {/* reminder of mistake - remember to ask about mapping over and using { instead of ( for the return )} */}
        </section>
    )


}

export default Quotes;