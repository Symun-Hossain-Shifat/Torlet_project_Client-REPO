import Link from "next/link";
import { PackageSearch } from "lucide-react";

export default function ProductManagement() {
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10  pb-4">
                <h1 className="text-3xl font-bold text-orange-500">
                    Product Management
                </h1>
                <p className="mt-2 text-gray-500">
                    Manage your inventory by adding, updating, or removing products.
                </p>
            </div>

            {/* Empty State */}
            <div className="flex min-h-[55vh] items-center justify-center">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-50">
                        <PackageSearch className="h-12 w-12 text-amber-500" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        No Products Found
                    </h2>

                    <p className="mt-3 leading-relaxed text-gray-500">
                        Your inventory is currently empty. Add your first product to start
                        selling and managing your store.
                    </p>

                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                    >
                        Add New Product
                    </Link>
                </div>
            </div>
        </section>
    );
}