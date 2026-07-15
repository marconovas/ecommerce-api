import prisma from "../prisma/client.js";

class CategoryService {
    static async findAll(){
        return await prisma.category.findMany();
    }

    static async findById(id) {
        return await prisma.category.findUnique({
            where: { id }
        });
    }

    static async create(data) {
        return await prisma.category.create({
            data
        });
    }

    static async update(id, data){
        return await prisma.category.update({
            where: {
                id
            },
            data
        })
    }

    static async remove(id) {
        return await prisma.category.delete({
            where: { id }
        })
    }
}

export default CategoryService;
