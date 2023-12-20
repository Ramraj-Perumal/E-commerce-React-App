import React from 'react'
import { ProductList } from '../Data/ProductList'
import ProductCard from '../Components/ProductCard'

export const Dashboard = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {ProductList.map((product) => <ProductCard {...product} key={product.id}/>)}
    </div>
  )
}
