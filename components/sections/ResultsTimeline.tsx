'use client'

import ScrollReveal from '@/components/ScrollReveal'

export default function ResultsTimeline() {
  const timeline = [
    {
      phase: 'Week 1-2',
      title: 'Operational Assessment',
      description: 'Deep dive into your current operations. We identify inefficiencies, pain points, and quick wins.',
      metric: 'Baseline established',
    },
    {
      phase: 'Week 3-4',
      title: 'Strategy & Planning',
      description: 'Develop a customized optimization roadmap with clear milestones and measurable targets.',
      metric: 'Plan approved',
    },
    {
      phase: 'Week 5-8',
      title: 'Implementation',
      description: 'Execute the plan with our support. Automation, workflow redesign, and process optimization.',
      metric: 'Changes deployed',
    },
    {
      phase: 'Week 9-12',
      title: 'Measurement & Refinement',
      description: 'Track results, fine-tune processes, and ensure we&apos;ve achieved your target ROI.',
      metric: 'Results validated',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            90-Day Success Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven roadmap from assessment to measurable results, guaranteed
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative">
              {/* Timeline connector */}
              {i < timeline.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-border -z-10"></div>
              )}

              {/* Card */}
              <div className="bg-white rounded-lg border-2 border-border p-6 h-full hover:border-primary hover:shadow-lg transition-all duration-300">
                {/* Phase label */}
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full mb-4">
                  {item.phase}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Metric */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground font-semibold">OUTCOME</p>
                  <p className="text-foreground font-semibold mt-1">{item.metric}</p>
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
