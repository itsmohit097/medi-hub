import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { CardStore, GetStore } from '../../helper/Medcinefuncations'

function MedicineCard({
    products,
}) { 
    const navigate = useNavigate()
    const [CartId, setCartId] = useState(GetStore())
    const location = useLocation().pathname.replace("/shop-by-category/", " ").trim()
    console.log(location);

    const handleCart = (medi) => {
        const response = CardStore(medi);
        console.log("response", response);
        if (Array.isArray(response)) {
          setCartId(response);
        }
        if (typeof response === 'object' && response !== null && !Array.isArray(response)) {
          setCartId(prevCartId => [...prevCartId, { medicineId: response.medicineId, CartId: response._id }]);
        }
        console.log("cartId", CartId?.some(item => item.medicineId === medi._id));
      } 
      useEffect(() => {
        setCartId(GetStore());
      }, []); // Separate useEffect for CartId
    return (
        <>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:justify-items-start justify-items-center'>
                    {products?.map((medi, index) => (
                        <div key={index}  className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                        <img src={medi.image} onClick={() => navigate(`/buy-medicines/${medi._id}`)} alt={medi.name} className='w-full h-60 object-cover mb-2' />
                        <p className='text-black-900 mb-4 font-bold'>{medi.name?.split(' ').slice(0, 2).join(' ') + '...'}</p>
                        <h4 className='my-3'>
                            {`₹${Math.floor(medi.price - medi.discount)} `}
                            <span className='line-through text-gray-400'>{`₹${medi.price}`}</span>
                            <span className='text-main_theme'>{`${Math.floor(((medi.price - medi.discount) / medi.price) * 100)-100}% off`}</span>
                        </h4>
                        <button onClick={() => handleCart(medi)} className='bg-main_theme w-full rounded-xl text-center text-white p-2'>
                            {`${CartId.some(item => item.medicineId === medi._id) ? "ADDED" : "ADD"}`}
                        </button>
                    </div>
                    ))
                    }
                </div>
        </>
    )
}

export default MedicineCard