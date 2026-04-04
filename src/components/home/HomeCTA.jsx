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
          {/* About Button - Navy Border */}
          <Link
            to="/about"
            className="inline-block px-8 py-3 border-2 border-[#0D1F4E] text-[#0D1F4E] font-body font-semibold rounded-lg hover:border-[#1a2d5c] hover:bg-[#f9f9f9] transition-all"
          >
            About Jonie
          </Link>

          {/* Contact Button - Gold Filled with Gold Border */}
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-color-gold border-2 border-color-gold text-[#0D1F4E] font-body font-semibold rounded-lg hover:bg-opacity-80 hover:border-opacity-80 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
