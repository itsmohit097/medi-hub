import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AddtoUserCart, getMedicines } from '../Api';
function SingleMedicine() {
  const [product, setproduct] = useState({})
  const productId = useParams().id
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  console.log(productId);

  const fetchProductDetails = async () => {
    setLoading(true)
    getMedicines(productId).then((res) => {
      setLoading(false)
      console.log(res);
      setproduct(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchProductDetails()
  }, [productId])

  const handleAddToCart = async (e, id) => {
    await AddtoUserCart({
      userId,
      medicineId: productId,
      quantity: 1,
      price: product.price,
      discount: product.discount
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleBuyProduct = async () => {
    await AddtoUserCart({
      userId,
      medicineId: productId,
      quantity: 1,
      price: product.price,
      discount: product.discount
    }).catch((err) => {
      console.log(err);
    })
    navigate("/medicine-cart")

  }
  return (
    <>
      <div className="container mx-auto my-5 p-10 relative">
        <div className="row flex flex-col md:flex-row justify-center gap-2">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6 flex flex-col justify-center gap-4">
            <h1 className='text-xl font-bold'>{product.name}</h1>
            <p className='text-lg text-gray-800'>{product.description}</p>
            <p className='text-lg'>Price: {product.price}</p>
            <p className='text-lg'>Discount: {product.discount}</p>
            <p className='text-lg'>Stock: {product.stock}</p>
            <button className="btn btn-primary py-2 px-4 rounded-md text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600" onClick={handleAddToCart}>Add to Cart</button>
            <button className="btn btn-success py-2 px-4 rounded-md text-lg font-semibold text-white bg-green-500 hover:bg-green-600" onClick={handleBuyProduct}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleMedicine