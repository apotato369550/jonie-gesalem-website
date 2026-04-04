import { Link } from 'react-router-dom';

export default function AboutCTA() {
  return (
    <section className="bg-[#0D1F4E] py-24">
      <div className="w-3/4 mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Eyebrow */}
          <p className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-4">
            Next Steps
          </p>

          {/* Heading */}
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-white mb-6">
            Explore the Portfolio
          </h2>

          {/* Blurb */}
          <p className="font-body text-white mb-12 leading-relaxed">
            Discover the diverse ventures that define the Gesalem Group. From innovative food concepts to construction and real estate, our portfolio reflects decades of strategic growth and community impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* View Companies Button — Gold Filled */}
            <Link
              to="/"
              className="inline-block bg-color-gold text-[#0D1F4E] px-8 py-3 font-body font-semibold rounded transition-all hover:bg-color-gold-light"
            >
              View Companies
            </Link>

            {/* Get in Touch Button — White Outlined */}
            <Link
              to="/contact"
              className="inline-block border-2 border-color-ink-on-dark text-white px-8 py-3 font-body font-semibold rounded transition-all hover:bg-color-ink-on-dark hover:text-[#0D1F4E]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
