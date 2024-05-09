import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// create user model (firstName, lastName, email, phone, nic, dob, gender, password)
// validate the email
// passoword hashing (bcrypt)
// compare passowrd
// generate jwt 


const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name is required"],
            minLength: [3, "First Name contaians at least 3 characters"],
        },
        lastName: {
            type: String,
            required: [true, "Last Name is required"],
            minLength: [3, "Last Name contaians at least 3 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required!"],
            validate: [validator.isEmail, "Email is invalid"]
        },
        phone: {
            type: String,
            required: [true, "Phone is required"],
            minLength: [10, "Phone Number must contains exactly 10 digits"],
            maxLength: [10, "Phone Number must contains exactly 10 digits"],

        },
        address: {
            city: {
                type: String,
                // required: true
            },
            country: {
                type: String,
                // required: true
            }
        },
        password: {
            type: String,
            required: true,
            minLength: [8, "Password must contain at least 8 characters"],
            select: false,
        },
        dob: {
            type: Date,
            required: [true, "DOB Is Required!"],
        },
        gender: {
            type: String,
            required: [true, "Gender Is Required!"],
            enum: ["Male", "Female"],
        },
        role: {
            type: String,
            required: true,
            enum: ["Admin", "Patient", "Doctor"]
        },
    },
    { timestamps: true }
);


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};


export const User = mongoose.model("User", userSchema); 