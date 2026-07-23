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
                    Fixtures that outlast the renovation. Toilets, sinks, and showers,
                    chosen the way a plumber would choose them for their own home.
                </p>

                {/* Mission */}
                <div className="mt-20 grid md:grid-cols-[1fr_2fr] gap-10 items-start">
                    <h2 className="font-serif italic text-2xl text-[#0E4749]">
                        Our Mission
                    </h2>
                    <p className="text-xl md:text-2xl text-[#1C2526] leading-relaxed font-light">
                        We started Torlet because bathroom shopping had become a guessing
                        game, glossy photos, vague specs, no way to tell a fixture built
                        to last from one built to look good in a listing. Every product
                        we carry is one we've tested for fit, flush, and finish. No
                        filler catalog. Just fixtures worth installing once.
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
    )
}

const values = [
    {
        title: "Fit-checked, not just listed",
        body: "Rough-in size, bolt spacing, water usage — every spec verified against the manufacturer sheet before it goes live, not copied from a supplier feed.",
    },
    {
        title: "Materials over marketing",
        body: "Vitreous china, solid brass, real ceramic glaze. If a listing calls something premium, we can tell you exactly what makes it so.",
    },
    {
        title: "Warranty you can actually use",
        body: "Every fixture ships with the manufacturer's paperwork and a plain-language guide to what's covered, so a claim isn't a fight.",
    },
]