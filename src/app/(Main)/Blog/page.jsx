import React from 'react';

export default function BlogPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-2xl w-full text-center space-y-8">

                {/* Brand Tag & Title */}
                <div className="space-y-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-slate-600 dark:text-slate-400 uppercase bg-slate-200/60 dark:bg-slate-800/60 rounded-full border border-slate-300/50 dark:border-slate-700/50">
                        Torlet Journal & Insights
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Craftsmanship in the Making
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                        There are no articles published just yet. We’re currently preparing guides on solid brass fixtures, installation specs, and long-term care.
                    </p>
                </div>

                {/* Feature Cards (Highlights Torlet Values while waiting for blogs) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            Verified Specs
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Material grades and dimensions verified before every listing.
                        </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            Built to Last
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Solid brass, vitreous china, and premium durable finishes.
                        </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            Hassle-Free Support
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Transparent coverage guidelines and easy returns standard.
                        </p>
                    </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                        Explore Premium Fixtures
                    </a>
                </div>

            </div>
        </div>
    );
}