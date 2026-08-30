export default async function DeleteWishlist(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist/${id}`, {
        method: 'DELETE',

    })
    const result = await res.json();
    return result;
}