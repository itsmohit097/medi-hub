import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddtoUserCart, deleteFromUserCart, getCategoryMedicines } from '../Api'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../components/Paginations'

function Categoryitems() {
    const navigate = useNavigate()
    const [AddtoCart, setAddtoCart] = useState(false)
    const [products, setproducts] = useState([])
    const [CartId, setCartId] = useState([{
        medicineId: null, 
        CartId: null,
        cartstatus: false
    }])
    const [Error, setError] = useState(false)
    const location = useLocation().pathname.replace("/shop-by-category/", " ").trim()
    console.log(location);

    const handleCart = (medi) => {
        if (!AddtoCart) {
            AddtoUserCart({
                medicineId: medi._id,
                quantity: medi.stock,
                price: medi.price,
                discount: medi.discount,
            }).then((res) => {
                setCartId(() => CartId.push({ medicineId: medi_id, CartId: res.data._id, cartstatus: true }))


            })
        }
        else {
            const cartid = CartId.filter((vlu) => vlu.medicineId === medi._id)
            deleteFromUserCart({
                CartId: cartid.CartId
            }).then(
                setCartId((prev) =>
                    prev.map((item) =>
                        item.CartId === cartid.CartId ? { ...item, cartstatus: false } : item
                    ))
            ).catch((err) => {
                console.log("this issue in deleteting item from cart ", err);
            })
        }
    }

    const handlePageChange = (page) => {
        getCategoryMedicines(location, page)
            .then((res) => {
                console.log(res);
                setproducts(res.data)
            })
            .catch((err) => {
                console.log(err);
                toast.error('Something went wrong')
                // setError(true)
            })
    }

    useEffect(() => {
        handlePageChange()
    }, [location, navigate])
    return (
        <div className='mx-auto mb-4'>
            <ToastContainer />
            <div className='container min-h-40 mx-auto mt-5'>
                <h2 className='text-2xl font-semibold mb-4'>{`take your ${location}`}</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {products?.map((medi, index) => (
                        <div key={index} className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                            <div  onClick={() => navigate(`/buy-medicines/${medi._id}`)}>
                            <img src={medi.image} alt={medi.name} className='w-full h-20 object-cover mb-2' />
                            <p className='text-gray-500 mb-4'>{medi.description?.split(' ').slice(0, 10).join(' ') + '...'}</p>
                            <h4 className=''>
                                {`₹${Math.floor(medi.price * medi.discount / 100)} `}
                                <span className='line-through text-gray-400'>{`₹${medi.price}`}</span>
                                <span className='text-green-600'>{`${Math.floor(medi.discount-100)}% off`}</span>
                            </h4>
                            </div>
                            <button onClick={() => handleCart(medi)} className='bg-green-700 w-full rounded-xl text-center text-white p-2'>
                                {`${CartId.some(item => item.medicineId === medi._id) ? "ADDED" : "ADD"}`}
                            </button>
                        </div>
                    ))
                    }
                </div>
            </div>
            <Pagination currentPage={1} totalPages={4} onPageChange={handlePageChange} />
        </div>
    )
}

export default Categoryitems