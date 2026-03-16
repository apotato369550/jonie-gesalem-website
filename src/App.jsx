import { companies, organizations } from './data.js'

export default function App() {
  return (
    <div className="bg-color-off-white">
      {/* Navbar */}
      <header className="bg-color-blue-primary border-b-2 border-color-gold sticky top-0 z-50">
        <div className="max-w-site mx-auto px-6 py-4 flex items-center gap-3">
          <span className="font-serif-sc text-2xl text-color-gold tracking-[0.05em]">
            葉長青
          </span>
          <span className="text-sm font-bold text-color-ink-on-dark uppercase tracking-[0.1em]">
            Jonathan Gesalem
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0D1F4E]">
        <div className="max-w-site mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 items-center">
          {/* Left: Text */}
          <div className="flex-1">
            <p className="font-serif-sc text-[3rem] text-color-gold leading-none tracking-[0.05em] mb-4">
              葉長青
            </p>
            <h1 className="font-display text-[3.5rem] leading-[1.15] font-semibold text-color-ink-on-dark mb-3">
              Jonathan "Jonie" Gesalem
            </h1>
            <p className="text-[1.125rem] text-[rgba(248,245,238,0.75)] uppercase tracking-[0.12em] font-light mb-6">
              Entrepreneur · Civic Leader · Cebu
            </p>
            <div className="w-16 h-px bg-color-gold mb-6" />
            <p className="text-[1.125rem] text-[rgba(248,245,238,0.85)] leading-[1.7] max-w-[540px]">
              Forty years building Cebu. One Dunkin' Donuts in 1986 became fourteen companies across Mindanao and the Visayas. Service through Rotary, family through the Yap Fraternity.
            </p>
          </div>

          {/* Right: Portrait */}
          <div className="w-full md:w-[360px] md:h-[480px] flex-shrink-0 overflow-hidden rounded">
            <img
              src="/assets/uncle_jonie.jpg"
              alt="Jonathan 'Jonie' Gesalem"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-site mx-auto px-6 py-16 bg-color-off-white">
        {/* Companies Section */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="font-display font-semibold text-[2.25rem] text-color-blue-primary mb-3">
              Companies
            </h2>
            <div className="w-12 h-[3px] bg-color-gold mb-3" />
            <p className="text-color-ink-muted text-base">
              Portfolio of business ventures and leadership roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded border border-[#E8E0D0] border-l-4 border-l-[#B8860B] p-8 hover:shadow-md transition-shadow"
              >
                <div className="h-32 bg-color-surface-warm rounded mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={company.logo}
                    alt={company.logoAlt}
                    className="h-full w-full object-contain p-4"
                    onError={(e) => {
                      if (!company.hideOnError) return
                      e.target.closest('[role="article"]').style.display = 'none'
                    }}
                  />
                </div>
                <h3 className="font-display font-semibold text-xl text-color-ink mb-1">
                  {company.name}
                </h3>
                <p className="text-xs text-color-ink-muted uppercase tracking-widest">
                  {company.city}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-16 h-0.5 bg-color-gold mx-auto my-16" />

        {/* Organizations Section */}
        <section>
          <div className="mb-10">
            <h2 className="font-display font-semibold text-[2.25rem] text-color-blue-primary mb-3">
              Organizations & Service
            </h2>
            <div className="w-12 h-[3px] bg-color-gold mb-3" />
            <p className="text-color-ink-muted text-base">
              Community leadership and organizational roles
            </p>
          </div>

          <div className="space-y-8">
            {organizations.map((org) => (
              <article
                key={org.id}
                className="bg-white border border-[#E8E0D0] border-l-4 border-l-[#1B3A8F] p-8"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span className="inline-block bg-color-blue-primary text-color-ink-on-dark px-3 py-1.5 text-xs font-bold uppercase tracking-widest">
                    {org.badge}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-2xl text-color-ink mb-1">
                  {org.name}
                </h3>
                <p className="text-xs text-color-ink-secondary uppercase tracking-widest mb-4">
                  {org.detail}
                </p>
                <p className="text-color-ink leading-relaxed">
                  {org.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0D1F4E] border-t-2 border-color-gold">
        <div className="max-w-site mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="font-serif-sc text-2xl text-color-gold tracking-[0.05em]">
              葉長青
            </span>
            <span className="text-xs font-bold text-color-ink-on-dark uppercase tracking-[0.1em]">
              Jonathan Gesalem
            </span>
          </div>

          {/* Center */}
          <p className="text-xs text-[rgba(248,245,238,0.55)]">
            © 2025 Jonathan Gesalem. All rights reserved.
          </p>

          {/* Right */}
          <p className="text-xs text-[rgba(248,245,238,0.55)]">
            Cebu, Philippines
          </p>
        </div>
      </footer>
    </div>
  )
}
