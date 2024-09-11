import connectToDatabase from "@/lib/db"
import Order from "@/lib/models/order";
import Product from "@/lib/models/product"
import { ActionGetResponse, ActionPostRequest, ACTIONS_CORS_HEADERS } from "@solana/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const id = searchParams.get('id');

    await connectToDatabase()
    try {
        const product = await Product.findById(id);
        const baseHref = new URL(
            `/api/actions/product?id=${product.id}&productname=${product.title}&price=${product.price}`,
            new URL(req.url).origin,
          ).toString();
        
        const payload: ActionGetResponse = {
            icon: new URL(`${product.image}`, new URL(req.url).origin).toString(),
            label: "Buy now",
            title: product.title.toString(),
            description: product.description.toString(),
            links: {
                actions: [
                    {
                        label: `Place order (${product.price}SOL)`, // button text
                        href: `${baseHref}&buyername={buyername}&email={email}&address={address}`, // this href will have a text input
                        parameters: [
                          {
                            name: "buyername", // parameter name in the `href` above
                            label: "Enter your full name", // placeholder of the text input
                            required: true,
                          },
                          {
                            name: "email", // parameter name in the `href` above
                            label: "Enter your email address", // placeholder of the text input
                            required: true,
                          },
                          {
                            name: "address", // parameter name in the `href` above
                            label: "Enter your preferred delivery address", // placeholder of the text input
                            required: true,
                          },
                        ],
                    },
                ]
            }
        }
        return NextResponse.json(payload, {
            headers: ACTIONS_CORS_HEADERS
        });
    } catch (error) {
        console.log(error);
        let message = "An unknown error occurred";
        if (typeof error == "string") message = error;
        return NextResponse.json(message, {
            status: 400,
            headers: ACTIONS_CORS_HEADERS,
        });
    }
} 

export const OPTIONS = GET;

export async function POST (req: NextRequest) {
    const requestUrl = new URL(req.url);
    const searchParams = req.nextUrl.searchParams
    const buyername = searchParams.get('buyername');
    const productname = searchParams.get('productname');
    const productid = searchParams.get('id');
    const email = searchParams.get('email');
    const address = searchParams.get('address');
    const price = searchParams.get('price');
    const { account }: ActionPostRequest = await req.json();
    // const order = new Order({ buyer: account, product_id: productid, buyer_name: buyername, product_name: productname, email, address, price: Number(price)})
    console.log({ buyer: account, product_id: productid, buyer_name: buyername, product_name: productname, email, address, price: Number(price)});
    return NextResponse.json({ buyer: account, product_id: productid, buyer_name: buyername, product_name: productname, email, address, price: Number(price)});
}

// http://localhost:3000/api/actions/product?id=66de28fe91786998d331ffaf