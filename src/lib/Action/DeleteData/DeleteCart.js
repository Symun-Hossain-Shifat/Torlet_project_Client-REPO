



export async function DeleteCart(id) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/Cart/${id}`, {
        method: 'DELETE',


    })
    const result = await res.json();
    return result;
}