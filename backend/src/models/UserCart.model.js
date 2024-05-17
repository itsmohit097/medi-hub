import mongoose ,{Schema, model }from "mongoose";

const UserCartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
    medicineId: {
        type: Schema.Types.ObjectId,
        ref: "Medicine",
        required: [true, "Medicine is required"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
    },
    totalPrice: {
        type: Number,
        required: [true, "Total Price is required"],
    },
    status: {
        type: String,
        required: [true, "Status is required"],
        enum: ["Pending", "Completed"],
        default: "Pending",
    }
}, { timestamps: true });

export const UserCart = model("UserCart", UserCartSchema);