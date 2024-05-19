import validator from "validator";
import { Medicine } from "../models/medicine.model.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import asyncHandler from "../utilis/asyncHandler.js";
import { uploadOnCloudinary } from "../utilis/cloudinary.js";

//! Adding new medicine by admin only
export const addNewMedicine = asyncHandler(async (req, res) => {
    const { name, price, description, category, manufacturer, expiryDate, stock, discount } = req.body;

    if (!name || !price || !description || !category || !manufacturer || !expiryDate || !stock || !discount) {
        throw new ApiError(400, "Please Fill All Medicine Details!");
    }

    let existedMedicine = await Medicine.findOne({ name });
    if (existedMedicine) {
        throw new ApiError(400, `Medicine with this Name already exists`);
    }

    // Medicine Image
    const medicineImageLocalPath = req.file?.path;
    if (!medicineImageLocalPath) {
        throw new ApiError(400, "Medicine Image Path Not Found!");
    }
    const medicineImage = await uploadOnCloudinary(medicineImageLocalPath);
    if (!medicineImage) {
        throw new ApiError(400, "Medicine Image is required")
    }
    const createdMedicine = await Medicine.create({
        name,
        price,
        description,
        category,
        expiryDate,
        manufacturer,
        stock,
        discount,
        image: medicineImage.url,
    });

    return res.
        status(201).
        json(new ApiResponse(201, createdMedicine, "Medicine Added Successfully!"));
});


//! delete medicine by admin only
export const deleteMedicine = asyncHandler(async (req, res) => {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) {
        throw new ApiError(404, "Medicine not found");
    }
    return res.json(new ApiResponse(200, {}, "Medicine Deleted Successfully!"));
});


//! update medicine by admin only
export const updateMedicine = asyncHandler(async (req, res) => {
    // only 3 parameters can be updated by admin else create a new medicine
    const { price, stock, discount } = req.body;

    // Ensure at least one field is provided
    if (price === undefined && stock === undefined && discount === undefined) {
        throw new ApiError(400, "Please provide at least one field to update (price, stock, or discount)!");
    }

    // Build the update object dynamically
    const updateFields = {};
    if (price !== undefined) updateFields.price = price;
    if (stock !== undefined) updateFields.stock = stock;
    if (discount !== undefined) updateFields.discount = discount;

    const medicine = await Medicine.findByIdAndUpdate(
        req.params.id,
        updateFields,
        {
            new: true,
            runValidators: true,
        }
    );
    if (!medicine) {
        throw new ApiError(404, "Medicine not found");
    }
    return res.json(new ApiResponse(200, {}, "Medicine Updated Successfully!"));
});


//! get all high discount medicines by user
export const getHighDiscountMedicines = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;
    const skip = (page - 1) * limit;
    const medicines = await Medicine.find({ discount: { $gte: 10 } }).skip(skip)
        .limit(limit);
    if (!medicines) {
        throw new ApiError(404, "No medicines found");
    }
    return res.json(new ApiResponse(200, medicines, "Medicines fetched successfully!"));
});


//! get category medicines by user
export const getCategoryMedicines = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const medicines = await Medicine.find({
        category: req.params.category,
    })
        .skip(skip)
        .limit(limit);

    if (!medicines) {
        throw new ApiError(404, "No medicines found");
    }

    return res.json(new ApiResponse(200, medicines, "Medicines fetched successfully!"));
});


//! get single medicine by user
export const getSingleMedicine = asyncHandler(async (req, res) => {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
        throw new ApiError(404, "Medicine not found");
    }
    return res.json(new ApiResponse(200, medicine, "Medicine fetched successfully!"));
});


//! Search medicine on the basis of name and category
export const searchMedicine = asyncHandler(async (req, res) => {
    const search = validator.escape(req.query.search);
    const medicines = await Medicine.find({
        $or: [
            { name: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } },
        ],
    });
    if (!medicines) {
        throw new ApiError(404, "No medicines found");
    }
    return res.json(new ApiResponse(200, medicines, "Medicines fetched successfully!"));
});
