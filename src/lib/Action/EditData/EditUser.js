export default async function UpdateUser(email, isBlocked) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${email}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isBlocked: isBlocked }),
    })
    const data = await response.json();
    return data;

}