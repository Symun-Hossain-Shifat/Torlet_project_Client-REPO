"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Heart,
    ShoppingCart,
    User,
    Store,
} from "lucide-react";

// ---- Config: edit these to match your project ----
const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/categories" },
    { label: "Deals", href: "/deals" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar({
    isLoggedIn = false,
    cartCount = 0,
    wishlistCount = 0,
}) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            {/* ---------- Top header ---------- */}
            <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Left: logo (mobile menu button removed from here, it lives in the bottom bar now) */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Store size={22} className="text-amber-400" />
                        <span className="text-lg font-semibold tracking-tight text-white">
                            Torlet.Com
                        </span>
                    </Link>

                    {/* Middle: nav links, desktop only */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-neutral-300 transition-colors hover:text-amber-400"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: wishlist, cart, login/profile — desktop only, mobile has these in the bottom bar */}
                    <div className="hidden md:flex items-center gap-3">
                        <IconLink href="/wishlist" label="Wishlist" count={wishlistCount}>
                            <Heart size={20} />
                        </IconLink>

                        <IconLink href="/cart" label="Cart" count={cartCount}>
                            <ShoppingCart size={20} />
                        </IconLink>

                        {isLoggedIn ? (
                            <Link
                                href="/account"
                                className="ml-1 inline-flex items-center gap-2 rounded-full border border-neutral-700 px-3 py-1.5 text-sm font-medium text-neutral-200 hover:border-amber-400 hover:text-amber-400"
                                aria-label="My account"
                            >
                                <User size={18} />
                                <span>Profile</span>
                            </Link>
                        ) : (
                            <Link
                                href="/Signin"
                                className="ml-1 rounded-full bg-amber-400 px-4 py-1.5 text-sm font-semibold text-neutral-950 hover:bg-amber-300"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </header>

            {/* ---------- Mobile bottom tab bar ---------- */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-neutral-800 bg-neutral-950 py-2 md:hidden">
                <BottomTabButton
                    label="Menu"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <Menu size={22} />
                </BottomTabButton>

                <BottomTabLink href="/wishlist" label="Wishlist" count={wishlistCount}>
                    <Heart size={22} />
                </BottomTabLink>

                <BottomTabLink href="/cart" label="Cart" count={cartCount}>
                    <ShoppingCart size={22} />
                </BottomTabLink>

                <BottomTabLink
                    href={isLoggedIn ? "/account" : "/login"}
                    label={isLoggedIn ? "Account" : "Login"}
                >
                    <User size={22} />
                </BottomTabLink>
            </nav>

            {/* Spacer so page content doesn't hide behind the fixed bottom bar on mobile */}
            <div className="h-16 md:hidden" />

            {/* ---------- Mobile drawer (opens from left) ---------- */}
            <div
                className={`fixed inset-0 z-50 md:hidden ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                {/* Overlay */}
                <div
                    onClick={() => setIsDrawerOpen(false)}
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isDrawerOpen ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Panel */}
                <aside
                    className={`absolute left-0 top-0 h-full w-72 max-w-[80%] bg-neutral-900 shadow-xl transition-transform duration-300 ease-in-out ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-4">
                        <Link
                            href="/"
                            onClick={() => setIsDrawerOpen(false)}
                            className="flex items-center gap-2"
                        >
                            <Store size={20} className="text-amber-400" />
                            <span className="text-base font-semibold text-white">
                                YourLogo
                            </span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setIsDrawerOpen(false)}
                            className="rounded-md p-2 text-neutral-300 hover:bg-neutral-800"
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-1 p-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsDrawerOpen(false)}
                                className="rounded-md px-3 py-2.5 text-sm font-medium text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>
            </div>
        </>
    );
}

// Desktop icon button (header)
function IconLink({ href, label, count = 0, children }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="relative inline-flex items-center justify-center rounded-full p-2 text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
        >
            {children}
            {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-neutral-950">
                    {count > 9 ? "9+" : count}
                </span>
            )}
        </Link>
    );
}

// Mobile bottom bar item that navigates (Link)
function BottomTabLink({ href, label, count = 0, children }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="relative flex flex-1 flex-col items-center justify-center gap-1 text-neutral-300 hover:text-amber-400"
        >
            <span className="relative">
                {children}
                {count > 0 && (
                    <span className="absolute -top-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-bold text-neutral-950">
                        {count > 9 ? "9+" : count}
                    </span>
                )}
            </span>
            <span className="text-[11px] font-medium">{label}</span>
        </Link>
    );
}

// Mobile bottom bar item that triggers an action (e.g. opens the drawer)
function BottomTabButton({ label, onClick, children }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className="flex flex-1 flex-col  items-center justify-center gap-1 text-neutral-300 hover:text-amber-400"
        >
            {children}
            <span className="text-[11px] font-medium">{label}</span>
        </button>
    );
}