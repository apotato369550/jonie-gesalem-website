export default function AboutHero() {
  return (
    <section className="min-h-screen md:flex overflow-hidden">
      {/* Left half: photo */}
      <div className="w-full h-72 md:h-auto md:w-1/2 flex-none overflow-hidden">
        <img
          src="/assets/uncle_jonie.jpg"
          alt="Jonathan Gesalem"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Right half: navy background */}
      <div className="w-full md:w-1/2 flex-none bg-[#0D1F4E] flex flex-col justify-center px-10 lg:px-16 py-16">
        <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Jonathan<br />"Jonie"<br />Gesalem
        </h1>
        <div className="mb-8">
          <p className="font-serif-sc text-3xl text-[#B8860B] mb-1">葉長青</p>
          <p className="font-body text-sm text-white/60 tracking-wide">Yap Tiong Tsing</p>
        </div>
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
