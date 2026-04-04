import { organizations } from '../../data';

export default function Affiliations() {
  const yap = organizations.find(o => o.id === 'yap-fraternity');
  const rotary = organizations.find(o => o.id === 'rotary');

  return (
    <section className="bg-color-off-white">
      {/* T top: centered header */}
      <div className="px-16 py-10 text-center">
        <h2 className="font-display font-semibold text-5xl text-[#0D1F4E]">
          Organizations
        </h2>
        <div className="w-16 h-1 bg-[#B8860B] mx-auto mt-6" />
      </div>

      {/* T stem: full-width split panels */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Yap Fraternity — yellow */}
        <div className="flex-none w-full md:w-1/2 bg-[#F5C800] flex flex-col items-center px-16 py-10 text-center">
          <img
            src="/assets/yap_logo.png"
            alt="Yap Fraternity"
            className="h-44 w-auto object-contain mb-6"
          />
          <div className="inline-block bg-[#1B6E3A] text-[#F5C800] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
            {yap?.badge}
          </div>
          <h3 className="font-display font-bold text-5xl text-[#1B6E3A] mb-3 leading-tight">
            {yap?.name}
          </h3>
          <p className="font-body text-sm uppercase tracking-[0.1em] text-[#1C0A00]/70 mb-6">
            {yap?.detail}
          </p>
          <p className="font-body text-xl text-[#1C0A00] leading-relaxed text-justify max-w-lg">
            {yap?.description}
          </p>
        </div>

        {/* Right: Rotary Club — royal blue */}
        <div className="flex-none w-full md:w-1/2 bg-[#003E8A] flex flex-col items-center px-16 py-10 text-center">
          <div className="bg-white rounded-xl p-4 shadow-lg inline-block mb-6">
            <img
              src="/assets/logos/rotary_club_of_cebu.png"
              alt="Rotary Club of Cebu"
              className="h-48 w-auto object-contain"
            />
          </div>
          <div className="inline-block bg-white/20 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
            {rotary?.badge}
          </div>
          <h3 className="font-display font-bold text-5xl text-white mb-3 leading-tight">
            {rotary?.name}
          </h3>
          <p className="font-body text-sm uppercase tracking-[0.1em] text-white/70 mb-6">
            {rotary?.detail}
          </p>
          <p className="font-body text-xl text-white/90 leading-relaxed text-justify max-w-lg">
            {rotary?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
