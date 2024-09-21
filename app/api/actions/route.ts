import connectToDatabase from "@/lib/db"
import Order from "@/lib/models/order";
import Product from "@/lib/models/product"
import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS, createActionHeaders, createPostResponse } from "@solana/actions";
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import bs58 from "bs58";
import { NextRequest, NextResponse } from "next/server";

type TParams = {
    id: string
}

type TOrderDetails = {
    buyer: string;
    seller: string;
    product_id: string;
    buyer_name: string;
    product_title: string;
    email: string;
    address: string;
    price: number;
}

const headers = {
    ...createActionHeaders({
        chainId: "devnet",
        actionVersion: "2.2.1"
    }),
    "Content-Type": "application/json",
}

async function validatePublicKey(account: string): Promise<PublicKey> {
    try {
        return new PublicKey(account);
    } catch {
        throw new Error("Invalid account provided. It's not a real public key.");
    }
}

async function getMinimumBalance(connection: Connection, account: PublicKey): Promise<void> {
    const minimumBalance = await connection.getMinimumBalanceForRentExemption(0);
    if (Number(account.toBase58()) * LAMPORTS_PER_SOL < minimumBalance) {
        throw new Error("Account may not be rent exempt.");
    }
}

async function createTransaction(connection: Connection, wallet: PublicKey, seller: PublicKey, price: number): Promise<Transaction> {
    const keypair = Keypair.fromSecretKey(bs58.decode(process.env.SECRETKEY as string));
    const transaction = new Transaction()

    transaction.feePayer = wallet;
    transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    transaction.add(SystemProgram.transfer({
        fromPubkey: wallet,
        lamports: price * LAMPORTS_PER_SOL,
        toPubkey: seller,
        programId: SystemProgram.programId,
    }));
    // transaction.sign(keypair)
    return transaction;
}

async function confirmTransaction(connection: Connection, transaction: Transaction, signers: any[]): Promise<void> {
    // const signature = await connection.sendTransaction(transaction, signers);
    const signature = await sendAndConfirmTransaction(connection, transaction, signers);
    console.log(signature);
    // await connection.confirmTransaction(signature, "confirmed");
}

async function saveOrder(orderDetails: TOrderDetails): Promise<void> {
    const order = new Order(orderDetails);
    await order.save();
}

export async function GET (req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    let id = searchParams.get('id');
    if (!id) {
        id = "66ef03726072a13d9bcc9150";
    }

    await connectToDatabase()
    try {
        const product = await Product.findById(id);
        const baseHref = new URL(
            `/api/actions?id=${product.id}&productname=${product.title}&seller=${product.owner}&price=${product.price}`,
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
                        label: `Place order (${product.price}SOL)`,
                        href: `${baseHref}&buyername={buyername}&email={email}&address={address}`,
                        parameters: [
                          {
                            name: "buyername",
                            label: "Enter your full name",
                            required: true,
                            type: "text"
                          },
                          {
                            name: "email",
                            label: "Enter your email address",
                            required: true,
                            type: "email"
                          },
                          {
                            name: "address",
                            label: "Enter your preferred delivery address",
                            required: true,
                            type: "textarea"
                          },
                        ],
                    },
                ]
            }
        }
        return NextResponse.json(payload, { headers: headers });
    } catch (error) {
        console.log(error);
        let message = "An unknown error occurred";
        if (typeof error == "string") message = error;
        return NextResponse.json(message, {
            status: 400,
            headers: headers,
        });
    }
}

export const OPTIONS = GET;

export async function POST (req: NextRequest) {
    const keypair = Keypair.fromSecretKey(bs58.decode(process.env.SECRETKEY as string));
    const searchParams = req.nextUrl.searchParams;
    const productId = searchParams.get('id') as string;
    const buyerName = searchParams.get('buyername') as string;
    const productName = searchParams.get('productname') as string;
    const email = searchParams.get('email') as string;
    const address = searchParams.get('address') as string;
    const price = Number(searchParams.get('price'));
    const { account } = await req.json();

    try {
        const connection = new Connection(clusterApiUrl("devnet"));
        const wallet = await validatePublicKey(account);
        const seller = await validatePublicKey(searchParams.get('seller') as string);
        const platform = keypair.publicKey;

        const transaction = await createTransaction(connection, wallet, seller, price);

        const payload = await createPostResponse({
            fields: {
                transaction,
                message: "Thanks for purchasing!👍 Your order is being processed🚀 ",
            },
        });

        const orderDetails: TOrderDetails = {
            buyer: account,
            seller: seller.toBase58(),
            product_id: productId,
            buyer_name: buyerName,
            product_title: productName,
            email,
            address,
            price,
        };
        await saveOrder(orderDetails);

        return NextResponse.json(payload, {
            headers: headers,
        });

    } catch (error) {
        const message = error instanceof Error ? error.message : "An error occurred!";
        return NextResponse.json({ message }, {
            headers: headers,
        });
    }
}