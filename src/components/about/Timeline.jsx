export default function Timeline() {
  const milestones = [
    {
      year: '1986',
      title: 'First Dunkin\' Donuts',
      description: 'Opened the first Dunkin\' Donuts franchise at Fuente Osmeña, Cebu—launching the foundation of the Gesalem business empire.',
    },
    {
      year: '1990s',
      title: 'Expansion Across Cebu',
      description: 'Rapid expansion of Dunkin\' franchises throughout Cebu, establishing market presence and operational excellence across the region.',
    },
    {
      year: '2000',
      title: 'Jonies Sizzlers Founded',
      description: 'Launched Jonies Sizzlers + Roast, blending Filipino comfort food with international culinary influence.',
    },
    {
      year: '2012–2013',
      title: 'Rotary Club Presidency',
      description: 'Served as President of the Rotary Club of Cebu (District 3860), advancing community service and global goodwill.',
    },
    {
      year: '2019',
      title: 'Grand Taishan Construction',
      description: 'Established Grand Taishan Construction & Development Inc., diversifying into real estate and infrastructure development.',
    },
    {
      year: '2025',
      title: 'Yap Fraternity Golden 50th',
      description: 'Celebrated the Golden 50th Anniversary of the Yap Fraternity Cebu Inc., honoring five decades of cultural preservation and community service.',
    },
  ];

  return (
    <section className="bg-color-surface-warm border-t border-color-divider-subtle py-24">
      <div className="w-3/4 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-4">
            Our History
          </p>
          <h2 className="font-display font-semibold text-5xl text-[#0D1F4E] mb-6">
            The Gesalem Story
          </h2>
          <div className="w-16 h-1 bg-color-gold"></div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12 pl-8 md:pl-16">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-1 bg-color-gold"></div>

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative ml-8 md:ml-0"
              data-animate
            >
              {/* Dot/Node */}
              <div className="absolute -left-12 md:-left-[50px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-color-gold border-4 border-color-surface-warm"></div>

              {/* Content */}
              <div className="pt-1">
                <p className="font-display font-semibold text-2xl text-color-gold">
                  {milestone.year}
                </p>
                <h3 className="font-display font-semibold text-xl text-[#0D1F4E] mt-1 mb-2">
                  {milestone.title}
                </h3>
                <p className="font-body text-color-ink-muted leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
