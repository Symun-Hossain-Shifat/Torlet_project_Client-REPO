'use client'
import { authClient } from "@/lib/auth-client";
import { Mail, User, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function OrderForm() {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const name = user?.name;
    const email = user?.email;

    const searchParams = useSearchParams();

    const data = searchParams.get("data");

    const orderData = data ? JSON.parse(decodeURIComponent(data)) : [];

    console.log(orderData);



    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-neutral-100">Place your order</h1>
                    <p className="text-sm text-neutral-500 mt-1">Fill in your details and pick an item.</p>
                </div>

                <form className="space-y-5">
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
                                className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                            />
                        </div>
                    </div>



                    {/* Quantity */}
                    {/* <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-neutral-300 mb-1.5">
                            Quantity
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            min={1}
                            defaultValue={1}
                            className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                        />
                    </div> */}

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
        </div>
    );
}