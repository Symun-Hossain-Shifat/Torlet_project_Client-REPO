export default async function EditOrder(id, status) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Order/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
    });
    return res.json();
}