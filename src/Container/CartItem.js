import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductListItem } from '../Components/ProductListItem'
import { modifyItem, removeItem } from '../Redux/Reducer/Cart';
import { useNavigate } from 'react-router-dom';

export const CartItem = () => {
    const list = useSelector((state) => state.cart.list);
    const disptach = useDispatch();
    const navigate = useNavigate();

    const incrementItem = (item) => {
        disptach(modifyItem({ ...item, count: item.count + 1 }))
    }

    const decrementItem = (item) => {
        if (item.count === 1) {
            disptach(removeItem(item))
        }
        else (
            disptach(modifyItem({ ...item, count: item.count - 1 }))
        )
    }

    const removeItemInCart = (item) => {
        disptach(removeItem(item))
    }

    return (
        <>
            {list.length > 0 ? (
                <>
                {list.map((item) => (
                <ProductListItem {...item}
                    key={item.id}
                    incrementItem={() => incrementItem(item)}
                    decrementItem={() => decrementItem(item)}
                    removeItem={() => removeItemInCart(item)} />
            ))}
            <button className='btn btn-success' onClick={() => navigate('/checkout')}>Checkout items</button>
            </>
            ) : (
                <h4>No fruits item in the cart</h4>)}
        </>
    )
}
