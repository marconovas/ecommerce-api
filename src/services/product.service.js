import prisma from "../prisma/client.js";

class ProductService {
    static async findAll() {
        return await prisma.product.findMany({
            include: {
                category: true
            }
        })
    }

    static async findById(id) {
        return await prisma.product.findUnique({
            where: { id },
            include: {
                category: true
            }
        })
    }
    
    static async create(data) {
        return await prisma.product.create({
            data,
            include: {
                category: true
            } 
        });
    }

    static async update(id, data) {
        return await prisma.product.update({
            where: { id },
            data,
            include: {
                category: true
            }
        })
    }

    static async remove(id) {
        return await prisma.product.delete({
            where: { id }
        })
    }
}

export default ProductService;