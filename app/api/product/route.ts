import connectToDatabase from "@/lib/db"
import Product from "@/lib/models/product"
import { NextRequest, NextResponse } from "next/server";
 
export async function GET(request: NextRequest) {
    await connectToDatabase()
    try {
        // const products = await Product.find()
        const products = await Product.find({}).sort({ createdAt: -1 })
        return NextResponse.json(products)
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: "an error occurred"})
    }
}

export async function POST(request: NextRequest) {
    await connectToDatabase()
    try {
        const details = await request.json()
        const newProduct = new Product(details)
        await newProduct.save()
        return NextResponse.json({status: 201, result: newProduct})
    } catch (error) {
        console.log(error);
        return NextResponse.json({status: 201, result: {}})
    }
}