import { Document, Schema, model, models } from "mongoose";

export interface IProduct extends Document {
    owner:  string,
    image: string,
    title: string,
    description: string,
    price: number,
}

const productSchema = new Schema({
    owner: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true })

const Product =models.Product || model<IProduct>("Product", productSchema);

export default Product;