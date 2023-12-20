import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../Data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../Redux/Reducer/Cart';

const Product = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const props = ProductList.find(
        (element) => element.id === parseInt(params.id)
    );

    const [alert, setAlert] = useState(false);

    const list = useSelector((state) => state.cart.list)

    const element = list.find((item) => item.id === props.id)
    const addToCart = () => {
        setAlert(true);
        setTimeout(()=>setAlert(false), 3000);
        dispatch(addItem(props))
    }
    return (
        <div className='card m-2'>
            {alert && <span className='alert alert-success'>Item added to cart</span>}
            <div className='mt-3'>
                <img src={props.thumnail} height={350} width={400} alt={props.title} className='border-radius-10' />
            </div>
            <div className='card-body mt-3'>
                <h5 className="card-title">
                    {props.title}
                </h5>
                <h6 className='mt-2'>Price: {`$${props.price}`}</h6>
                <h6 className='mt-2'>Discount: {`${props.discount}%`}</h6>
                <h6 className='mt-2'>Rating: {props.rating}</h6>

                <div className='mt-4'>
                    {props.stack > 0 ? (
                        <>
                            <button className='btn btn-success' onClick={()=> navigate(`/checkout/${props.id}`)}>Buy now</button>
                            {element?.count > 0 ?
                            <button className='ms-3 btn btn-outline-warning' onClick={()=> navigate('/cart')}>Go to cart</button> : 
                            <button className='ms-3 btn btn-success' onClick={addToCart}>Add to cart</button>
                            }
                        </>) : (
                        <button className='btn btn-outline-danger'>Out of stack</button>)}
                </div>
            </div>
        </div>
    )
}

export default Product