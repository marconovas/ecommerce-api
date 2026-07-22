import { body } from "express-validator";

export const registerValidation = [
    body("name")
        .trim()    
        .notEmpty()
        .withMessage("Name is required."),
    
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

export const loginValidation = [
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
]