import { companies, organizations } from './data.js'

export default function App() {
  return (
    <div className="min-h-screen bg-color-off-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-site mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-color-blue-primary mb-2">
            Jonathan "Jonie" Gesalem
          </h1>
          <p className="text-lg text-color-ink-muted">
            Entrepreneur & Business Leader
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-site mx-auto px-6 py-16">
        {/* Companies Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-color-blue-primary mb-2">
            Companies
          </h2>
          <p className="text-color-ink-muted mb-10">
            Portfolio of business ventures and leadership roles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-32 bg-gray-100 rounded mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={company.logo}
                    alt={company.logoAlt}
                    className="h-full w-full object-contain p-4"
                    onError={(e) => {
                      if (!company.hideOnError) return
                      e.target.closest('[role="article"]').style.display = 'none'
                    }}
                  />
                </div>
                <h3 className="font-bold text-lg text-color-ink mb-1">
                  {company.name}
                </h3>
                <p className="text-sm text-color-ink-muted">{company.city}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizations Section */}
        <section>
          <h2 className="text-3xl font-bold text-color-blue-primary mb-2">
            Organizations & Service
          </h2>
          <p className="text-color-ink-muted mb-10">
            Community leadership and organizational roles
          </p>

          <div className="space-y-8">
            {organizations.map((org) => (
              <article key={org.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-3">
                  <span className="inline-block bg-color-gold text-white px-3 py-1 rounded text-sm font-semibold">
                    {org.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-color-ink mb-1">
                  {org.name}
                </h3>
                <p className="text-sm text-color-ink-muted mb-4">{org.detail}</p>
                <p className="text-color-ink leading-relaxed">{org.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-site mx-auto px-6 py-8">
          <p className="text-center text-color-ink-muted text-sm">
            © 2024 Jonathan Gesalem. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
