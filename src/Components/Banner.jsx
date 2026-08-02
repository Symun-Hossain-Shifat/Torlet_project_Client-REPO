"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Tag, Sparkles, Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Banner() {
    const t = useTranslations("Banner");

    const CATEGORIES = [
        t("categories.Electronics"),
        t("categories.Fashion"),
        t("categories.Home & Living"),
        t("categories.Sports"),
        t("categories.Beauty"),
        t("categories.Books"),
        t("categories.Toys"),
        t("categories.Groceries"),
        t("categories.Automotive"),
        t("categories.Furniture"),
    ];

    const STATS = [
        { label: t("stats.productsLabel"), value: t("stats.productsVal") },
        { label: t("stats.categoriesLabel"), value: t("stats.categoriesVal") },
        { label: t("stats.customersLabel"), value: t("stats.customersVal") },
    ];

    const TRUST_BADGES = [
        { icon: Truck, label: t("badges.delivery") },
        { icon: ShieldCheck, label: t("badges.payments") },
        { icon: Tag, label: t("badges.price") },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-neutral-950">
            {/* Ambient glow accents */}
            <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

            {/* Search Icon Feild */}


            <div className="mx-auto mt-5 w-10/12">
                <div className="relative">
                    <Search
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full rounded-xl border border-gray-700 bg-black py-3 pl-12 pr-5 text-white placeholder:text-gray-400 transition-all duration-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                    />
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left: copy */}
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-amber-400">
                            <Sparkles size={13} />
                            {t("eyebrow")}
                        </span>

                        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {t("title")}{" "}
                            <span className="block text-amber-400">{t("titleColored")}</span>
                        </h1>

                        <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400">
                            {t("description")}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
                            >
                                {t("shopNow")}
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/categories"
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-amber-400 hover:text-amber-400"
                            >
                                {t("exploreCategories")}
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-neutral-800 pt-6">
                            {STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: scattered category badge collage */}
                    <div className="relative mx-auto hidden h-96 w-full max-w-md lg:block">
                        <BadgeCard className="left-2 top-2 rotate-[-6deg]" label={t("categories.Electronics")} />
                        <BadgeCard className="left-40 top-0 rotate-[4deg]" label={t("categories.Fashion")} />
                        <BadgeCard className="left-4 top-32 rotate-[3deg]" label={t("categories.Home & Living")} />
                        <BadgeCard className="left-48 top-28 rotate-[-4deg]" label={t("categories.Sports")} />
                        <BadgeCard className="left-16 top-60 rotate-[-3deg]" label={t("categories.Beauty")} />
                        <BadgeCard className="left-56 top-56 rotate-[6deg]" label={t("categories.Toys")} />

                        {/* Center highlight card */}
                        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-amber-400 text-center shadow-xl shadow-amber-400/20">
                            <span className="px-2 text-sm font-bold leading-tight text-neutral-950">
                                {t("moreCategories", { count: 25 })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category marquee ticker */}
            <div className="relative border-y border-neutral-800 bg-neutral-900/60 py-3">
                <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
                    {[...CATEGORIES, ...CATEGORIES].map((category, i) => (
                        <span
                            key={`${category}-${i}`}
                            className="flex items-center gap-2 text-sm font-medium text-neutral-400"
                        >
                            {category}
                            <span className="text-amber-400">•</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* Trust badges */}
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:justify-between">
                    {TRUST_BADGES.map((badge) => (
                        <div
                            key={badge.label}
                            className="flex items-center gap-2 text-sm text-neutral-400"
                        >
                            <badge.icon size={16} className="text-amber-400" />
                            {badge.label}
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

function BadgeCard({ label, className = "" }) {
    return (
        <div
            className={`absolute flex h-20 w-32 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 px-3 text-center shadow-lg ${className}`}
        >
            <span className="text-sm font-semibold text-neutral-200">{label}</span>
        </div>
    );
}