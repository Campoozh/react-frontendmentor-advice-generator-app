import React, { useEffect, useState } from 'react';
import './App.css';
import icon_dice from '../public/assets/icon-dice.svg'

function App() {
  let [advice, setAdvice] = useState([])

  useEffect(() => {
    getAdvice()
  }, [])

  async function getAdvice()  {
    return await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
      setAdvice(Array(data))
    }) 
  }
  
  return (
    <div className="container">
      <div className='card'>
        <div className='card-inner'>
      {
        advice.map((item, index) => {  
            return (
              <React.Fragment key={index}>
                <div className='advice__number'>
                  <p>advice #{item.slip.id}</p>
                </div>
                <div className='advice_text'>
                  <p>"{item.slip.advice}"</p>
                </div>
                <div className='advice_break'>
                  <hr/>
                  <div className='simbol'>
                    <div className='simbol_bar-a'></div>
                    <div className='simbol_bar-b'></div>
                  </div>
                  <hr/>
                </div>
              </React.Fragment>
            )
          })
        }
        </div>
        <div className='button'>
          <button onClick={() => getAdvice()}><img src={icon_dice} alt={icon_dice}/></button>
        </div>
      </div>  
    </div>
  )
}

export default App