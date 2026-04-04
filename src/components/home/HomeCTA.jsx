import { Link } from 'react-router-dom';

export default function HomeCTA() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="w-3/4 mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-[#0D1F4E] mb-4">
          Want to Know More?
        </h2>

        {/* Blurb */}
        <p className="font-body text-color-ink text-lg max-w-2xl mx-auto mb-10">
          Explore Jonie's business ventures, civic contributions, and vision for Cebu's future.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* About Button - Gold Filled */}
          <Link
            to="/about"
            className="inline-block px-8 py-3 bg-color-gold text-[#0D1F4E] font-body font-semibold rounded-lg hover:bg-opacity-90 transition-all"
          >
            About Jonie
          </Link>

          {/* Contact Button - Gold Filled */}
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-color-gold text-[#0D1F4E] font-body font-semibold rounded-lg hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
