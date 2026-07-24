export default function AboutUsPage() {
    return (
        <section className="bg-[#FAF9F6] text-[#1C2526]">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#A9814A] mb-4">
                    Our Story
                </p>

                {/* Heading */}
                <h1 className="font-serif italic text-4xl md:text-5xl font-semibold text-[#0E4749] leading-tight">
                    About Torlet
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
                    Premium fixtures and essentials built to last. We bring quality, reliability, and modern craftsmanship directly to your doorstep.
                </p>

                {/* Mission */}
                <div className="mt-20 grid md:grid-cols-[1fr_2fr] gap-10 items-start">
                    <h2 className="font-serif italic text-2xl text-[#0E4749]">
                        Our Mission
                    </h2>
                    <p className="text-xl md:text-2xl text-[#1C2526] leading-relaxed font-light">
                        We started Torlet to simplify online shopping for premium home fixtures. No glossy photos hiding poor quality, no vague specifications—just a curated collection of products tested for fit, finish, and long-term performance.
                    </p>
                </div>

                {/* Values */}
                <div className="mt-24 grid sm:grid-cols-3 gap-px bg-[#0E4749]/10 border border-[#0E4749]/10">
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className="bg-[#FAF9F6] p-8 hover:bg-[#E7ECEA] transition-colors"
                        >
                            <svg
                                className="w-8 h-2 mb-4"
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
                                {v.title}
                            </h3>
                            <p className="mt-2 text-sm text-[#5B6666] leading-relaxed">
                                {v.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const values = [
    {
        title: "Verified Specifications",
        body: "Dimensions, material grade, and compatibility—every technical specification is thoroughly verified before listing to ensure what you see is what you get.",
    },
    {
        title: "Quality Over Marketing",
        body: "Solid brass, vitreous china, and premium finishes. We focus on durable materials that withstand daily use rather than superficial marketing hype.",
    },
    {
        title: "Hassle-Free Support",
        body: "Every product comes with transparent coverage guidelines, easy returns, and dedicated support so your purchase is always protected.",
    },
];