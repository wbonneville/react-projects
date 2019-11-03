import React from 'react';
import CartItem from './CartItem';

// component list all the items in the cart

// get value prop
export default function CartList({ value }) {
  // cart = to value
  const { cart } = value;
  // loop through the cart and display the items
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
