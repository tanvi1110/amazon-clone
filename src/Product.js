import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function product({id,title,image,price,rating}) {
  
  const [{ basket }, dispatch] = useStateValue();
 
  console.log('this is basket >>> ', basket);

  const addToBasket = () => {
    // dispatch the item into data layer
     dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
      
     })
  }
  
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</ small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
           .fill()
           .map((_,i) => (
            <span role="img" aria-label="Love">🌟</span>
          ))}
        </div>
      </div>

      <img alt='' src={image} />
      <button onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}

export default product