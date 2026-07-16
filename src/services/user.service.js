import prisma from "../prisma/client.js";

class UserService {
    static async findAll() {
        return await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true
            }
        });
    }

    static async findById(id) {
        return await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                name: true
            }
        });
    }

    static async findByEmail(email) {
        return await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                password: true
            }
        })
    }

    static async update(id, data) {
        return await prisma.user.update({
            where: { id },
            data,
            select: {
                id: true,
                email: true,
                name: true
            }
        });
    }

    static async remove(id) {
        return await prisma.user.delete({
            where: { id }
        });
    }
}

export default UserService;