import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="bg-white py-20">
      <div className="w-3/4 mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-5xl text-[#0D1F4E] mb-4">
          Explore Our Story
        </h2>
        <p className="font-body text-color-ink text-xl max-w-2xl mx-auto mb-10">
          Discover more about our journey, values, and the companies that make up the Gesalem Group.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/about"
            className="inline-block px-8 py-3 border-2 border-[#0D1F4E] text-[#0D1F4E] font-body font-semibold rounded-lg hover:bg-[#0D1F4E] hover:text-white transition-all"
          >
            About Jonie
          </Link>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gold-pale border-2 border-gold-pale text-[#1B3A8F] font-body font-semibold rounded-lg hover:bg-gold-light hover:border-gold-light transition-all"
          >
            Our Companies
          </Link>
        </div>
      </div>
    </section>
  );
}
