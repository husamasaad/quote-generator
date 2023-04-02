import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'



export default function Buttons(props) {

  const copy = (e) => {
    navigator.clipboard.writeText(props.quote.quote)
    showSnackBar()

  }

  return (

    <div className='quote-btns'>
    <div>

      <a
        href={`https://twitter.com/intent/tweet?text=${props.quote.quote} -${props.quote.author}`}
        id='tweet-quote' 
        className='quote-btns__btn'
        target='_blank' rel="noreferrer"
      >
      <FontAwesomeIcon icon={faTwitter} />
      </a>

      <span
        id='copy-quote'
        className='quote-btns__btn'
        onClick={copy}
      >
      <span id="snackbar">Quote text is Copied</span>

      <FontAwesomeIcon icon={faCopy} style={{"--fa-primary-color": "#5372ef", "--fa-secondary-color": "#7e97c4",}} />
      </span>
    </div>

    <button className='quote-btns__new' id='new-quote' onClick={() => props.newQuote()}>New Quote</button>
  </div>    
  )
}


function showSnackBar() {
  var sb = document.getElementById("snackbar");

  sb.className = "show";

  setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}