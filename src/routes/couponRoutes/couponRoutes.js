import express from "express";
import { createCoupon, deleteCoupon, getAllCoupon } from "../../controllers/couponController/couponController.js";
import { authorize, protect } from "../../middlewares/authMiddleware.js";

const router = express.Router();

/********* Import Here Controller Files **********/


router.get("/allcoupon", getAllCoupon);
router.post("/addcoupon", protect, authorize("admin"), createCoupon);
router.delete("/deletecoupon/:id", protect, authorize("admin"), deleteCoupon);




export default router;
