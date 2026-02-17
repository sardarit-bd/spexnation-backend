import { Worker } from "bullmq";
import Product from "../models/Product.js";
import uploadFilesToCloudinary from "../utils/uploadFilesToCloudinary.js";


new Worker("product-create", async (job) => {

    const data = job.data.productData;


    const product_thamnail = [data.product_thamnail];
    const product_Images = data.product_Images || [];


    const pt_Images = await uploadFilesToCloudinary(product_Images);
    const p_thamnail = await uploadFilesToCloudinary(product_thamnail);




    data.product_thamnail = p_thamnail[0];
    data.product_Images = pt_Images;



    // Replace Base64 with URLs before saving
    const finalData = {
        ...data,
    };

    // Save to MongoDB
    const product = await Product.create(finalData);
    return product;
},
    {
        concurrency: 3, // Process 3 products in parallel
        connection: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASSWORD,
        },
    }
);

