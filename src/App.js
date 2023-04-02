import React, { useEffect, useState } from 'react'
import Quotes from './components/Quotes';
import Buttons from './components/Buttons';
import './App.scss';


const quoteURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {

  const [quotesArray, setQuotesArray] =  useState([]);

  const fetchQoutes = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setQuotesArray(data.quotes)
  }

  useEffect(() => {
    fetchQoutes(quoteURL)
  }, [])

  
  const [quote, setQuote] = useState({
    quote: 'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama'
  })

  const getRandom = () => {
    let random = Math.floor(Math.random() * quotesArray.length)
    setQuote(quotesArray[random])
  }

  return (
    <div className="App">
      <main className="App-content">
        <div id='quote-box' className='quote-box'>
          <h1 className='quote-box__title'>Random Quote</h1>
          <Quotes quote={quote} />
          <Buttons newQuote={getRandom} quote={quote}/>
        </div>
      </main>
    </div>
  );
}

export default App;
