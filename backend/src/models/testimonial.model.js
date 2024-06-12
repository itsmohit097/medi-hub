import mongoose from "mongoose";
import validator from "validator";

const TestimonialSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required!"],
            validate: [validator.isEmail, "Email is invalid"]
        },
        country: {
            type: String,
            required: [true, "Country is required!"],
        },
        state: {
            type: String,
            required: [true, "State is required!"],
        },
        review: {
            type: String,
        },
        testimonialImg: {
            type: String, // cloudinary url
        }
    },
    { timestamps: true }
);


export const Testimonial = mongoose.model("Testimonial", TestimonialSchema); 