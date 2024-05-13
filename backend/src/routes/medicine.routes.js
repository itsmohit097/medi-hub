import express from 'express';
import {
    AddNewMedicine,
    updateMedicine,
    deleteMedicine,
    getHighDiscountMedicines,
    getCategoryMedicines,
    getSingleMedicine
} from '../controllers/medicine.controller.js';
const router = express.Router();

// routes of admin
router.route("test").get((req, res) => {
    res.send("Medicine routes working");
});
router.route("/add-medicine").post(AddNewMedicine);
router.route("/update-medicine/:id").put(updateMedicine);
router.route("/delete-medicine/:id").delete(deleteMedicine);

// routes of user
router.route("/get/:id").get(getSingleMedicine);
router.route("/shope-by-category/:category").get(getCategoryMedicines);
router.route("/discount").get(getHighDiscountMedicines)

export default router;