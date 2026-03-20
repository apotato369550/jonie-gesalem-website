export default function WhoAreWe() {
  return (
    <section className="bg-color-off-white border-t border-color-gold py-20 md:py-32">
      <div className="w-3/4 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-center">
          {/* Left: Portrait Photo */}
          <div className="flex justify-center">
            <img
              src="/assets/uncle_jonie.jpg"
              alt="Jonathan Gesalem"
              className="w-full max-w-sm rounded-lg"
            />
          </div>

          {/* Right: Text Block */}
          <div data-animate="true">
            {/* Eyebrow Label */}
            <p className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-3">
              About
            </p>

            {/* Name Heading */}
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-[#0D1F4E] mb-6">
              Jonathan Gesalem
            </h2>

            {/* Gold Rule */}
            <div className="w-12 h-1 bg-color-gold mb-6" />

            {/* Body Paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="font-body text-color-ink text-base leading-relaxed">
                Jonathan Gesalem, affectionately known as "Jonie," is a second-generation entrepreneur
                and civic leader with deep roots in Cebu's business community. His entrepreneurial
                journey began in his father's footsteps, expanding into a diverse portfolio of businesses
                spanning food and beverage, retail, and construction.
              </p>
              <p className="font-body text-color-ink text-base leading-relaxed">
                Beyond business, Jonie is actively involved in community service. He served as President
                of the Rotary Club of Cebu (2012–2013) and leads the Yap Fraternity Cebu as President,
                driving initiatives in disaster relief, cultural preservation, and community development.
              </p>
            </div>

            {/* Chinese Name + Romanization */}
            <div className="pt-4">
              <p className="font-serif-sc text-color-gold text-2xl mb-1">葉長青</p>
              <p className="font-body text-color-ink-muted text-sm">Yeh Chhiúnn-tshinn (Hokkien)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
