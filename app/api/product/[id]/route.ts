import connectToDatabase from "@/lib/db"
import Product from "@/lib/models/product"
import { NextRequest, NextResponse } from "next/server";

type TParams = {
    id: string
}

export async function GET(request: NextRequest, context: { params: TParams }) {
    await connectToDatabase()
    try {
        // const products = await Product.find()
        const products = await Product.findById(context.params.id)
        return NextResponse.json(products)
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: "an error occurred"})
    }
}