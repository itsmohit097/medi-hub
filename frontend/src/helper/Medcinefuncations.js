// store the card data based on user Authrntications

import { GetUserCart } from "../Api";

const User = {
    status: false,
    _id: null
}
const CardStore = (data)=>{
    if(User?.status){
        AddtoUserCart({
            medicineId: data._id,
            price: data.price,
            discount: data.discount,
        }).then((res) => {
            return res.data;
            
        }).catch((err) => {
            console.log(err);
        })
    }
    else{
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let itemExists = false;
        
        cart.forEach((element, index) => {
          if (element.medicineId === data._id) {
            cart.splice(index, 1);
            itemExists = true;
          }
        });
        
        if (!itemExists) {
          cart.push({ medicineId: data._id, quantity: 1, totalPrice: data.price - data.discount });
        }
        
        console.log("this is the cart", cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    }
}

const GetStore = ()=>{
    if(User.status){
        GetUserCart(User._id).then((res) => {
            return res.data;
        }).catch((err) => {
            console.log(err);
        }   
    )
    }
    else{
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

}

export {
    CardStore,
    GetStore
}