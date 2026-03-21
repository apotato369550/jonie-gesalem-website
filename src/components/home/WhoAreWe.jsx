export default function WhoAreWe() {
  return (
    <section
      className="relative w-full py-24 md:py-36 overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/cebu_city.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(13,31,78,0.65)]" />

      {/* Content container */}
      <div className="relative z-10 w-full h-full px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[740px_520px] gap-6 items-center justify-center">
          {/* Left: Logos in filled flower — 1 center + 6 inner + 6 outer */}
          {(() => {
            const logos = [
              { src: '/assets/logos/jonies.png', alt: "Jonie's" },
              { src: '/assets/logos/dunkin_new_logo.png', alt: 'Dunkin' },
              { src: '/assets/logos/dragon.png', alt: 'Dragon' },
              { src: '/assets/logos/gdc.png', alt: 'GDC' },
              { src: '/assets/logos/golden_era.png', alt: 'Golden Era' },
              { src: '/assets/logos/grand_taishan.png', alt: 'Grand Taishan' },
              { src: '/assets/logos/licoln_trading.png', alt: 'Lincoln Trading' },
              { src: '/assets/logos/linsy.png', alt: 'Linsy' },
              { src: '/assets/logos/mix_eat.png', alt: 'Mix Eat' },
              { src: '/assets/logos/montana_de_oro.png', alt: 'Montana de Oro' },
              { src: '/assets/logos/oro_grande.png', alt: 'Oro Grande' },
              { src: '/assets/logos/queen_city_food_chain.png', alt: 'Queen City Food Chain' },
              { src: '/assets/logos/rio_grande.png', alt: 'Rio Grande' },
            ];
            const size = 136, half = 68;
            const gap = 15;
            const r1 = size + gap;          // 151
            const r2 = r1 + size + gap;     // 302
            const dim = 2 * (r2 + half);    // 740
            const cx = dim / 2, cy = dim / 2;
            const deg = d => (d * Math.PI) / 180;
            const positions = [
              { x: cx, y: cy },
              ...Array.from({ length: 6 }, (_, i) => ({
                x: cx + r1 * Math.cos(deg(i * 60 - 90)),
                y: cy + r1 * Math.sin(deg(i * 60 - 90)),
              })),
              ...Array.from({ length: 6 }, (_, i) => ({
                x: cx + r2 * Math.cos(deg(i * 60 - 60)),
                y: cy + r2 * Math.sin(deg(i * 60 - 60)),
              })),
            ];
            return (
              <div className="flex items-center justify-center">
                <div className="relative" style={{ width: dim, height: dim, transform: 'translateX(-64px)' }}>
                  {logos.map(({ src, alt }, i) => (
                    <div
                      key={alt}
                      className="absolute flex items-center justify-center rounded-full shadow-xl"
                      style={{
                        width: size, height: size,
                        left: positions[i].x - half,
                        top: positions[i].y - half,
                        backgroundColor: 'rgba(255,255,255,0.92)',
                        padding: '18px',
                      }}
                    >
                      <img src={src} alt={alt} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Right: White card */}
          <div
            className="rounded-xl p-12 md:p-16 shadow-2xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}
          >
            <h2 className="font-display font-semibold text-5xl md:text-6xl text-color-blue-primary mb-12">
              Lorem Ipsum Dolor
            </h2>
            <div className="space-y-6">
              <p className="font-body text-color-ink text-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-body text-color-ink text-xl leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
