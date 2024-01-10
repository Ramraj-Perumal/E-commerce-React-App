import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductListItem } from '../Components/ProductListItem'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductList } from '../Data/ProductList';

export const Checkout = () => {
    const params = useParams();
    const list = useSelector((state) => state.cart.list);
    const [state, setState] = useState(params.id ? [{ ...ProductList.find(element => element.id === parseInt(params.id)), count: 1 },] : list);
    const navigate = useNavigate();

    const incrementItem = (item) => {
        // disptach(modifyItem({ ...item, count: item.count + 1 }));
        const index = state.findIndex(
            (product) => product.id === item.id
        );
        setState((state) => [
            ...state.slice(0, index),
            { ...item, count: item.count + 1 },
            ...state.slice(index + 1),
        ]);
    };

    const decrementItem = (item) => {
        if (item.count === 1) {
            removeItemInCart(item);
        }
        else {
            const index = state.findIndex(
                (product) => product.id === item.id
            );
            setState((state) => [
                ...state.slice(0, index),
                { ...item, count: item.count - 1 },
                ...state.slice(index + 1),
            ]);
        }
    }

    const removeItemInCart = (item) => {
        const index = state.findIndex(
            (product) => product.id === item.id
        );
        setState((state) => [
            ...state.slice(0, index),
            ...state.slice(index + 1),
        ]);
    }

    return (
        <div className="container mt-4">
            {state.length > 0 ? (
                <>
                    {state.map((item) => (
                        <ProductListItem
                            {...item}
                            key={item.id}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeItem={() => removeItemInCart(item)}
                        />
                    ))}
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-success" onClick={() => navigate('/success')}>
                            Place order
                        </button>
                    </div>
                </>
            ) : (
                <h4>No fruit items in the checkout</h4>
            )}
        </div>
    );
};

