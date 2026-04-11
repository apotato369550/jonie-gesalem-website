export default function AboutHero() {
  return (
    <section className="min-h-[70vh] md:h-[36vh] md:flex overflow-hidden">
      {/* Left 40%: photo */}
      <div className="w-full h-56 md:h-full md:w-[45%] flex-none overflow-hidden bg-[#0D1F4E]">
        <img
          src="/assets/uncle_jonie.jpg"
          alt="Jonathan Gesalem"
          className="w-full h-full object-contain object-top"
        />
      </div>

      {/* Right 60%: navy background */}
      <div className="w-full md:w-[55%] flex-none bg-[#0D1F4E] flex flex-col justify-center px-10 lg:px-14 py-8 md:overflow-y-auto">
        {/* Name */}
        <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl text-white leading-tight mb-3">
          Jonathan<br />
          <span style={{ fontFamily: "'Montserrat', sans-serif" }}>'Jonie'</span><br />
          Gesalem
        </h1>

        {/* Chinese name */}
        <div className="mb-4">
          <p className="font-serif-sc font-bold text-6xl md:text-7xl text-[#E8C840] mb-1">葉長青</p>
          <p className="font-body text-sm text-white/60 tracking-wide">Yap Tiong Tsing</p>
        </div>

        {/* Description */}
        <p className="font-body text-base md:text-lg text-white/80 leading-relaxed">
          Entrepreneur, community leader, and visionary whose business acumen and philanthropic
          commitment have shaped the landscape of commerce and service across Cebu and beyond.
          For over four decades, he has built a diversified portfolio spanning food and beverage
          franchising, real estate development, and social enterprise.
        </p>
      </div>
    </section>
  );
}
