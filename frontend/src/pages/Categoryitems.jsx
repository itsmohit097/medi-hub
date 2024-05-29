import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {getCategoryMedicines } from '../Api'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../components/Paginations'
import { CardStore, GetStore } from '../helper/Medcinefuncations'
import MedicineCard from '../components/MedicineCard'

function Categoryitems() {
    const navigate = useNavigate()
    const [products, setproducts] = useState([])
    const location = useLocation().pathname.replace("/shop-by-category/", " ").trim()
    console.log(location);

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
            console.log("the handle page change is trrigered in page CardId",page);
    }
    useEffect(() => {
        handlePageChange();
      }, [location, navigate]); 
      
    return (
        <div className='mx-auto mb-4'>
            <div className='container min-h-40 mx-auto mt-5'>
                <h2 className='text-2xl font-semibold mb-4'>{`${location? `take your ${location}` : "ON High Discount"}`}</h2>
            <MedicineCard products={products} />
        </div>
            <Pagination currentPage={1} totalPages={4} onPageChange={handlePageChange} />
        </div>
    )
}

export default Categoryitems