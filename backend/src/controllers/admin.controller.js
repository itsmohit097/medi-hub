import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { User } from "../models/user.model.js";
import { generateToken } from "../utilis/jwtToken.js";


//! Adding a new admin
export const addNewAdmin = asyncHandler(async (req, res, next) => {
    // taking the info from the admin
    const { firstName, lastName, email, phone, address, dob, gender, password } = req.body;

    // checking the info provided by the admin
    if (!firstName || !lastName || !email || !phone || !address || !dob || !gender || !password) {
        throw new ApiError(400, "Please Fill Full Form!");
    }

    // check if the admin already exists
    let existedAdmin = await User.findOne({ email });
    if (existedAdmin) {
        throw new ApiError(400, `${existedAdmin.role} with this Email already Registered`);
    }

    // finally create the user
    const createdAdmin = await User.create({
        firstName,
        lastName,
        email,
        phone,
        address,
        dob,
        gender,
        password,
        role: "Admin",
    });
    generateToken(createdAdmin, "Admin Added Successfully!", 200, res);
});