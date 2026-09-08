

'use client'
import { useState, useEffect } from "react";
import PostOrder from "@/lib/Action/PostData/PlaceOrder";
import { authClient } from "@/lib/auth-client";
import { Mail, User, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";



function OrderConfirmedModal({ redirectDelay = 4 }) {
    const router = useRouter();
    const [secondsLeft, setSecondsLeft] = useState(redirectDelay);

    useEffect(() => {
        if (secondsLeft <= 0) {
            router.push("/");
            return;
        }
        const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
        return () => clearTimeout(timer);
    }, [secondsLeft, router]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
            <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 p-8 text-center shadow-2xl">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                    <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                </div>

                <h2 className="text-2xl font-semibold text-neutral-100">Order Confirmed!</h2>
                <p className="mt-2 text-sm text-neutral-400">
                    🎉 Congratulations! Your order has been placed successfully.
                </p>

                <p className="mt-6 text-sm text-neutral-500">
                    Redirecting to homepage in{" "}
                    <span className="font-semibold text-neutral-200">{secondsLeft}</span>s
                </p>

                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-neutral-800">
                    <div
                        className="h-full bg-amber-500 transition-all duration-1000 ease-linear"
                        style={{ width: `${(secondsLeft / redirectDelay) * 100}%` }}
                    />
                </div>

                <button
                    onClick={() => router.push("/")}
                    className="mt-6 w-full rounded-lg bg-amber-500 py-2.5 text-sm font-medium text-neutral-950 transition hover:bg-amber-400"
                >
                    Go to Homepage Now
                </button>
            </div>
        </div>
    );
}

export default function OrderForm() {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const name = user?.name;
    const email = user?.email;
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const data = searchParams.get("data");

    const orderData = data ? JSON.parse(decodeURIComponent(data)) : [];

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const address = form.address.value
        const mobile = form.mobile.value
        const data = {
            name,
            email,
            address,
            mobile
        }
        const Data = {
            ...data,
            product: orderData[0]?.Product,
            price: orderData[0]?.price,
            quantity: orderData[0]?.quantity,
            image: orderData[0]?.image,
            status: 'pending'
        }
        const result = await PostOrder(Data)
        if (result) {
            setShowConfirmation(true); // show congrats modal; it handles the redirect itself
        } else {
            // toast.error("Failed to place order");
        }
    }

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-neutral-100">Place your order</h1>
                    <p className="text-sm text-neutral-500 mt-1">Fill in your details and pick an item.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
                            Full name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                            <input
                                id="name"
                                type="text"
                                defaultValue={name}
                                readOnly
                                className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                            <input
                                id="email"
                                type="email"
                                defaultValue={email}
                                readOnly
                                className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-neutral-300 mb-1.5">
                            Delivery address
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-neutral-500" />
                            <textarea
                                id="address"
                                rows={2}
                                placeholder="House, road, area, city"
                                required
                                className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                            />
                        </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-neutral-300 mb-1.5">
                            Mobile Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                            <input
                                id="mobile"
                                type="tel"
                                placeholder="+8801XXXXXXXXX"
                                required
                                className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                            />
                        </div>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-3">
                        <span className="text-sm text-neutral-400">Total</span>
                        <span className="text-lg font-semibold text-amber-400">${orderData[0]?.price
                        }</span>
                    </div>

                    <div className="flex gap-3 pt-1">
                        <button
                            type="submit"
                            className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 text-sm font-medium transition-colors"
                        >
                            Confirm order
                        </button>
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="px-4 py-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 text-sm transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </form>

                <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-emerald-300">
                        Order placed for {orderData[0].Product} × {orderData[0].quantity} — total ${orderData[0].price}.
                    </p>
                </div>
            </div>

            {showConfirmation && <OrderConfirmedModal redirectDelay={4} />}
        </div>
    );
}