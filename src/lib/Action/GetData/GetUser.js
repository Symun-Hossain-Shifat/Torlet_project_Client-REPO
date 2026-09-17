import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { authHeader } from "./GetToken";



export const GetUserInserver = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const User = session?.user;
    return User
}


export const GetAllUserInformation = async () => {
    const headers = await authHeader();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`, {
        headers: headers
    })
    const data = await res.json()
    return data
}