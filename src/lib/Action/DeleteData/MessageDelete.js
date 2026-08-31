export default async function deletemessage(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contactinfo/${id}`, {
        method: 'DELETE'
    })
    const result = await res.json()
    return result;
}