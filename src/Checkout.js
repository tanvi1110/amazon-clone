import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      {/* Left indent*/}
      <div className='checkout__left'>
        <img className='checkout__ad'
          src={require('../src/images/banner_2.jpg')} alt='#' loading="lazy" />

        <div>
          <h2 className='checkout__title' >Your shopping Basket</h2>
         
         {basket.map(item => (
          <CheckoutProduct id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
         ))}
        </div>
      </div>
      {/* Right indent*/}
      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout