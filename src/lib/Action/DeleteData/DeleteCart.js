import { authHeader } from "../GetData/GetToken";




export async function DeleteCart(id) {

    const headers = await authHeader();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Cart/${id}`, {
        method: 'DELETE',
        headers: headers


    })
    const result = await res.json();
    return result;
}