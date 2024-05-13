import React, { useEffect, useState } from 'react'
import { Category } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
import { getHighDiscountMedicines } from '../Api'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../components/Paginations'


function Medicines() {

    const [page, setpsge] = useState(1)
    const [medicines, setMedicines] = useState([])
    const navigate = useNavigate()
    const [CartId, setCartId] = useState([{
        medicineId: null,
        CartId: null,
        cartstatus: false
    }])
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
    const handlePageChange = (page = 1) => {
        getHighDiscountMedicines(page).then(res => {
            console.log(res);
            setMedicines(res.data)
        }).catch(err => {
            console.log(err);
            toast.error('Something went wrong')
        })
    }

    useEffect(() => {
        handlePageChange()
    }, [navigate])

    return (
        <div className='mx-auto mb-4'>
            <ToastContainer />
            <div className='min-h-60 bg-[url("./medicine.jpg")] bg-blend-lighten hover:bg-blend-darken  bg-cover flex justify-center items-center flex-col gap-5'>
                <h1 className='text-4xl font-bold text-white'>Buy Medicines and Essentials</h1>
                <div className="w-6/12 mx-auto">
                    <div className="relative flex items-center w-full h-16 rounded-2xl focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search medicines.." />
                    </div>
                </div>
            </div>

            <div className='container min-h-40 mx-auto mt-5'>
                <h2 className='text-2xl font-semibold mb-4'>Shop by Category</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {Category.map((category, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-md p-5'>
                            <Link to={`/shop-by-category${category.Url}`}>
                                <img src={category.image} alt={category.name} className='w-full h-28 object-cove mb-2' />
                                <h3 className='text-lg font-semibold text-green-800 text-center'>{category.name}</h3>
                            </Link>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className='container min-h-40 mx-auto mt-5'>
                <h2 className='text-2xl font-semibold mb-4'>ON High Discount</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {medicines?.map((medi, index) => (
                        <div key={index} onClick={() => navigate(`/buy-medicines/${medi._id}`)} className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                            <img src={medi.image} alt={medi.name} className='w-full h-20 object-cover mb-2' />
                            <p className='text-gray-900 mb-4'>{medi.description?.split(' ').slice(0, 14).join(' ') + '...'}</p>
                            <h4 className=''>
                                {`₹${Math.floor(medi.price * medi.discount / 100)} `}
                                <span className='line-through text-gray-400'>{`₹${medi.price}`}</span>
                                <span className='text-green-600'>{`${Math.floor(medi.discount - 100)}% off`}</span>
                            </h4>
                            <button onClick={() => handleCart(medi)} className='bg-green-700 w-full rounded-xl text-center text-white p-2'>
                                {`${CartId.some(item => item.medicineId === medi._id) ? "ADDED" : "ADD"}`}
                            </button>
                        </div>
                    ))
                    }
                </div>
                <Pagination currentPage={1} totalPages={12} onPageChange={handlePageChange} />
                {/* <div className="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex justify-center">
                        <nav className="flex space-x-2" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-green-700 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                                Previous
                            </a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                                1
                            </a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                                2
                            </a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                                3
                            </a>
                            <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-green-700 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                                Next
                            </a>
                        </nav>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Medicines