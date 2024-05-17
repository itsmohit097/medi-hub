import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { ContactUs } from "../models/contactus.model.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // Convert the string to a boolean
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export const sendMessage = asyncHandler(async (req, res, next) => {
    const { email, message } = req.body;

    if (!email || !message) {
        throw new ApiError(400, "Please fill in the entire form!");
    }

    // Store the message in the database
    const createdMessage = await ContactUs.create({
        email,
        message,
    });

    // Configure email message
    const mailOptions = {
        from: email, // Sender's email address
        to: process.env.SMTP_USER, // Recipient's email address
        subject: "New Message from User: MediHub", // Subject line of the email
        text: message, // The message content provided by the user
    };
    // send mail
    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json(new ApiResponse(200, info, "Message and Email sent successfully"));
    } catch (error) {
        throw new ApiError(400, "Message sent but email failed!");
    }
}
);

export const getAllMessages = asyncHandler(async (req, res, next) => {
    const messages = await ContactUs.find();
    return res.status(200).json(new ApiResponse(200, messages));
});
