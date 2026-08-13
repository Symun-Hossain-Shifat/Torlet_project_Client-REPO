
import { GetProduct } from "@/lib/Action/GetData/GetProduct";
import ProductCard from "./ProductCard";
import { getTranslations } from "next-intl/server";
import { PackageOpen, Sparkles } from "lucide-react";

export const ProductShowing = async () => {
    const t = await getTranslations("ProductShowing");

    const fetchedProducts = await GetProduct();
    const products = Array.isArray(fetchedProducts) ? fetchedProducts : [];
    const hasProducts = products.length > 0;

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

                {/* Product Grid or Empty State */}
                {hasProducts ? (
                    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <ProductCard
                                key={product._id || product.id || index}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyProductState message={t("noProducts")} />
                )}

            </div>
        </section>
    );
};

/**
 * Shown when no products have been posted yet (empty DB or fetch failure).
 */
const EmptyProductState = ({ message }) => (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/50 px-6 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
            <PackageOpen size={28} className="text-neutral-500" />
        </div>
        <p className="text-base font-medium text-neutral-300">{message}</p>
        <p className="mt-1 text-sm text-neutral-500">
            New products will be displayed here.
        </p>
    </div>
);