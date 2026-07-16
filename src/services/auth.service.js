import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prisma/client.js";
import UserService from "./user.service.js"

class AuthService {
    static async register({ email, name, password}) {
        const isExistingEmail = await UserService.findByEmail(email);

        if(isExistingEmail){
            throw new Error("Email already in use.");
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email, 
                name,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        return user;
    }

    static async login({ email, password }) {
        const user = await UserService.findByEmail(email);

        if(!user){
            throw new Error("Invalid credentials");
        }

        const valid = await bcrypt.compare(password, user.password);

        if(!valid){
            throw new Error("Invalid credentials.")
        }

        //JWT generation
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    }

}

export default AuthService;