import express from "express";
import cors from "cors";

import productRouter from "./routes/product.routes.js";
import categoriesRouter from "./routes/category.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/categories", categoriesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});