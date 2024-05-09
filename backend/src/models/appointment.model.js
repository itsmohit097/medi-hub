import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the patient (user) who booked the appointment
        required: [true, "Patient ID is required"],
    },
    patientFirstName: {
        type: String,
    },
    patientLastName: {
        type: String,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", // Reference to the doctor who will handle the appointment
        required: [true, "Doctor ID is required"],
    },
    doctorFirstName: {
        type: String,
    },
    doctorLastName: {
        type: String,
    },
    experience: {
        type: String,
    },
    appointmentCharges: {
        type: String,
    },
    city: {
        type: String,
        required: [true, "City is required"],
    },
    pincode: {
        type: String,
        required: [true, "Pincode is required"],
    },
    appointmentDate: {
        type: Date,
        required: [true, "Appointment date is required"],
    },
    department: {
        type: String,
        required: [true, "department is required"],
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },
}, { timestamps: true });


export const Appointment = mongoose.model("Appointment", appointmentSchema);