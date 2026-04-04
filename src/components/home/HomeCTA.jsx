import { Link } from 'react-router-dom';

export default function HomeCTA() {
  return (
    <section className="bg-[#0D1F4E] py-20 md:py-32">
      <div className="w-3/4 mx-auto px-6 text-center">
        {/* Eyebrow Label */}
        <p className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-3">
          Next Steps
        </p>

        {/* Heading */}
        <h2 className="font-display font-semibold text-4xl md:text-5xl text-white mb-4">
          Want to Know More?
        </h2>

        {/* Blurb */}
        <p className="font-body text-white text-lg max-w-2xl mx-auto mb-10">
          Explore Jonie's business ventures, civic contributions, and vision for Cebu's future.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* About Button - Gold Filled */}
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-color-gold text-[#0D1F4E] font-display font-semibold rounded-lg hover:bg-opacity-90 transition-all"
          >
            About Jonie
          </Link>

          {/* Contact Button - Outlined */}
          <Link
            to="/contact"
            className="inline-block px-8 py-3 border-2 border-color-gold text-color-gold font-display font-semibold rounded-lg hover:bg-color-gold hover:text-[#0D1F4E] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
