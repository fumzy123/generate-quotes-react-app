import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './App.css'

import Card from './components/Card'

function App() {

  //--------------------State----------------------------
  const [quotes, setQuotes] = useState([])

  //--------------------Function----------------------------
  function getRandomNumber(){

    let pageNum =  Math.floor(Math.random() * 10)
    console.log(pageNum)
    return pageNum
  }

  //--------------------Constant Variables----------------------------
  // Define URL and options parameters for getting a list of Quote https://rapidapi.com/skjaldbaka17/api/quotel-quotes/
  const url = 'https://quotel-quotes.p.rapidapi.com/quotes/list'
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '2ad232f86cmsh099647682daab73p14bdd1jsn8bf84f30255e',
      'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
    },
    body: JSON.stringify({
      pageSize: 6,
      page: getRandomNumber()
    })
  }



  //--------------------API Function--------------------------------
  async function getQuotes(){
    
    try {
      const response = await fetch(url, options);
      const quoteList = await response.json();
      setQuotes(quoteList)

      console.log(quoteList);
    } catch (error) {
      console.error(error);
    }

  }

  //--------------------Use Effect----------------------------
  useEffect(() => {
    getQuotes();
  }, [])

  //--------------------Data Mapping----------------------------
  const quoteCards = quotes.map((quote, index) => {
    return (
      
      <Card key={index} id={index} author={quote.name} quote={quote.quote} onMouseEnter={scaleUp} onMouseLeave={scaleDown}/>
    )
  })

  //--------------------Event Handlers----------------------------
  function scaleUp({currentTarget}){
    // console.log("Scale up")
    gsap.to(currentTarget, {scale: 1.1} )
  }

  function scaleDown({currentTarget}){
    // console.log("Scale Down")
    gsap.to(currentTarget, {scale: 1.0})
  }

  //--------------------Render Component----------------------------
  return (
    <div className='container'>
      <h1>Quotes</h1>
      
      <div className='card-container'>
        {quoteCards}
      </div>

      <button className='next-button'>Next</button>

    </div>
  )
}

export default App
