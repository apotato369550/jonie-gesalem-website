import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { companies } from '../../data';

const contactCompanyIds = ['dunkin', 'jonies', 'grand-taishan'];

const companyColors = {
  dunkin: { primary: '#FF6600', secondary: '#FF69B4' },
  jonies: { primary: '#1A1A1A', secondary: '#FF6600' },
  'grand-taishan': { primary: '#2D5F3F', secondary: '#FFD700' },
};

const cardDimensions = {
  dunkin: { width: '200px', height: '110px', imgClass: 'h-20 max-w-[170px] w-auto object-contain' },
  jonies: { width: '200px', height: '110px', imgClass: 'h-20 max-w-[170px] w-auto object-contain' },
  'grand-taishan': { width: '180px', height: '180px', imgClass: 'h-36 max-w-[150px] w-auto object-contain' },
};

export default function ContactForm() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [searchParams] = useSearchParams();

  const contactCompanies = companies.filter(c => contactCompanyIds.includes(c.id));

  // Pre-select company from URL param (?company=dunkin)
  useEffect(() => {
    const company = searchParams.get('company');
    if (company) {
      const idx = contactCompanies.findIndex(c => c.id === company);
      if (idx !== -1) setActiveIndex(idx);
    }
  }, []);

  const handleSelect = (i) => {
    if (i === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(i);
      setFading(false);
    }, 150);
  };

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Gradient backgrounds — stacked, cross-fade */}
      {contactCompanies.map((company, i) => {
        const c = companyColors[company.id];
        return (
          <div
            key={company.id}
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${c.primary} 0%, ${c.secondary} 100%)`,
              opacity: i === activeIndex ? 1 : 0,
            }}
          />
        );
      })}

      {/* Right image panel — diagonal left edge */}
      <div
        className="absolute top-0 right-0 bottom-0 overflow-hidden z-[1]"
        style={{ width: '48%', clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)' }}
      >
        {contactCompanies.map((company, i) => {
          const asset = company.carouselAssets?.[0];
          return (
            <div
              key={company.id}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === activeIndex ? 1 : 0 }}
            >
              {asset?.type === 'video' ? (
                <video src={asset.src} autoPlay muted loop className="w-full h-full object-cover" />
              ) : (
                <img src={asset?.src} alt={company.name} className="w-full h-full object-cover" />
              )}
            </div>
          );
        })}
      </div>

      {/* Left content: selector + form card — centered */}
      <div
        className="relative z-[2] flex items-center justify-center gap-8 min-h-[70vh] py-16 px-10"
        style={{ width: '68%' }}
      >
        {/* Vertical company selector */}
        {/* Logo card: fixed 100×104px so all dots sit at identical vertical offsets.
            Line: top/bottom = 52px (half of 104px card height) = dot centers */}
        <div className="flex-none relative flex flex-col gap-10">
          <div
            className="absolute w-px bg-white/40"
            style={{ top: '55px', bottom: '90px', right: '10px' }}
          />

          {contactCompanies.map((company, i) => (
            <button
              key={company.id}
              onClick={() => handleSelect(i)}
              className="relative z-10 flex items-center gap-5 group cursor-pointer"
              aria-label={company.name}
            >
              {/* Fixed-size logo card — ensures consistent row height for dot alignment */}
              <div
                className={`bg-white rounded-xl p-3 shadow-lg flex items-center justify-center flex-none transition-all duration-200 ${
                  i === activeIndex ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'
                }`}
                style={{ width: cardDimensions[company.id].width, height: cardDimensions[company.id].height }}
              >
                <img
                  src={company.logo}
                  alt={company.logoAlt}
                  className={cardDimensions[company.id].imgClass}
                />
              </div>
              {/* Dot */}
              <div
                className={`w-5 h-5 rounded-full border-2 border-white flex-none transition-all duration-200 ${
                  i === activeIndex
                    ? 'bg-white scale-125'
                    : 'bg-transparent group-hover:bg-white/50'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Form card — fixed width, smaller */}
        <div
          className="bg-white rounded-2xl shadow-2xl px-10 py-10"
          style={{ width: '840px', transition: 'opacity 0.15s', opacity: fading ? 0 : 1 }}
        >
          <h2 className="font-display font-semibold text-5xl text-[#0D1F4E] mb-8 leading-tight">
            Get In Touch
          </h2>
          <form className="space-y-5">
            <select className="w-full border border-[#E8E0D0] rounded-lg px-4 py-3 font-body text-xl text-color-ink focus:outline-none focus:border-[#0D1F4E]">
              <option value="">Contact Type</option>
              <option value="general">General Inquiry</option>
              <option value="franchise">Franchise Opportunity</option>
              <option value="partnership">Partnership</option>
              <option value="media">Media</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-[#E8E0D0] rounded-lg px-4 py-3 font-body text-xl text-color-ink placeholder:text-[#aaa] focus:outline-none focus:border-[#0D1F4E]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-[#E8E0D0] rounded-lg px-4 py-3 font-body text-xl text-color-ink placeholder:text-[#aaa] focus:outline-none focus:border-[#0D1F4E]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-[#E8E0D0] rounded-lg px-4 py-3 font-body text-xl text-color-ink placeholder:text-[#aaa] focus:outline-none focus:border-[#0D1F4E]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-[#E8E0D0] rounded-lg px-4 py-3 font-body text-xl text-color-ink placeholder:text-[#aaa] focus:outline-none focus:border-[#0D1F4E]"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-[#E8E0D0] rounded-lg px-4 py-3 font-body text-xl text-color-ink placeholder:text-[#aaa] focus:outline-none focus:border-[#0D1F4E] resize-none"
            />
            <button
              type="button"
              className="w-full px-8 py-3 bg-white border-2 border-[#0D1F4E] text-[#0D1F4E] font-body font-semibold rounded-lg hover:bg-[#0D1F4E] hover:text-white transition-all text-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
