"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, Store } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
    const [formData, setFormData] = useState({ email: "", password: "" });
    const t = useTranslations("Signin");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await authClient.signIn.email({
            email: formData.email, // required
            password: formData.password, // required
            rememberMe: false
        });

        if (data?.user?.isBlocked === true) {
            toast.error(
                t("messages.blockedAdmin"),
                {
                    duration: 10000,
                }
            );

            setTimeout(async () => {
                await authClient.signOut();
                router.push("/");
            }, 10000);

            return;
        }

        if (data?.user) {
            alert(t("messages.success"));
            router.push("/");
        } else if (error) {
            alert(t("messages.failed", { error: error.message }));
        }
    };

    const HandleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });

        const session = await authClient.getSession();

        if (session.data?.user?.isBlocked) {
            alert(
                t("messages.blockedGeneral"),
                {
                    duration: 10000,
                }
            );

            await authClient.signOut();
            router.push("/");
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-neutral-950 px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <Link href="/" className="mb-8 flex items-center justify-center gap-2">
                    <Store size={24} className="text-amber-400" />
                    <span className="text-xl font-bold tracking-tight text-white">
                        {t("logo")}
                    </span>
                </Link>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                    <h1 className="text-2xl font-bold text-white">{t("title")}</h1>
                    <p className="mt-1 text-sm text-neutral-500">
                        {t("desc")}
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium text-neutral-300"
                            >
                                {t("emailLabel")}
                            </label>
                            <div className="relative">
                                <Mail
                                    size={17}
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t("emailPlaceholder")}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 py-2.5 pl-10 pr-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-amber-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-neutral-300"
                                >
                                    {t("passwordLabel")}
                                </label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs font-medium text-amber-400 hover:text-amber-300"
                                >
                                    {t("forgotPassword")}
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock
                                    size={17}
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                                />
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder={t("passwordPlaceholder")}
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 py-2.5 pl-10 pr-10 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-amber-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-amber-400"
                                >
                                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-amber-400 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-300"
                        >
                            {t("loginButton")}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-neutral-800" />
                        <span className="text-xs text-neutral-500">{t("or")}</span>
                        <div className="h-px flex-1 bg-neutral-800" />
                    </div>

                    {/* Google login */}
                    <button
                        type="button"
                        onClick={HandleGoogleSignin}
                        className="flex w-full items-center justify-center gap-3 rounded-lg border border-neutral-700 bg-white py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100"
                    >
                        <FcGoogle size={18} />
                        {t("googleButton")}
                    </button>

                    <p className="mt-6 text-center text-sm text-neutral-500">
                        {t("signupPrompt")}{" "}
                        <Link
                            href="/Signup"
                            className="font-semibold text-amber-400 hover:text-amber-300"
                        >
                            {t("signupLink")}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}