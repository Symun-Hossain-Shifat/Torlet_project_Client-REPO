


import GetWishlistData from "@/lib/Action/GetData/GetWishlistData";
import UserWishlist from "@/Components/Wishlistsection";
import { GetUserInserver } from "@/lib/Action/GetData/GetUser";

export default async function Wishlist() {
    const User = await GetUserInserver()
    const email = User?.email
    const Data = await GetWishlistData(email)

    return (
        <>
            <UserWishlist Data={Data}></UserWishlist>
        </>
    );
}