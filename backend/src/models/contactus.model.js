import mongoose from "mongoose";
import validator from "validator";

const contactusSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message Must Contain At Least 10 Characters!"],
    },
});

export const ContactUs = mongoose.model("ContactUs", contactusSchema);