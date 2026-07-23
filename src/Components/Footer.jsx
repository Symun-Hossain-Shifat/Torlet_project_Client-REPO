"use client";

import Link from "next/link";
import {
    FaShoppingCart,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaNewspaper,
    FaArrowUp,
} from "react-icons/fa";

// ---- Config: edit content/links to match your project ----
const RECENT_POSTS = [
    {
        title: "Exploring Atlanta's modern homes",
        date: "August 27, 2021",
        comments: "No Comments",
        href: "/blog/exploring-atlantas-modern-homes",
    },
    {
        title: "Green interior design inspiration",
        date: "August 27, 2021",
        comments: "No Comments",
        href: "/blog/green-interior-design-inspiration",
    },
];

const OUR_STORES = [
    { label: "New York", href: "/stores/new-york" },
    { label: "London SF", href: "/stores/london-sf" },
    { label: "Edinburgh", href: "/stores/edinburgh" },
    { label: "Los Angeles", href: "/stores/los-angeles" },
    { label: "Chicago", href: "/stores/chicago" },
    { label: "Las Vegas", href: "/stores/las-vegas" },
];

const USEFUL_LINKS = [
    { label: "Privacy Policy", href: "/PrivacyPolicyPage" },
    { label: "Returns", href: "/ReturnsPage" },
    { label: "Terms & Conditions", href: "/TermsAndConditionsPage" },
    { label: "Contact Us", href: "/ContactUs" },
    { label: "Latest News", href: "/news" },
    { label: "Our Sitemap", href: "/sitemap" },
];

const SOCIAL_LINKS = [
    { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
    { label: "Latest News", href: "/news", icon: FaNewspaper },
];



export default function Footer() {
    return (
        <footer className="w-full border-t border-neutral-800 bg-neutral-950 text-neutral-400">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Brand + contact info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2">
                            <FaShoppingCart size={20} className="text-amber-400" />
                            <span className="text-xl font-bold tracking-tight text-white">
                                Torlet.com
                            </span>
                        </Link>

                        <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                            An e-commerce site is an online platform for buying and
                            selling products or services. It offers features like secure
                            payments, product listings, and easy shopping from anywhere.
                        </p>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt size={13} className="mt-1 shrink-0 text-amber-400" />
                                <span>Muscat, Ruwi, Wadi Adai</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaPhoneAlt size={13} className="mt-1 shrink-0 text-amber-400" />
                                <span>Phone: 99119843</span>
                            </li>
                        </ul>
                    </div>

                    {/* Recent posts (text only, no thumbnails) */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                            Recent Posts
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {RECENT_POSTS.map((post) => (
                                <li
                                    key={post.href}
                                    className="border-l-2 border-neutral-800 pl-3 hover:border-amber-400"
                                >
                                    <Link
                                        href={post.href}
                                        className="block text-sm font-semibold leading-snug text-neutral-200 hover:text-amber-400"
                                    >
                                        {post.title}
                                    </Link>
                                    <p className="mt-1 text-xs text-neutral-500">
                                        {post.date}{" "}
                                        <span className="text-neutral-700">•</span>{" "}
                                        {post.comments}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our stores */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                            Our Stores
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {OUR_STORES.map((store) => (
                                <li key={store.href}>
                                    <Link
                                        href={store.href}
                                        className="text-neutral-500 hover:text-amber-400"
                                    >
                                        {store.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                            Useful Links
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {USEFUL_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-500 hover:text-amber-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer menu -> social icons */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                            Footer Menu
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {SOCIAL_LINKS.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-amber-400"
                                    >
                                        <social.icon size={14} />
                                        <span>{social.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-neutral-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
                    <p>
                        Based on <span className="font-semibold text-neutral-200">Torlet</span> theme
                        2024 <span className="font-semibold text-neutral-200">WooCommerce Site</span>.
                    </p>


                </div>
            </div>


            <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 shadow-md hover:border-amber-400 hover:text-amber-400"
            >
                <FaArrowUp size={16} />
            </button>
        </footer>
    );
}