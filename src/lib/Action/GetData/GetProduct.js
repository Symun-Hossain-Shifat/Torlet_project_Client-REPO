export const GetProduct = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Product`, { cache: "no-store" });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : (data?.products || []);
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
};