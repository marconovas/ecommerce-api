import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
import { createUserValidation, updateUserValidation, userIdValidation } from "../validators/user.validator.js";
import { validate } from "../middlewares/validation.middleware.js";
const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", 
    userIdValidation,
    validate,
    UserController.getUserById
);

router.post("/", 
    createUserValidation,
    validate,
    UserController.createUser
);

router.put("/:id", 
    updateUserValidation,
    validate,
    UserController.updateUser
);

router.delete("/:id", 
    userIdValidation,
    validate,
    UserController.deleteUser
);

export default router;