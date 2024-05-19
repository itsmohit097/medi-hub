import mongoose, { Schema, model } from "mongoose";

const medicineSchema = new Schema({
    name: {
        type: String,
        required: [true, "Medicine Name is required"],
        minLength: [3, "Medicine Name contaians at least 3 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Description should contain at least 10 characters"],
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["Tablet", "Syrup", "Injection", "Drops", "Cream", "Powder", "Lotion", "Inhaler"],
    },
    manufacturer: {
        type: String,
        required: [true, "Manufacturer is required"],
    },
    expiryDate: {
        type: Date,
        required: [true, "Expiry Date is required"],
    },
    stock: {
        type: Number,
        required: [true, "Stock is required"],
    },
    image: {
        type: String, // cloudinary url
        required: [true, "Image is required"],
    },
    discount: {
        type: Number,
        required: [true, "Discount is required"],
    }
}, { timestamps: true });

export const Medicine = model("Medicine", medicineSchema);