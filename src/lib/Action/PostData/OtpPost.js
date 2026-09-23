export default async function (email, name) {
    const Data = {
        email,
        name
    }
    const result = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/otp`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Data)
        },

    );
    const data = await result.json();

    return data
}