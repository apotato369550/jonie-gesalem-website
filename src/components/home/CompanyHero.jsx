export default function CompanyHero() {
  return (
    <section className="bg-white">
      <div className="w-3/4 mx-auto px-6 py-48 flex items-center gap-0">

        {/* Left half — logo + name */}
        <div className="w-1/2 flex items-center gap-8 pr-16 overflow-hidden">
          {/* Logo */}
          <img
            src="/assets/logos/gesalem_logo_nobg.png"
            alt="Gesalem Group"
            className="w-40 h-40 object-contain flex-shrink-0"
          />

          {/* Stacked name */}
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-[9rem] text-[#0D1F4E] leading-[0.88]">
              Gesalem
            </span>
            <span className="font-display font-black text-[9rem] text-color-gold leading-[0.88]">
              Group
            </span>
          </div>
        </div>

        {/* Right half — tagline */}
        <div className="w-1/2 pl-16">
          <p className="font-body text-[1.5rem] text-color-ink leading-[1.8] max-w-[38ch]">
            For over forty years, the Gesalem Group has been building businesses and communities
            across the Visayas and Mindanao — from a single Dunkin&rsquo; Donuts in 1986 to
            fourteen companies spanning food, construction, design, and more.
          </p>
        </div>

      </div>
    </section>
  );
}
