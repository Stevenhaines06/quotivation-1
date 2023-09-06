import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes.js";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes.js";
import { Loader } from "react-feather";
import "./App.css";

function App() {

  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState("All")
  const [favoriteQuotes, setFavoriteQuotes] = useState([])

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";

  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];
  const maxFaves = 3;

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(quotesUrl);
      const results = await response.json();
      setQuotes(results);
    }
    catch (e) {
      console.log("There was an error", e)
      setLoading(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const filteredQuotes = category === "All" ? quotes : quotes.filter(quote => quote.categories.includes(category));

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find(quote => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find((favorite) => favorite.id === selectedQuote.id);
    if (alreadyFavorite) {
      console.log("You've already favourited this quote");
    }
    // remember you can iterate through a new array's items without have pre-defined iterations (how favorite and favorite.id haven't been labelled yet)
    else if (favoriteQuotes.length < maxFaves) {
      setFavoriteQuotes([...favoriteQuotes, selectedQuote]);
      console.log("Added to favorites!");
      console.log(favoriteQuotes)
    } else {
      console.log("Max reached, delete one fav to add another!");
    }
  }

    const removeFromFavorites = (quoteId) => {
      const updatedFavorites = (quote) => favoriteQuotes.filter((quote) => quote.id !== quoteId);
      setFavoriteQuotes(updatedFavorites);
      //if it seems like multiple uses of one element...consider how/what is being used and what is necessary, especially if it is a necessary property like quote.id
    }


  // console.log(quotes);
  return (

    <div className='App'>
      <Header />
      <main>
      <FavoriteQuotes favoriteQuotes={favoriteQuotes} removeFromFavorites={removeFromFavorites} maxFaves={maxFaves} />      
        {loading ? <Loader /> : <Quotes filteredQuotes={filteredQuotes} categories={categories} category={category} handleCategoryChange={handleCategoryChange} addToFavorites={addToFavorites} favoriteQuotes={favoriteQuotes} />}
      </main>
      <Footer />
    </div>
  );
}
export default App;
