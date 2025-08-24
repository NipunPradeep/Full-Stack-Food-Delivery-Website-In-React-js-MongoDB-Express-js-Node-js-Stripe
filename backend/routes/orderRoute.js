import express from "express";
import authMiddleware from "../middleware/auth.js"; // Fixed with .js
import { placeOrder, verifyOrder,userOrders ,listOrders,updateStatus} from "../controllers/orderController.js"; // Also ensure .js here

const orderRouter = express.Router();
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",  verifyOrder)
orderRouter.post("/userorders", authMiddleware,userOrders);
orderRouter.get('/list',listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;