import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' alt='' src='https://film-book.com/wp-content/uploads/2020/04/hanna-season-two-tv-show-poster-banner-01-700x400-1.jpg' />
        <div className='home__row'>
          <Product title={'The Secret by Ronda Byrne'} 
                   price={19.99} 
                   image={'https://m.media-amazon.com/images/I/51FBlju29hS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg'}
                   rating={2}
                   />
          <Product  title={'Amazon Brand - Solimo Colored Wax Tealight Candles (Set of 100, Unscented)'} 
                   price={5.54} 
                   image={'https://m.media-amazon.com/images/I/716GRSUDYdL._SX425_.jpg'}
                   rating={5}
                   />
        </div>

        <div className='home__row'>
          <Product title={'Philips HR3705/10 300 Watt Lightweight Hand Mixer, Blender with 5 speed control settings, stainless steel accessories and 2 years warranty'} 
                   price={45.60} 
                   image={'https://m.media-amazon.com/images/I/41tDUmnDITL._SX425_.jpg'}
                   rating={2}
                   />
          <Product title={'Protoner 16Kg PVC Combo Home Gym Package'} 
                   price={10.03} 
                   image={'https://m.media-amazon.com/images/I/71K-gcsnOYL._SY450_.jpg'}
                   rating={2}
                   />
          <Product title={'Rock Paper Scissors Womens Tank Top High Neck Cotton Top Stylish Women Top'} 
                   price={34.73} 
                   image={'https://m.media-amazon.com/images/I/71V8nzp-04L._UX569_.jpg'}
                   rating={3}
                   />
        </div>
        <div className='home__row'>
          <Product title={'Dennis Lingo Men Shirt'} 
                   price={68.04} 
                   image={'https://m.media-amazon.com/images/I/618Wek95laS._UY679_.jpg'}
                   rating={4}
                   />

        </div>
      </div>
    </div>
  )
}

export default Home