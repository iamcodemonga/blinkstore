import connectToDatabase from "@/lib/db"
import Order from "@/lib/models/order";
import Product from "@/lib/models/product"
import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS, createPostResponse } from "@solana/actions";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const id = searchParams.get('id');

    await connectToDatabase()
    try {
        const product = await Product.findById(id);
        const baseHref = new URL(
            `/api/actions/product?id=${product.id}&productname=${product.title}&seller=${product.owner}&price=${product.price}`,
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
    console.log(searchParams.get('seller') as string);
    // const seller_test_acc: PublicKey = new PublicKey(process.env.SELLER_ADDRESS as string);

    try {
        let wallet: PublicKey;
        let seller: PublicKey;
        try {
            wallet = new PublicKey(account)
        } catch (error) {
            throw "Invalid account provided. Its not a real publickey";
        }

        try {
            seller = new PublicKey(searchParams.get('seller') as string);
        } catch (error) {
            throw "Invalid seller account. Don't purchase!";
        }
    
        const connection = new Connection(clusterApiUrl("devnet"))

        const minimumBalance = await connection.getMinimumBalanceForRentExemption(
            0, // note: simple accounts that just store native SOL have `0` bytes of data
          );
          if (Number(wallet) * LAMPORTS_PER_SOL < minimumBalance) {
            throw `account may not be rent exempt: ${seller.toBase58()}`;
          }
    
        const transaction = new Transaction().add(SystemProgram.transfer({
            fromPubkey: wallet,
            lamports: Number(price) * LAMPORTS_PER_SOL,
            toPubkey: seller,
            programId: SystemProgram.programId
        }));
        transaction.feePayer = wallet;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    
        const payload: ActionPostResponse = await createPostResponse({
            fields: {
                transaction,
                message: "Thanks for purchasing👍! Your order is being processed, check your email for follow-up 🚀  "
            },
        })
        const order = new Order({ buyer: account, seller: searchParams.get('seller'), product_id: productid, buyer_name: buyername, product_title: productname, email, address, price: Number(price)})
        await order.save();
        // console.log({ buyer: account, seller: searchParams.get('seller'), product_id: productid, buyer_name: buyername, product_title: productname, email, address, price: Number(price)});
        
        return NextResponse.json(payload, {
            headers: ACTIONS_CORS_HEADERS
        });
    } catch (error) {
        let message = "an unknown error occurred!"
        if (typeof error == "string") message = error;
        return NextResponse.json({ message }, {
            headers: ACTIONS_CORS_HEADERS
        });
    }
}

// http://localhost:3000/api/actions/product?id=66de28fe91786998d331ffaf