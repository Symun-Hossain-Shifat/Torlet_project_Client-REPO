'use client'

import { useState } from "react";
import { Mail, User, MapPin, Package, CheckCircle2, AlertCircle } from "lucide-react";

const PRODUCTS = [
    { id: "jersey-home", label: "Home Jersey", price: 45 },
    { id: "jersey-away", label: "Away Jersey", price: 45 },
    { id: "jersey-retro", label: "Retro Jersey", price: 60 },
    { id: "training-kit", label: "Training Kit", price: 35 },
];

export default function OrderForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        productId: "",
        quantity: 1,
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(null);

    const selectedProduct = PRODUCTS.find((p) => p.id === form.productId);
    const total = selectedProduct ? selectedProduct.price * form.quantity : 0;

    function handleChange(field, value) {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
    }

    function validate() {
        const next = {};

        if (!form.name.trim()) {
            next.name = "Enter your full name.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email.trim()) {
            next.email = "Enter your email address.";
        } else if (!emailPattern.test(form.email.trim())) {
            next.email = "Enter a valid email address.";
        }

        if (!form.address.trim()) {
            next.address = "Enter a delivery address.";
        } else if (form.address.trim().length < 10) {
            next.address = "Add a more complete address.";
        }

        if (!form.productId) {
            next.productId = "Select an item.";
        }

        if (!form.quantity || form.quantity < 1) {
            next.quantity = "Quantity must be at least 1.";
        }

        setErrors(next);
        return Object.keys(next).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) {
            setSubmitted(null);
            return;
        }

        const order = {
            name: form.name.trim(),
            email: form.email.trim(),
            address: form.address.trim(),
            item: selectedProduct.label,
            quantity: form.quantity,
            total,
        };

        // Replace with your API call, e.g.:
        // await fetch("/api/orders", { method: "POST", body: JSON.stringify(order) });
        console.log("Order submitted:", order);
        setSubmitted(order);
    }

    function handleReset() {
        setForm({ name: "", email: "", address: "", productId: "", quantity: 1 });
        setErrors({});
        setSubmitted(null);
    }

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-neutral-100">Place your order</h1>
                    <p className="text-sm text-neutral-500 mt-1">Fill in your details and pick an item.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                                value={form.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="Jane Rahman"
                                className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${errors.name ? "border-red-500" : "border-neutral-800"
                                    }`}
                            />
                        </div>
                        {errors.name && <FieldError message={errors.name} />}
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
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                placeholder="jane@example.com"
                                className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${errors.email ? "border-red-500" : "border-neutral-800"
                                    }`}
                            />
                        </div>
                        {errors.email && <FieldError message={errors.email} />}
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
                                value={form.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                placeholder="House, road, area, city"
                                className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border text-neutral-100 placeholder-neutral-600 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${errors.address ? "border-red-500" : "border-neutral-800"
                                    }`}
                            />
                        </div>
                        {errors.address && <FieldError message={errors.address} />}
                    </div>

                    {/* Product + Quantity */}
                    <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2">
                            <label htmlFor="product" className="block text-sm font-medium text-neutral-300 mb-1.5">
                                Item
                            </label>
                            <div className="relative">
                                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                <select
                                    id="product"
                                    value={form.productId}
                                    onChange={(e) => handleChange("productId", e.target.value)}
                                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg bg-neutral-900 border text-neutral-100 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${errors.productId ? "border-red-500" : "border-neutral-800"
                                        }`}
                                >
                                    <option value="">Select an item</option>
                                    {PRODUCTS.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.label} — ${p.price}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-neutral-300 mb-1.5">
                                Qty
                            </label>
                            <input
                                id="quantity"
                                type="number"
                                min={1}
                                value={form.quantity}
                                onChange={(e) => handleChange("quantity", Number(e.target.value))}
                                className={`w-full px-3 py-2.5 rounded-lg bg-neutral-900 border text-neutral-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 ${errors.quantity ? "border-red-500" : "border-neutral-800"
                                    }`}
                            />
                        </div>
                    </div>
                    {errors.productId && <FieldError message={errors.productId} />}
                    {errors.quantity && <FieldError message={errors.quantity} />}

                    {/* Total */}
                    <div className="flex items-center justify-between rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-3">
                        <span className="text-sm text-neutral-400">Total</span>
                        <span className="text-lg font-semibold text-amber-400">${total.toFixed(2)}</span>
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
                            onClick={handleReset}
                            className="px-4 py-2.5 rounded-lg border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 text-sm transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </form>

                {submitted && (
                    <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-emerald-300">
                            Order placed for {submitted.item} × {submitted.quantity} — total ${submitted.total.toFixed(2)}.
                            A confirmation will be sent to {submitted.email}.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

function FieldError({ message }) {
    return (
        <div className="flex items-center gap-1.5 mt-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <p className="text-xs text-red-500">{message}</p>
        </div>
    );
}