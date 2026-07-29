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
} from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");

    const RECENT_POSTS = [
        {
            title: t("posts.post1"),
            date: t("posts.aug27"),
            comments: t("posts.noComments"),
            href: "1",
        },
        {
            title: t("posts.post2"),
            date: t("posts.aug27"),
            comments: t("posts.noComments"),
            href: "2",
        },
    ];
    const OUR_STORES = [
        { label: t("stores.saudiArabia"), href: "1" },
        { label: t("stores.uae"), href: "2" },
        { label: t("stores.qatar"), href: "3" },
        { label: t("stores.kuwait"), href: "4" },
        { label: t("stores.oman"), href: "5" },
        { label: t("stores.bahrain"), href: "6" },
        { label: t("stores.egypt"), href: "7" },
    ];

    const USEFUL_LINKS = [
        { label: t("links.privacy"), href: "/PrivacyPolicyPage" },
        { label: t("links.returns"), href: "/ReturnsPage" },
        { label: t("links.terms"), href: "/TermsAndConditionsPage" },
        { label: t("links.contact"), href: "/ContactUs" },
        { label: t("links.news"), href: "/News" },
    ];

    const SOCIAL_LINKS = [
        { label: t("social.instagram"), href: "https://instagram.com", icon: FaInstagram },
        { label: t("social.facebook"), href: "https://facebook.com", icon: FaFacebookF },
        { label: t("social.twitter"), href: "https://twitter.com", icon: FaTwitter },
        { label: t("social.linkedin"), href: "https://linkedin.com", icon: FaLinkedinIn },
        { label: t("social.news"), href: "/News", icon: FaNewspaper },
    ];

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
                            {t("desc")}
                        </p>

                        <ul className="mt-5 space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt size={13} className="mt-1 shrink-0 text-amber-400" />
                                <span>{t("address")}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaPhoneAlt size={13} className="mt-1 shrink-0 text-amber-400" />
                                <span>{t("phone")}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Recent posts */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                            {t("recentPosts")}
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {RECENT_POSTS.map((post) => (
                                <li
                                    key={post.title}
                                    className="border-l-2 border-neutral-800 pl-3 hover:border-amber-400"
                                >
                                    <Link
                                        href="/"
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
                            {t("ourStores")}
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {OUR_STORES.map((store) => (
                                <li key={store.label}>
                                    <Link
                                        href="#"
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
                            {t("usefulLinks")}
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            {USEFUL_LINKS.map((link) => (
                                <li key={link.label}>
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

                    {/* Footer menu */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                            {t("footerMenu")}
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
                        {t.rich("copyright", {
                            theme: (chunks) => (
                                <span className="font-semibold text-neutral-200">{chunks}</span>
                            ),
                            site: (chunks) => (
                                <span className="font-semibold text-neutral-200">{chunks}</span>
                            ),
                        })}
                    </p>
                </div>
            </div>
        </footer>
    );
}