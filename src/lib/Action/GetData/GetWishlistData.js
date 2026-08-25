export default async function GetWishlistData(email) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist?email=${email}`)
    if (!result.ok) {
        throw new Error("Failed to fetch wishlist")
    }
    return await result.json()
}