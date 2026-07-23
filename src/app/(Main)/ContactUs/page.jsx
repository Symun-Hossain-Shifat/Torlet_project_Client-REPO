"use client"

import { useState } from "react"

export default function ContactUsPage() {
    const [status, setStatus] = useState("idle")

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("sent")
    }

    return (
        <section className="bg-[#FAF9F6] text-[#1C2526]">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#A9814A] mb-4">
                    Get In Touch
                </p>

                {/* Heading */}
                <h1 className="font-serif italic text-4xl md:text-5xl font-semibold text-[#0E4749] leading-tight">
                    Contact Torlet
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
                    Rough-in question, warranty claim, or a trade order for a whole
                    building, tell us which and we'll route it to someone who knows
                    the fixture, not a ticket queue.
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
                                <span className="text-[#0E4749] font-medium">Email: </span>
                                support@torlet.com
                            </p>
                            <p>
                                <span className="text-[#0E4749] font-medium">Phone: </span>
                                +880 1XXX-XXXXXX
                            </p>
                            <p>
                                <span className="text-[#0E4749] font-medium">Hours: </span>
                                Sat–Thu, 10am–7pm
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <Field label="Name" id="name" type="text" required />
                            <Field label="Email" id="email" type="email" required />
                        </div>

                        <div>
                            <label
                                htmlFor="reason"
                                className="text-xs uppercase tracking-wider text-[#5B6666]"
                            >
                                What's this about
                            </label>
                            <select
                                id="reason"
                                className="mt-2 w-full bg-transparent border-b border-[#0E4749]/20 py-2 text-[#1C2526] focus:outline-none focus:border-[#A9814A] transition-colors"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select one
                                </option>
                                <option value="product">Product or fit question</option>
                                <option value="warranty">Warranty claim</option>
                                <option value="trade">Trade or bulk order</option>
                                <option value="other">Something else</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="text-xs uppercase tracking-wider text-[#5B6666]"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                className="mt-2 w-full bg-transparent border-b border-[#0E4749]/20 py-2 text-[#1C2526] focus:outline-none focus:border-[#A9814A] transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-[#0E4749] text-[#FAF9F6] px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#0a3839] transition-colors"
                        >
                            {status === "sent" ? "Sent" : "Send message"}
                        </button>

                        {status === "sent" && (
                            <p className="text-sm text-[#5B6666]">
                                Got it, we'll reply within one business day.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

function Field({ label, id, type, required }) {
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
                type={type}
                required={required}
                className="mt-2 w-full bg-transparent border-b border-[#0E4749]/20 py-2 text-[#1C2526] focus:outline-none focus:border-[#A9814A] transition-colors"
            />
        </div>
    )
}

const reasons = [
    {
        title: "Product & fit questions",
        body: "Not sure a toilet's rough-in matches your bathroom? Send the model and a measurement, we'll confirm before you order.",
    },
    {
        title: "Warranty & installation issues",
        body: "Something arrived damaged or isn't sealing right? Tell us what happened, we handle the manufacturer claim for you.",
    },
    {
        title: "Trade & bulk orders",
        body: "Outfitting multiple units or a full renovation? We quote trade pricing directly, no markup middleman.",
    },
]