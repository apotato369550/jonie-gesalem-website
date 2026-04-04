import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="w-3/4 mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="font-display font-bold text-5xl md:text-6xl text-[#0D1F4E] mb-4">
          Explore the Portfolio
        </h2>

        {/* Blurb */}
        <p className="font-body text-color-ink text-lg max-w-2xl mx-auto mb-10">
          Discover the ventures, partnerships, and initiatives that define the Gesalem Group.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* View Companies — Navy Border */}
          <Link
            to="/"
            className="inline-block px-8 py-3 border-2 border-[#0D1F4E] text-[#0D1F4E] font-body font-semibold rounded-lg hover:bg-[#0D1F4E] hover:text-white transition-all"
          >
            View Companies
          </Link>

          {/* Get in Touch — Gold Pale */}
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-gold-pale border-2 border-gold-pale text-[#1B3A8F] font-body font-semibold rounded-lg hover:bg-gold-light hover:border-gold-light transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
