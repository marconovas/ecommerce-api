import ProductService from "../services/product.service.js";

async function getAllProducts(req, res) {
    try{
        const products = await ProductService.findAll();
        
        return res.status(200).json({
            success: true,
            data: products
        })
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}

async function getProductById(req, res) {
    const  id  = Number(req.params.id);

    try{
        const product = await ProductService.findById(id);

        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        return res.status(200).json({
            success: true,
            data: product
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

async function createProduct(req, res) {
    const data  = req.body;

    try{
        const product = await ProductService.create(data);

        return res.status(201).json({
            success: true,
            data: product
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

async function updateProduct(req, res) {
    const  id  = Number(req.params.id);
    const data = req.body;

    try{
        const product = await ProductService.findById(id);

        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        const updatedProduct = await ProductService.update(id, data);

        return res.status(200).json({
            success: true,
            data: updatedProduct
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}

async function deleteProduct(req, res) {
    const id = Number(req.params.id);

    try{
        const product = await ProductService.findById(id);

        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        await ProductService.remove(id);

        return res.status(200).json({
            success: true,
            message: "Product removed."
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct }