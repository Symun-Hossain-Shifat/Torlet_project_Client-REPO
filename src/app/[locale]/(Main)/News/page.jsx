// "use client";

// import React from 'react';
// import Link from "next/link";
// import { useTranslations } from "next-intl";

// export default function NewsPage() {
//     const t = useTranslations("News");

//     return (
//         <main className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-slate-50 dark:bg-slate-950">
//             <div className="max-w-2xl w-full text-center space-y-8">

//                 {/* Badge & Title */}
//                 <div className="space-y-3">
//                     <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-slate-600 dark:text-slate-400 uppercase bg-slate-200/60 dark:bg-slate-800/60 rounded-full border border-slate-300/50 dark:border-slate-700/50">
//                         {t("eyebrow")}
//                     </span>
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
//                         {t("title")}
//                     </h1>
//                     <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
//                         {t("desc")}
//                     </p>
//                 </div>

//                 {/* Feature Cards / What to Expect */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-left">

//                     <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
//                         <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
//                             {t("card1Title")}
//                         </h2>
//                         <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
//                             {t("card1Body")}
//                         </p>
//                     </div>

//                     <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
//                         <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
//                             {t("card2Title")}
//                         </h2>
//                         <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
//                             {t("card2Body")}
//                         </p>
//                     </div>

//                     <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
//                         <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
//                             {t("card3Title")}
//                         </h2>
//                         <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
//                             {t("card3Body")}
//                         </p>
//                     </div>

//                 </div>

//                 {/* Action Button */}
//                 <div className="pt-2">
//                     <Link
//                         href="/"
//                         className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-colors duration-200 shadow-sm"
//                     >
//                         {t("backHome")}
//                     </Link>
//                 </div>

//             </div>
//         </main>
//     );
// } 
"use client";

import React from 'react';
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NewsPage() {
    const t = useTranslations("News");

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
                        {t("backHome")}
                    </Link>
                </div>
            </div>
        </section>
    );
}