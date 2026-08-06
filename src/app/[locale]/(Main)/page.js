
import Banner from "@/Components/Banner";
import WhyChooseUs from "@/Components/Chooseus";
import { ProductShowing } from "@/Components/ProductShowing";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ProductShowing></ProductShowing>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
