import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { LightShader } from './components/LightShader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CertificateSection } from './components/CertificateSection';
import { ProtoSemSection } from './components/ProtoSemSection';
import { SkillSection } from './components/SkillSection';
import { ProjectSection } from './components/ProjectSection';
import { BuildSection } from './components/BuildSection';
import { AchievementSection } from './components/AchievementSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen bg-[#F4F1EA] text-[#151515] selection:bg-[#1D4D43] selection:text-white font-sans antialiased overflow-x-hidden">
        {/* Subtle Canvas Ambient Light Shader */}
        <LightShader />

        {/* Sticky Desktop & Responsive Mobile Navigation */}
        <Navigation />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <CertificateSection />
          <ProtoSemSection />
          <SkillSection />
          <ProjectSection />
          <BuildSection />
          <AchievementSection />
          <ContactSection />
        </main>

        {/* Minimal Editorial Footer */}
        <Footer />
      </div>
    </PortfolioProvider>
  );
};
