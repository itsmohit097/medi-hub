import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { User } from "../models/user.model.js";
import { generateToken } from "../utilis/jwtToken.js";
import { Appointment } from "../models/appointment.model.js";

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
export const getUserAppointmentInfo = asyncHandler(async (req, res, next) => {
    const { appointmentId } = req.params;
    try {
        const pipeline = [
            {
                $match:
                {
                    _id: mongoose.Types.ObjectId(appointmentId)
                }
            },
            {
                $lookup: {
                    from: "User",
                    localField: "patient",
                    foreignField: "_id",
                    as: "patientDetails"
                }
            },
            {
                $unwind: "$patientDetails"
            },
            {
                $lookup: {
                    from: "Doctor",
                    localField: "doctor",
                    foreignField: "_id",
                    as: "doctorDetails"
                }
            },
            {
                $unwind: "$doctorDetails"
            },
            {
                $project: {
                    _id: 1,
                    appointmentDate: 1,
                    status: 1,
                    city: 1,
                    pincode: 1,
                    department: 1,
                    'patientDetails.firstName': 1,
                    'patientDetails.lastName': 1,
                    'patientDetails.email': 1,
                    'patientDetails.phone': 1,
                    'doctorDetails.firstName': 1,
                    'doctorDetails.lastName': 1,
                    'doctorDetails.email': 1,
                    'doctorDetails.phone': 1,
                    'doctorDetails.department': 1,
                    'doctorDetails.specializations': 1,
                    'doctorDetails.experience': 1
                }
            }
        ];
        const appointmentInfo = await Appointment.aggregate(pipeline);
        if (appointmentInfo.length === 0) {
            throw new ApiError(404, "Appointment not found");
        }
        res.status(200).json(new ApiResponse(200, appointmentInfo, "Appointment Details"));

    } catch {
        console.error(err);
        res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }

});