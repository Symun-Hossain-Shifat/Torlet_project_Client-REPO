import React from 'react';

export default function NewsPage() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-2xl w-full text-center space-y-8">

                {/* Badge & Title */}
                <div className="space-y-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-slate-600 dark:text-slate-400 uppercase bg-slate-200/60 dark:bg-slate-800/60 rounded-full border border-slate-300/50 dark:border-slate-700/50">
                        Torlet Newsroom
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Latest News & Updates
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                        No news or press releases have been published yet. Check back soon for upcoming product launches, material innovations, and company announcements!
                    </p>
                </div>

                {/* Feature Cards / What to Expect */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-left">

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            New Releases
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Be the first to know when new solid brass and vitreous china lines launch.
                        </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            Quality Specs
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Updates on manufacturing standards and material grade testing.
                        </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h2 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                            Store Updates
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Important coverage guideline updates and shipping enhancements.
                        </p>
                    </div>

                </div>

                {/* Action Button */}
                <div className="pt-2">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                        Back to Home
                    </a>
                </div>

            </div>
        </main>
    );
}