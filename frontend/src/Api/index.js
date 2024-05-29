import axios from "axios";
import { base_url } from "./config";

const user = {
    _id: "60f3b3b3b3b3b3b3b3b3b3b3"
}

const getHighDiscountMedicines = async (page) => {
    try {
        const response = await axios.get(`${base_url}/medicines/discount`,{
            params: {
                page: page,
            }
        });
        return response.data;
    } catch (error) {
        console.log(`${base_url}/medicines/discount`);
        return error;
    }
}

const getMedicines = async (id) => {
    try {
        console.log(id);
        const response = await axios.get(`${base_url}/medicines/get/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

const getCategoryMedicines = async (category, page) => {
    try {
        const response = await axios.get(`${base_url}/medicines/shop-by-category/${category}`, {
            params: {
                page: page
            }
        });
        return response.data;
    } catch (error) {
        return error;
    }
}
const AddtoUserCart = async ({medicineId, quantity= 1, price, discount}) => {
    try {
        const response = await axios.post(`${base_url}/medicines-cart/add-to-cart`, {
            userId: user._id,
            medicineId,
            quantity,
            totalPrice: quantity * (price - discount)
        }, { withCredentials: true })

        return response.data
    } catch (error) {
        return error;
    }
}

const deleteFromUserCart = async ({CartId}) => {
    try {
        const response = await axios.delete(`${base_url}/medicines-cart/delete-from-cart/${CartId}`, { withCredentials: true })
        return response.data
    } catch (error) {
        return error;
    }
}

const GetUserCart = async (UserId) => {
    try {
        const response = await axios.get(`${base_url}/medicines-cart/user-cart/${UserId}`, { withCredentials: true })
        return response.data
    } catch (error) {
        return error;
    }
}

const CheckoutPayment = async ({ amount }) => {
    try {
        const response = await axios.post(`${base_url}/payment/checkout`, {
            amount
        }, { withCredentials: true })

        return response.data
    } catch (error) {
        return error;
    }
}
const paymentVerification = async ({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
}) => {
    try {
        const response = await axios.post(`${base_url}/payment/paymentverification`, {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        }, { withCredentials: true })

        return response.data
    } catch (error) {
        return error;
    }
}

const SearchMedicines = async (search) => {
    try {
        const response = await axios.get(`${base_url}/medicines/search-medicine`, {
            params: {
                search
            }
        });
        return response.data;
    } catch (error) {
        return error
    }
}
export {
    getHighDiscountMedicines,
    getCategoryMedicines,
    getMedicines,
    deleteFromUserCart,
    GetUserCart,
    AddtoUserCart,
    CheckoutPayment,
    paymentVerification,
    SearchMedicines
}