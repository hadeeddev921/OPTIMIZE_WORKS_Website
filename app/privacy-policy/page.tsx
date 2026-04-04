import type { Metadata } from 'next'

import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'
import { privacyPage } from '@/lib/content/privacy'

export const metadata: Metadata = {
  title: `${privacyPage.title} | Optimize Works`,
  description: privacyPage.description,
  openGraph: {
    title: `${privacyPage.title} | Optimize Works`,
    description: privacyPage.description,
    type: 'website',
    locale: 'en_GB',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {privacyPage.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {privacyPage.lastUpdated}</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {privacyPage.intro.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          <div className="mt-12 space-y-12">
            {privacyPage.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                {'paragraphs' in section &&
                  section.paragraphs?.map((p) => (
                    <p key={p.slice(0, 48)} className="text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                {'bullets' in section && section.bullets && (
                  <ul className="list-disc pl-5 space-y-3 text-muted-foreground mb-4">
                    {section.bullets.map((b) => (
                      <li key={b.text.slice(0, 40)}>
                        <strong className="text-foreground">{b.strong}</strong> {b.text}
                      </li>
                    ))}
                  </ul>
                )}
                {'listItems' in section && section.listItems && (
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                    {section.listItems.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}
                {'closing' in section &&
                  section.closing?.map((p) => (
                    <p key={p.slice(0, 48)} className="text-muted-foreground leading-relaxed mt-4">
                      {p}
                    </p>
                  ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
