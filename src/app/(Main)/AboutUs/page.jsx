export default function AboutUsPage() {
    return (
        <section className="bg-black text-gray-200">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-4">
                    Our Story
                </p>

                {/* Heading */}
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight">
                    About TrendyHaat
                </h1>

                <div className="mt-6 h-px w-16 bg-[#D4AF37]" />

                <p className="mt-6 text-lg text-gray-400 max-w-2xl">
                    A digital haat, built for the way people actually shop: fast, trusted, and personal.
                </p>

                {/* Mission */}
                <div className="mt-20 grid md:grid-cols-[1fr_2fr] gap-10 items-start">
                    <h2 className="font-serif text-2xl text-[#D4AF37]">
                        Our Mission
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                        We started TrendyHaat to bring the energy of a real marketplace,
                        haggling, discovery, trust between neighbors, into a single, honest
                        online space. No clutter, no gimmicks. Just good products, real
                        sellers, and a marketplace worth coming back to.
                    </p>
                </div>

                {/* Values */}
                <div className="mt-24 grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className="bg-black p-8 hover:bg-white/[0.03] transition-colors"
                        >
                            <div className="h-px w-8 bg-[#D4AF37] mb-4" />
                            <h3 className="text-white font-medium text-lg">{v.title}</h3>
                            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
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
        title: "Trust first",
        body: "Every seller is verified before their first listing ever goes live.",
    },
    {
        title: "Fair prices",
        body: "No inflated 'discounts' — the price you see is the price a seller set.",
    },
    {
        title: "Real community",
        body: "Built for buyers and sellers who recognize each other, not just an algorithm.",
    },
]