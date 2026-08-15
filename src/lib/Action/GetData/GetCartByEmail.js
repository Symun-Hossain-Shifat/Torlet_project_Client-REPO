

export const GetCartByEmail = async (email) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Cart?email=${email}`, { cache: "no-store" });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : (data?.carts || []);
    } catch (error) {
        console.error("Failed to fetch carts:", error);
        return [];
    }
};