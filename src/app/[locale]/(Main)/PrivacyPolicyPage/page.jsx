"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations("Privacy");

    const sections = [
        {
            title: t("sections.s1Title"),
            body: [t("sections.s1Body")],
            list: [
                t("sections.s1List1"),
                t("sections.s1List2"),
                t("sections.s1List3"),
                t("sections.s1List4"),
            ],
        },
        {
            title: t("sections.s2Title"),
            body: [t("sections.s2Body")],
            list: [
                t("sections.s2List1"),
                t("sections.s2List2"),
                t("sections.s2List3"),
                t("sections.s2List4"),
                t("sections.s2List5"),
            ],
        },
        {
            title: t("sections.s3Title"),
            body: [t("sections.s3Body")],
        },
        {
            title: t("sections.s4Title"),
            body: [t("sections.s4Body")],
        },
        {
            title: t("sections.s5Title"),
            body: [t("sections.s5Body")],
        },
        {
            title: t("sections.s6Title"),
            body: [t("sections.s6Body")],
            list: [
                t("sections.s6List1"),
                t("sections.s6List2"),
                t("sections.s6List3"),
                t("sections.s6List4"),
            ],
        },
        {
            title: t("sections.s7Title"),
            body: [t("sections.s7Body")],
        },
        {
            title: t("sections.s8Title"),
            body: [t("sections.s8Body")],
        },
    ];

    return (
        <section className="bg-[#FAF9F6] text-[#1C2526]">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
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

                <p className="mt-6 text-sm text-[#5B6666]">
                    {t("updated")}
                </p>

                <p className="mt-6 text-lg text-[#3F4A4A] max-w-2xl">
                    {t("intro")}
                </p>

                {/* Sections */}
                <div className="mt-16 space-y-14">
                    {sections.map((s) => (
                        <div key={s.title}>
                            <h2 className="font-serif italic text-xl text-[#0E4749]">
                                {s.title}
                            </h2>
                            <div className="mt-1 h-px w-10 bg-[#A9814A]" />
                            <div className="mt-4 text-[#3F4A4A] leading-relaxed space-y-3">
                                {s.body.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                                {s.list && (
                                    <ul className="list-disc pl-5 space-y-1">
                                        {s.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact footer */}
                <div className="mt-20 pt-8 border-t border-[#0E4749]/10 text-sm text-[#5B6666]">
                    <p>
                        {t.rich("questions", {
                            email: (chunks) => <span className="text-[#0E4749]">privacy@torlet.com</span>
                        })}
                    </p>
                </div>
            </div>
        </section>
    )
}