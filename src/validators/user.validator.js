import { body, param } from "express-validator";

export const userIdValidation = [
    param("id")
        .isInt({ gt: 0 })
        .withMessage("User id must be a positive integer.")
]

export const createUserValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be between 3 and 50 characters."),
    
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Invalid email format.")
        .normalizeEmail(),
    
    body("password")
        .notEmpty()
        .withMessage("Password is required.")
        .isLength({ min: 8, max: 100 })
        .withMessage("Password must be between 8 and 100 characters long.")

]

export const updateUserValidation = [
    ...userIdValidation,

    body("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be between 3 and 50 characters."),

    body("email")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Email is required.")
        .isEmail()
        .withMessage("Invalid email format.")
        .normalizeEmail(),

    body("password")
        .optional()
        .isLength({ min: 8, max: 100 })
        .withMessage("Password must be between 8 and 100 characters long.")
    

]