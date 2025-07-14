import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

export const Product = () => {
  const {all_product} = useContext(ShopContext);

  return (
    <div>Product</div>
  )
}
