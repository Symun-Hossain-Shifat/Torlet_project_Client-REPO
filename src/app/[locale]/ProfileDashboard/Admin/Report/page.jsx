"use client";

import Link from "next/link";
import { FileBarChart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProductReport() {
    const t = useTranslations("AdminReports");

    return (
        <section className="container mx-auto px-4 py-10">
            {/* Page Heading */}
            <div className="mb-10 pb-4">
                <h1 className="text-3xl font-bold text-orange-500">
                    {t("title")}
                </h1>
                <p className="mt-2 text-gray-500">
                    {t("subtitle")}
                </p>
            </div>

            {/* Empty State */}
            <div className="flex min-h-[55vh] items-center justify-center">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
                        <FileBarChart className="h-12 w-12 text-emerald-500" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                        {t("emptyTitle")}
                    </h2>

                    <p className="mt-3 leading-relaxed text-gray-500">
                        {t("emptyDesc")}
                    </p>

                    <Link
                        href="/dashboard/product-management"
                        className="mt-8 inline-flex items-center rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800"
                    >
                        {t("manageProducts")}
                    </Link>
                </div>
            </div>
        </section>
    );
}