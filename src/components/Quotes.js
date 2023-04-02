import React from "react"

export default function Quotes(props) {

  return (
    <>
      <p id='text' className='quote-box__text'>
        "{props.quote.quote}"
      </p>
      <p id='author' className='quote-box__author'>
        ــــ {props.quote.author}
      </p>
    </>
  )
}