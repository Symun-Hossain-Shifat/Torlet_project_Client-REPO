export default function PrivacyPolicyPage() {
    return (
        <section className="bg-[#FAF9F6] text-[#1C2526]">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#A9814A] mb-4">
                    Legal
                </p>

                {/* Heading */}
                <h1 className="font-serif italic text-4xl md:text-5xl font-semibold text-[#0E4749] leading-tight">
                    Privacy Policy
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

                <p className="mt-6 text-sm text-[#5B6666]">
                    Last updated: July 23, 2026
                </p>

                <p className="mt-6 text-lg text-[#3F4A4A] max-w-2xl">
                    This describes what we collect when you shop with Torlet, why we
                    collect it, and what say you have over it. Plain terms, no buried
                    clauses.
                </p>

                {/* Sections */}
                <div className="mt-16 space-y-14">
                    {sections.map((s) => (
                        <div key={s.title}>
                            <h2 className="font-serif italic text-xl text-[#0E4749]">
                                {s.title}
                            </h2>
                            <div className="mt-1 h-px w-10 bg-[#A9814A]" />
                            <div className="mt-4 text-[#3F4A4A] leading-relaxed space-y-3">
                                {s.body.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                                {s.list && (
                                    <ul className="list-disc pl-5 space-y-1">
                                        {s.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact footer */}
                <div className="mt-20 pt-8 border-t border-[#0E4749]/10 text-sm text-[#5B6666]">
                    <p>
                        Questions about this policy? Reach us at{" "}
                        <span className="text-[#0E4749]">privacy@torlet.com</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}

const sections = [
    {
        title: "1. Information we collect",
        body: [
            "We collect information you give us directly, and a smaller set we collect automatically when you use the site.",
        ],
        list: [
            "Account details: name, email, phone number, shipping address",
            "Order details: items purchased, payment status, delivery preferences",
            "Support requests: anything you send us via the contact form or email",
            "Usage data: pages viewed, device and browser type, approximate location from IP address",
        ],
    },
    {
        title: "2. How we use it",
        body: ["We use your information to run the store and keep it useful."],
        list: [
            "Process and deliver your orders",
            "Verify warranty and installation support requests",
            "Send order updates and, if you opt in, product or promotional emails",
            "Improve the site based on how people actually use it",
            "Detect and prevent fraud or abuse",
        ],
    },
    {
        title: "3. What we don't do",
        body: [
            "We don't sell your personal information. We don't share your data with third parties for their own marketing purposes. Fixture manufacturers only receive the details needed to process a warranty claim on your behalf.",
        ],
    },
    {
        title: "4. Cookies",
        body: [
            "We use cookies to keep you signed in, remember your cart, and understand which pages get used. You can disable cookies in your browser settings, though some parts of checkout may stop working correctly without them.",
        ],
    },
    {
        title: "5. Data retention",
        body: [
            "We keep order and account records for as long as your account is active, and for a period afterward as required for tax, warranty, and accounting purposes. You can request deletion of your account data at any time, subject to those legal requirements.",
        ],
    },
    {
        title: "6. Your rights",
        body: ["You can, at any time:"],
        list: [
            "Request a copy of the data we hold about you",
            "Ask us to correct inaccurate information",
            "Ask us to delete your account and associated data",
            "Opt out of marketing emails using the unsubscribe link in any email",
        ],
    },
    {
        title: "7. Security",
        body: [
            "Payment information is processed through our payment provider and is never stored on our own servers in raw form. We use standard encryption in transit and access controls to limit who inside Torlet can view customer data.",
        ],
    },
    {
        title: "8. Changes to this policy",
        body: [
            "If we make material changes to how we handle your data, we'll update the date at the top of this page and, for significant changes, notify you by email.",
        ],
    },
]