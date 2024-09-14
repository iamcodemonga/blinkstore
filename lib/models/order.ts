import { Schema, model, models } from "mongoose";

export interface IOrder extends Document {
    buyer:  string,
    seller?: string,
    product_id: string,
    product_title: string,
    buyer_name: string,
    email: string,
    address: string,
    price: number,
}

const orderSchema = new Schema({
    buyer: { type: String, required: true },
    seller: { type: String },
    product_id: { type: String, required: true },
    product_title: { type: String, required: true },
    buyer_name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true })

const Order =models.Order || model<IOrder>("Order", orderSchema);

export default Order;