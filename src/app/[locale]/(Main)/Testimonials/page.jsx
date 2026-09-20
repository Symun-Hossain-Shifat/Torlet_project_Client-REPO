"use client";

import { useTranslations } from "next-intl";

export default function TestimonialsPage() {
    const t = useTranslations("Testimonials");

    const testimonials = [1, 2, 3, 4, 5, 6].map((num) => ({
        quote: t(`items.item${num}.quote`),
        name: t(`items.item${num}.name`),
        role: t(`items.item${num}.role`),
    }));

    const initials = (name) =>
        name
            .split(" ")
            .map((part) => part[0])
            .filter(Boolean)
            .join("")
            .slice(0, 2)
            .toUpperCase();

    return (
        <section className="bg-[#FAF9F6] text-[#1C2526]">
            <div className="container mx-auto px-4 py-24 max-w-5xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#A9814A] mb-4">
                    {t("eyebrow")}
                </p>

                {/* Heading */}
                <h1 className="font-serif italic text-4xl md:text-5xl font-semibold text-[#0E4749] leading-tight">
                    {t("title")}
                </h1>

                {/* Signature "flow" divider */}
                <svg
                    className="mt-6 w-24 h-3"
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

                <p className="mt-6 text-lg text-[#3F4A4A] max-w-2xl">
                    {t("intro")}
                </p>

                {/* Testimonials grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-[#0E4749]/10 p-8 flex flex-col"
                        >
                            {/* Quote mark */}
                            <svg
                                className="w-8 h-6 text-[#A9814A]"
                                viewBox="0 0 32 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0 24V14.4C0 6.4 5.2 1.2 12.8 0L14 3.2C9.6 4.4 7.2 7.2 7.2 11.2H12.8V24H0ZM17.2 24V14.4C17.2 6.4 22.4 1.2 30 0L31.2 3.2C26.8 4.4 24.4 7.2 24.4 11.2H30V24H17.2Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <p className="mt-4 text-[#3F4A4A] leading-relaxed flex-1">
                                {item.quote}
                            </p>

                            <div className="mt-1 h-px w-10 bg-[#A9814A] my-6" />

                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-[#0E4749] text-[#FAF9F6] flex items-center justify-center font-serif italic text-sm">
                                    {initials(item.name)}
                                </div>
                                <div>
                                    <p className="text-[#0E4749] font-medium">{item.name}</p>
                                    <p className="text-sm text-[#5B6666]">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact footer */}
                <div className="mt-20 pt-8 border-t border-[#0E4749]/10 text-sm text-[#5B6666]">
                    <p>
                        {t.rich("contact", {
                            email: (chunks) => <span className="text-[#0E4749]">mozharislam0@gmail.com</span>
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
}