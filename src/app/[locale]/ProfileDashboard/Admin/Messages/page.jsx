"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MessagesPage() {
    const t = useTranslations("AdminMessages");

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

            {/* Empty State Section */}
            <div className="flex min-h-[55vh] items-center justify-center">
                <div className="max-w-md text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-500/10 border border-orange-500/20">
                        <MessageSquare className="h-12 w-12 text-orange-500" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold text-white">
                        {t("emptyTitle")}
                    </h2>

                    <p className="mt-3 leading-relaxed text-gray-400">
                        {t("emptyDesc")}
                    </p>

                    <Link
                        href="/ProfileDashboard/Admin"
                        className="mt-8 inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-medium text-black transition-colors duration-200 hover:bg-orange-600"
                    >
                        {t("backToDashboard")}
                    </Link>
                </div>
            </div>
        </section>
    );
}