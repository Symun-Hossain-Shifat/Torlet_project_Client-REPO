"use client";

import React from 'react';
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NewsPage() {
    const t = useTranslations("News");

    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-2xl w-full text-center space-y-8">

                {/* Badge & Title */}
                <div className="space-y-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-slate-600 dark:text-slate-400 uppercase bg-slate-200/60 dark:bg-slate-800/60 rounded-full border border-slate-300/50 dark:border-slate-700/50">
                        {t("eyebrow")}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {t("title")}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                        {t("desc")}
                    </p>
                </div>

                {/* Feature Cards / What to Expect */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-left">

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            {t("card1Title")}
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            {t("card1Body")}
                        </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            {t("card2Title")}
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            {t("card2Body")}
                        </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            {t("card3Title")}
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            {t("card3Body")}
                        </p>
                    </div>

                </div>

                {/* Action Button */}
                <div className="pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                        {t("backHome")}
                    </Link>
                </div>

            </div>
        </main>
    );
}