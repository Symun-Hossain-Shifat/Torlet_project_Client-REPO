export default async function GetOrder(email) {
    try {
        const url = email
            ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/Order?email=${email}`
            : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/Order`;

        const res = await fetch(url, {
            method: 'GET',
        });

        if (!res.ok) {
            throw new Error("Failed to fetch orders");
        }

        const data = await res.json();

        return data;

    } catch (error) {
        console.error("GET ORDERS ERROR:", error);
        throw error;
    }
}