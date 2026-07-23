import  { Router }  from "express";
import * as OrderController from "../controllers/order.controller.js";
import { createOrderValidation, orderIdValidation, updateOrderValidation } from "../validators/order.validator.js";
import { validate } from "../middlewares/validation.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", OrderController.getAllOrders);

router.get(
    "/:id", 
    orderIdValidation,
    validate,
    OrderController.getOrderById
);

router.post(
    "/",
    verifyToken,
    OrderController.createOrder
);

router.put(
    "/:id",
    verifyToken, 
    updateOrderValidation,
    validate,
    OrderController.updateOrder
);

router.delete(
    "/:id",
    verifyToken, 
    orderIdValidation,
    validate,
    OrderController.deleteOrder
);

export default router;