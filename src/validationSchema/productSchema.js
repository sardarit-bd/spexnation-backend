import Joi from "joi";

const productSchema = Joi.object({

    ProductTitle: Joi.string().min(2).max(100).required(),

    collection: Joi.string().allow("").required(),

    shortdes: Joi.string().allow("").required(),

    product_Discription: Joi.string().allow("").required(),

    product_price: Joi.number().allow("").required(),

    discount: Joi.number().allow("").optional(),

    color: Joi.array().min(1).max(5).required(),

    size: Joi.string().allow("").optional(),


    weight: Joi.string().allow("").optional(),

    meterial: Joi.string().allow("").optional(),

    style: Joi.string().allow("").optional(),

    product_thamnail: Joi.string().required(),

    product_Images: Joi.array()
        .min(1)
        .max(5)
        .required(),
});

export default productSchema;
