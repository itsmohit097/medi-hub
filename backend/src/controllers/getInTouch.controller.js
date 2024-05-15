import nodemailer from "nodemailer";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";

export const sendEmail = async (req, res, next) => {
  const { email, message } = req.body;

  if (!email || !message) {
    throw new ApiError(400, "Please fill full form");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Configure email message
  const mailOptions = {
    from: email, // Set the sender's email address to the user's email
    to: "mohitk1595@gmail.com", // Set the recipient's email address to your email
    subject: "New Message from User: Medi Hub", // Subject line of the email
    text: message, // The message content provided by the user
  };

  // send mail
  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json(new ApiResponse(200, info, "Email sent"));
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(400).json(new ApiResponse(400, error.message, "Email not sent"));
  }
};
