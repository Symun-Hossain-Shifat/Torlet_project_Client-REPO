export default function TermsConditionsPage() {
    return (
        <section className="bg-[#FAF9F6] text-[#1C2526]">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#A9814A] mb-4">
                    Legal
                </p>

                {/* Heading */}
                <h1 className="font-serif italic text-4xl md:text-5xl font-semibold text-[#0E4749] leading-tight">
                    Terms & Conditions
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
                    By ordering from Torlet, you're agreeing to the terms below. Read
                    the ones that affect you, returns and warranty are the ones most
                    people actually need.
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
                        Questions about these terms? Reach us at{" "}
                        <span className="text-[#0E4749]">support@torlet.com</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}

const sections = [
    {
        title: "1. Acceptance of terms",
        body: [
            "Placing an order on Torlet means you accept these terms in full. If you don't agree with any part of them, please don't use the site to make a purchase.",
        ],
    },
    {
        title: "2. Products & listings",
        body: [
            "We do our best to keep specs, dimensions, and rough-in measurements accurate for every fixture listed. Finishes may vary slightly from photos due to screen display or batch variation in materials like ceramic glaze or brass plating.",
        ],
    },
    {
        title: "3. Orders & payment",
        body: [
            "An order is confirmed once payment is successfully processed. We reserve the right to cancel or refuse an order in cases of pricing errors, stock unavailability, or suspected fraud, and will notify you if that happens.",
        ],
        list: [
            "Prices are listed in the currency shown at checkout and include applicable taxes unless stated otherwise",
            "Bulk and trade pricing is agreed separately and is not covered by standard listing prices",
        ],
    },
    {
        title: "4. Shipping & delivery",
        body: [
            "Delivery timelines shown at checkout are estimates, not guarantees, and can shift due to courier delays or fixture availability. Risk of loss or damage in transit is covered under our claims process below, not on you as the buyer.",
        ],
    },
    {
        title: "5. Returns & warranty claims",
        body: [
            "Unused fixtures in original packaging can be returned within 14 days of delivery for a refund, minus return shipping. Installed fixtures are covered under the manufacturer's warranty rather than our return policy, contact us and we'll handle the claim on your behalf.",
        ],
        list: [
            "Custom or final-sale items are excluded from returns unless defective",
            "Damage from improper installation is not covered under warranty",
        ],
    },
    {
        title: "6. Acceptable use",
        body: [
            "You agree not to use the site to commit fraud, resell listings without authorization as your own storefront, or attempt to disrupt or reverse-engineer the site's systems.",
        ],
    },
    {
        title: "7. Limitation of liability",
        body: [
            "Torlet's liability for any claim relating to a purchase is limited to the amount paid for that order. We aren't liable for indirect losses, such as costs from a delayed installation, beyond replacing or refunding the fixture itself.",
        ],
    },
    {
        title: "8. Changes to these terms",
        body: [
            "We may update these terms as the business changes. Continued use of the site after an update means you accept the revised terms, so check back if you're a returning trade customer.",
        ],
    },
    {
        title: "9. Governing law",
        body: [
            "These terms are governed by the laws of the jurisdiction in which Torlet is registered, without regard to conflict-of-law principles.",
        ],
    },
]