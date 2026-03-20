import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="bg-color-off-white border-t border-[#E8E0D0] py-20">
      <div className="w-3/4 mx-auto px-6">
        {/* Centered content */}
        <div className="text-center max-w-2xl mx-auto">
          {/* Eyebrow label */}
          <div className="uppercase tracking-[0.15em] text-xs font-bold text-color-ink mb-4">
            Learn More
          </div>

          {/* Main heading */}
          <h2 className="font-display font-semibold text-3xl text-[#0D1F4E] mb-4">
            Explore Our Story
          </h2>

          {/* Body text */}
          <p className="font-body text-color-ink-muted mb-8">
            Discover more about our journey, values, and the companies that make up the WC Group.
          </p>

          {/* Button group */}
          <div className="flex gap-4 justify-center">
            {/* About button - filled gold */}
            <Link
              to="/about"
              className="inline-block bg-color-gold text-[#0D1F4E] font-display font-semibold py-3 px-8 rounded-sm uppercase tracking-[0.1em] text-sm hover:opacity-90 transition-opacity"
            >
              About Jonie
            </Link>

            {/* Our Companies button - outlined gold */}
            <Link
              to="/"
              className="inline-block bg-transparent border-2 border-color-gold text-color-gold font-display font-semibold py-3 px-8 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-color-gold hover:text-[#0D1F4E] transition-colors"
            >
              Our Companies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
