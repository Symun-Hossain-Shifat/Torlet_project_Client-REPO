'use client'

import ProductCard from "./ProductCard";

import { PackageOpen, Sparkles } from "lucide-react";
import { useCategory } from "@/context/CategoryContext";
import { useTranslations } from "next-intl";


export const ProductShowing = ({ fetchedProducts }) => {
    const t = useTranslations("ProductShowing");

    const { selectedCategory } = useCategory();
    const category = selectedCategory || 'All';

    const products = category === 'All' ? fetchedProducts : fetchedProducts.filter((product) => product.category === category);
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
    <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 text-center backdrop-blur-md sm:p-12">
        {/* Glow effect in background */}
        <div className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-700/50 bg-neutral-900/80 shadow-2xl shadow-amber-400/5">
                <PackageOpen size={36} className="text-amber-400" />
            </div>

            <h3 className="text-lg font-bold text-white">Stock Updating</h3>
            <p className="mt-1 text-sm font-medium text-neutral-300">{message}</p>
            <p className="mt-2 text-xs text-neutral-500">
                We are restocking soon. Check back in a little while!
            </p>
        </div>
    </div>
);