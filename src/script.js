import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity.",
    author: "Albert Einstein"
  },
  { text: "So many books, so little time.", author: "Frank Zappa" }
];

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="center" id="quote-box">
      <p id="text">"{quote.text}"</p>
      <p id="author">- {quote.author}</p>
      <div>
        <button id="new-quote" onClick={getRandomQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
