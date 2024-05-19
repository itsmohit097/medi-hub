import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { Doctor } from "../models/doctor.model.js";
import { generateToken } from "../utilis/jwtToken.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { uploadOnCloudinary } from "../utilis/cloudinary.js"


//! Adding a new doctor by admin only
export const addNewDoctor = asyncHandler(async (req, res, next) => {
    // taking the info from the admin
    const { firstName, lastName, email, phone, password, address, gender, department, specializations, qualifications, experience, availabelSlots, languagesKnown, appointmentCharges } = req.body;

    // checking the info provided by the admin
    if (!firstName || !lastName || !email || !phone || !password || !address || !gender || !department || !specializations || !qualifications || !experience || !availabelSlots || !languagesKnown || !appointmentCharges) {
        throw new ApiError(400, "Please Fill Full Form!");
    }
    console.log(req.body);
    // check if the doctor already exists
    let existedDoctor = await Doctor.findOne({ email });
    if (existedDoctor) {
        throw new ApiError(400, `${existedDoctor.role} with this Email already Registered`);
    }

    // docAvatar
    const docAvatarLocalPath = req.file?.path;

    if (!docAvatarLocalPath) {
        throw new ApiError(400, "Doctor Avatar Path Not Found!");
    }

    const avatar = await uploadOnCloudinary(docAvatarLocalPath);
    if (!avatar) {
        throw new ApiError(400, "Doctor Avatar is required")
    }

    // finally create the user
    const createdDoctor = await Doctor.create({
        firstName,
        lastName,
        email,
        phone,
        password,
        address,
        gender,
        department,
        specializations,
        qualifications,
        experience,
        availabelSlots,
        languagesKnown,
        appointmentCharges,
        role: "Doctor",
        docAvatar: avatar.url,
    });
    generateToken(createdDoctor, "Dcotor Added Successfully!", 200, res);
});


//! Getting all doctors by user
export const getAllDoctors = asyncHandler(async (req, res, next) => {
    const doctors = await Doctor.find({ role: "Doctor" });

    res
        .status(200)
        .json(new ApiResponse(200, doctors, " DOCTORS LIST"));
});

