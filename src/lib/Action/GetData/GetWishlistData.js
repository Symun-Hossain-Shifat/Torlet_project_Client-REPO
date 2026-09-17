import { authHeader } from "./GetToken"

export default async function GetWishlistData(email) {
    const headers = await authHeader();
    const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist?email=${email}`, {
        headers: headers
    })

    return await result.json()
}