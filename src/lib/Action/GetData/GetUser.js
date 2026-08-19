import { auth } from "@/lib/auth";
import { headers } from "next/headers";



export const GetUserInserver = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const User = session?.user;
    return User
}


export const GetAllUserInformation = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`)
    const data = await res.json()
    return data
}