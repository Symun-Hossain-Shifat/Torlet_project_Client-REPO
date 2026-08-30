"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Heart,
    ShoppingCart,
    Zap,
    Play,
    Minus,
    Plus,
    CheckCircle2,
    ImageOff,
    PackageX,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { PostCart } from "@/lib/Action/PostData/PostCart";
import toast from "react-hot-toast";
import PostWishlist from "@/lib/Action/PostData/PostWishlist";

// ---------- Helpers ----------
function toDriveEmbedUrl(url) {
    if (!url) return null;
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (!match) return url;
    return `https://drive.google.com/file/d/${match[1]}/preview`;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

// ---------- Fallback image wrapper (swap for your existing ProductImage) ----------
function ProductImage({ src, alt }) {
    const [errored, setErrored] = useState(false);

    if (errored) {
        return (
            <div className="flex h-full w-full items-center justify-center bg-neutral-900">
                <ImageOff className="h-10 w-10 text-neutral-600" />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            onError={() => setErrored(true)}
            priority
        />
    );
}

export default function ProductDetailsPage({ Product }) {
    console.log(Product)
    const [activeMedia, setActiveMedia] = useState("image");
    const [quantity, setQuantity] = useState(1);
    const [wishlisted, setWishlisted] = useState(false);

    const { data: session } = authClient.useSession();
    const user = session?.user;

    // ---------- Not found state ----------
    if (!Product) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 bg-black text-neutral-400">
                <PackageX className="h-10 w-10 text-neutral-600" />
                <p className="text-sm">This product could not be found.</p>
            </div>
        );
    }

    const embedVideoUrl = toDriveEmbedUrl(Product.video);
    const handleAddToCart = async (product) => {
        if (!user) {
            toast.error("Please login first");
            return;
        }

        if (user.role === "Admin") {
            toast.error("Admin Can not add to cart");
            return;
        }
        const Data = {
            ...product, email: user.email
        }

        const result = await PostCart(Data)

        if (result) {

            toast.success(`Product Added In Cart Successfully`);
            setTimeout(() => { }, 2000);
        } else {
            toast.error(result.message);
        }
    };

    const handleBuyNow = () => {
        // TODO: route to checkout, e.g. router.push(`/checkout?productId=${Product._id}&qty=${quantity}`)
        console.log("Buy now:", { id: Product._id, quantity });
    };

    const handleToggleWishlist = async (product) => {
        if (!user) {
            toast.error("Please login first");
            return;
        }

        if (user.role === "Admin") {
            toast.error("Admin Can not add to WishList");
            return;
        }
        const Data = {
            ...product, email: user.email
        }

        const result = await PostWishlist(Data)
        if (result) {

            toast.success(`${Product.title} Wishlisted`);

        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-black text-neutral-100">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-neutral-500">
                    <span>Shop</span>
                    <span className="mx-2">/</span>
                    <span className="text-[#D4AF37]">{Product.category}</span>
                </nav>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* ---------- Media column ---------- */}
                    <div>
                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                            {activeMedia === "image" || !embedVideoUrl ? (
                                <ProductImage src={Product.image} alt={Product.title} />
                            ) : (
                                <iframe
                                    src={embedVideoUrl}
                                    className="h-full w-full"
                                    allow="autoplay"
                                    title={`${Product.title} video`}
                                />
                            )}
                        </div>

                        {embedVideoUrl && (
                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() => setActiveMedia("image")}
                                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border transition ${activeMedia === "image"
                                        ? "border-[#D4AF37]"
                                        : "border-neutral-800 opacity-70 hover:opacity-100"
                                        }`}
                                >
                                    <img
                                        src={Product.image}
                                        alt="Product thumbnail"

                                        sizes="64px"
                                        className="object-cover"
                                    />
                                </button>
                                <button
                                    onClick={() => setActiveMedia("video")}
                                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border transition ${activeMedia === "video"
                                        ? "border-[#D4AF37] text-[#D4AF37]"
                                        : "border-neutral-800 text-neutral-500 hover:text-neutral-300"
                                        }`}
                                >
                                    <Play className="h-5 w-5" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* ---------- Details column ---------- */}
                    <div className="flex flex-col">
                        <span className="w-fit rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#D4AF37]">
                            {Product.category}
                        </span>

                        <h1 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                            {Product.title}
                        </h1>

                        <p className="mt-2 text-xs text-neutral-500">
                            Listed on {formatDate(Product.createdAt)} · ID: {Product._id}
                        </p>

                        <p className="mt-4 text-3xl font-bold text-[#D4AF37]">
                            ${Product.price}
                        </p>

                        <p className="mt-5 leading-relaxed text-neutral-400">
                            {Product.description}
                        </p>

                        {/* Features */}
                        {Product.features?.length > 0 && (
                            <div className="mt-6">
                                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-300">
                                    Features
                                </h2>
                                <ul className="space-y-2">
                                    {Product.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-neutral-400"
                                        >
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="mt-8">
                            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-300">
                                Quantity
                            </h2>
                            <div className="flex w-fit items-center rounded-lg border border-neutral-800">
                                <button
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    className="p-2.5 text-neutral-400 hover:text-white disabled:opacity-30"
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-10 text-center text-sm font-medium text-white">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="p-2.5 text-neutral-400 hover:text-white"
                                >
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={handleBuyNow}
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-[#c4a030] active:scale-[0.98]"
                            >
                                <Zap className="h-4 w-4" />
                                Buy Now
                            </button>
                            <button
                                onClick={() => handleAddToCart(Product)}
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10 active:scale-[0.98]"
                            >
                                <ShoppingCart className="h-4 w-4" />
                                Add to Cart
                            </button>
                            <button
                                onClick={() => handleToggleWishlist(Product)}
                                aria-label="Toggle wishlist"
                                className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition active:scale-[0.98] ${wishlisted
                                    ? "border-red-500 text-red-500"
                                    : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                                    }`}
                            >
                                <Heart
                                    className="h-4 w-4"
                                    fill={wishlisted ? "currentColor" : "none"}
                                />
                                <span className="sm:hidden">
                                    {wishlisted ? "Wishlisted" : "Wishlist"}
                                </span>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}