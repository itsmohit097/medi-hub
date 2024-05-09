import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// create doctor model
// validate the email
// passoword hashing (bcrypt)
// compare passowrd
// generate jwt 


const doctorSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must contain at least 8 characters"],
        select: false,
    },
    address: {
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
    },
    gender: {
        type: String,
        required: [true, "Gender Is Required!"],
        enum: ["Male", "Female"],
    },
    department: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    specializations: [{   //Array of specializations
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    qualifications: {
        type: [String], //Array of qualifications
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    availabelSlots: {
        days: {
            type: [String],
            required: true
        },
        hours: {
            type: String,
            required: true
        }
    },
    docAvatar: {
        type: String, // cloudinary url
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Patient", "Doctor"]
    },
    languagesKnown: {
        type: [String],  //Array of languages
        required: true
    },
    appointmentCharges: {
        type: String,
        required: true
    }
},
    { timestamps: true });

doctorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

doctorSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
doctorSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};


export const Doctor = mongoose.model("Doctor", doctorSchema);
