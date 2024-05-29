import React, { useEffect, useState } from 'react'
import { Category } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
import { AddtoUserCart, SearchMedicines, getHighDiscountMedicines } from '../Api'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../components/Paginations'
import MedicineCard from '../components/MedicineCard'


function Medicines() {

    const [page, setpsge] = useState(1)
    const [medicines, setMedicines] = useState([])
    const navigate = useNavigate()
    const [Search, setSearch] = useState('')

    const HandleSearch = () => {
        if(Search === ''){
            handlePageChange()
        }
        SearchMedicines(Search).then((res) => {
            console.log(res);
            setMedicines(res.data)
        }).catch((err) => {
            console.log(err);
            toast.error('Something went wrong')
        })
    }

    const handlePageChange = (page) => {
        getHighDiscountMedicines(page).then(res => {
            console.log(res);
            setMedicines(res.data)
        }).catch(err => {
            console.log(err);
            toast.error('Something went wrong')
        })
    }
  useEffect(() => {
    HandleSearch()
  }, [Search])
    useEffect(() => {
        handlePageChange()
    }, [navigate])

    return (
        <div className='mx-auto '>
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
                        <input onChange={(event) => setSearch(event.target.value)} className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search medicines.." />
                    </div>
                </div>
            </div>
            {Search ?
                <div className='container min-h-40 mx-auto mt-5'>
                    <h2 className='text-2xl font-semibold mb-4'>Search Result</h2>
                    {medicines.length === 0 && <h2 className='text-2xl font-semibold mb-4'>No Result Found</h2>}
                    <MedicineCard products={medicines} />
                </div>
                :
                <>
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
                            ))}
                        </div>
                    </div>
                    <div className='container min-h-40 mx-auto mt-5'>
                        <h2 className='text-2xl font-semibold mb-4'>ON High Discount</h2>
                        <MedicineCard products={medicines} />
                    </div>
                    <Pagination currentPage={1} totalPages={12} onPageChange={handlePageChange} />
                </>
            }
        </div>
    )
}
export default Medicines