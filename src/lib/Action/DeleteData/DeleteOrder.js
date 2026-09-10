export default async function DeleteOrder(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Order/${id}`, {
        method: 'DELETE'
    })
    const result = await res.json();
    return result;
}