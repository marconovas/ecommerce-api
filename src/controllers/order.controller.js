import OrderService from "../services/order.service.js";

export async function getAllOrders(req, res) {
    try{
        const data = await OrderService.findAll();

        return res.status(200).json({
            success: true,
            data
        })
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
}

export async function getOrderById(req, res) {
    const id = Number(req.params.id);

    try{
        const data = await OrderService.findById(id);

        if(!data) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
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
        });
    }
}

export async function createOrder(req, res) {
    const orderData = {
        ...req.body,
        userId: req.user.id
    };

    try{
        const data = await OrderService.create(orderData);

        return res.status(201).json({
            success: true,
            data
        });
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}

export async function updateOrder(req, res) {
    const orderId = Number(req.params.id);
    const orderData = req.body;

    try{
        const order = await OrderService.findById(orderId);

        if(!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }

        const data = await OrderService.update(orderId, orderData);

        return res.status(200).json({
            success: true,
            data
        });
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}

export async function deleteOrder(req, res) {
    const orderId = Number(req.params.id);

    try{
        const order = await OrderService.findById(orderId);

        if(!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found."
            });
        }

        await OrderService.remove(orderId);

        return res.status(200).json({
            success: true,
            message: "Order removed."
        });
    } catch(error) {
        console.error(error);
        
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}
