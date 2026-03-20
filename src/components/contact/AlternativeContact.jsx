export default function AlternativeContact() {
  return (
    <section className="bg-color-surface-warm border-t border-[#E8E0D0] py-16">
      <div className="w-3/4 mx-auto px-6" data-animate>
        {/* Eyebrow label */}
        <div className="uppercase tracking-[0.15em] text-xs font-bold text-color-ink mb-8">
          Other Ways to Reach Us
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-1 sm:grid-cols-1">
          {/* Phone/Contact column */}
          <div>
            <h3 className="font-display font-semibold text-lg text-[#0D1F4E] mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <p className="font-body text-color-ink">
                <span className="text-color-ink-muted">Phone:</span>
                <br />
                +63 32 XXX XXXX
              </p>
              <p className="font-body text-color-ink">
                <span className="text-color-ink-muted">Mobile:</span>
                <br />
                +63 9XX XXX XXXX
              </p>
            </div>
          </div>

          {/* Online/Address column */}
          <div>
            <h3 className="font-display font-semibold text-lg text-[#0D1F4E] mb-4">
              Find Us Online
            </h3>
            <div className="space-y-3">
              <p className="font-body text-color-ink">
                <span className="text-color-ink-muted">Web:</span>
                <br />
                wcgroup
              </p>
              <p className="font-body text-color-ink">
                <span className="text-color-ink-muted">Address:</span>
                <br />
                Cebu, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
