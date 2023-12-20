import React from 'react'
import './Header.css';
import { GiFruitBowl } from 'react-icons/gi';

const Footer = () => {
    return (
        <div className='head' style={{padding:"10px", marginTop:"400px"}}>
            <p>Copyrights &#169; Fresh <GiFruitBowl style={{color:"#86fc8e", fontSize:"20px"}}/> <span>Garden</span> | 2023</p>
        </div>
    )
}

export default Footer