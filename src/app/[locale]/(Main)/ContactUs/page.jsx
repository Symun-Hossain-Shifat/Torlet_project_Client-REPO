"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import postContact from "@/lib/Action/PostData/PostContact"
import toast from "react-hot-toast"
import { authClient } from "@/lib/auth-client"


export default function ContactUsPage() {
    const [status, setStatus] = useState(null)
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const t = useTranslations("ContactUs")

    async function handleSubmit(e) {


        e.preventDefault()
        const formData = new FormData(e.target)

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            reason: formData.get("reason"),
            message: formData.get("message"),
        }
        if (user?.role === 'Admin') {
            toast.error(`You are not authorized to contact us`)
            return
        }

        const result = await postContact(data)

        if (result.acknowledged === true) {
            toast.success(`Messeage Sent Successfully`)
            e.target.reset()
        } else {
            toast.error(`Something Went Wrong`)
        }
        setStatus('Sent')
    }

    const reasons = [
        {
            title: t("reasons.reason1Title"),
            body: t("reasons.reason1Body"),
        },
        {
            title: t("reasons.reason2Title"),
            body: t("reasons.reason2Body"),
        },
        {
            title: t("reasons.reason3Title"),
            body: t("reasons.reason3Body"),
        },
    ]

    return (
        <section className="bg-[#FAF9F6] text-[#1C2526]">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#A9814A] mb-4">
                    {t("eyebrow")}
                </p>

                {/* Heading */}
                <h1 className="font-serif italic text-4xl md:text-5xl font-semibold text-[#0E4749] leading-tight">
                    {t("title")}
                </h1>

                {/* Signature "flow" divider */}
                <svg
                    className="mt-6 w-24 h-3"
                    viewBox="0 0 96 12"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0 6C8 0 16 12 24 6C32 0 40 12 48 6C56 0 64 12 72 6C80 0 88 12 96 6"
                        stroke="#A9814A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>

                <p className="mt-6 text-lg text-[#3F4A4A] max-w-2xl">
                    {t("desc")}
                </p>

                <div className="mt-20 grid md:grid-cols-[1fr_1.3fr] gap-14 items-start">
                    {/* Reasons to reach out */}
                    <div className="space-y-8">
                        {reasons.map((r) => (
                            <div key={r.title}>
                                <svg
                                    className="w-8 h-2 mb-3"
                                    viewBox="0 0 32 8"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M0 4C4 0 8 8 12 4C16 0 20 8 24 4C28 0 32 8 32 4"
                                        stroke="#A9814A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <h3 className="text-[#0E4749] font-medium text-lg">
                                    {r.title}
                                </h3>
                                <p className="mt-1 text-sm text-[#5B6666] leading-relaxed">
                                    {r.body}
                                </p>
                            </div>
                        ))}

                        <div className="pt-4 border-t border-[#0E4749]/10 space-y-1 text-sm text-[#5B6666]">
                            <p>
                                <span className="text-[#0E4749] font-semibold">{t("emailLabel")} </span>
                                mozharislam0@gmail.com
                            </p>
                            <p>
                                <span className="text-[#0E4749] font-semibold">{t("phoneLabel")} </span>
                                96897297547
                            </p>
                            <p>
                                <span className="text-[#0E4749] font-medium">{t("hoursLabel")}</span>
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name & Email */}
                        <div className="grid sm:grid-cols-2 gap-5">
                            <Field
                                label={t("form.name")}
                                id="name"
                                name="name"
                                type="text"
                                required
                            />

                            <Field
                                label={t("form.email")}
                                id="email"
                                name="email"
                                type="email"
                                required
                            />
                        </div>

                        {/* Reason */}
                        <div>
                            <label
                                htmlFor="reason"
                                className="text-xs uppercase tracking-wider text-[#5B6666]"
                            >
                                {t("form.about")}
                            </label>

                            <select
                                id="reason"
                                name="reason"
                                defaultValue=""
                                required
                                className="mt-2 w-full bg-transparent border-b border-[#0E4749]/20 py-2 text-[#1C2526] focus:outline-none focus:border-[#A9814A] transition-colors"
                            >
                                <option value="" disabled>
                                    {t("form.selectOne")}
                                </option>

                                <option value="product">
                                    {t("form.reasonProduct")}
                                </option>

                                <option value="warranty">
                                    {t("form.reasonWarranty")}
                                </option>

                                <option value="trade">
                                    {t("form.reasonTrade")}
                                </option>

                                <option value="other">
                                    {t("form.reasonOther")}
                                </option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="text-xs uppercase tracking-wider text-[#5B6666]"
                            >
                                {t("form.message")}
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="mt-2 w-full bg-transparent border-b border-[#0E4749]/20 py-2 text-[#1C2526] focus:outline-none focus:border-[#A9814A] transition-colors resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="mt-4 bg-[#0E4749] text-[#FAF9F6] px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#0a3839] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "sending"
                                ? t("form.sending")
                                : status === "sent"
                                    ? t("form.sent")
                                    : t("form.send")}
                        </button>

                        {/* Success Message */}
                        {status === "sent" && (
                            <p
                                className="text-sm text-[#5B6666]"
                                role="status"
                            >
                                {t("form.success")}
                            </p>
                        )}

                        {/* Error Message */}
                        {status === "error" && (
                            <p
                                className="text-sm text-red-600"
                                role="alert"
                            >
                                {t("form.error")}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

function Field({ label, id, name, type, required }) {
    return (
        <div>
            <label
                htmlFor={id}
                className="text-xs uppercase tracking-wider text-[#5B6666]"
            >
                {label}
            </label>

            <input
                id={id}
                name={name}
                type={type}
                required={required}
                className="mt-2 w-full bg-transparent border-b border-[#0E4749]/20 py-2 text-[#1C2526] focus:outline-none focus:border-[#A9814A] transition-colors"
            />
        </div>
    )
}