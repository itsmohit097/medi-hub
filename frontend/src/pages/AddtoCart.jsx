import React, { useEffect, useState } from 'react';
import useRazorpay from 'react-razorpay';
import { CheckoutPayment, GetUserCart, deleteFromUserCart, getMedicines, paymentVerification } from '../Api';
import { ToastContainer, toast } from 'react-toastify';
import { GetStore } from '../helper/Medcinefuncations';
const AddtoCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  
  // add the varaible for the getting  user id  is UserId

  const GetUsercartitems =()=>{ 
    const CartIds = GetStore();
    CartIds.forEach((element) => {
       getMedicines(element.medicineId).then((res) => {
        setCartItems((prev) => {
          return [...prev  , { ...res.data, cartId: element.CartId, quantity: element.quantity ,totalPrice: element.totalPrice}];
        });
       })
    });
  }

  useEffect(()=>{
    GetUsercartitems();
  },[])
  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    calculateTotal();
  };
  console.log("this are the no of cartitems",cartItems);
  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
    calculateTotal();
  };

  const removeItem = (itemId) => {
    deleteFromUserCart({
      CartId:itemId
    }).then(()=>{
      const updatedCart = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCart);
      calculateTotal();
    }).catch((err)=>{
      console.log("the error in removing cart addtocart page", err );
    })
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(total);
    setTotalItems(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  };

  // handlePayment Function
  const handleBuyNow = () => {
    try { 
      const data = CheckoutPayment({ amount: totalPrice })
      console.log(data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // handlePaymentVerify Function
  const handlePaymentVerify = async (data) => {
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "medihub",
      description: "Your buying something important for your health",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const verifyResponse = paymentVerification({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          const verifyData = verifyResponse.data;

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#11a33c"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  return (
    <div className="container mx-auto my-10 relative  p-6 bg-white rounded-lg shadow-md flex gap-4">
      <ToastContainer/>
      <div className="divide-y divide-gray-500 w-8/12 ">
      <h2 className="text-2xl font-bold mb-4">My Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border-2 m-2 py-4 rounded-lg">
            <img src={item.image} alt={item.name} className='w-[40%] object-cover mb-2 ' />
            <div className='flex flex-col items-center m-2'>
            <span className="text-lg font-medium">{item.name}</span>
            <p className='text-gray-500 mb-4'>{item.description?.split(' ').slice(0, 23).join(' ') + '...'}</p>

            <div className="flex items-center">
              <button
                onClick={() => increaseQuantity(item.id)}
                className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
              >
                +
              </button>
              <span className="mx-4">{item.quantity}</span>
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                -
              </button>
            </div>
            <span className="text-lg font-medium">${item.price}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
          </div>
        ))}
      </div>
      <div className="mt-10 w-4/12 sticky top-0">
        <div className="flex justify-between">
          <span>Total Items:</span>
          <span className="font-bold">{totalItems}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Price:</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button
          onClick={handleBuyNow}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AddtoCart;