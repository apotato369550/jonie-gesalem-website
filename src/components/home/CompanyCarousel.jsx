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

  // Filter to get only the featured companies
  const featuredCompanyIds = ['dunkin', 'jonies', 'grand-taishan'];
  const carouselCompanies = companies.filter(company => 
    featuredCompanyIds.includes(company.id)
  );

  // Auto-rotate assets every 5 seconds
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
  const colors = companyColors[currentCompany.id];
  const currentAssets = currentCompany?.carouselAssets || [];
  const currentAsset = currentAssets[activeAssetIndex];

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
              {/* Slide content */}
              <div className="h-full flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-0">
                
                {/* Asset/Media section - Left */}
                <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0">
                  {activeAsset && (
                    <div className="w-full max-w-sm h-auto aspect-square rounded-lg overflow-hidden shadow-xl">
                      {activeAsset.type === 'video' ? (
                        <video
                          src={activeAsset.src}
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={activeAsset.src}
                          alt={`${company.name} asset`}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Slash separator - Hidden on mobile */}
                <div className="hidden md:flex w-1/12 justify-center">
                  <div className="w-1 h-32 bg-white opacity-50 transform -skew-x-12"></div>
                </div>

                {/* Logo and company info section - Right */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start md:pl-8 text-white text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <img
                      src={company.logo}
                      alt={company.logoAlt}
                      className="h-20 md:h-24 w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
                    {company.name}
                  </h2>
                  <p className="font-body text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-4">
                    {company.desc}
                  </p>
                  <p className="font-body text-xs sm:text-sm font-semibold opacity-90">
                    {company.city}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Left arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-40 hover:bg-opacity-60 transition-all rounded-full p-3 md:p-4"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-40 hover:bg-opacity-60 transition-all rounded-full p-3 md:p-4"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot pagination */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
        {carouselCompanies.map((company, index) => (
          <button
            key={company.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeSlide
                ? 'bg-white w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
