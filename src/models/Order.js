import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {

        fullname: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        address: {
            type: String,
            required: true,
            trim: true,
        },

        city: {
            type: String,
            required: true,
            trim: true,
        },
        zipcode: {
            type: String,
            required: true,
            trim: true,
        },
        hasData: {
            type: Array,
            default: [],
            required: true,
        }


    },
    {
        timestamps: true,
    }
);

const Order =
    mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;