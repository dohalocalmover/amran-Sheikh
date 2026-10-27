import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { MovingResourcesSection } from './components/MovingResourcesSection';
import { InteractiveMap } from './components/InteractiveMap';
import { StorageSection } from './components/StorageSection';
import { QuoteForm } from './components/QuoteForm';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LiveChatWidget } from './components/LiveChatWidget';
import { MobileStickyBar } from './components/MobileStickyBar';
import { StorageServicesPage } from './pages/StorageServicesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { useSEO } from './utils/seo';
import { LanguageProvider } from './context/LanguageContext';

// Handles automatic scrolling to hash anchors when transitioning between routes
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

interface HomePageProps {
  selectedService: string;
  selectedArea: string;
  onSelectService: (service: string) => void;
  onSelectArea: (area: string) => void;
}

function HomePage({
  selectedService,
  selectedArea,
  onSelectService,
  onSelectArea,
}: HomePageProps) {
  useSEO({
    title: 'Doha Local Movers & Packers | Reliable Relocation Services in Qatar',
    description: 'Premium movers and packers in Doha, Qatar. Professional home, villa, apartment, and office relocation, furniture handling, and secure storage.',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: '/hero-moving-truck.jpg',
  });

  return (
    <main className="flex-1">
      <Hero />
      <TrustSection />
      <ServicesSection onSelectService={onSelectService} />
      <WhyChooseUs />
      <HowItWorks />
      <MovingResourcesSection />
      <InteractiveMap onSelectAreaForQuote={onSelectArea} />
      <StorageSection />
      <QuoteForm initialService={selectedService} initialArea={selectedArea} />
      <ReviewsSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Home Moving');
  const [selectedArea, setSelectedArea] = useState<string>('The Pearl-Qatar');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  const handleSelectArea = (areaName: string) => {
    setSelectedArea(areaName);
  };

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollHandler />
        <div className="min-h-screen bg-slate-50 flex flex-col antialiased text-slate-800">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  selectedService={selectedService}
                  selectedArea={selectedArea}
                  onSelectService={handleSelectService}
                  onSelectArea={handleSelectArea}
                />
              }
            />
            <Route path="/storage-services" element={<StorageServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route
              path="*"
              element={
                <HomePage
                  selectedService={selectedService}
                  selectedArea={selectedArea}
                  onSelectService={handleSelectService}
                  onSelectArea={handleSelectArea}
                />
              }
            />
          </Routes>
          <Footer />
          <LiveChatWidget />
          <MobileStickyBar />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
