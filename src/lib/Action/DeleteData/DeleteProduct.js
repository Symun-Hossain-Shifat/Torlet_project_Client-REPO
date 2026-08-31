export default async function Deleteproduct(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/product/${id}`, {
        method: 'DELETE'
    })
    const result = await res.json();
    return result;
}