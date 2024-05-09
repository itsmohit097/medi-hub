import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { User } from "../models/user.model.js";
import { generateToken } from "../utilis/jwtToken.js";


//! Register the user
export const patientRegister = asyncHandler(async (req, res, next) => {
    // taking the info from the user
    const { firstName, lastName, email, phone, address, dob, gender, password } = req.body;

    // checking the info provided by the user
    if (!firstName || !lastName || !email || !phone || !address || !dob || !gender || !password) {
        throw new ApiError(400, "Please Fill Full Form!");
    }

    // check if the user already exists
    let existedUser = await User.findOne({ email });
    if (existedUser) {
        throw new ApiError(400, `${existedUser.role} with this Email already Registered`);
    }

    // finally create the user
    const createdUser = await User.create({
        firstName,
        lastName,
        email,
        phone,
        address,
        dob,
        gender,
        password,
        role: "Patient",
    });
    generateToken(createdUser, "User Registrated Successfully!", 200, res);
    // return res.status(201).json(
    //     new ApiResponse(200, createdUser, "User registered Successfully")
    // )
});


//! Getting details for the user(patiend & admin)
export const getUserDetails = asyncHandler(async (req, res, next) => {
    const user = req.user;

    res
        .status(200)
        .json(new ApiResponse(200, user, `${user.role} Details`));
});

//! Getting details for the doctro
export const getDoctorDetails = asyncHandler(async (req, res, next) => {
    const user = req.doctor;

    res
        .status(200)
        .json(new ApiResponse(200, user, `${user.role} Details`));
});