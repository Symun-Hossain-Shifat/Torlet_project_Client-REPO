"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CartShowSection({ data }) {
    const [cartItems, setCartItems] = useState(
        (data || []).map((item) => ({ ...item, quantity: item.quantity || 1 }))
    );
    const [removingId, setRemovingId] = useState(null);

    // keep local state in sync if the parent refetches/passes new data
    useEffect(() => {
        setCartItems((data || []).map((item) => ({ ...item, quantity: item.quantity || 1 })));
    }, [data]);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleIncrease = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );

    };

    const handleDecrease = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );

    };

    const handleRemove = async (id) => {
        setRemovingId(id);
        try {
            // Replace with your actual delete endpoint
            const res = await fetch(`/api/cart/${id}`, { method: "DELETE" });

            if (!res.ok) throw new Error("Failed to remove item");

            setCartItems((prev) => prev.filter((item) => item.id !== id));
        } catch (err) {
            console.error(err);
            // Optionally show a toast/error message here
        } finally {
            setRemovingId(null);
        }
    };

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-yellow-500/20 bg-black px-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/30">
                    <svg
                        className="h-7 w-7 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Your cart is empty</h3>
                <p className="mt-1 text-sm text-gray-400">
                    Items you add to your cart will show up here.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Cart items */}
            <div className="space-y-4">


                {cartItems.map((item) => (
                    <div
                        key={item._id}
                        className={`flex flex-col gap-4 rounded-xl border border-yellow-500/10 bg-black p-4 transition-opacity sm:flex-row ${removingId === item.id ? "opacity-40" : "hover:border-yellow-500/30"
                            }`}
                    >
                        {/* Image */}
                        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg border border-yellow-500/10 bg-neutral-900">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="112px"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-1 flex-col justify-between">
                            <div>
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <span className="inline-block rounded-full border border-yellow-500/30 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-yellow-500">
                                            {item.category}
                                        </span>
                                        <h3 className="mt-1.5 text-base font-semibold text-white">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <button
                                        type="button"
                                        aria-label="Remove item"
                                        disabled={removingId === item.id}
                                        onClick={() => handleRemove(item.id)}
                                        className="rounded-full p-1.5 text-gray-500 hover:bg-neutral-900 hover:text-red-400 disabled:cursor-not-allowed"
                                    >
                                        {removingId === item.id ? (
                                            <svg
                                                className="h-4 w-4 animate-spin text-red-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9.5 4h5a1 1 0 011 1v2h-7V5a1 1 0 011-1zM4 7h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <p className="mt-1 line-clamp-2 text-sm text-gray-400">
                                    {item.description}
                                </p>

                                {item.features?.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-1.5">
                                        {item.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="rounded-md bg-neutral-900 px-2 py-0.5 text-[11px] text-gray-300"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                                {/* Quantity stepper */}
                                <div className="flex items-center rounded-lg border border-yellow-500/20">
                                    <button
                                        type="button"
                                        onClick={() => handleDecrease(item.id)}
                                        disabled={item.quantity <= 1}
                                        className="px-2.5 py-1 text-gray-300 hover:text-yellow-500 disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        −
                                    </button>
                                    <span className="w-8 text-center text-sm text-white">
                                        {item.quantity}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => handleIncrease(item.id)}
                                        className="px-2.5 py-1 text-gray-300 hover:text-yellow-500"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="text-right">
                                    {item.quantity > 1 && (
                                        <p className="text-xs text-gray-500">
                                            ৳{item.price.toLocaleString()} × {item.quantity}
                                        </p>
                                    )}
                                    <span className="text-lg font-bold text-yellow-500">
                                        ৳{(item.price * item.quantity).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total + Order — cash on delivery, no payment step */}
            <div className="flex items-center justify-between rounded-xl border border-yellow-500/10 bg-black p-5">
                <div>
                    <p className="text-sm text-gray-400">Total (Cash on Delivery)</p>
                    <p className="text-2xl font-bold text-yellow-500">
                        ৳{total.toLocaleString()}
                    </p>
                </div>

                <button
                    type="button"
                    className="rounded-lg bg-yellow-500 px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                >
                    Order Now
                </button>
            </div>
        </div>
    );
}