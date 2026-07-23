import prisma from "../prisma/client.js";

class OrderService {
    static async findAll() {
        return await prisma.order.findMany({
            include: {
                user: true,
                orderItems: {
                    include: {
                        product: true
                    }
                }
            }
        });
    }

    static async findById(id) {
        return await prisma.order.findUnique({
            where: { id },
            include: {
                user: true,
                orderItems: {
                    include: {
                        product: true
                    }
                }
            }
        });
    }

    static async create(data) {
        return await prisma.order.create({ 
            data,
            include: {
                user: true,
                orderItems: true
            }
        });
    }

    static async update(id, data) {
        return await prisma.order.update({
            where: { id },
            data,
            include: {
                user: true,
                orderItems: true
            }
        });
    }

    static async remove(id) {
        return await prisma.order.delete({
            where: { id }
        });
    }
}

export default OrderService;