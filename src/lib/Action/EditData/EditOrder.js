import { authHeader } from "../GetData/GetToken";

export default async function EditOrder(id, status) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Order/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            ...await authHeader()
        },
        body: JSON.stringify({ status }),
    });
    return res.json();
}