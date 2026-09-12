"use client";

import { useState } from "react";
import Link from "next/link";
import {
    X,
    Heart,
    ShoppingCart,
    User,
    Store,
    Menu,
    UserRoundKey,
    Search,
    ChevronDown,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/Components/LanguageSwitcher";

/**
 * Full category list (parent categories + subcategories) shown inside
 * the category drawer. UI only — no filtering logic wired up.
 */
const CATEGORIES = [
    {
        name: "Fashion & Apparel",
        subcategories: [
            "Men's Fashion",
            "Women's Fashion",
            "Kids & Baby",
            "Jerseys",
            "T-Shirts",
            "Shirts",
            "Pants & Jeans",
            "Dresses",
            "Sarees",
            "Panjabi & Traditional Wear",
            "Shoes & Sneakers",
            "Bags",
            "Accessories",
            "Watches",
            "Sunglasses",
        ],
    },
    {
        name: "Electronics & Gadgets",
        subcategories: [
            "Smartphones & Tablets",
            "Computers & Laptops",
            "Monitors",
            "Computer Accessories",
            "Mobile Accessories",
            "Smart Gadgets",
            "Cameras & Photography",
            "Headphones & Earbuds",
            "Speakers",
            "Gaming",
            "Networking Devices",
            "Storage Devices",
            "Home Appliances",
        ],
    },
    {
        name: "Home & Living",
        subcategories: [
            "Furniture",
            "Home Decor",
            "Kitchen & Dining",
            "Bedding & Bath",
            "Lighting",
            "Storage & Organization",
            "Cleaning Supplies",
            "Home Improvement",
            "Curtains & Blinds",
            "Garden & Outdoor",
        ],
    },
    {
        name: "Beauty & Personal Care",
        subcategories: [
            "Skincare",
            "Makeup",
            "Hair Care",
            "Personal Care",
            "Fragrances & Perfumes",
            "Men's Grooming",
            "Beauty Tools",
            "Health & Wellness",
        ],
    },
    {
        name: "Groceries & Food",
        subcategories: [
            "Fresh Fruits",
            "Fresh Vegetables",
            "Meat & Seafood",
            "Dairy & Eggs",
            "Snacks",
            "Beverages",
            "Cooking Essentials",
            "Rice & Grains",
            "Spices & Sauces",
            "Bakery",
            "Frozen Food",
            "Organic & Healthy Food",
        ],
    },
    {
        name: "Health & Fitness",
        subcategories: [
            "Fitness Equipment",
            "Sports Equipment",
            "Gym Accessories",
            "Yoga & Exercise",
            "Outdoor Sports",
            "Cycling",
            "Running",
            "Health Care Products",
            "Personal Care Devices",
        ],
    },
    {
        name: "Baby & Kids",
        subcategories: [
            "Baby Clothing",
            "Kids Clothing",
            "Baby Care",
            "Diapers & Wipes",
            "Baby Feeding",
            "Toys",
            "Educational Toys",
            "Kids Shoes",
            "School Supplies",
            "Baby Gear",
        ],
    },
    {
        name: "Automotive",
        subcategories: [
            "Car Accessories",
            "Motorcycle Accessories",
            "Car Electronics",
            "Motorcycle Parts",
            "Car Parts",
            "Tires & Wheels",
            "Tools & Equipment",
            "Car Care",
            "Helmets & Safety",
            "Interior Accessories",
            "Exterior Accessories",
        ],
    },
    {
        name: "Books & Stationery",
        subcategories: [
            "Books",
            "Academic Books",
            "Children's Books",
            "Comics & Manga",
            "Office Supplies",
            "Notebooks & Diaries",
            "Pens & Pencils",
            "Art Supplies",
            "School Supplies",
            "Educational Materials",
        ],
    },
    {
        name: "Sports & Outdoor",
        subcategories: [
            "Football",
            "Cricket",
            "Badminton",
            "Tennis",
            "Basketball",
            "Sportswear",
            "Sports Shoes",
            "Camping & Hiking",
            "Fishing",
            "Outdoor Accessories",
        ],
    },
    {
        name: "Jewelry & Accessories",
        subcategories: [
            "Necklaces",
            "Earrings",
            "Rings",
            "Bracelets",
            "Bangles",
            "Jewelry Sets",
            "Watches",
            "Sunglasses",
            "Wallets",
            "Belts",
            "Hair Accessories",
        ],
    },
    {
        name: "Home Appliances",
        subcategories: [
            "Refrigerators",
            "Air Conditioners",
            "Washing Machines",
            "Microwaves",
            "Ovens",
            "Rice Cookers",
            "Blenders & Mixers",
            "Electric Kettles",
            "Fans",
            "Vacuum Cleaners",
            "Small Appliances",
        ],
    },
    {
        name: "Pet Supplies",
        subcategories: [
            "Dog Supplies",
            "Cat Supplies",
            "Pet Food",
            "Pet Toys",
            "Pet Grooming",
            "Pet Accessories",
            "Aquarium Supplies",
            "Bird Supplies",
        ],
    },
    {
        name: "Office & Business",
        subcategories: [
            "Office Furniture",
            "Printers & Scanners",
            "Computer Accessories",
            "Office Supplies",
            "Paper Products",
            "Storage & Filing",
            "Business Equipment",
            "Presentation Equipment",
        ],
    },
    {
        name: "Travel & Luggage",
        subcategories: [
            "Luggage",
            "Suitcases",
            "Backpacks",
            "Travel Bags",
            "Travel Accessories",
            "Passport Holders",
            "Travel Organizers",
            "Camping Gear",
        ],
    },
    {
        name: "Toys & Games",
        subcategories: [
            "Action Figures",
            "Dolls",
            "Board Games",
            "Puzzles",
            "Remote Control Toys",
            "Educational Toys",
            "Outdoor Toys",
            "Video Games",
            "Gaming Accessories",
        ],
    },
    {
        name: "Musical Instruments",
        subcategories: [
            "Guitars",
            "Keyboards & Pianos",
            "Drums & Percussion",
            "String Instruments",
            "Wind Instruments",
            "Microphones",
            "Audio Equipment",
            "Musical Accessories",
        ],
    },
    {
        name: "Tools & Hardware",
        subcategories: [
            "Hand Tools",
            "Power Tools",
            "Hardware",
            "Electrical Tools",
            "Plumbing",
            "Safety Equipment",
            "Construction Tools",
            "Measuring Tools",
        ],
    },
    {
        name: "Digital Products",
        subcategories: [
            "Software",
            "Templates",
            "E-books",
            "Online Courses",
            "Digital Art",
            "Graphics & Design",
            "Fonts",
            "Website Themes",
        ],
    },
    {
        name: "Gifts & Occasions",
        subcategories: [
            "Birthday Gifts",
            "Wedding Gifts",
            "Anniversary Gifts",
            "Valentine's Day",
            "Corporate Gifts",
            "Gift Cards",
            "Flowers",
            "Personalized Gifts",
        ],
    },
];

export default function Navbar({
    cartCount = 0,
    wishlistCount = 0,
}) {
    const [isCategoryDrawerOpen, setIsCategoryDrawerOpen] = useState(false);
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const role = user?.role;
    const t = useTranslations("Navbar");

    return (
        <>
            {/* ---------- Top header ---------- */}
            <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80">
                <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">

                    {/* Category menu icon — desktop/tablet only. On mobile this is NOT shown up top; it lives in the bottom bar instead. */}
                    <button
                        type="button"
                        onClick={() => setIsCategoryDrawerOpen(true)}
                        aria-label="Open categories"
                        className="hidden shrink-0 items-center justify-center rounded-full py-2 text-neutral-200  md:inline-flex"
                    >
                        <Menu size={18} />
                    </button>

                    {/* Logo */}
                    <div className="shrink-0">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            <Store
                                size={22}
                                className="text-amber-400"
                            />

                            <span className="text-lg font-semibold tracking-tight text-white">
                                {t("title")}
                            </span>
                        </Link>
                    </div>

                    {/* Search */}
                    <div className="flex flex-1 justify-center hidden md:flex">
                        <div className="relative w-full max-w-2xl">
                            <Search
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="Search products..."
                                className="
            w-full
            rounded-xl
            border border-gray-700
            bg-black
            py-2.5
            pl-12
            pr-5
            text-sm
            text-white
            placeholder:text-gray-400
            transition-all
            duration-200
            focus:border-amber-400
            focus:outline-none
            focus:ring-2
            focus:ring-amber-400/30
          "
                            />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden shrink-0 items-center gap-3 md:flex">

                        {/* Language */}
                        <LanguageSwitcher />

                        {/* Wishlist */}
                        <IconLink
                            href={user ? "/ProfileDashboard/User/wishlist" : "/Signin"}
                            label={t("wishlist")}
                            count={wishlistCount}
                        >
                            <Heart size={20} />
                        </IconLink>

                        {/* Cart */}
                        <IconLink
                            href={user ? "/ProfileDashboard/User/Cart" : "/Signin"}
                            label={t("cart")}
                            count={cartCount}
                        >
                            <ShoppingCart size={20} />
                        </IconLink>

                        {/* Profile / Login */}
                        {user ? (
                            <Link
                                href={`/ProfileDashboard/${role}`}
                                className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-neutral-700
            px-3
            py-1.5
            text-sm
            font-medium
            text-neutral-200
            transition
            hover:border-amber-400
            hover:text-amber-400
          "
                            >
                                <User size={18} />

                                <span>
                                    {t("profile")}
                                </span>
                            </Link>
                        ) : (
                            <Link
                                href="/Signin"
                                className="
            rounded-full
            bg-amber-400
            px-4
            py-1.5
            text-sm
            font-semibold
            text-neutral-950
            transition
            hover:bg-amber-300
          "
                            >
                                {t("login")}
                            </Link>
                        )}
                    </div>


                </div>
            </header>

            {/* ---------- Mobile bottom tab bar: Categories (+ language nested under it), Wishlist, Cart, Profile/Login ---------- */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-neutral-800 bg-neutral-950 py-2 md:hidden">
                <BottomTabButton
                    label="Categories"
                    onClick={() => setIsCategoryDrawerOpen(true)}
                >
                    <Menu size={22} />
                </BottomTabButton>

                <BottomTabLink href={user ? "/ProfileDashboard/User/wishlist" : "/Signin"} label={t("wishlist")} count={wishlistCount}>
                    <Heart size={22} />
                </BottomTabLink>

                <BottomTabLink href={user ? "/ProfileDashboard/User/Cart" : "/Signin"} label={t("cart")} count={cartCount}>
                    <ShoppingCart size={22} />
                </BottomTabLink>

                <BottomTabLink
                    href={user ? `/ProfileDashboard/${role}` : "/Signin"}
                    label={user ? t("account") : t("login")}
                >
                    {user ? <User size={22} /> : <UserRoundKey size={22} />}
                </BottomTabLink>
            </nav>

            {/* ---------- Category drawer (opens from the left; same drawer for header button and bottom-bar button) ---------- */}
            <div
                className={`fixed inset-0 z-[60] ${isCategoryDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                {/* Overlay */}
                <div
                    onClick={() => setIsCategoryDrawerOpen(false)}
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isCategoryDrawerOpen ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Panel */}
                <aside
                    className={`absolute left-0 top-0 flex h-dvh w-80 max-w-[85%] flex-col overflow-hidden bg-neutral-900 shadow-xl transition-transform duration-300 ease-in-out ${isCategoryDrawerOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                        }`}
                >
                    {/* Header */}
                    <div className="flex shrink-0 items-center justify-between border-b border-neutral-800 px-4 py-4">
                        <span className="text-base font-semibold text-white">
                            Categories
                        </span>

                        <button
                            type="button"
                            onClick={() => setIsCategoryDrawerOpen(false)}
                            className="rounded-md p-2 text-neutral-300 hover:bg-neutral-800"
                            aria-label="Close categories"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* EVERYTHING SCROLLS */}
                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">

                        {/* Categories */}
                        <div className="p-2">
                            {CATEGORIES.map((group) => (
                                <details
                                    key={group.name}
                                    className="group border-b border-neutral-800 last:border-b-0"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-neutral-200 hover:text-amber-400">
                                        <span>{group.name}</span>

                                        <ChevronDown
                                            size={16}
                                            className="shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-180 group-open:text-amber-400"
                                        />
                                    </summary>

                                    <div className="flex flex-col gap-0.5 pb-2 pl-3">
                                        {group.subcategories.map((sub) => (
                                            <span
                                                key={sub}
                                                className="cursor-pointer rounded-md px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800 hover:text-amber-400"
                                            >
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>

                        {/* Language Switcher — THIS WILL SCROLL */}
                        <div className="block md:hidden border-t border-neutral-800 p-4">
                            <LanguageSwitcher />
                        </div>

                    </div>
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

// Mobile bottom bar item that triggers an action
function BottomTabButton({ label, onClick, children }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className="flex flex-1 flex-col items-center justify-center gap-1 text-neutral-300 hover:text-amber-400"
        >
            {children}
            <span className="text-[11px] font-medium">{label}</span>
        </button>
    );
}