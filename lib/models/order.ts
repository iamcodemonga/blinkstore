import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    buyer: { type: String, required: true },
    seller: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true })

const OrderModel = models.order || model("order", orderSchema);

export default OrderModel;