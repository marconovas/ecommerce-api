import { body, param } from "express-validator";

export const categoryIdValidation = [
    param("id")
        .isInt({ gt: 0 })
        .withMessage("Category id must be  a positive integer.")
];

export const createCategoryValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({ min: 3, max: 50 })
        .withMessage("Must be between 3 and 50 characters.")
]

export const updateCategoryValidation = [
    ...categoryIdValidation,

    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Name cannot be empty.")
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be between 3 and 50 characters.")
]