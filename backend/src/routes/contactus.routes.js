import express from "express";
import { getAllMessages, sendMessage } from "../controllers/contactus.controller.js";
import { isAdminAuthenticated } from "../middlewares/auth.middleware.js";



const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", isAdminAuthenticated, getAllMessages);

export default router;