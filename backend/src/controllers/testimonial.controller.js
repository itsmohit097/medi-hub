import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { Testimonial } from "../models/testimonial.model.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { uploadOnCloudinary } from "../utilis/cloudinary.js"


//! Adding a new testimonial by any user
export const addNewTestimonial = asyncHandler(async (req, res, next) => {
    // taking the info from the user
    const { fullName, email, country, state, review } = req.body;

    // checking the info provided by the user
    if (!fullName || !email || !country || !state || !review) {
        throw new ApiError(400, "Please Fill Full Form!");
    }
    console.log(req.body);

    // testimonialImage
    const testimonialImgLocalPath = req.file?.path;

    if (!testimonialImgLocalPath) {
        throw new ApiError(400, "Testimonial Image Path Not Found!");
    }

    const testimonialImg = await uploadOnCloudinary(testimonialImgLocalPath);
    if (!testimonialImg) {
        throw new ApiError(400, "Testimonial Image is required")
    }

    // finally create the testimonial
    const createdTestimonial = await Testimonial.create({
        fullName,
        email,
        country,
        state,
        review,
        testimonialImg: testimonialImg.url,
    });

    res
        .status(200)
        .json(new ApiResponse(200, createdTestimonial, "Testimonial created successfully"));
});


//! Getting all testimonials by admin
export const getAllTestimonial = asyncHandler(async (req, res, next) => {
    const testimonials = await Testimonial.find();

    res
        .status(200)
        .json(new ApiResponse(200, testimonials, " TESTIMONIALS  LIST"));
});

