import Reach from "react";
import QuoteCard from "./QuoteCard";

const Quotes = ( {quotes}) => {

    return (
        <section className="all-quotes">
            <div className="quotes wrapper">{quotes.map((quote) =>  (<QuoteCard quote={quote} key={quote.id}/>))}</div>

            {/* remember to ask about mapping over and using { instead of ( for the return )} */}
        </section>
    )


}

export default Quotes;