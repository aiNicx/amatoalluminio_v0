import Header from '@/components/header'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import ToolsSection from '@/components/tools-section'
import TechnicalDocuments from '@/components/technical-documents'
import ProViews from '@/components/pro-views'
import TestingSection from '@/components/testing-section'
import MapSection from '@/components/map-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Navigation />
        <ToolsSection />
        <TechnicalDocuments />
        <ProViews />
        <TestingSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}

