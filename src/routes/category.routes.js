import { Router } from "express";
import * as CategoryController from "../controllers/category.controller.js";
import { categoryIdValidation, createCategoryValidator, updateCategoryValidation } from "../validators/category.validator.js";
import { validate } from "../middlewares/validation.middleware.js";
const router = Router();

router.get("/", CategoryController.getAllCategories);

router.get("/:id", 
    categoryIdValidation,
    validate,
    CategoryController.getCategoryById
);

router.post("/", 
    createCategoryValidator,
    validate,
    CategoryController.createCategory
);

router.put("/:id", 
    updateCategoryValidation,
    validate,
    CategoryController.updateCategory
);

router.delete("/:id", 
    categoryIdValidation,
    validate,
    CategoryController.deleteCategory
);

export default router;