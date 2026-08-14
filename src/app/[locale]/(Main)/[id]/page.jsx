import { GetSingleProductById } from "@/lib/Action/GetData/GetProduct";
import ProductDetailsPage from "./Homepage";

export default async function PropertyDetailsPage({ params }) {
    const Data = await params;
    const { id } = Data;
    console.log(id)
    const result = await GetSingleProductById(id);
    // console.log(Product)
    const Product = result[0];
    return (
        <div>
            <ProductDetailsPage Product={Product} />
        </div>
    );
}   