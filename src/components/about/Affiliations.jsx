import { organizations } from '../../data';

export default function Affiliations() {
  return (
    <section className="bg-color-off-white border-t border-color-divider-subtle py-24">
      <div className="w-3/4 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-4">
            Service & Leadership
          </p>
          <h2 className="font-display font-semibold text-5xl text-[#0D1F4E] mb-6">
            Organizations
          </h2>
          <div className="w-16 h-1 bg-color-gold"></div>
        </div>

        {/* Grid of Organization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="bg-color-surface border border-color-divider-subtle p-8"
              data-animate
            >
              {/* Badge */}
              <div className="inline-block bg-[#0D1F4E] text-color-gold px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
                {org.badge}
              </div>

              {/* Organization Name */}
              <h3 className="font-display font-semibold text-2xl text-[#0D1F4E] mb-2">
                {org.name}
              </h3>

              {/* Detail Line */}
              <p className="font-body text-xs uppercase tracking-[0.1em] text-color-ink-muted mb-4">
                {org.detail}
              </p>

              {/* Description */}
              <p className="font-body text-color-ink-secondary leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
