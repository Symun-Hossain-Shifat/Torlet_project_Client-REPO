'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer, Tooltip } from "@heroui/react";

import {

    BiHeart,

} from "react-icons/bi";
import { BsFileEarmarkBarGraph, BsHouse, BsPeople, BsPerson } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

import { FiBookOpen } from "react-icons/fi";
import { AiOutlineTransaction } from "react-icons/ai";

export function SideNavigation({ plan, Userinfo }) {
    const pathname = usePathname();
    const user = Userinfo;

    const UserNavItems = [
        { href: "/ProfileDashboard/User", icon: BsHouse, label: "Overview" },


        { href: "/ProfileDashboard/User/Cart", icon: CgShoppingCart, label: "Your Cart" },
        { href: "/ProfileDashboard/User/wishlist", icon: BiHeart, label: "WishList" },

    ];

    const AdminNavItems = [
        { href: "/ProfileDashboard/Admin", icon: BsHouse, label: "Overview" },
        { href: "/ProfileDashboard/Admin/User", icon: BsPeople, label: "Manage User" },
        { href: "/ProfileDashboard/Admin/Products", icon: FiBookOpen, label: "Manage Product" },
        { href: "/ProfileDashboard/Admin/Report", icon: BsFileEarmarkBarGraph, label: "Manage Report" },
        { href: "/ProfileDashboard/Admin/Transiction", icon: AiOutlineTransaction, label: "Transaction" },

    ];


    const FinalLinks = user?.role === 'Admin' ? AdminNavItems : UserNavItems;

    // Initials fallback for the user avatar
    const initials = user?.name
        ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
        : "?";

    // Full nav content — used in the desktop sidebar (lg+) and the mobile drawer
    const NavLinks = ({ onNavigate }) => (
        <nav className="flex flex-col gap-1.5 sm:gap-2">
            {FinalLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        href={item.href}
                        key={item.label}
                        onClick={onNavigate}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${isActive
                            ? "bg-orange-500/15 text-orange-400"
                            : "text-gray-300 hover:bg-orange-500/10 hover:text-orange-400"
                            }`}
                    >
                        <item.icon className="text-lg shrink-0" />
                        <span className="truncate">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );

    // Icon-only condensed nav — used in the md-only rail sidebar (tablet)
    const NavIcons = () => (
        <nav className="flex flex-col items-center gap-1.5">
            {FinalLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Tooltip key={item.label} content={item.label} placement="right">
                        <Link
                            href={item.href}
                            aria-label={item.label}
                            className={`flex items-center justify-center rounded-xl p-3 transition-all duration-200 ${isActive
                                ? "bg-orange-500/15 text-orange-400"
                                : "text-gray-300 hover:bg-orange-500/10 hover:text-orange-400"
                                }`}
                        >
                            <item.icon className="text-xl" />
                        </Link>
                    </Tooltip>
                );
            })}
        </nav>
    );

    const UserCard = ({ compact }) => (
        <div
            className={`flex items-center gap-3 rounded-2xl border border-gray-800 bg-black text-white mb-4 ${compact ? "justify-center p-2" : "p-3"
                }`}
        >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                {initials}
            </div>
            {!compact && (
                <div className="min-w-0">
                    <h1 className="truncate font-semibold text-white">
                        {user?.name}
                    </h1>
                    <p className="text-xs text-gray-400">
                        Welcome back 👋
                    </p>
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Mobile top bar (< md): app bar with drawer trigger */}
            <header className="flex md:hidden items-center justify-between gap-3 border-b border-gray-800 bg-black px-4 py-3">
                <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                        {initials}
                    </div>
                    <span className="truncate text-sm font-medium text-white">
                        {user?.name || "Menu"}
                    </span>
                </div>

                <Drawer>
                    <Button
                        isIconOnly
                        aria-label="Open navigation"
                        className="shrink-0 bg-orange-500 text-white"
                    >
                        <IoMenu className="text-lg" />
                    </Button>

                    <Drawer.Backdrop>
                        <Drawer.Content placement="left">
                            <Drawer.Dialog className="w-[85vw] max-w-xs bg-black">
                                <Drawer.CloseTrigger />
                                <Drawer.Header>
                                    <Drawer.Heading className="text-white">
                                        Navigation
                                    </Drawer.Heading>
                                </Drawer.Header>
                                <Drawer.Body className="px-2 bg-black">
                                    <UserCard />
                                    <NavLinks />
                                </Drawer.Body>
                            </Drawer.Dialog>
                        </Drawer.Content>
                    </Drawer.Backdrop>
                </Drawer>
            </header>

            {/* Tablet rail (md to lg): icon-only collapsed sidebar */}
            <aside className="hidden md:flex lg:hidden w-16 shrink-0 flex-col items-center border-r border-gray-800 bg-black py-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white">
                    {initials}
                </div>
                <NavIcons />
            </aside>

            {/* Desktop sidebar (lg+): full labeled sidebar */}
            <aside className="hidden lg:flex lg:flex-col w-56 xl:w-64 shrink-0 border-r border-gray-800 bg-black p-4">
                <UserCard />
                <NavLinks />
            </aside>
        </>
    );
}