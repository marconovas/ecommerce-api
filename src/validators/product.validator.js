import { body, param } from "express-validator";

export const productIdValidation = [
    param("id")
        .isInt({ gt: 0 })
        .withMessage("Product id must be a positive integer.")
];

export const createProductValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is Required."),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required."),

    body("price")
        .isFloat({ gt: 0 })
        .withMessage("Price must be greater than 0.")
        .toFloat(),
    
    body("stock")
        .isInt({ min: 0 })
        .withMessage("Stock cannot be negative."),
    
    body("categoryId")
        .isInt({ gt: 0 })
        .withMessage("Category id is invalid.")
];

export const updateProductValidation = [
    ...productIdValidation,

    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Name cannot be empty."),
    
    body("description")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Description cannot be empty."),

    body("price")
        .optional()
        .isFloat({ gt: 0 })
        .withMessage("Price must be greater than 0.")
        .toFloat(),

    body("stock")
        .optional()
        .isInt({ min: 0 })
        .withMessage("Stock cannot be negative."),

    body("categoryId")
        .optional()
        .isInt({ gt: 0 })
        .withMessage("Category id is invalid.")
]