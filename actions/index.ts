"use server"

import axios from "axios";
import { revalidatePath } from "next/cache";
import Product from "@/lib/models/product";
import { redirect } from "next/navigation";

const api = process.env.API_ROOT;
const client = process.env.CLIENT_ROOT;

export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message)
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "something went wrong";
    }

    return message;
}

export async function addDeposit({ image, owner, title, description, price }: { image: string, owner: string, title: string, description: string, price: number }) {
    try {
        const product = new Product({ image, owner, title, description, price })
        console.log(product);
        product.save();
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    revalidatePath("/account/deposits");
}
