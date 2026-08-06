"use client";

import React, { useState, useRef } from "react";
import { Upload, Film, X, Plus, ImagePlus } from "lucide-react";

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


    const [setImageFile] = useState(null);
    const [setImagePreview] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [videoPreview, setVideoPreview] = useState(null);

    const [submitted, setSubmitted] = useState(false);

    const videoInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleVideoChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setVideoFile(file);
        setVideoPreview(URL.createObjectURL(file));
    };

    const updateFeature = (index, value) => {
        setFeatures((prev) => prev.map((f, i) => (i === index ? value : f)));
    };

    const addFeature = () => setFeatures((prev) => [...prev, ""]);

    const removeFeature = (index) =>
        setFeatures((prev) => prev.filter((_, i) => i !== index));

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            description,
            price,
            category,
            features,
            image: imageUrl,
            video: videoFile,
        };

        console.log("Product form data:", formData);

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-neutral-950 border border-yellow-500/20 rounded-2xl p-8 shadow-[0_0_40px_-15px_rgba(212,175,55,0.3)]"
            >
                <h1 className="text-2xl font-semibold text-yellow-400 mb-1 tracking-tight">
                    Add product
                </h1>
                <p className="text-neutral-500 text-sm mb-6">
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

                {/* Image */}
                <div className="mb-4">
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
                        <div className="mt-2 h-28 rounded-lg overflow-hidden border border-neutral-800">
                            <img
                                src={imageUrl}
                                alt="Preview"
                                className="w-full h-full object-cover"
                                onError={(e) => (e.currentTarget.style.display = "none")}
                            />
                        </div>
                    )}
                </div>

                {/* Video */}
                <div className="mb-4">
                    <label className="block text-sm text-neutral-300 mb-1.5">
                        Video
                    </label>
                    <div>
                        <input
                            ref={videoInputRef}
                            type="file"
                            accept="video/*"
                            onChange={handleVideoChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => videoInputRef.current?.click()}
                            className="w-full h-28 border border-dashed border-neutral-700 hover:border-yellow-500 rounded-lg flex flex-col items-center justify-center gap-1 text-neutral-500 hover:text-yellow-400 transition-colors overflow-hidden relative"
                        >
                            {videoPreview ? (
                                <>
                                    <video
                                        src={videoPreview}
                                        className="w-full h-full object-cover"
                                        muted
                                    />
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setVideoFile(null);
                                            setVideoPreview(null);
                                            if (videoInputRef.current) videoInputRef.current.value = "";
                                        }}
                                        className="absolute top-1 right-1 bg-black/70 rounded-full p-1"
                                    >
                                        <X size={14} />
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Film size={20} />
                                    <span className="text-xs">Attach from gallery</span>
                                </>
                            )}
                        </button>
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
                                        className="text-neutral-500 hover:text-red-400 p-1"
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
                        className="mt-2 flex items-center gap-1 text-xs text-yellow-400 hover:text-yellow-300"
                    >
                        <Plus size={14} /> Add feature
                    </button>
                </div>

                {/* Price + Category */}
                <div className="grid grid-cols-2 gap-3 mb-6">
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

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg py-2.5 text-sm transition-colors flex items-center justify-center gap-2"
                >
                    <Upload size={16} />
                    {submitted ? "Logged to console ✓" : "Submit product"}
                </button>
            </form>
        </div>
    );
}