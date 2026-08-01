"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";
import {
    Package,
    ImageIcon,
    Video,
    DollarSign,
    FileText,
    Tag,
    Sparkles,
    Plus,
    X,
    Send,
    XCircle,
    UploadCloud,
    Film,
} from "lucide-react";

const CATEGORY_KEYS = [
    "electronics",
    "fashion",
    "homeLiving",
    "sports",
    "beauty",
    "books",
    "toys",
    "groceries",
    "automotive",
    "furniture",
];

export default function AddProductPage() {
    const t = useTranslations("Addproduct");
    const videoInputRef = useRef(null);

    /* ───── form state ───── */
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [videos, setVideos] = useState([]);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [featureInput, setFeatureInput] = useState("");
    const [features, setFeatures] = useState([]);
    const [imageError, setImageError] = useState(false);

    /* ───── helpers ───── */
    const handleVideoSelect = (e) => {
        const files = Array.from(e.target.files || []);
        const newVideos = files.map((file) => ({
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2),
            file,
            preview: URL.createObjectURL(file),
        }));
        setVideos((prev) => [...prev, ...newVideos]);
        if (videoInputRef.current) videoInputRef.current.value = "";
    };

    const removeVideo = (idx) => {
        setVideos((prev) => {
            const removed = prev[idx];
            if (removed?.preview) URL.revokeObjectURL(removed.preview);
            return prev.filter((_, i) => i !== idx);
        });
    };

    const addFeature = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const trimmed = featureInput.trim();
            if (trimmed && !features.includes(trimmed)) {
                setFeatures((prev) => [...prev, trimmed]);
                setFeatureInput("");
            }
        }
    };

    const removeFeature = (idx) => {
        setFeatures((prev) => prev.filter((_, i) => i !== idx));
    };

    const handleCancel = () => {
        setTitle("");
        setImageUrl("");
        videos.forEach((v) => v.preview && URL.revokeObjectURL(v.preview));
        setVideos([]);
        setPrice("");
        setDescription("");
        setCategory("");
        setFeatureInput("");
        setFeatures([]);
        setImageError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title,
            imageUrl,
            videos: videos.map((v) => ({ name: v.name, size: `${v.size} MB` })),
            price: parseFloat(price) || 0,
            description,
            category,
            features,
        };
        console.log("📦 Product Submitted:", formData);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-4xl">
                {/* ── header ── */}
                <div className="mb-8 sm:mb-10">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-1.5 text-sm font-semibold text-orange-400">
                        <Package className="h-4 w-4" />
                        <span>{t("title")}</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        {t("title")}
                    </h1>
                    <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        {t("subtitle")}
                    </p>
                </div>

                {/* ── form card ── */}
                <form
                    onSubmit={handleSubmit}
                    className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 shadow-2xl shadow-black/40 backdrop-blur-sm"
                >
                    <div className="divide-y divide-gray-800">
                        {/* ── Title ── */}
                        <FieldRow
                            icon={<Tag className="h-5 w-5 text-orange-400" />}
                            label={t("form.titleLabel")}
                        >
                            <input
                                id="product-title"
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder={t("form.titlePlaceholder")}
                                className="w-full rounded-xl border border-gray-700 bg-gray-800/60 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-orange-500 focus:bg-gray-800 focus:ring-2 focus:ring-orange-500/20 sm:text-base"
                            />
                        </FieldRow>

                        {/* ── Image URL ── */}
                        <FieldRow
                            icon={<ImageIcon className="h-5 w-5 text-violet-400" />}
                            label={t("form.imageLabel")}
                        >
                            <input
                                id="product-image"
                                type="url"
                                required
                                value={imageUrl}
                                onChange={(e) => {
                                    setImageUrl(e.target.value);
                                    setImageError(false);
                                }}
                                placeholder={t("form.imagePlaceholder")}
                                className="w-full rounded-xl border border-gray-700 bg-gray-800/60 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-violet-500 focus:bg-gray-800 focus:ring-2 focus:ring-violet-500/20 sm:text-base"
                            />
                            {/* live preview */}
                            {imageUrl && (
                                <div className="mt-3">
                                    <p className="mb-1.5 text-xs font-medium text-gray-400">
                                        {t("form.imagePreview")}
                                    </p>
                                    <div className="relative h-36 w-full overflow-hidden rounded-xl border border-gray-700 bg-gray-800 sm:h-44">
                                        {!imageError ? (
                                            <img
                                                src={imageUrl}
                                                alt="preview"
                                                onError={() => setImageError(true)}
                                                className="h-full w-full object-contain"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-sm text-gray-500">
                                                {t("form.noPreview")}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </FieldRow>

                        {/* ── Video Upload ── */}
                        <FieldRow
                            icon={<Video className="h-5 w-5 text-rose-400" />}
                            label={t("form.videoLabel")}
                        >
                            {/* hidden file input */}
                            <input
                                ref={videoInputRef}
                                type="file"
                                accept="video/*"
                                multiple
                                onChange={handleVideoSelect}
                                className="hidden"
                                id="video-file-input"
                            />

                            {/* drop-zone style button */}
                            <button
                                type="button"
                                onClick={() => videoInputRef.current?.click()}
                                className="group flex w-full cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed border-gray-700 bg-gray-800/40 px-4 py-8 transition-all duration-200 hover:border-rose-500/50 hover:bg-gray-800/70 sm:py-10"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/15 transition-colors group-hover:bg-rose-500/25">
                                    <UploadCloud className="h-6 w-6 text-rose-400" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-semibold text-gray-300 group-hover:text-white">
                                        {t("form.addVideo")}
                                    </p>
                                    <p className="mt-1 text-xs text-gray-500">
                                        MP4, WebM, MOV
                                    </p>
                                </div>
                            </button>

                            {/* video list */}
                            {videos.length > 0 && (
                                <div className="mt-4 space-y-2">
                                    {videos.map((v, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-800/50 p-3 transition-colors hover:bg-gray-800"
                                        >
                                            {/* thumbnail / icon */}
                                            <div className="flex h-12 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-700/60 sm:w-20">
                                                <video
                                                    src={v.preview}
                                                    className="h-full w-full object-cover"
                                                    muted
                                                />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="truncate text-sm font-medium text-gray-200">
                                                    {v.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {v.size} MB
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeVideo(i)}
                                                aria-label={t("form.removeVideo")}
                                                className="shrink-0 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-rose-500/15 hover:text-rose-400"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </FieldRow>

                        {/* ── Price ── */}
                        <FieldRow
                            icon={<DollarSign className="h-5 w-5 text-emerald-400" />}
                            label={t("form.priceLabel")}
                        >
                            <div className="relative">
                                <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm font-semibold text-gray-500">
                                    $
                                </span>
                                <input
                                    id="product-price"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder={t("form.pricePlaceholder")}
                                    className="w-full rounded-xl border border-gray-700 bg-gray-800/60 py-3 pl-9 pr-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-emerald-500 focus:bg-gray-800 focus:ring-2 focus:ring-emerald-500/20 sm:text-base"
                                />
                            </div>
                        </FieldRow>

                        {/* ── Description ── */}
                        <FieldRow
                            icon={<FileText className="h-5 w-5 text-sky-400" />}
                            label={t("form.descriptionLabel")}
                        >
                            <textarea
                                id="product-description"
                                required
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder={t("form.descriptionPlaceholder")}
                                className="w-full resize-none rounded-xl border border-gray-700 bg-gray-800/60 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-sky-500 focus:bg-gray-800 focus:ring-2 focus:ring-sky-500/20 sm:rows-5 sm:text-base"
                            />
                        </FieldRow>

                        {/* ── Category ── */}
                        <FieldRow
                            icon={<Tag className="h-5 w-5 text-amber-400" />}
                            label={t("form.categoryLabel")}
                        >
                            <select
                                id="product-category"
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full cursor-pointer appearance-none rounded-xl border border-gray-700 bg-black px-4 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-amber-500 focus:bg-gray-800 focus:ring-2 focus:ring-amber-500/20 sm:text-base"
                            >
                                <option value="" disabled>
                                    {t("form.categoryPlaceholder")}
                                </option>
                                {CATEGORY_KEYS.map((key) => (
                                    <option key={key} value={key}>
                                        {t(`form.categories.${key}`)}
                                    </option>
                                ))}
                            </select>
                        </FieldRow>

                        {/* ── Features ── */}
                        <FieldRow
                            icon={<Sparkles className="h-5 w-5 text-fuchsia-400" />}
                            label={t("form.featuresLabel")}
                        >
                            <input
                                id="product-features"
                                type="text"
                                value={featureInput}
                                onChange={(e) => setFeatureInput(e.target.value)}
                                onKeyDown={addFeature}
                                placeholder={t("form.featuresPlaceholder")}
                                className="w-full rounded-xl border border-gray-700 bg-gray-800/60 px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-500 focus:border-fuchsia-500 focus:bg-gray-800 focus:ring-2 focus:ring-fuchsia-500/20 sm:text-base"
                            />
                            {/* feature chips */}
                            {features.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {features.map((f, i) => (
                                        <span
                                            key={i}
                                            className="group inline-flex items-center gap-1.5 rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1.5 text-xs font-medium text-fuchsia-300 transition-colors hover:bg-fuchsia-500/20"
                                        >
                                            <Sparkles className="h-3 w-3 shrink-0" />
                                            {f}
                                            <button
                                                type="button"
                                                onClick={() => removeFeature(i)}
                                                aria-label={t("form.removeFeature")}
                                                className="ml-0.5 rounded-full p-0.5 transition-colors hover:bg-fuchsia-500/30"
                                            >
                                                <X className="h-3 w-3" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </FieldRow>
                    </div>

                    {/* ── actions ── */}
                    <div className="flex flex-col-reverse items-stretch gap-3 border-t border-gray-800 px-4 py-5 sm:flex-row sm:items-center sm:justify-end sm:px-8">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-gray-800 px-6 py-3 text-sm font-semibold text-gray-300 transition-all duration-200 hover:bg-gray-700 hover:text-white active:scale-[0.97]"
                        >
                            <XCircle className="h-4 w-4" />
                            {t("form.cancel")}
                        </button>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.97]"
                        >
                            <Send className="h-4 w-4" />
                            {t("form.submit")}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────
   Reusable row wrapper
   ──────────────────────────────────────── */
function FieldRow({ icon, label, children }) {
    return (
        <div className="px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-300">
                {icon}
                {label}
            </label>
            {children}
        </div>
    );
}
