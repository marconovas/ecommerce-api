import UserService from "../services/user.service.js";

export async function getAllUsers(req, res) {
    try{
        const data = await UserService.findAll();

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

export async function getUserById(req, res) {
    const id = Number(req.params.id);

    try{
        const data = await UserService.findById(id);

        if(!data){
            return res.status(404).json({
                success: false,
                message: "User not Found."
            });
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
        })
    }
}

export async function createUser(req, res) {
    const data = req.body;

    try{
        const newUser = await UserService.create(data);

        return res.status(201).json({
            success: true,
            data: newUser
        });
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

export async function updateUser(req, res) {
    const id = Number(req.params.id);
    const data = req.body;

    try{
        const user = await UserService.findById(id);

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not Found."
            });
        }

        const updatedUser = await UserService.update(id, data);

        return res.status(200).json({
            success: true,
            data: updatedUser
        });
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

export async function deleteUser(req, res) {
    const id = Number(req.params.id);

    try{
        const user = await UserService.findById(id);

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not Found."
            });
        }

        await UserService.remove(id);

        return res.status(200).json({
            success: true,
            message: "User removed."
        });
    } catch(error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });        
    }
}