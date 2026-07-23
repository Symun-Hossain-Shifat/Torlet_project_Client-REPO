'use client';

import Link from "next/link";
import { BsShieldLock, BsArrowLeft, BsHouse } from "react-icons/bs";

export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
            <div className="relative max-w-md w-full text-center">

                {/* Background Ambient Glow */}
                <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

                {/* Main Card */}
                <div className="relative z-10 rounded-3xl border border-neutral-800 bg-neutral-950 p-8 sm:p-10 shadow-2xl">

                    {/* Icon Badge */}
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-500 shadow-lg shadow-red-500/10">
                        <BsShieldLock className="text-4xl" />
                    </div>

                    {/* Status Code Header */}
                    <span className="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
                        403 • Access Denied
                    </span>

                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                        Unauthorized Access
                    </h1>

                    <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                        You don’t have permission to access this page. Please sign in with an authorized account or return to safety.
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
                            Dashboard
                        </Link>
                    </div>
                </div>

                <p className="mt-6 text-xs text-neutral-600">
                    If you believe this is an error, contact your system administrator.
                </p>
            </div>
        </div>
    );
}