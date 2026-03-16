import { useEffect, useRef } from 'react'
import { companies, organizations } from './data.js'

export default function App() {
  const carouselRef = useRef(null)

  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function scrollCarousel(direction) {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * 220, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-color-off-white">

      {/* ── NAVBAR ── */}
      <header className="bg-[#0D1F4E] border-b border-color-gold sticky top-0 z-50">
        <div className="max-w-[1140px] mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left: Group logo */}
          <a href="#home">
            <img
              src="/assets/logos/gesalem_group_horizontal.png"
              alt="Gesalem Group"
              className="h-8 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </a>

          {/* Right: Nav links */}
          <nav className="flex items-center gap-8">
            <a
              href="#home"
              className="font-body text-xs text-color-ink-on-dark uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-body text-xs text-color-ink-on-dark uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
            >
              About
            </a>
            <a
              href="#inquiry"
              className="font-body text-xs text-color-ink-on-dark uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
            >
              Inquiry
            </a>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════
          SECTION 1 — HOME
      ══════════════════════════════════════ */}
      <section id="home">

        {/* Hero — navy dark */}
        <div className="bg-color-off-white relative">
          <div className="max-w-[1140px] mx-auto px-6 py-32 md:py-40 flex flex-col items-center text-center">

            {/* Centered group logo */}
            <img
              src="/assets/logos/gesalem_group_centered.png"
              alt="Gesalem Group"
              className="w-48 md:w-64 mx-auto mb-8 object-contain"
            />

            {/* Chinese name */}
            <p className="font-serif-sc text-[2.5rem] text-color-gold leading-none tracking-[0.05em] mb-3">
              葉長青
            </p>

            {/* Tagline */}
            <p className="font-body text-sm text-color-ink-muted uppercase tracking-[0.14em] mb-6">
              Entrepreneur · Civic Leader · Cebu
            </p>

            {/* Gold divider */}
            <div className="w-16 h-px bg-color-gold mx-auto my-6" />

            {/* Intro paragraph */}
            <p className="font-body text-[1.0625rem] text-color-ink leading-[1.75] max-w-[52ch] mx-auto">
              Forty years building Cebu. One Dunkin&rsquo; Donuts in 1986 became fourteen companies across Mindanao and the Visayas.
            </p>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-color-gold text-xl scroll-cue select-none">
            ↓
          </div>
        </div>

        {/* Company Carousel — off-white */}
        <div className="bg-color-off-white py-20">
          <div className="max-w-[1140px] mx-auto px-6">

            {/* Carousel header */}
            <div className="mb-10" data-animate>
              <p className="font-body text-xs text-color-gold uppercase tracking-[0.15em] font-bold mb-3">
                Portfolio
              </p>
              <h2 className="font-display font-semibold text-[2rem] text-color-ink mb-4">
                Companies
              </h2>
              <div className="w-10 h-[2px] bg-color-gold" />
            </div>

            {/* Carousel wrapper */}
            <div className="relative" data-animate>
              {/* Left arrow */}
              <button
                onClick={() => scrollCarousel(-1)}
                aria-label="Scroll left"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-3 bg-white border border-[#E8E0D0] text-color-ink-muted w-9 h-9 flex items-center justify-center rounded-full shadow-sm hover:text-color-ink transition-colors"
              >
                &#8249;
              </button>

              {/* Scroll container */}
              <div
                ref={carouselRef}
                className="overflow-x-auto no-scrollbar flex gap-4 px-8 pb-2"
              >
                {companies.map((company) => (
                  <div
                    key={company.id}
                    className="bg-white border border-[#E8E0D0] rounded p-6 flex-shrink-0 min-w-[200px] flex flex-col"
                  >
                    <div className="h-20 w-full flex items-center justify-center mb-3 overflow-hidden">
                      <img
                        src={company.logo}
                        alt={company.logoAlt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="font-display font-semibold text-sm text-color-ink leading-snug mb-1">
                      {company.name}
                    </p>
                    <p className="font-body text-[0.6875rem] text-color-ink-muted uppercase tracking-widest">
                      {company.city}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              <button
                onClick={() => scrollCarousel(1)}
                aria-label="Scroll right"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-3 bg-white border border-[#E8E0D0] text-color-ink-muted w-9 h-9 flex items-center justify-center rounded-full shadow-sm hover:text-color-ink transition-colors"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — ABOUT
      ══════════════════════════════════════ */}
      <section id="about">

        {/* Part A — The Man — off-white */}
        <div className="bg-color-off-white py-24 border-t border-[#E8E0D0]">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">

              {/* Portrait — 40% */}
              <div className="w-full md:w-[40%] md:min-h-[520px] overflow-hidden rounded-sm flex-shrink-0">
                <img
                  src="/assets/uncle_jonie.jpg"
                  alt="Jonathan 'Jonie' Gesalem"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text — 60% */}
              <div className="flex-1 flex flex-col justify-center" data-animate>
                <p className="font-body text-xs text-color-gold uppercase tracking-[0.15em] font-bold mb-3">
                  About
                </p>
                <h2 className="font-display font-semibold text-[2.25rem] text-color-ink mb-4 leading-[1.2]">
                  Jonathan Gesalem
                </h2>
                <div className="w-10 h-[2px] bg-color-gold mb-7" />

                <p className="font-body text-[1.0625rem] text-color-ink leading-[1.75] mb-5">
                  Jonathan &ldquo;Jonie&rdquo; Gesalem has been building Cebu for over four decades. What started as a single Dunkin&rsquo; Donuts at Fuente Osme&ntilde;a in 1986 grew into a group of fourteen companies spanning food, construction, fireworks, furniture, and design &mdash; across Mindanao and the Visayas.
                </p>
                <p className="font-body text-[1.0625rem] text-color-ink leading-[1.75] mb-8">
                  His children now run operations across the portfolio. Jiaan leads construction and fireworks. Janine leads design. The group is generational by design.
                </p>

                {/* Chinese name */}
                <p className="font-serif-sc text-[1.5rem] text-color-gold tracking-[0.05em] mb-1">
                  葉長青
                </p>
                <p className="font-body text-xs text-color-ink-muted tracking-widest uppercase">
                  Yap Tiong Tsing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part B — Organizations — surface warm */}
        <div className="bg-color-surface-warm py-24 border-t border-[#E8E0D0]">
          <div className="max-w-[1140px] mx-auto px-6">

            {/* Section header */}
            <div className="mb-12" data-animate>
              <p className="font-body text-xs text-color-gold uppercase tracking-[0.15em] font-bold mb-3">
                Service &amp; Leadership
              </p>
              <h2 className="font-display font-semibold text-[2rem] text-color-ink mb-4">
                Organizations
              </h2>
              <div className="w-10 h-[2px] bg-color-gold" />
            </div>

            {/* Org cards — side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizations.map((org) => (
                <article
                  key={org.id}
                  className="bg-white border border-[#E8E0D0] p-8"
                  data-animate
                >
                  <span className="inline-block bg-color-navy-dark text-color-ink-on-dark px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
                    {org.badge}
                  </span>
                  <h3 className="font-display font-semibold text-[1.5rem] text-color-ink mb-1">
                    {org.name}
                  </h3>
                  <p className="font-body text-xs text-color-ink-secondary uppercase tracking-widest mb-5">
                    {org.detail}
                  </p>
                  <p className="font-body text-[1rem] text-color-ink leading-[1.75]">
                    {org.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — INQUIRY
      ══════════════════════════════════════ */}
      <section id="inquiry" className="bg-[#0D1F4E] py-24">
        <div className="max-w-[1140px] mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12" data-animate>
            <p className="font-body text-xs text-color-gold uppercase tracking-[0.15em] font-bold mb-3">
              Get in Touch
            </p>
            <h2 className="font-display font-semibold text-[2.25rem] text-color-ink-on-dark mb-4">
              Inquiry
            </h2>
            <div className="w-16 h-px bg-color-gold mx-auto" />
          </div>

          {/* Form */}
          <form className="max-w-[560px] mx-auto" data-animate>
            {/* Full Name */}
            <div className="mb-5">
              <label className="block font-body text-xs text-color-ink-on-dark uppercase tracking-[0.12em] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink placeholder-color-ink-secondary focus:outline-none focus:border-color-gold"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block font-body text-xs text-color-ink-on-dark uppercase tracking-[0.12em] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink placeholder-color-ink-secondary focus:outline-none focus:border-color-gold"
                placeholder="you@example.com"
              />
            </div>

            {/* Company */}
            <div className="mb-5">
              <label className="block font-body text-xs text-color-ink-on-dark uppercase tracking-[0.12em] mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink placeholder-color-ink-secondary focus:outline-none focus:border-color-gold"
                placeholder="Optional"
              />
            </div>

            {/* Inquiry Type */}
            <div className="mb-5">
              <label className="block font-body text-xs text-color-ink-on-dark uppercase tracking-[0.12em] mb-1.5">
                Inquiry Type
              </label>
              <select
                className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink focus:outline-none focus:border-color-gold appearance-none"
              >
                <option value="">Select type</option>
                <option value="general">General Inquiry</option>
                <option value="franchise">Franchise Opportunity</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-7">
              <label className="block font-body text-xs text-color-ink-on-dark uppercase tracking-[0.12em] mb-1.5">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink placeholder-color-ink-secondary focus:outline-none focus:border-color-gold resize-none"
                placeholder="Your message"
              />
            </div>

            {/* Submit */}
            <button
              type="button"
              className="w-full bg-color-gold text-[#0D1F4E] font-body font-bold text-sm uppercase tracking-[0.16em] px-6 py-4 rounded-sm hover:opacity-90 transition-opacity"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0D1F4E] border-t border-[rgba(184,134,11,0.35)]">
        <div className="max-w-[1140px] mx-auto px-6 py-6 text-center">
          <p className="font-body text-xs text-[rgba(248,245,238,0.45)] tracking-wide">
            &copy; 2026 Jonathan Gesalem &middot; Cebu, Philippines
          </p>
        </div>
      </footer>

    </div>
  )
}
