"use client";

import React from 'react';
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BlogPage() {
    const t = useTranslations("Blog");

    const cards = [
        { title: t("card1Title"), body: t("card1Body") },
        { title: t("card2Title"), body: t("card2Body") },
        { title: t("card3Title"), body: t("card3Body") },
    ];

    return (
        <section className="bg-[#FAF9F6] text-[#1C2526] min-h-[80vh]">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#A9814A] mb-4 text-center">
                    {t("eyebrow")}
                </p>

                {/* Heading */}
                <h1 className="font-serif italic text-4xl md:text-5xl font-semibold text-[#0E4749] leading-tight text-center">
                    {t("title")}
                </h1>

                {/* Signature "flow" divider */}
                <svg
                    className="mt-6 w-24 h-3 mx-auto"
                    viewBox="0 0 96 12"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0 6C8 0 16 12 24 6C32 0 40 12 48 6C56 0 64 12 72 6C80 0 88 12 96 6"
                        stroke="#A9814A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>

                <p className="mt-6 text-lg text-[#3F4A4A] max-w-2xl mx-auto text-center">
                    {t("desc")}
                </p>

                {/* Feature cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((c) => (
                        <div key={c.title}>
                            <h2 className="font-serif italic text-lg text-[#0E4749]">
                                {c.title}
                            </h2>
                            <div className="mt-1 h-px w-10 bg-[#A9814A]" />
                            <p className="mt-4 text-sm text-[#3F4A4A] leading-relaxed">
                                {c.body}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Action */}
                <div className="mt-20 pt-8 border-t border-[#0E4749]/10 flex justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide uppercase text-[#FAF9F6] bg-[#0E4749] hover:bg-[#0E4749]/90 rounded-none transition-colors duration-200"
                    >
                        {t("explore")}
                    </Link>
                </div>
            </div>
        </section>
    );
}