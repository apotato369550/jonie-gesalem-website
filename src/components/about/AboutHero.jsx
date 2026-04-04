export default function AboutHero() {
  return (
    <section className="bg-color-off-white py-24">
      <div className="w-3/4 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-stretch">
          {/* Left: Portrait Image — ~40% */}
          <div className="md:col-span-2">
            <img
              src="/assets/uncle_jonie.jpg"
              alt="Jonathan Gesalem"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Column — ~60% */}
          <div className="md:col-span-3 flex flex-col justify-center" data-animate>
            {/* Eyebrow */}
            <p className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-4">
              About
            </p>

            {/* Heading */}
            <h2 className="font-display font-semibold text-5xl text-[#0D1F4E] mb-6">
              Jonathan Gesalem
            </h2>

            {/* Gold Rule */}
            <div className="w-16 h-1 bg-color-gold mb-6"></div>

            {/* Body Paragraphs */}
            <p className="font-body text-color-ink mb-4 leading-relaxed">
              Jonathan Gesalem is a visionary entrepreneur and community leader whose business acumen and philanthropic commitment have shaped the landscape of commerce and service across Cebu and beyond. For over four decades, he has built a diversified portfolio spanning food and beverage franchising, real estate development, and social enterprise—while maintaining a steadfast dedication to civic responsibility.
            </p>

            <p className="font-body text-color-ink mb-8 leading-relaxed">
              Known by friends and family as Jonie, he is driven by a philosophy that business exists not merely for profit, but as a vehicle for community uplift. Whether through disaster relief, cultural preservation, or mentorship, his influence extends far beyond balance sheets. His Chinese heritage—embodied in his name—remains a wellspring of pride and purpose.
            </p>

            {/* Chinese Name & Romanization */}
            <div className="pt-6 border-t border-color-divider-subtle">
              <p className="font-serif-sc text-2xl text-color-ink mb-2">葉長青</p>
              <p className="font-body text-sm text-color-ink-muted tracking-wide">
                Yap Tiong Tsing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
