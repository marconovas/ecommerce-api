import { Router } from "express";
import * as ProductController from "../controllers/product.controller.js";
import { createProductValidation, productIdValidation, updateProductValidation } from "../validators/product.validator.js";
import { validate } from "../middlewares/validation.middleware.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = Router();

router.get("/", ProductController.getAllProducts);

router.get(
    "/:id",
    productIdValidation,
    validate, 
    ProductController.getProductById
);

router.post(
    "/",
    verifyToken,
    createProductValidation,
    validate,
    ProductController.createProduct
);

router.put(
    "/:id",
    verifyToken,
    updateProductValidation,
    validate,
    ProductController.updateProduct
);

router.delete(
    "/:id",
    verifyToken,
    productIdValidation,
    validate,    
    ProductController.deleteProduct
);

export default router;