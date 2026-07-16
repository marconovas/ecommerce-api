import AuthService from "../services/auth.service.js";

export async function register(req, res) {
    const data = req.body;

    try{
        const user = await AuthService.register(data);

        return res.status(201).json({
            success: true,
            data: user
        })
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            succes: false,
            message: error.message
        })
    }
}

export async function login(req, res) {
    const data = req.body;

    try{
        const user = await AuthService.login(data);

        return res.status(200).json({
            succes: true,
            user
        });
    } catch(error) {
        console.error(error);
        
        return res.status(401).json({
            succes: false,
            message: error.message
        });
    }
}