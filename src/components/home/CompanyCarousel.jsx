import { useState, useRef, useEffect } from 'react';
import { companies } from '../../data';

const companyColors = {
  dunkin: {
    primary: '#FF6600',
    secondary: '#FF69B4',
  },
  jonies: {
    primary: '#1A1A1A',
    secondary: '#FF6600',
  },
  'grand-taishan': {
    primary: '#2D5F3F',
    secondary: '#FFD700',
  },
};

export default function CompanyCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);
  const carouselRef = useRef(null);
  const assetTimerRef = useRef(null);

  const featuredCompanyIds = ['dunkin', 'jonies', 'grand-taishan'];
  const carouselCompanies = companies.filter(company =>
    featuredCompanyIds.includes(company.id)
  );

  useEffect(() => {
    const currentCompany = carouselCompanies[activeSlide];
    const assets = currentCompany?.carouselAssets || [];

    if (assets.length > 1) {
      assetTimerRef.current = setInterval(() => {
        setActiveAssetIndex(prev => (prev + 1) % assets.length);
      }, 5000);
    }

    return () => {
      if (assetTimerRef.current) {
        clearInterval(assetTimerRef.current);
      }
    };
  }, [activeSlide, carouselCompanies]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    setActiveAssetIndex(0);
  };

  const goToPrevious = () => {
    setActiveSlide(prev =>
      prev === 0 ? carouselCompanies.length - 1 : prev - 1
    );
    setActiveAssetIndex(0);
  };

  const goToNext = () => {
    setActiveSlide(prev =>
      prev === carouselCompanies.length - 1 ? 0 : prev + 1
    );
    setActiveAssetIndex(0);
  };

  if (carouselCompanies.length === 0) return null;

  const currentCompany = carouselCompanies[activeSlide];
  const currentAssets = currentCompany?.carouselAssets || [];

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">

      {/* Carousel slides container */}
      <div ref={carouselRef} className="relative w-full h-screen">
        {carouselCompanies.map((company, index) => {
          const slideColors = companyColors[company.id];
          const isActive = index === activeSlide;
          const assets = company?.carouselAssets || [];
          const activeAsset = assets[activeAssetIndex] || assets[0];

          return (
            <div
              key={company.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                background: `linear-gradient(135deg, ${slideColors.primary} 0%, ${slideColors.secondary} 100%)`,
              }}
            >

              {/* Mobile layout */}
              <div className="md:hidden h-full flex flex-col items-center justify-center px-6 py-12 gap-8">
                {activeAsset && (
                  <div className="w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-xl">
                    {activeAsset.type === 'video' ? (
                      <video src={activeAsset.src} autoPlay muted loop className="w-full h-full object-cover" />
                    ) : (
                      <img src={activeAsset.src} alt={`${company.name} asset`} className="w-full h-full object-cover" />
                    )}
                  </div>
                )}
                <div className="flex flex-col items-center text-white text-center">
                  <div className="inline-flex items-center justify-center bg-white rounded-2xl p-2 mb-4 shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
                    <img src={company.logo} alt={company.logoAlt} className="h-24 w-auto object-contain" />
                  </div>
                  <p
                    className="font-body text-sm leading-relaxed max-w-xs rounded-xl py-5 px-6 mb-3 text-[#1C1A16]"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    {company.desc}
                  </p>
                  <p
                    className="font-body text-sm font-semibold leading-snug rounded-xl py-5 px-6 text-[#1C1A16] self-end text-right"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    {company.name}
                  </p>
                </div>
              </div>

              {/* Desktop layout — diagonal split */}
              <div className="hidden md:block relative h-full">
                {/* Media panel — full height, diagonal clip */}
                {activeAsset && (
                  <div
                    className="absolute top-0 left-0 bottom-0 overflow-hidden z-[1]"
                    style={{ width: '58%', clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0 100%)' }}
                  >
                    {activeAsset.type === 'video' ? (
                      <video src={activeAsset.src} autoPlay muted loop className="w-full h-full object-cover object-center" />
                    ) : (
                      <img src={activeAsset.src} alt={`${company.name} asset`} className="w-full h-full object-cover object-center" />
                    )}
                  </div>
                )}

                {/* Info panel — right side, layered over diagonal tail */}
                <div
                  className="absolute top-0 right-0 bottom-0 flex flex-col justify-center text-white z-[2]"
                  style={{ width: '50%', paddingLeft: '48px', paddingRight: '48px' }}
                >
                  <div
                    className="inline-flex items-center justify-center bg-white p-2 mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.18)]"
                    style={{ borderRadius: company.id === 'grand-taishan' ? '12px' : '16px' }}
                  >
                    <img
                      src={company.logo}
                      alt={company.logoAlt}
                      className={company.id === 'grand-taishan'
                        ? 'h-48 lg:h-56 w-auto object-contain'
                        : 'h-36 lg:h-44 w-auto object-contain'}
                    />
                  </div>
                  <p
                    className="font-body text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-3 rounded-xl py-5 px-6 text-[#1C1A16]"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    {company.desc}
                  </p>
                  <p
                    className="font-body text-sm sm:text-base md:text-lg leading-snug max-w-xl rounded-xl py-5 px-6 text-[#1C1A16] self-end text-right"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, nulla dui hendrerit est.
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom navigation — ‹ counter › replaces dot circles */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-6">
        <button
          onClick={goToPrevious}
          className="text-white/60 hover:text-white text-3xl leading-none transition-all"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <span className="text-white/70 text-sm font-body tabular-nums">
          {activeSlide + 1} / {carouselCompanies.length}
        </span>
        <button
          onClick={goToNext}
          className="text-white/60 hover:text-white text-3xl leading-none transition-all"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

    </section>
  );
}
