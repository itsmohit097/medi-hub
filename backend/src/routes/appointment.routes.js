import express from "express";
import { bookAppointment, deleteAppointment, updateAppointmentStatus, getAllAppointments } from "../controllers/appointment.controller.js";
import { isPatientAuthenticated, isDoctorAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();


router.post("/book", isPatientAuthenticated, isDoctorAuthenticated, bookAppointment);
router.put("/update/:id", isDoctorAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isDoctorAuthenticated, deleteAppointment);
router.get("/getall", isDoctorAuthenticated, getAllAppointments);






export default router;
