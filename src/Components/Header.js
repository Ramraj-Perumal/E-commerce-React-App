import React from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { GiFruitBowl } from 'react-icons/gi';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='head'>
            <h3>Fresh <GiFruitBowl style={{color:"#86fc8e", fontSize:"30px"}}/> <span>Garden</span></h3>
            <div className='row justify-content-center pt-2 pb-1'>
                <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
                    <button className='btn btn-success me-4' onClick={()=> navigate('/')}>Home</button>
                    <input
                        className='form-control'
                        type="search"
                        placeholder='search...' />
                    <button className='btn btn-success ms-3'onClick={()=> navigate('/cart')} >Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Header