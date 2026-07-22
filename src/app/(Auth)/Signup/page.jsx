"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User, Store } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: wire up to your auth logic
        console.log("Signup submitted:", formData);
    };

    const handleGoogleSignup = () => {
        // TODO: wire up to your Google OAuth flow
        console.log("Continue with Google clicked");
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-neutral-950 px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <Link href="/" className="mb-8 flex items-center justify-center gap-2">
                    <Store size={24} className="text-amber-400" />
                    <span className="text-xl font-bold tracking-tight text-white">
                        Torlet.com
                    </span>
                </Link>

                <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                    <h1 className="text-2xl font-bold text-white">Create your account</h1>
                    <p className="mt-1 text-sm text-neutral-500">
                        Sign up to start shopping on Torlet.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-neutral-300"
                            >
                                Full name
                            </label>
                            <div className="relative">
                                <User
                                    size={17}
                                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                                />
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 py-2.5 pl-10 pr-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-amber-400"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium text-neutral-300"
                            >
                                Email
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
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-neutral-700 bg-neutral-950 py-2.5 pl-10 pr-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-amber-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1.5 block text-sm font-medium text-neutral-300"
                            >
                                Password
                            </label>
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
                                    placeholder="Create a password"
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
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-neutral-800" />
                        <span className="text-xs text-neutral-500">OR</span>
                        <div className="h-px flex-1 bg-neutral-800" />
                    </div>

                    {/* Google signup */}
                    <button
                        type="button"
                        onClick={handleGoogleSignup}
                        className="flex w-full items-center justify-center gap-3 rounded-lg border border-neutral-700 bg-white py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-100"
                    >
                        <FcGoogle size={18} />
                        Continue with Google
                    </button>

                    <p className="mt-6 text-center text-sm text-neutral-500">
                        Already have an account?{" "}
                        <Link
                            href="/Signin"
                            className="font-semibold text-amber-400 hover:text-amber-300"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}