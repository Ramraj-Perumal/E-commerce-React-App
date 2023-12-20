import React from 'react'

export const ProductListItem = (props) => {
  return (
    <div className='d-flex m-4 align-items-center justify-content-center'>
    <div className='mt-3'>
        <img src={props.thumnail} height={150} width={180} alt={props.title} className='border-radius-10 me-3' />
    </div>
    
        <h5 className="card-title me-4">
            {props.title}
        </h5>
        <h6 className='mt-2 me-4'>Price: {`$${props.price}`}</h6>
        <h6 className='mt-2 me-4'>Discount: {`${props.discount}%`}</h6>
        <h6 className='mt-2 me-4'>Rating: {props.rating}</h6>
            <button className='btn btn-danger ms-3' onClick={props.incrementItem}>+</button>
            <span className='ms-3'>Quantity {props.count}</span>
            <button className='btn btn-danger ms-3' onClick={props.decrementItem}>-</button>
            <button className='btn btn-danger ms-3' onClick={props.removeItem}>Remove</button> 
</div>
  )
}
