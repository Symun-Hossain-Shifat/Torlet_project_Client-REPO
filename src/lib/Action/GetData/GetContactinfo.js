import { authHeader } from "./GetToken"

export default async function getContactInfo() {
    const headers = await authHeader();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contactinfo`, {
        headers: headers
    })
    const result = await res.json()
    return result
}

