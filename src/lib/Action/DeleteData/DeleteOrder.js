import { authHeader } from "../GetData/GetToken";

export default async function DeleteOrder(id) {
    const headers = await authHeader();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Order/${id}`, {
        method: 'DELETE',
        headers: headers
    })
    const result = await res.json();
    return result;
}