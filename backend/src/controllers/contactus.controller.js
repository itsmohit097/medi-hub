import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { ContactUs } from "../models/contactus.model.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, message, phone } = req.body;
    if (!firstName || !lastName || !email || !message || !phone) {
        throw new ApiError(400, "Please Fill Full Form!");
    }

    const createdMessage = await ContactUs.create({
        firstName,
        lastName,
        email,
        phone,
        message
    });

    return res.status(200).json(
        new ApiResponse(200, createdMessage, "Message Sent")
    );
});

export const getAllMessages = asyncHandler(async (req, res, next) => {
    const messages = await ContactUs.find();
    return res.status(200).json(
        new ApiResponse(200, messages)
    );
});