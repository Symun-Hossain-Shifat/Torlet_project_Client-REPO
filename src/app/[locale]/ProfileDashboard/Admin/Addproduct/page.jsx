"use client";

import React, { useState } from "react";
import { Upload, X, Plus } from "lucide-react";
import { PostProduct } from "@/lib/Action/PostData/PostProduct";

const CATEGORIES = [
    "Jerseys",
    "Sneakers",
    "Electronics",
    "Home & Living",
    "Fashion",
    "Accessories",
];

export default function ProductForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [features, setFeatures] = useState([""]);
    const [imageUrl, setImageUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const updateFeature = (index, value) => {
        setFeatures((prev) => prev.map((f, i) => (i === index ? value : f)));
    };

    const addFeature = () => setFeatures((prev) => [...prev, ""]);

    const removeFeature = (index) =>
        setFeatures((prev) => prev.filter((_, i) => i !== index));

    const handleResetForm = () => {
        setTitle("");
        setDescription("");
        setPrice("");
        setCategory("");
        setFeatures([""]);
        setImageUrl("");
        setVideoUrl("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            title,
            description,
            price: parseFloat(price) || 0,
            category,
            features: features.filter((f) => f.trim() !== ""), // ফাঁকা ফিচার রিমুভ করা
            image: imageUrl,
            video: videoUrl, // Video URL string হিসেবে পাঠানো হচ্ছে
        };

        try {
            const result = await PostProduct(formData);
            console.log("Product posted successfully:", result);

            setSubmitted(true);
            handleResetForm(); // ফর্মের সকল ফিল্ড ক্লিয়ার করা

            setTimeout(() => setSubmitted(false), 3000);
            if (result) {
                alert('Product added successfully')
            } else {
                alert('Product added failed')
            }
        } catch (error) {
            alert('Product added failed')

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-8">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-neutral-950 border border-yellow-500/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_0_40px_-15px_rgba(212,175,55,0.3)]"
            >
                <h1 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-1 tracking-tight">
                    Add product
                </h1>
                <p className="text-neutral-500 text-xs sm:text-sm mb-6">
                    Fill in the details below to list a new product.
                </p>

                {/* Title */}
                <div className="mb-4">
                    <label className="block text-sm text-neutral-300 mb-1.5">
                        Product title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Argentina Home Jersey 2026"
                        required
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-yellow-500 outline-none rounded-lg px-3 py-2.5 text-sm placeholder-neutral-600 transition-colors"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="block text-sm text-neutral-300 mb-1.5">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Short description of the product..."
                        rows={3}
                        required
                        className="w-full bg-neutral-900 border border-neutral-800 focus:border-yellow-500 outline-none rounded-lg px-3 py-2.5 text-sm placeholder-neutral-600 resize-none transition-colors"
                    />
                </div>

                {/* Image & Video URL Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Image URL */}
                    <div>
                        <label className="block text-sm text-neutral-300 mb-1.5">
                            Image URL
                        </label>
                        <input
                            type="url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            required
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-yellow-500 outline-none rounded-lg px-3 py-2.5 text-sm placeholder-neutral-600 transition-colors"
                        />
                        {imageUrl && (
                            <div className="mt-2 h-28 rounded-lg overflow-hidden border border-neutral-800 relative bg-neutral-900">
                                <img
                                    src={imageUrl}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                />
                            </div>
                        )}
                    </div>

                    {/* Video URL */}
                    <div>
                        <label className="block text-sm text-neutral-300 mb-1.5">
                            Video URL
                        </label>
                        <input
                            type="url"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            placeholder="https://example.com/video.mp4"
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-yellow-500 outline-none rounded-lg px-3 py-2.5 text-sm placeholder-neutral-600 transition-colors"
                        />
                        {videoUrl && (
                            <div className="mt-2 h-28 rounded-lg overflow-hidden border border-neutral-800 relative bg-neutral-900 flex items-center justify-center">
                                <video
                                    src={videoUrl}
                                    controls
                                    className="w-full h-full object-cover"
                                    onError={(e) => (e.currentTarget.style.display = "none")}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                    <label className="block text-sm text-neutral-300 mb-1.5">
                        Features
                    </label>
                    <div className="space-y-2">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={feature}
                                    onChange={(e) => updateFeature(i, e.target.value)}
                                    placeholder={`Feature ${i + 1}`}
                                    className="flex-1 bg-neutral-900 border border-neutral-800 focus:border-yellow-500 outline-none rounded-lg px-3 py-2 text-sm placeholder-neutral-600 transition-colors"
                                />
                                {features.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeFeature(i)}
                                        className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={addFeature}
                        className="mt-2 flex items-center gap-1 text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                        <Plus size={14} /> Add feature
                    </button>
                </div>

                {/* Price + Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm text-neutral-300 mb-1.5">
                            Price
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-sm">
                                ৳
                            </span>
                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="0.00"
                                required
                                className="w-full bg-neutral-900 border border-neutral-800 focus:border-yellow-500 outline-none rounded-lg pl-7 pr-3 py-2.5 text-sm placeholder-neutral-600 transition-colors"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-neutral-300 mb-1.5">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="w-full bg-neutral-900 border border-neutral-800 focus:border-yellow-500 outline-none rounded-lg px-3 py-2.5 text-sm transition-colors text-neutral-200"
                        >
                            <option value="" disabled className="text-neutral-600">
                                Select category
                            </option>
                            {CATEGORIES.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-black font-medium rounded-lg py-2.5 text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                    <Upload size={16} />
                    {loading
                        ? "Submitting..."
                        : submitted
                            ? "Submitted Successfully ✓"
                            : "Submit product"}
                </button>
            </form>
        </div>
    );
}