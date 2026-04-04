export default function CompanyHero() {
  return (
    <section className="bg-white flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center gap-12 text-center">

        {/* Logo + Stacked name */}
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img
            src="/assets/logos/gesalem_logo_nobg.png"
            alt="Gesalem Group"
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
          />

          {/* Stacked name */}
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] text-[#0D1F4E] leading-[0.88]">
              Gesalem
            </span>
            <span className="font-display font-black text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] text-color-gold leading-[0.88]">
              Group
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div>
          <p className="font-body text-base sm:text-lg md:text-xl text-color-ink leading-relaxed max-w-2xl">
            For over forty years, the Gesalem Group has been building businesses and communities
            across the Visayas and Mindanao — from a single Dunkin&rsquo; Donuts in 1986 to
            fourteen companies spanning food, construction, design, and more.
          </p>
        </div>

      </div>
    </section>
  );
}
