export default async function postContact(Data) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/contactinfo`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
        ,
        body: JSON.stringify(Data)
    })
    const result = await res.json()
    return result

}