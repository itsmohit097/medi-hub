import express from 'express';
import{
    AddToCart,
    deleteFromCart,
    getUserCart,
} from '../controllers/UserCart.controller.js';

const router = express.Router();

router.route("/add-to-cart").post(AddToCart);
router.route("/delete-from-cart/:id").delete(deleteFromCart);
router.route("/user-cart/:userId").get(getUserCart);

export default router