'use client'

import { useState } from 'react'

import { site } from '@/lib/content/site'

export default function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const { footer } = site

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <footer className="border-t border-primary-foreground/10 bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-primary-foreground font-serif text-xl font-bold mb-4">Optimize Works</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">{footer.tagline}</p>
            <div className="mt-6 space-y-2">
              <p className="text-sm">
                <span className="font-semibold text-primary-foreground">Email:</span>{' '}
                <a
                  href={`mailto:${footer.email}`}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  {footer.email}
                </a>
              </p>
              <p className="text-sm text-primary-foreground/60">{footer.location}</p>
              <p className="text-sm">
                <a
                  href={footer.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {footer.servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                </a>
              </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                </a>
              </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footer.legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                </a>
              </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-12 mt-12">
          <div className="mb-8">
            <button
              type="button"
              onClick={() => toggleSection('trust')}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="text-primary-foreground font-semibold text-lg">Trust Center & Compliance</h4>
              <span className="text-primary-foreground/60">{expandedSection === 'trust' ? '−' : '+'}</span>
            </button>

            {expandedSection === 'trust' && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-primary-foreground font-semibold mb-3">Company Registration</h5>
                  <ul className="space-y-2 text-sm text-primary-foreground/60">
                    <li>
                      <span className="font-semibold">Company Name:</span> Optimize Works Ltd
                    </li>
                    <li>
                      <span className="font-semibold">Company Number:</span> 16593933
                    </li>
                    <li>
                      <span className="font-semibold">VAT Number:</span> GB 511 2637 29
                    </li>
                    <li>
                      <span className="font-semibold">Jurisdiction:</span> United Kingdom
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-primary-foreground font-semibold mb-3">Data Protection</h5>
                  <ul className="space-y-2 text-sm text-primary-foreground/60">
                    <li>
                      <span className="font-semibold">GDPR Compliant:</span> Yes
                    </li>
                    <li>
                      <span className="font-semibold">Data Protection Officer:</span> Available on request
                    </li>
                    <li>
                      <span className="font-semibold">Certification:</span> ISO 27001 Ready
                    </li>
                    <li>
                      <a
                        href="/privacy-policy"
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        View our Privacy & Data Protection Policy →
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 mt-8">
          <p className="text-sm text-primary-foreground/50 mb-2">
            © {new Date().getFullYear()} Optimize Works Ltd. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Optimize Works Ltd. is a limited company registered in England and Wales with registered number 16593933.
            VAT Registration Number: GB 511 2637 29.
          </p>
        </div>
      </div>
    </footer>
  )
}
