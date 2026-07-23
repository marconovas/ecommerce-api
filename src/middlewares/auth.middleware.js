import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export function verifyToken(req, res, next) {
    const auth = req.headers.authorization;

    if(!auth){
        return res.status(401).json({
            success: false,
            message: "Token required."
        });
    }

    if(!auth.startsWith("Bearer ")) {
        return res.status(401).json({
            succes: false,
            message: "Invalid authorization header."
        })
    }

    const token = auth.split(" ")[1];

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Token required."
        })
    }

    try{
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch(error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        })
    }
}