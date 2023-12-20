import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Success = () => {
    const [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        setInterval(()=>{
            setCount((count) => count - 1);
        }, 1000);
        setTimeout(()=> navigate("/"), 10000);
    },[navigate])
  return (
    <h4 className='mt-5'>
        Your order have been placed successfully. You'll be redirected in{" "} {count} seconds
    </h4>
  )
}
