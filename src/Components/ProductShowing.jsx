'use client'

import { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";

import { PackageOpen, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useCategory } from "@/context/CategoryContext";
import { useTranslations } from "next-intl";

const PRODUCTS_PER_PAGE = 6;

export const ProductShowing = ({ fetchedProducts }) => {
    const t = useTranslations("ProductShowing");

    const { selectedCategory, searchValue } = useCategory();

    const category = selectedCategory || 'All';
    const query = (searchValue || '').trim().toLowerCase();

    const [currentPage, setCurrentPage] = useState(1);

    const products = useMemo(() => {
        let result = category === 'All'
            ? fetchedProducts
            : fetchedProducts.filter((product) => product.category === category);

        if (query) {
            result = result.filter((product) => {
                const name = product.name || product.title || "";
                const description = product.description || "";
                return (
                    name.toLowerCase().includes(query) ||
                    description.toLowerCase().includes(query)
                );
            });
        }

        return result;
    }, [category, query, fetchedProducts]);

    const hasProducts = products.length > 0;
    const totalPages = Math.max(1, Math.ceil(products.length / PRODUCTS_PER_PAGE));

    // Reset to page 1 whenever the category or search query (and thus the filtered list) changes
    useEffect(() => {
        setCurrentPage(1);
    }, [category, query]);

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
        return products.slice(start, start + PRODUCTS_PER_PAGE);
    }, [products, currentPage]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        setCurrentPage(page);
        // Scroll back to the top of the section for better UX
        document.getElementById("product-showing-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section id="product-showing-section" className="bg-neutral-950 py-12 sm:py-16 lg:py-20 text-white">
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
                    <>
                        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {paginatedProducts.map((product, index) => (
                                <ProductCard
                                    key={product._id || product.id || index}
                                    product={product}
                                />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                ) : (
                    <EmptyProductState message={t("noProducts")} />
                )}

            </div>
        </section>
    );
};

/**
 * Pagination controls — matches the black/gold theme used across the section.
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Build a compact page list: always show first, last, current, and neighbors; collapse the rest with "..."
    const pageNumbers = useMemo(() => {
        const pages = [];
        const addPage = (p) => pages.push(p);

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                addPage(i);
            } else if (pages[pages.length - 1] !== "...") {
                addPage("...");
            }
        }
        return pages;
    }, [currentPage, totalPages]);

    return (
        <div className="mt-10 flex items-center justify-center gap-2 sm:mt-14">
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-colors hover:border-amber-400/40 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-800 disabled:hover:text-neutral-300"
                aria-label="Previous page"
            >
                <ChevronLeft size={16} />
            </button>

            {pageNumbers.map((page, idx) =>
                page === "..." ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-sm text-neutral-600">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${page === currentPage
                            ? "border-amber-400/40 bg-amber-400/10 text-amber-400"
                            : "border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-amber-400/40 hover:text-amber-400"
                            }`}
                        aria-current={page === currentPage ? "page" : undefined}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 transition-colors hover:border-amber-400/40 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-800 disabled:hover:text-neutral-300"
                aria-label="Next page"
            >
                <ChevronRight size={16} />
            </button>
        </div>
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