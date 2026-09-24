export default function VerifyOtpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-4">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-8 shadow-xl">
                <h1 className="text-2xl font-semibold text-white">Verify your email</h1>
                <p className="mt-2 text-sm text-zinc-400">
                    We sent a 6-digit code to{" "}
                    <span className="font-medium text-white">your email</span>
                </p>

                <form className="mt-8 space-y-6">
                    <div className="flex justify-between gap-2">
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="h-14 w-12 rounded-lg border border-white/10 bg-zinc-900 text-center text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="h-14 w-12 rounded-lg border border-white/10 bg-zinc-900 text-center text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="h-14 w-12 rounded-lg border border-white/10 bg-zinc-900 text-center text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="h-14 w-12 rounded-lg border border-white/10 bg-zinc-900 text-center text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="h-14 w-12 rounded-lg border border-white/10 bg-zinc-900 text-center text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="h-14 w-12 rounded-lg border border-white/10 bg-zinc-900 text-center text-xl font-semibold text-white outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-amber-500 py-3 font-medium text-black transition hover:bg-amber-400"
                    >
                        Verify Email
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-400">
                    Didn't get the code?{" "}
                    <button className="font-medium text-amber-400 hover:underline">
                        Resend code
                    </button>
                </div>
            </div>
        </div>
    );
}