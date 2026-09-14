
import Banner from "@/Components/Banner";
import WhyChooseUs from "@/Components/Chooseus";
import { ProductShowing } from "@/Components/ProductShowing";
import { GetProduct } from "@/lib/Action/GetData/GetProduct";




export default async function Home() {
  const fetchedProducts = await GetProduct();

  return (
    <div>
      <Banner></Banner>
      <ProductShowing fetchedProducts={fetchedProducts}></ProductShowing>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
