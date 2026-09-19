import { authHeader } from "../GetData/GetToken";

export default async function DeleteWishlist(id) {
    const headers = await authHeader();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist/${id}`, {
        method: 'DELETE',
        headers: headers

    })
    const result = await res.json();
    return result;
}