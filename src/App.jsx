// Libraries
import { useEffect, useRef, useState } from 'react'
import {useQuery, useMutation } from '@tanstack/react-query'
import { gsap } from 'gsap'


// Utilities
import { getQuotes } from './api/quotes'
import { getRandomNumber } from "./utils/helper"

// Components
import Card from './components/Card'

// Style sheets
import './App.css'



function App() {
 
  // ---------------- UseQuery Hook--------------------------------
  const quotesQuery = useQuery(
    {
      queryKey: ['quotes'],
      queryFn: () => getQuotes(getRandomNumber()),
    }
  )

  // Check if the quotesQuery has returned
  if(quotesQuery.isLoading)
  {
    return <h1>Loading...</h1>
  }
  if(quotesQuery.isError)
  {
    return <pre>{JSON.stringify(quotesQuery.error)}</pre>
  }

  // ---------------- UseEffect Hook--------------------------------
  




  //--------------------Event Handlers----------------------------
  const scaleUp = ({currentTarget}) => {
    // console.log("Scale up")
    gsap.to(currentTarget, {scale: 1.1, duration: 0.1} )
  }

  const scaleDown = ({currentTarget}) => {
    // console.log("Scale Down")
    gsap.to(currentTarget, {scale: 1.0, duration: 0.1})
  }

  const getNewQuotes = () => {
    quotesQuery.refetch()
  }

  //--------------------UseRef Hook----------------------------
  //const cardContainerRef = useRef();

  

  //--------------------Render Component----------------------------
  return (
    <div className='container'>

      <h1>Quotes</h1>
      
      <div className='card-container' >
        {quotesQuery.data.map( (quote, index) => {
            return <Card
                      key={index} 
                      id={index} 
                      author={quote.name} 
                      quote={quote.quote} 
                      onMouseEnter={scaleUp} 
                      onMouseLeave={scaleDown}
                    />
          }
        )}
      </div>
      
      <button className='next-button' onClick={getNewQuotes}>Next</button>

    </div>
  )
}

export default App
