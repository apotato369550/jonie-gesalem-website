import { useRef } from 'react';
import { companies } from '../../data';

export default function DynamicCarousel() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="bg-color-off-white py-20 md:py-32">
      <div className="w-3/4 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          {/* Eyebrow Label */}
          <p className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-3">
            Portfolio
          </p>

          {/* Heading */}
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-[#0D1F4E] mb-6">
            Companies
          </h2>

          {/* Gold Rule */}
          <div className="w-12 h-1 bg-color-gold" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-color-gold hover:bg-opacity-80 text-[#0D1F4E] w-10 h-10 rounded-full flex items-center justify-center transition-all"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-color-gold hover:bg-opacity-80 text-[#0D1F4E] w-10 h-10 rounded-full flex items-center justify-center transition-all"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scrollable Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 scroll-smooth pb-4 px-16"
            style={{ scrollBehavior: 'smooth' }}
          >
            {companies.map((company) => (
              <div
                key={company.id}
                className="min-w-[200px] flex-shrink-0 bg-white border border-color-gold rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                {/* Company Logo */}
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src={company.logo}
                    alt={company.logoAlt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Company Name */}
                <h3 className="font-display font-semibold text-sm md:text-base text-color-ink mb-2 text-center line-clamp-2">
                  {company.name}
                </h3>

                {/* Company City */}
                <p className="font-body text-xs text-color-ink-muted text-center">
                  {company.city}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
