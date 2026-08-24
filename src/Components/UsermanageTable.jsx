"use client";

import UpdateUser from "@/lib/Action/EditData/EditUser";
import { useRouter } from "next/navigation";


import toast from "react-hot-toast";

export default function UsermanageTable({ User }) {
    const users = Array.isArray(User) ? User : [];
    const router = useRouter()
    function formatDate(value) {
        if (!value) return "N/A";
        return new Date(value).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    async function handleBlockToggle(user) {
        const email = user?.email
        const isBlocked = user?.isBlocked === false ? true : false

        if (user?.role === "User") {
            const result = await UpdateUser(email, isBlocked)

            if (result.modifiedCount === 1) {
                toast.success(`User ${isBlocked === true ? 'Blocked' : 'Unblocked'} Successfully`)
                router.refresh()
            }
        } else {
            toast.error('Admin Cannot Be Blocked')
        }

    }

    return (
        <div className="w-full rounded-xl border border-white/10 bg-[#0A0A0A] text-zinc-100">
            {/* Header row — desktop / tablet only */}
            <div className="hidden text-left border-b border-white/10 bg-[#111114] px-5 py-3 text-xs font-medium uppercase tracking-wide text-zinc-500 sm:grid sm:grid-cols-[minmax(0,2fr)_minmax(0,2.4fr)_0.9fr_1.1fr_0.9fr_1fr_auto] sm:gap-4">
                <span>Name</span>
                <span>Email</span>
                <span>Role</span>
                <span>Verified</span>
                <span>Status</span>
                <span>Joined</span>
                <span className="text-right">Action</span>
            </div>

            {/* Rows */}
            <ul className="divide-y divide-white/[0.06]">
                {users.map((user) => (
                    <li
                        key={user._id}
                        className="flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-white/[0.03] sm:grid sm:grid-cols-[minmax(0,2fr)_minmax(0,2.4fr)_0.9fr_1.1fr_0.9fr_1fr_auto] sm:items-center sm:gap-4"
                    >
                        {/* Name */}
                        <div className="flex min-w-0 items-center gap-3">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300">
                                {user.name?.charAt(0)?.toUpperCase()}
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-zinc-100">
                                    {user.name}
                                </p>
                                {/* Inline meta shown only on mobile, since the grid columns collapse */}
                                <p className="mt-0.5 truncate text-xs text-zinc-500 sm:hidden">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        {/* Email — hidden on mobile (shown inline under the name instead) */}
                        <div className="hidden truncate text-sm text-zinc-400 sm:block">
                            {user.email}
                        </div>

                        {/* Role */}
                        <div className="text-sm text-zinc-300">
                            <span className="text-zinc-500 sm:hidden">Role: </span>
                            <span className="inline-flex items-center rounded-md border border-indigo-400/20 bg-indigo-500/10 px-2 py-0.5 text-xs font-medium text-indigo-300">
                                {user.role}
                            </span>
                        </div>

                        {/* Email verified */}
                        <div className="text-sm text-zinc-300">
                            <span className="text-zinc-500 sm:hidden">Verified: </span>
                            <span
                                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${user.emailVerified
                                    ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                                    : "border-amber-400/20 bg-amber-500/10 text-amber-300"
                                    }`}
                            >
                                {user.emailVerified ? "Verified" : "Unverified"}
                            </span>
                        </div>

                        {/* Status */}
                        <div className="text-sm text-zinc-300">
                            <span className="text-zinc-500 sm:hidden">Status: </span>
                            <span
                                className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${user.isBlocked
                                    ? "border-rose-400/20 bg-rose-500/10 text-rose-400"
                                    : "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                                    }`}
                            >
                                {user.isBlocked ? "Blocked" : "Active"}
                            </span>
                        </div>

                        {/* Joined */}
                        <div className="text-sm text-zinc-400">
                            <span className="text-zinc-500 sm:hidden">Joined: </span>
                            {formatDate(user.createdAt)}
                        </div>

                        {/* Action */}
                        <div className="sm:justify-self-end">
                            <button
                                type="button"
                                onClick={() => handleBlockToggle(user)}
                                className={`inline-flex w-full items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors sm:w-auto ${user.isBlocked
                                    ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-500/20"
                                    : "border-rose-400/20 bg-rose-500/10 text-rose-400 hover:border-rose-400/40 hover:bg-rose-500/20"
                                    }`}
                            >
                                {user.isBlocked ? "Unblock" : "Block"}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Empty state */}
            {users.length === 0 && (
                <div className="px-5 py-10 text-center text-sm text-zinc-500">
                    No users found.
                </div>
            )}
        </div>
    );
}