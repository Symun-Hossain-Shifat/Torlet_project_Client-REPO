



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
import { useCategory } from "@/context/CategoryContext";


/**
 * Full category list (parent categories + subcategories) shown inside
 * the category drawer.
 */
const CATEGORIES = [
    {
        key: "FashionApparel",
        subcategories: [
            { key: "MensFashion", name: "Men's Fashion" },
            { key: "WomensFashion", name: "Women's Fashion" },
            { key: "KidsBaby", name: "Kids & Baby" },
            { key: "TShirts", name: "T-Shirts" },
            { key: "ShoesSneakers", name: "Shoes & Sneakers" },
            { key: "Bags", name: "Bags" },
            { key: "Watches", name: "Watches" },
            { key: "Sunglasses", name: "Sunglasses" },
        ],
    },
    {
        key: "ElectronicsGadgets",
        subcategories: [
            { key: "SmartphonesTablets", name: "Smartphones & Tablets" },
            { key: "ComputersLaptops", name: "Computers & Laptops" },
            { key: "SmartGadgets", name: "Smart Gadgets" },
            { key: "HomeAppliances", name: "Home Appliances" },
            { key: "HeadphonesEarbuds", name: "Headphones & Earbuds" },
            { key: "Gaming", name: "Gaming" },
            { key: "SmartWatch", name: "Smart Watch" },
            { key: "CameraDrone", name: "Camera & Drone" },
        ],
    },
    {
        key: "HomeLiving",
        subcategories: [
            { key: "Furniture", name: "Furniture" },
            { key: "HomeDecor", name: "Home Decor" },
            { key: "KitchenDining", name: "Kitchen & Dining" },
            { key: "BeddingBath", name: "Bedding & Bath" },
            { key: "Lighting", name: "Lighting" },
        ],
    },
    {
        key: "BeautyPersonalCare",
        subcategories: [
            { key: "Skincare", name: "Skincare" },
            { key: "Makeup", name: "Makeup" },
            { key: "HairPersonalCare", name: "Hair & Personal Care" },
            { key: "HealthWellness", name: "Health & Wellness" },
        ],
    },
    {
        key: "GroceriesFood",
        subcategories: [
            { key: "FreshFruits", name: "Fresh Fruits" },
            { key: "FreshVegetables", name: "Fresh Vegetables" },
            { key: "Snacks", name: "Snacks" },
            { key: "Beverages", name: "Beverages" },
            { key: "CookingEssentials", name: "Cooking Essentials" },
        ],
    },
    {
        key: "HealthFitness",
        subcategories: [
            { key: "FitnessEquipment", name: "Fitness Equipment" },
            { key: "SportsEquipment", name: "Sports Equipment" },
            { key: "YogaExercise", name: "Yoga & Exercise" },
        ],
    },
    {
        key: "BabyKids",
        subcategories: [
            { key: "BabyClothing", name: "Baby Clothing" },
            { key: "KidsClothing", name: "Kids Clothing" },
            { key: "Toys", name: "Toys" },
            { key: "SchoolSupplies", name: "School Supplies" },
        ],
    },
    {
        key: "BooksStationery",
        subcategories: [
            { key: "Books", name: "Books" },
            { key: "OfficeSupplies", name: "Office Supplies" },
            { key: "NotebooksDiaries", name: "Notebooks & Diaries" },
        ],
    },
    {
        key: "SportsOutdoor",
        subcategories: [
            { key: "Football", name: "Football" },
            { key: "Cricket", name: "Cricket" },
            { key: "Sportswear", name: "Sportswear" },
        ],
    },
    {
        key: "JewelryAccessories",
        subcategories: [
            { key: "Necklaces", name: "Necklaces" },
            { key: "Earrings", name: "Earrings" },
            { key: "Rings", name: "Rings" },
            { key: "Wallets", name: "Wallets" },
            { key: "Belts", name: "Belts" },
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
    const tCat = useTranslations("CategoriesList");
    const { handleCategorySelect, handleSearchChange } = useCategory();


    return (
        <>
            {/* ---------- Top header ---------- */}
            <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80">
                <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setIsCategoryDrawerOpen(true)}
                            aria-label="Open categories"
                            className="hidden shrink-0 items-center    md:inline-flex justify-center rounded-full p-2 text-neutral-200 hover:bg-neutral-800 hover:text-amber-400"
                        >
                            <Menu size={18} />
                        </button>

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
                    </div>
                    {/* Search Icon Feild */}


                    <div className=" md:hidden block ml-auto  ">
                        <div className="relative">
                            <Search
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="Search"

                                onChange={(e) => handleSearchChange(e.target.value)}
                                className="w-full rounded-4xl border border-gray-700 bg-black py-3 pl-12 pr-5 text-white placeholder:text-gray-400 transition-all duration-200 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                            />
                        </div>
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

                                onChange={(e) => handleSearchChange(e.target.value)}
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
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">


                        <div className="hidden shrink-0 items-center gap-3 md:flex">
                            <LanguageSwitcher />

                            <IconLink
                                href={user ? "/ProfileDashboard/User/wishlist" : "/Signin"}
                                label={t("wishlist")}
                                count={wishlistCount}
                            >
                                <Heart size={20} />
                            </IconLink>

                            <IconLink
                                href={user ? "/ProfileDashboard/User/Cart" : "/Signin"}
                                label={t("cart")}
                                count={cartCount}
                            >
                                <ShoppingCart size={20} />
                            </IconLink>

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
                                    <span>{t("profile")}</span>
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

                </div>
            </header>




            {/* ---------- Mobile bottom tab bar ---------- */}
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

            {/* ---------- Category drawer ---------- */}
            <div
                className={`fixed inset-0 z-[60] ${isCategoryDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                <div
                    onClick={() => setIsCategoryDrawerOpen(false)}
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isCategoryDrawerOpen ? "opacity-100" : "opacity-0"
                        }`}
                />

                <aside
                    className={`absolute left-0 top-0 flex h-dvh w-80 max-w-[85%] flex-col overflow-hidden bg-neutral-900 shadow-xl transition-transform duration-300 ease-in-out ${isCategoryDrawerOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                        }`}
                >
                    <div className="flex shrink-0 items-center justify-between border-b border-neutral-800 px-4 py-4">
                        <span className="text-base font-semibold text-white">
                            {t("categories")}
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

                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                        <div className="p-2">
                            {CATEGORIES.map((group) => (
                                <details
                                    key={group.key}
                                    className="group border-b border-neutral-800 last:border-b-0"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-neutral-200 hover:text-amber-400">
                                        <span>{tCat(group.key)}</span>

                                        <ChevronDown
                                            size={16}
                                            className="shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-180 group-open:text-amber-400"
                                        />
                                    </summary>

                                    <div className="flex flex-col gap-0.5 pb-2 pl-3">
                                        {group.subcategories.map((sub) => (
                                            <button
                                                key={sub.key}
                                                type="button"
                                                onClick={() => {
                                                    handleCategorySelect(sub.name);
                                                    setIsCategoryDrawerOpen(false);
                                                }}
                                                className="cursor-pointer rounded-md px-3 py-2 text-left text-sm text-neutral-400 hover:bg-neutral-800 hover:text-amber-400"
                                            >
                                                {tCat(sub.key)}
                                            </button>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="block md:hidden border-t border-neutral-800 p-4">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}

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