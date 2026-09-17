'use server'

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { GetUserInserver } from "./GetUser";






export const GetJwtToken = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    return token;
}


export const authHeader = async () => {
    const user = await GetUserInserver();
    const userId = user?.id
    const token = await GetJwtToken();

    return token
        ? {
            authorization: `Bearer ${token}`,
            user: userId,
        }
        : {};
};