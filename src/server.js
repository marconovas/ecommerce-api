import express from "express";
import cors from "cors";

import productRouter from "./routes/product.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});