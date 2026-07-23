'use client';

import Link from "next/link";
import { BsSearch, BsHouse, BsArrowLeft } from "react-icons/bs";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
            <div className="relative max-w-md w-full text-center">

                {/* Background Ambient Glow */}
                <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

                {/* Main Card */}
                <div className="relative z-10 rounded-3xl border border-neutral-800 bg-neutral-950 p-8 sm:p-10 shadow-2xl">

                    {/* Big 404 Visual Header */}
                    <div className="relative mb-6">
                        <span className="text-7xl font-black text-neutral-900 tracking-tighter select-none sm:text-8xl">
                            404
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-400 shadow-lg shadow-orange-500/10">
                                <BsSearch className="text-2xl" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                        Page Not Found
                    </h1>

                    <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                        The page you are looking for doesn't exist, was removed, or might have been moved to a new URL.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <button
                            onClick={() => window.history.back()}
                            className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm font-semibold text-neutral-300 transition hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
                        >
                            <BsArrowLeft className="text-base" />
                            Go Back
                        </button>

                        <Link
                            href="/"
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                        >
                            <BsHouse className="text-base" />
                            Home
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}