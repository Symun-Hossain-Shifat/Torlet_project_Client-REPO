"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { PostCart } from "@/lib/Action/PostData/PostCart";
import toast from "react-hot-toast";

export default function WishlistCard({ item }) {
    if (!item) return null;
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const {
        _id,
        productId,
        title,
        description,
        price,
        category,
        image,
    } = item;
    const handleAddToCart = async (item) => {
        if (!user) {
            toast.error("Please login first");
            return;
        }

        if (user.role === "Admin") {
            toast.error("Admin Can not add to cart");
            return;
        }
        const Data = {
            ...item, email: user.email
        }

        const result = await PostCart(Data)

        if (result) {

            toast.success('Product Added To Cart Successfully');

        } else {
            toast.error(result.message);
        }
    };
    return (
        <div className="group relative my-5 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black transition-colors duration-200 hover:border-white/20 sm:flex-row">
            {/* Image */}
            <Link
                href={`/products/${productId}`}
                className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-neutral-900 sm:aspect-square sm:w-36 md:w-44 lg:w-48"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 144px, 192px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {category && (
                    <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {category}
                    </span>
                )}
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between  gap-3 p-4 sm:p-5">
                <div>
                    <div className="flex items-start justify-between gap-3">
                        <Link href={`/products/${productId}`} className="min-w-0">
                            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white transition-colors hover:text-neutral-300 sm:text-lg">
                                {title}
                            </h3>
                        </Link>

                        <button
                            type="button"
                            onClick={() => onRemove?.(_id, productId)}
                            aria-label="Remove from wishlist"
                            className="shrink-0 rounded-full p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        >
                            <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                        </button>
                    </div>

                    {description && (
                        <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
                            {description}
                        </p>
                    )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-lg font-bold text-white">
                        ৳{Number(price).toLocaleString("en-BD")}
                    </span>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => onRemove?.(_id, productId)}
                            aria-label="Remove item"
                            className="rounded-lg border border-white/10 p-2 text-neutral-400 transition-colors hover:border-red-400/40 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            onClick={() => handleAddToCart(item)}
                            className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:px-4"
                        >
                            <ShoppingCart className="h-4 w-4 shrink-0" />
                            <span className="hidden md:inline">Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}