import express from 'express';
import {
    ToggleCart,
    deleteFromCart,
    getUserCart,
} from '../controllers/UserCart.controller.js';
import { isPatientAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/add-to-cart", ToggleCart);
router.delete("/delete-from-cart/:id", deleteFromCart);
router.get("/user-cart/:userId", isPatientAuthenticated, getUserCart);

export default router