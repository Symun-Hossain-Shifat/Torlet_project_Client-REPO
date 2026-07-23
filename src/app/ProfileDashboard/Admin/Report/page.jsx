import Link from "next/link";
import { FileBarChart } from "lucide-react";

export default function ProductReport() {
    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10  pb-4">
                <h1 className="text-3xl font-bold text-orange-500">
                    Product Report
                </h1>
                <p className="mt-2 text-gray-500">
                    Analyze product performance, inventory status, and sales insights.
                </p>
            </div>

            {/* Empty State */}
            <div className="flex min-h-[55vh] items-center justify-center">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
                        <FileBarChart className="h-12 w-12 text-emerald-500" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        No Reports Available
                    </h2>

                    <p className="mt-3 leading-relaxed text-gray-500">
                        Product reports will appear here once your store has products,
                        inventory updates, and sales activity to analyze.
                    </p>

                    <Link
                        href="/dashboard/product-management"
                        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                    >
                        Manage Products
                    </Link>
                </div>
            </div>
        </section>
    );
}