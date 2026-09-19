
import { authHeader } from "../GetData/GetToken";

export default async function deletemessage(id) {
    const headers = await authHeader()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contactinfo/${id}`, {
        method: 'DELETE',
        headers: headers
    })
    const result = await res.json()
    return result;
}