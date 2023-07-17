import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
        className='home__image' 
        src='https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'
        />
        <div className='home__row'>
          <Product 
          id="125431"
          title='JSAUX Electronic Cable' 
          image='https://m.media-amazon.com/images/I/51qyCCU51oL._AC_UF226,226_FMjpg_.jpg' 
          price={19.99} 
          rating={4}
          />
          <Product 
          id="125432"
          title='APPS2Car Phone Car Mount' 
          image='https://m.media-amazon.com/images/I/41bJk4-2t-L._AC_UF226,226_FMjpg_.jpg' 
          price={19.99} 
          rating={5}
          />
        </div>
        <div className='home__row'>
        <Product 
          id="125433"
          title='Fire TV Accessories' 
          image='https://m.media-amazon.com/images/I/41hoqFxB+iL._AC_UF226,226_FMjpg_.jpg' 
          price={19.99} 
          rating={4}
          />
          <Product 
          id="125434"
          title='Samsung OLED TV' 
          image='https://m.media-amazon.com/images/I/41afShxNi9L._AC_UF226,226_FMjpg_.jpg' 
          price={19.99} 
          rating={4}
          />
          <Product 
          id="125435"
          title='Fitbit Fitness' 
          image='https://m.media-amazon.com/images/I/31Y69fvIGhL._AC_UF226,226_FMjpg_.jpg' 
          price={19.99} 
          rating={4}
          />
        </div>
        <div className='home__row'>
        <Product 
          id="125436"
          title='Breville appliances' 
          image='https://m.media-amazon.com/images/I/410XSxm6lXL._AC_UF226,226_FMjpg_.jpg' 
          price={19.99} 
          rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home