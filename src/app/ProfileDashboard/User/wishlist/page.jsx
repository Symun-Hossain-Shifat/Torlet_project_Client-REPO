import Link from "next/link";
import { Heart } from "lucide-react";

export default function Wishlist() {
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10  pb-4">
                <h1 className="text-3xl font-bold text-orange-500">
                    Wishlist
                </h1>
                <p className="mt-2 text-gray-500">
                    Save your favorite products and come back to them anytime.
                </p>
            </div>

            {/* Empty Wishlist */}
            <div className="flex min-h-[55vh] items-center justify-center">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
                        <Heart className="h-12 w-12 text-red-400" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        Your Wishlist is Empty
                    </h2>

                    <p className="mt-3 leading-relaxed text-gray-500">
                        You haven't added any products to your wishlist yet. Browse our
                        collection and save your favorite items for later.
                    </p>

                    <Link
                        href="/shop"
                        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                    >
                        Explore Products
                    </Link>
                </div>
            </div>
        </section>
    );
}