import React from 'react';

export default function ReturnsPage() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-3xl w-full text-center space-y-8">

                {/* Brand Badge & Header */}
                <div className="space-y-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-slate-600 dark:text-slate-400 uppercase bg-slate-200/60 dark:bg-slate-800/60 rounded-full border border-slate-300/50 dark:border-slate-700/50">
                        Hassle-Free Protection
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Returns & Guarantees
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                        We are currently updating our detailed return policy documentation. Rest assured, every Torlet fixture comes backed by our quality guarantee and dedicated support.
                    </p>
                </div>

                {/* Commitment Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-2">

                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="w-8 h-8 mb-3 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-sm">
                            01
                        </div>
                        <h2 className="font-semibold text-slate-900 dark:text-white text-base mb-1">
                            Easy Process
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Straightforward return requests with transparent coverage guidelines and zero hassle.
                        </p>
                    </div>

                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="w-8 h-8 mb-3 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-sm">
                            02
                        </div>
                        <h2 className="font-semibold text-slate-900 dark:text-white text-base mb-1">
                            Verified Specs
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Every fixture is tested for fit, finish, and material grade so what you order is what you get.
                        </p>
                    </div>

                    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="w-8 h-8 mb-3 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-bold text-sm">
                            03
                        </div>
                        <h2 className="font-semibold text-slate-900 dark:text-white text-base mb-1">
                            Dedicated Support
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            Have an issue with an order? Our team is always here to make sure your purchase is protected.
                        </p>
                    </div>

                </div>

                {/* Contact CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:support@torlet.com"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                        Contact Customer Support
                    </a>
                    <a
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-colors duration-200"
                    >
                        Return to Store
                    </a>
                </div>

            </div>
        </main>
    );
}