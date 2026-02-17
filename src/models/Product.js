import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        size: { type: Number, required: true },
        type: { type: String, required: true },
        base64: { type: String, required: true },
    },
    { _id: false }
);

const productSchema = new mongoose.Schema(
    {

        ProductTitle: {
            type: String,
            required: true,
            trim: true,
        },

        product_Discription: {
            type: String,
            default: "",
            trim: true,
        },

        product_price: {
            type: Number,
            default: "",
            trim: true,
        },

        discount: {
            type: Number,
            default: "",
            trim: true,
        },

        product_thamnail: {
            type: String,
            required: true,
            trim: true,
        },

        // Array of serviceImages (base64 objects)
        product_Images: {
            type: [String],
            required: true,
            validate: {
                validator: (arr) => Array.isArray(arr) && arr.length > 0,
                message: "At least one service image is required",
            },
        },

        status: {
            type: String,
            enum: ["In-Stock", "Out-of-Stock",],
            default: "In-Stock",
        },
    },
    {
        timestamps: true,
    }
);

const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
