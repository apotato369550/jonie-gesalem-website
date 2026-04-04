export default function Footer() {
  return (
    <footer className="bg-[#0D1F4E] border-t border-white border-opacity-20 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logo and Company Name Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 pb-10 border-b border-white border-opacity-30">
          <img
            src="/assets/logos/gesalem_logo_nobg.png"
            alt="Gesalem Group Logo"
            className="h-16 w-auto"
          />
          <div>
            <h3 className="font-display text-3xl font-semibold text-white mb-2">
              Gesalem Group
            </h3>
            <p className="font-body text-white max-w-sm">
              Building Cebu's future through entrepreneurship, civic excellence, and innovative ventures.
            </p>
          </div>
        </div>

        {/* Footer Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* About */}
          <div>
            <h4 className="font-body font-semibold text-white uppercase text-xs tracking-[0.1em] mb-4">
              About
            </h4>
            <p className="font-body text-white text-sm leading-relaxed">
              Gesalem Group encompasses diverse business ventures and civic contributions across multiple industries in the Visayas region.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-body font-semibold text-white uppercase text-xs tracking-[0.1em] mb-4">
              Contact
            </h4>
            <p className="font-body text-white text-sm mb-2">
              Phone: +63 (32) XXX-XXXX
            </p>
            <p className="font-body text-white text-sm mb-2">
              Email: contact@gesalemgroup.ph
            </p>
            <p className="font-body text-white text-sm">
              Cebu, Philippines
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body font-semibold text-white uppercase text-xs tracking-[0.1em] mb-4">
              Connect
            </h4>
            <p className="font-body text-white text-sm">
              Reach out to learn more about our ventures and partnerships.
            </p>
          </div>
        </div>

        {/* Copyright and Bottom Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white border-opacity-20">
          <p className="font-body text-white text-sm mb-4 sm:mb-0">
            © 2026 Gesalem Group. All rights reserved.
          </p>
          <p className="font-body text-white text-sm">
            Cebu, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
