import ScrollToHash from '@/components/ScrollToHash'
import Header from '@/components/Header'
import HeroSection from '@/components/sections/HeroSection'
import ExecutiveSummary from '@/components/sections/ExecutiveSummary'
import SolutionsGallery from '@/components/sections/SolutionsGallery'
import AudienceSection from '@/components/sections/AudienceSection'
import ResultsSection from '@/components/sections/ResultsSection'
import CTASection from '@/components/sections/CTASection'
import GuaranteeSection from '@/components/sections/GuaranteeSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ExecutiveSummary />
        <SolutionsGallery />
        <AudienceSection />
        <ResultsSection />
        <CTASection />
        <GuaranteeSection />
        <Footer />
      </main>
    </>
  )
}
