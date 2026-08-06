import { GetProduct } from "@/lib/Action/GetData/GetProduct";
import ProductCard from "./ProductCard";
import { getTranslations } from "next-intl/server";
import { Sparkles } from "lucide-react";

/**
 * Fallback product collection used when backend database is empty or unreachable.
 * Ensures the homepage always presents a vibrant, high-quality showcase.
 */
const SAMPLE_PRODUCTS = [
    {
        _id: "1",
        title: "Argentina Home Jersey 2026",
        category: "Jerseys",
        price: 1290,
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop",
        description: "Official 3-star home jersey crafted with breathable moisture-wicking fabric."
    },
    {
        _id: "2",
        title: "Air Max Pro Stealth Sneakers",
        category: "Sneakers",
        price: 4500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
        description: "Ergonomic running sneakers with maximum shock absorption and sleek design."
    },
    {
        _id: "3",
        title: "Wireless Noise-Canceling Headphones",
        category: "Electronics",
        price: 3200,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
        description: "Immersive studio audio quality with active noise cancellation and 40h battery."
    },
    {
        _id: "4",
        title: "Minimalist Smart Watch V2",
        category: "Electronics",
        price: 2800,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
        description: "Track fitness, heart rate, and notifications with AMOLED display."
    },
    {
        _id: "5",
        title: "Vintage Leather Travel Backpack",
        category: "Fashion",
        price: 3900,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
        description: "Handcrafted genuine leather backpack with laptop sleeve and water resistance."
    },
    {
        _id: "6",
        title: "Modern Ceramic Table Lamp",
        category: "Home & Living",
        price: 1850,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
        description: "Warm ambient lighting for your living room or study space."
    }
];

export const ProductShowing = async () => {
    // Retrieve internationalized strings for ProductShowing component
    const t = await getTranslations("ProductShowing");

    // Fetch product data from backend API
    const fetchedData = await GetProduct();

    // Validate fetched array; fallback to SAMPLE_PRODUCTS if empty
    const products = (Array.isArray(fetchedData) && fetchedData.length > 0)
        ? fetchedData
        : SAMPLE_PRODUCTS;

    return (
        <section className="bg-neutral-950 py-12 sm:py-16 lg:py-20 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-10 text-center sm:mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold text-amber-400">
                        <Sparkles size={14} />
                        <span>{t("sectionTag")}</span>
                    </div>
                    <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {t("title")}
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-400 sm:text-base">
                        {t("subtitle")}
                    </p>
                </div>

                {/* Product Cards Grid: sm device -> 1 col, md device -> 2 cols, lg device -> 3 cols */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <ProductCard
                                key={product._id || product.id || index}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12 text-center">
                        <p className="text-neutral-400">{t("noProducts")}</p>
                    </div>
                )}

            </div>
        </section>
    );
};