import { useState, useEffect } from 'react';

const milestones = [
  {
    year: '1986',
    title: "First Dunkin' Donuts",
    description:
      "Opened the first Dunkin' Donuts franchise at Fuente Osmeña, Cebu—launching the foundation of the Gesalem business empire.",
    images: [
      '/assets/carousell_assets/timeline/dunkin_old/dunkin_old_1.jpg',
      '/assets/carousell_assets/timeline/dunkin_old/dunkin_old_2.jpg',
    ],
  },
  {
    year: '1990s',
    title: 'Expansion Across Cebu',
    description:
      "Rapid expansion of Dunkin' franchises throughout Cebu, establishing market presence and operational excellence across the region.",
    images: [
      '/assets/carousell_assets/timeline/dunkin_expansion/dunkin_expansion_1.jpg',
      '/assets/carousell_assets/timeline/dunkin_expansion/dunkin_expansion_2.jpg',
      '/assets/carousell_assets/timeline/dunkin_expansion/dunkin_expansion_3.jpg',
    ],
  },
  {
    year: '2000',
    title: 'Jonies Sizzlers Founded',
    description:
      'Launched Jonies Sizzlers + Roast, blending Filipino comfort food with international culinary influence.',
    images: [
      '/assets/carousell_assets/timeline/jonies_sizzlers/jonies_1.jpg',
      '/assets/carousell_assets/timeline/jonies_sizzlers/jonies_2.jpg',
      '/assets/carousell_assets/timeline/jonies_sizzlers/jonies_3.jpg',
    ],
  },
  {
    year: '2012–2013',
    title: 'Rotary Club Presidency',
    description:
      'Served as President of the Rotary Club of Cebu (District 3860), advancing community service and global goodwill.',
    images: [
      '/assets/carousell_assets/timeline/rotary_club/rotary_1.jpg',
      '/assets/carousell_assets/timeline/rotary_club/rotary_2.png',
    ],
  },
  {
    year: '2019',
    title: 'Grand Taishan Construction',
    description:
      'Established Grand Taishan Construction & Development Inc., diversifying into real estate and infrastructure development.',
    images: [
      '/assets/carousell_assets/timeline/taishan/taishan_1.jpg',
      '/assets/carousell_assets/timeline/taishan/taishan_2.jpg',
    ],
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const handleSelect = (i) => {
    if (i === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(i);
      setCarouselIdx(0);
      setFading(false);
    }, 180);
  };

  const active = milestones[activeIndex];
  const currentImages = active.images;

  const nextCarousel = () => setCarouselIdx(i => (i + 1) % currentImages.length);
  const prevCarousel = () => setCarouselIdx(i => (i - 1 + currentImages.length) % currentImages.length);

  // Auto-advance carousel with fade
  useEffect(() => {
    if (currentImages.length <= 1) return;
    const timer = setInterval(() => {
      setCarouselIdx(i => (i + 1) % currentImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex, currentImages.length]);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/cebu_city.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(13,31,78,0.65)]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center px-16 pt-16 pb-14">
          <h2 className="font-display font-semibold text-5xl text-white mb-4">
            The Gesalem Story
          </h2>
          <div className="w-16 h-1 bg-[#B8860B] mx-auto" />
        </div>

        {/* Cards: carousel + story side by side */}
        <div className="flex mx-16 gap-4" style={{ height: '460px' }}>
          {/* Carousel card */}
          <div
            className="flex-none rounded-xl overflow-hidden shadow-2xl"
            style={{ flex: '0 0 42%' }}
          >
            <div className="relative w-full h-full">
              {currentImages.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === carouselIdx ? 1 : 0 }}
                >
                  <img src={src} alt="milestone visual" className="w-full h-full object-cover" />
                </div>
              ))}
              <button
                onClick={prevCarousel}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/60 text-lg leading-none transition-all z-10"
              >
                ‹
              </button>
              <button
                onClick={nextCarousel}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/60 text-lg leading-none transition-all z-10"
              >
                ›
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {currentImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === carouselIdx ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Story card */}
          <div
            className="flex-1 rounded-xl shadow-2xl flex flex-col justify-start px-10 pt-8 pb-4"
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              transition: 'opacity 0.18s',
              opacity: fading ? 0 : 1,
            }}
          >
            <p className="font-display font-semibold text-xl text-[#B8860B] mb-1">
              {active.year}
            </p>
            <h3 className="font-display font-semibold text-5xl text-[#1B3A8F] mb-3 leading-tight">
              {active.title}
            </h3>
            <p className="font-body text-xl text-[#1C1A16] leading-relaxed">
              {active.description}
            </p>
          </div>
        </div>

        {/* Horizontal timeline — dots + year labels below cards */}
        <div className="relative flex justify-between items-start mx-16 pt-8 pb-12">
          {/* Horizontal line through dot centers */}
          <div className="absolute left-0 right-0 h-px bg-white/40" style={{ top: '10px' }} />

          {milestones.map((m, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer"
              aria-label={`${m.year}: ${m.title}`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 border-white transition-all duration-200 ${
                  i === activeIndex
                    ? 'bg-white scale-125'
                    : 'bg-transparent group-hover:bg-white/50'
                }`}
              />
              <span
                className={`font-body text-sm transition-colors duration-200 ${
                  i === activeIndex
                    ? 'text-white font-semibold'
                    : 'text-white/60 group-hover:text-white/90'
                }`}
              >
                {m.year}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
