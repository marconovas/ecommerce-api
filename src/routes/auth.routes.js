import Router from "express"
import * as AuthController from "../controllers/auth.controller.js";
import { loginValidation, registerValidation } from "../validators/auth.validator.js";
import { validate } from "../middlewares/validation.middleware.js";
const router = Router();

router.post("/register", 
    registerValidation,
    validate,
    AuthController.register
);
router.post("/login", 
    loginValidation,
    validate,
    AuthController.login
);

export default router;