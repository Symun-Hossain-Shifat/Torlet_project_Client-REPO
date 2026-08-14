import { GetSingleProductById } from "@/lib/Action/GetData/GetProduct";

export default async function PropertyDetailsPage({ params }) {
    const Data = await params;
    const { id } = Data;
    console.log(id)
    const Product = await GetSingleProductById(id);
    console.log(Product)
    return (
        <div>
            <ProductDetailsPage Product={Product} />
        </div>
    );
}   