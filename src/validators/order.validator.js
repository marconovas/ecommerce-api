import { body, param } from "express-validator";

export const orderIdValidation = [
    param("id")
        .isInt({ gt: 0 })
        .withMessage("Order id must be a positive integer.")
];

export const updateOrderValidation = [
    ...orderIdValidation,

    body("status")
        .optional()
        .isIn(["PENDING", "PAID", "CANCELLED"])
        .withMessage("Invalid order status.")
];