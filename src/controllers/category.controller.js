import CategoryService from "../services/category.service.js";

export async function getAllCategories(req, res) {
    try{
        const data = await CategoryService.findAll();

        return res.status(200).json({
            success: true,
            data
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

export async function getCategoryById(req, res) {
    const id = Number(req.params.id);

    try{
        const data = await CategoryService.findById(id);

        if(!data) {
            return res.status(404).json({
                success: false,
                message: "Category not found."
            })
        }

        return res.status(200).json({
            success: true,
            data
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

export async function createCategory(req, res) {
    const data = req.body;

    try{
        const newCategory = await CategoryService.create(data);

        return res.status(201).json({
            success: true,
            data: newCategory
        })
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

export async function updateCategory(req, res) {
    const id = Number(req.params.id);
    const data = req.body;

    try{
        const category = await CategoryService.findById(id);

        if(!category){
            return res.status(404).json({
                success: false,
                message: "Category not Found."
            });
        }

        const updatedCategory = await CategoryService.update(id, data);

        return res.status(200).json({
            success: true,
            data: updatedCategory
        });
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })
    }
}

export async function deleteCategory(req, res) {
    const id = Number(req.params.id);

    try{
        const category = await CategoryService.findById(id);

        if(!category){            
            return res.status(404).json({
                success: false,
                message: "Category not Found."
            })
        }

        await CategoryService.remove(id);

        res.status(200).json({
            success: true,
            message: "Category removed."
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        })        
    }
}

