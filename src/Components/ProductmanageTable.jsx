"use client";

import Deleteproduct from "@/lib/Action/DeleteData/DeleteProduct";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


// Swap this for real data from your API/DB.


function formatPrice(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(value);
}

function formatDate(value) {
    return new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function ProductsTable({ products }) {

    const router = useRouter();
    const handleDelete = async (id) => {
        const result = await Deleteproduct(id)
        if (result.acknowledged === true) {
            toast.success("Product deleted successfully");
            router.refresh();
        } else {
            toast.error("Product deleted failed");
        }
    }


    return (
        <div className="w-full rounded-xl border border-white/10 bg-[#0A0A0A] text-zinc-100">
            {/* Header row — desktop / tablet only */}
            <div className="hidden text-left border-b border-white/10 bg-[#111114] px-5 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500 sm:grid sm:grid-cols-[minmax(0,2.2fr)_1fr_1fr_1fr_auto] sm:gap-4">
                <span>Product</span>
                <span>Price</span>
                <span>Category</span>
                <span>Posted</span>
                <span className="text-right">Actions</span>
            </div>

            {/* Rows */}
            <ul className="divide-y divide-white/[0.06]">
                {products.map((product) => (
                    <li
                        key={product._id}
                        className="flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-white/[0.03] sm:grid sm:grid-cols-[minmax(0,2.2fr)_1fr_1fr_1fr_auto] sm:items-center sm:gap-4"
                    >
                        {/* Product name */}
                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-zinc-100">
                                {product.title}
                            </p>
                            {/* Inline meta shown only on mobile, since the grid columns collapse */}
                            <p className="mt-0.5 text-xs text-zinc-500 sm:hidden">
                                {product.category} &middot; {formatDate(product.postedAt)}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="text-sm text-zinc-300">
                            <span className="text-zinc-500 sm:hidden">Price: </span>
                            {formatPrice(product.price)}
                        </div>

                        {/* Category — hidden on mobile (shown inline under the name instead) */}
                        <div className="hidden text-sm text-zinc-400 sm:block">
                            {product.category}
                        </div>

                        {/* Posted date — hidden on mobile (shown inline under the name instead) */}
                        <div className="hidden text-sm text-zinc-400 sm:block">
                            {formatDate(product.createdAt
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 sm:justify-end">

                            <button
                                type="button"
                                onClick={() => handleDelete(product._id)}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-rose-500/10 px-3 py-1.5 text-xs font-medium text-rose-400 transition-colors hover:border-rose-400/40 hover:bg-rose-500/20"
                            >
                                <Icon className="size-3.5" icon="gravity-ui:trash-bin" />
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Empty state */}
            {products.length === 0 && (
                <div className="px-5 py-10 text-center text-sm text-zinc-500">
                    No products yet. Add one to see it listed here.
                </div>
            )}
        </div>
    );
}