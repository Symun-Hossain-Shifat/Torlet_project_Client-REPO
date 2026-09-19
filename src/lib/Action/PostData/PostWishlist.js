import { authHeader } from "../GetData/GetToken"

export default async function PostWishlist(Data) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            ...await authHeader()
        },
        body: JSON.stringify(Data)
    })
    const result = await res.json()
    return result
}