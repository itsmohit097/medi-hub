import express from 'express';
import {
    addNewMedicine,
    updateMedicine,
    deleteMedicine,
    getHighDiscountMedicines,
    getCategoryMedicines,
    getSingleMedicine,
    searchMedicine
} from '../controllers/medicine.controller.js';
import { isAdminAuthenticated } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";



const router = express.Router();

// routes of admin
router.post("/addmedicine", isAdminAuthenticated, upload.single("image"), addNewMedicine);
router.delete("/delete-medicine/:id", isAdminAuthenticated, deleteMedicine);
router.put("/update-medicine/:id", isAdminAuthenticated, updateMedicine);

// routes of user
router.get("/get/:id", getSingleMedicine);
router.get("/shop-by-category/:category", getCategoryMedicines);
router.get("/discount", getHighDiscountMedicines)

router.get("/search-medicine", searchMedicine);


export default router;