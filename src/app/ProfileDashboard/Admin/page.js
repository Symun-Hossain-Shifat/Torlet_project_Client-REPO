'use client'
import {
    BsCalendar3,
    BsClock,
    BsEnvelope,
    BsPerson,
    BsShieldCheck,
    BsShieldLock,
} from "react-icons/bs";
import { MdVerified, MdOutlineErrorOutline } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
    const { data: session } = authClient.useSession()
    const router = useRouter()
    const user = session?.user;
    const {
        name,
        email,
        emailVerified,
        createdAt,
        updatedAt,
        role,
        isBlocked,
    } = user || {};

    const initials = name
        ? name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
        : "?";

    const formatDate = (value) => {
        if (!value) return "—";
        return new Date(value).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
        });
    };

    const HandleLogout = async () => {
        await authClient.signOut();
        router.push('/Signin')
    };

    const infoRows = [
        { label: "Full name", value: name || "—", icon: BsPerson },
        { label: "Email address", value: email || "—", icon: BsEnvelope },
        { label: "Joined", value: formatDate(createdAt), icon: BsCalendar3 },
        { label: "Last updated", value: formatDate(updatedAt), icon: BsClock },
    ];

    return (
        <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 sm:py-12">
            <div className="mx-auto max-w-4xl space-y-6">

                {/* Main Hero Card */}
                <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 shadow-2xl">
                    {/* Subtle Glow Background Accent */}
                    <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-orange-600/5 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-3xl font-bold text-white shadow-lg shadow-orange-500/20 sm:h-28 sm:w-28 sm:text-4xl">
                                {initials}
                            </div>
                            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 border border-neutral-700">
                                <span className={`h-2.5 w-2.5 rounded-full ${isBlocked ? "bg-red-500" : "bg-emerald-500"}`} />
                            </span>
                        </div>

                        {/* Identity & Badges */}
                        <div className="min-w-0 flex-1 space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h1 className="truncate text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                        {name || "User Profile"}
                                    </h1>
                                    <p className="truncate text-sm text-neutral-400 mt-1">
                                        {email || "No email provided"}
                                    </p>
                                </div>

                                {/* Log Out Button (Desktop Position) */}
                                <div className="hidden sm:block">
                                    <button onClick={HandleLogout} className="group inline-flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300">
                                        <BiLogOut className="text-lg transition-transform group-hover:-translate-x-0.5" />
                                        <span>Log Out</span>
                                    </button>
                                </div>
                            </div>

                            {/* Status Tags */}
                            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:justify-start">
                                {/* Role Badge */}
                                <span className="inline-flex items-center gap-1.5 rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400 backdrop-blur-sm">
                                    <BsShieldCheck className="text-sm" />
                                    {role || "User"}
                                </span>

                                {/* Verification Badge */}
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${emailVerified
                                        ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                        : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                                        }`}
                                >
                                    <MdVerified className="text-sm" />
                                    {emailVerified ? "Verified" : "Unverified"}
                                </span>

                                {/* Blocked Status Badge */}
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${isBlocked
                                        ? "border-red-500/20 bg-red-500/10 text-red-400"
                                        : "border-neutral-800 bg-neutral-900 text-neutral-300"
                                        }`}
                                >
                                    {isBlocked ? (
                                        <>
                                            <MdOutlineErrorOutline className="text-sm" />
                                            Blocked
                                        </>
                                    ) : (
                                        <>
                                            <BsShieldLock className="text-sm" />
                                            Active
                                        </>
                                    )}
                                </span>
                            </div>

                            {/* Log Out Button (Mobile Position) */}
                            <div className="pt-2 sm:hidden w-full">
                                <button onClick={HandleLogout} className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-500/40 hover:bg-red-500/20 hover:text-red-300">
                                    <BiLogOut className="text-lg transition-transform group-hover:-translate-x-0.5" />
                                    <span>Log Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Details Grid */}
                <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8">
                    <h2 className="mb-6 text-xs font-bold uppercase tracking-wider text-neutral-500">
                        Account Information
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {infoRows.map(({ label, value, icon: Icon }) => (
                            <div
                                key={label}
                                className="group flex items-start gap-4 rounded-2xl border border-neutral-900 bg-neutral-900/50 p-4 transition-colors duration-200 hover:border-neutral-800 hover:bg-neutral-900"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950 text-neutral-400 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
                                    <Icon className="text-lg" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium text-neutral-500">{label}</p>
                                    <p className="mt-1 truncate text-sm font-semibold text-neutral-200">
                                        {value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Navigation */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
                    >
                        ← Back to Home
                    </Link>
                </div>


            </div>
        </div>
    );
}