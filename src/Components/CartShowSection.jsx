"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { DeleteCart } from "@/lib/Action/DeleteData/DeleteCart";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

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

    const router = useRouter();

    const handleRemove = async (id) => {
        try {
            setRemovingId(id);

            const res = await DeleteCart(id);

            console.log("Delete response:", res);

            if (res?.success || res?.deletedCount === 1) {
                toast.success("Item removed from cart");

                setCartItems((prev) =>
                    prev.filter((item) => item._id !== id)
                );

                router.refresh();
            } else {
                toast.error(res?.message || "Failed to remove item");
            }
        } catch (error) {
            console.error("Delete cart error:", error);
            toast.error("Failed to remove item");
        } finally {
            setRemovingId(null);
        }
    };



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
                                        disabled={removingId === item._id}
                                        onClick={() => handleRemove(item._id)}
                                        className="rounded-full p-1.5 text-gray-500 hover:bg-neutral-900 hover:text-red-400 disabled:cursor-not-allowed"
                                    ><Trash2 size={15} />

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