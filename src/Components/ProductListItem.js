import React from 'react';

export const ProductListItem = (props) => {
  return (
    <div className='d-flex flex-wrap m-4 align-items-center justify-content-center'>
      <div className='mb-3'>
        <img
          src={props.thumnail}
          alt={props.title}
          className='img-fluid border-radius-10 me-3'
          style={{ maxWidth: '180px', maxHeight: '150px' }} 
        />
      </div>

      <div className='me-3'>
        <h5 className='card-title mb-2'>{props.title}</h5>
        <h6 className='mb-2'>Price: {`$${props.price}`}</h6>
        <h6 className='mb-2'>Discount: {`${props.discount}%`}</h6>
        <h6 className='mb-2'>Rating: {props.rating}</h6>
      </div>

      <div className='d-flex align-items-center'>
        <button className='btn btn-danger me-2' onClick={props.incrementItem}>
          +
        </button>
        <span className='me-2'>Quantity {props.count}</span>
        <button className='btn btn-danger me-2' onClick={props.decrementItem}>
          -
        </button>
        <button className='btn btn-danger' onClick={props.removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
};
