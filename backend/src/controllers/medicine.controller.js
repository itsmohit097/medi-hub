import { Medicine } from "../models/medicine.model.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import asyncHandler from "../utilis/asyncHandler.js";
import { uploadOnCloudinary } from "../utilis/cloudinary.js";

// Adding new medicine by admin only
const AddNewMedicine = asyncHandler(async (req, res) => {
    const { name, price, description, category, expiryDate, manufacturer, stock, image, discount } = req.body;

    console.log(req.body);

    if (!name || !price || !description || !category || !expiryDate || !manufacturer || !stock  || !discount|| !image) {
        throw new ApiError(400, "Please Fill Full Form!");
    }

    let existedMedicine = await Medicine.findOne({ name });
    if (existedMedicine) {
        throw new ApiError(400, `Medicine with this Name already exists`);
    }
    // const medicineImage = req.file?.path;
    // if (!medicineImage) {
    //     throw new ApiError(400, "Medicine Image Path Not Found!");
    // }
    let medicineImageCloudinary = null;
    // const medicineImageCloudinary = await uploadOnCloudinary(medicineImage);
    // if (!medicineImageCloudinary) {
    //     throw new ApiError(400, "Medicine Image is required")
    // }
    const medicine = await Medicine.create({
        name,
        price,
        description,
        category,
        expiryDate,
        manufacturer,
        stock,
        discount: (price - discount) / price * 100,
        image: medicineImageCloudinary?.url|| "https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg",
    });

    return res.
        status(201).
        json(new ApiResponse(201, medicine, "Medicine Added Successfully!"));
});

// delete medicine by admin only
const deleteMedicine = asyncHandler(async (req, res) => {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) {
        throw new ApiError(404, "Medicine not found");
    }
    return res.json(new ApiResponse(200, {}, "Medicine Deleted Successfully!"));
});

// update medicine by admin only
const updateMedicine = asyncHandler(async (req, res) => {
    // only 3 parameters can be updated by admin else create a new medicine
    const { price, stock, discount } = req.body;
    if (!price || !stock || !discount) {
        throw new ApiError(400, "Please Fill Full Form!");
    }
    const medicine = await Medicine.findByIdAndUpdate(req.params.id
        , {
            price,
            stock,
            discount: (price - discount) / price * 100,
        },
        {
            new: true,
            // runValidators: true,
        }
    );
    if (!medicine) {
        throw new ApiError(404, "Medicine not found");
    }
    return res.json(new ApiResponse(200, {}, "Medicine Updated Successfully!"));
});

// get all high discount medicines by admin
const getHighDiscountMedicines = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;
    const skip = (page - 1) * limit;
    const medicines = await Medicine.find({ discount: { $gte: 10 } }).skip(skip)
        .limit(limit);
    if (!medicines) {
        throw new ApiError(404, "No medicines found");
    }
    return res.json(new ApiResponse(200,  medicines , "Medicines fetched successfully!"));
});

// get category medicines by admin
const getCategoryMedicines = asyncHandler(async (req, res) => {
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

    return res.json(new ApiResponse(200,   medicines , "Medicines fetched successfully!"));
});

// get single medicine by user
const getSingleMedicine = asyncHandler(async (req, res) => {
    console.log(req.params.id);
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
        throw new ApiError(404, "Medicine not found");
    }
    return res.json(new ApiResponse(200, medicine , "Medicine fetched successfully!"));
});

export {
    AddNewMedicine,
    deleteMedicine,
    updateMedicine,
    getCategoryMedicines,
    getSingleMedicine,
    getHighDiscountMedicines
};
