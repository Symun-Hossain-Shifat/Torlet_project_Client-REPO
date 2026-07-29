"use client";

import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
    const t = useTranslations("Chooseus");

    const FEATURES = [
        {
            icon: Truck,
            title: t("shipping.title"),
            description: t("shipping.description"),
        },
        {
            icon: ShieldCheck,
            title: t("payment.title"),
            description: t("payment.description"),
        },
        {
            icon: RotateCcw,
            title: t("returns.title"),
            description: t("returns.description"),
        },
        {
            icon: Headphones,
            title: t("support.title"),
            description: t("support.description"),
        },
    ];

    return (
        <section className="w-full bg-neutral-950 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                        {t("eyebrow")}
                    </span>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {t("title")}
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-colors hover:border-amber-400/60"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950">
                                <feature.icon size={22} />
                            </div>
                            <h3 className="mt-5 text-base font-semibold text-white">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}