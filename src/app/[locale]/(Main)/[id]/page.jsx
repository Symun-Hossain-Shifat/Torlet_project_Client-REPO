import { GetSingleProductById } from "@/lib/Action/GetData/GetProduct";
import ProductDetailsPage from "./Homepage";
import { authHeader } from "@/lib/Action/GetData/GetToken";

export default async function PropertyDetailsPage({ params }) {
    const Data = await params;
    const { id } = Data;
    const token = await authHeader();
    console.log(token)
    const result = await GetSingleProductById(id);
    // console.log(Product)
    const Product = result[0];
    return (
        <div>
            <ProductDetailsPage Product={Product} />
        </div>
    );
}   