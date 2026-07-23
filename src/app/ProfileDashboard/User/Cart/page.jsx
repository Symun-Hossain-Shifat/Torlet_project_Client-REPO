import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Cart() {
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10  pb-4">
                <h1 className="text-3xl font-bold text-orange-500">
                    Shopping Cart
                </h1>
                <p className="mt-2 text-gray-500">
                    Review the items you've added before proceeding to checkout.
                </p>
            </div>

            {/* Empty Cart */}
            <div className="flex min-h-[55vh] items-center justify-center">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                        <ShoppingCart className="h-12 w-12 text-gray-400" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        Your Cart is Empty
                    </h2>

                    <p className="mt-3 text-gray-500 leading-relaxed">
                        It looks like you haven't added any products yet. Explore our
                        collection and add your favorite items to get started.
                    </p>

                    <Link
                        href="/shop"
                        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </section>
    );
}