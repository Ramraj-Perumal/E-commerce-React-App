import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
    const Navigate = useNavigate();
    return (
        <div className='card m-2 cursor-pointer' style={{ width: 300 }} role='button' onClick={()=> Navigate(`/product/${props.id}`)}>
            <div className='mt-3'>
                <img src={props.thumnail} height={150} width={180} alt={props.title} className='border-radius-10' />
            </div>
            <div className='card-body'>
                <h5 className="card-title">
                    {props.title}
                </h5>
                <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
                <h6 className='mt-2'>Discount: {`${props.discount}%`}</h6>
                <h6 className='mt-2'>Rating: {props.rating}</h6>

                <div className='mt-4'>
                    {props.stack > 0 ? <button className='btn btn-success'>Available</button> : <button className='btn btn-outline-danger'>Out of stack</button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard