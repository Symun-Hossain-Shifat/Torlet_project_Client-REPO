export default async function getContactInfo() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contactinfo`)
    const result = await res.json()

    return result
}




