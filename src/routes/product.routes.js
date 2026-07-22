import { Router } from "express";
import * as ProductController from "../controllers/product.controller.js";
import { createProductValidation, productIdValidation, updateProductValidation } from "../validators/product.validator.js";
import { validate } from "../middlewares/validation.middleware.js";
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
    createProductValidation,
    validate,
    ProductController.createProduct
);

router.put(
    "/:id",
    updateProductValidation,
    validate,
    ProductController.updateProduct
);

router.delete(
    "/:id",
    productIdValidation,
    validate,    
    ProductController.deleteProduct
);

export default router;