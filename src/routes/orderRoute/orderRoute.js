import express from "express";
import {
    createOrder, deleteOrder, getAllOrders, getSingleOrder,
    updateOrder
} from "../../controllers/orderController/orderController.js";


const router = express.Router();

router.post("/createorder", createOrder);
router.get("/allorders", getAllOrders);
router.get("/singleorder/:id", getSingleOrder);
router.put("/updateorder/:id", updateOrder);
router.delete("/deleteorder/:id", deleteOrder);



export default router;