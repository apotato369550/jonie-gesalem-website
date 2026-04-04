import { useState } from 'react';

const milestones = [
  {
    year: '1986',
    title: "First Dunkin' Donuts",
    description:
      "Opened the first Dunkin' Donuts franchise at Fuente Osmeña, Cebu—launching the foundation of the Gesalem business empire.",
  },
  {
    year: '1990s',
    title: 'Expansion Across Cebu',
    description:
      "Rapid expansion of Dunkin' franchises throughout Cebu, establishing market presence and operational excellence across the region.",
  },
  {
    year: '2000',
    title: 'Jonies Sizzlers Founded',
    description:
      'Launched Jonies Sizzlers + Roast, blending Filipino comfort food with international culinary influence.',
  },
  {
    year: '2012–2013',
    title: 'Rotary Club Presidency',
    description:
      'Served as President of the Rotary Club of Cebu (District 3860), advancing community service and global goodwill.',
  },
  {
    year: '2019',
    title: 'Grand Taishan Construction',
    description:
      'Established Grand Taishan Construction & Development Inc., diversifying into real estate and infrastructure development.',
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const handleSelect = (i) => {
    if (i === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(i);
      setFading(false);
    }, 180);
  };

  const active = milestones[activeIndex];

  return (
    <section className="bg-color-surface-warm border-t border-color-divider-subtle">
      {/* T top: header — full width */}
      <div className="px-16 pt-24 pb-16">
        <h2 className="font-display font-semibold text-5xl text-[#0D1F4E] mb-6">
          The Gesalem Story
        </h2>
        <div className="w-16 h-1 bg-[#B8860B]" />
      </div>

      {/* T stem: full-width split columns */}
      <div className="flex" style={{ minHeight: '420px' }}>
        {/* Left: blue timeline nav */}
        <div className="bg-[#1B3A8F] flex-none w-1/3 relative flex flex-col justify-between py-16 px-8">
          {/* Vertical line aligned to dot centers */}
          <div className="absolute left-10 top-16 bottom-16 w-px bg-white/30" />

          {milestones.map((m, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="flex items-center gap-3 relative z-10 group cursor-pointer"
              aria-label={`${m.year}: ${m.title}`}
            >
              {/* Dot */}
              <div
                className={`w-4 h-4 flex-shrink-0 rounded-full border-2 border-white transition-all duration-200 ${
                  i === activeIndex
                    ? 'bg-white scale-125'
                    : 'bg-transparent group-hover:bg-white/50'
                }`}
              />
              {/* Year — to the right of the dot */}
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

        {/* Right: story content */}
        <div
          className="flex-none w-2/3 flex flex-col justify-center px-16 py-16"
          style={{ transition: 'opacity 0.18s', opacity: fading ? 0 : 1 }}
        >
          <p className="font-display font-semibold text-3xl text-[#B8860B] mb-2">
            {active.year}
          </p>
          <h3 className="font-display font-semibold text-2xl text-[#0D1F4E] mb-4">
            {active.title}
          </h3>
          <p className="font-body text-[#1C1A16] leading-relaxed text-lg">
            {active.description}
          </p>
        </div>
      </div>
    </section>
  );
}
