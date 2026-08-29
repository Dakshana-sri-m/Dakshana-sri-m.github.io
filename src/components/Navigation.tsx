import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'CERTIFICATE', href: '#certificate', id: 'certificate' },
  { label: 'PROTOSEM', href: '#protosem', id: 'protosem' },
  { label: 'SKILL', href: '#skill', id: 'skill' },
  { label: 'PROJECT', href: '#project', id: 'project' },
  { label: 'BUILD', href: '#build', id: 'build' },
  { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const Navigation: React.FC = () => {
  const { isEditMode, setIsEditMode, activeSection, setActiveSection, saveStatus, exportJSON, resetToDefaults } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F1EA]/85 backdrop-blur-md border-b border-[#141414]/10 shadow-[0_4px_24px_rgba(20,20,20,0.03)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Editorial Brand / Monogram */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex flex-col items-start focus:outline-none"
        >
          <span className="font-serif text-lg tracking-wider font-semibold text-[#151515] group-hover:text-[#1D4D43] transition-colors">
            DAKSHANA SRI M
          </span>
          <span className="font-mono text-[10px] tracking-widest text-[#6B6964] uppercase -mt-0.5">
            STUDENT → BUILDER → LEADER
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-[11px] font-mono tracking-widest uppercase">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-1 transition-all duration-200 ${
                  isActive
                    ? 'text-[#1D4D43] font-semibold'
                    : 'text-[#55524C] hover:text-[#151515]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1D4D43] transition-all rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Edit Mode Toggle & Controls */}
        <div className="hidden lg:flex items-center space-x-3">
          {isEditMode && (
            <div className="flex items-center space-x-2 text-[10px] font-mono text-[#6B6964] border-r border-[#141414]/15 pr-3">
              <span className="inline-flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ● {saveStatus}
              </span>
              <button
                onClick={exportJSON}
                title="Export entire portfolio data as JSON"
                className="hover:text-[#151515] px-1.5 py-0.5 rounded hover:bg-black/5 transition-colors"
              >
                EXPORT
              </button>
              <button
                onClick={resetToDefaults}
                title="Reset to initial data"
                className="hover:text-red-700 px-1.5 py-0.5 rounded hover:bg-red-50 transition-colors"
              >
                RESET
              </button>
            </div>
          )}

          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`inline-flex items-center space-x-1.5 text-[11px] font-mono tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all duration-200 ${
              isEditMode
                ? 'bg-[#1D4D43] text-[#FAF8F5] border-[#1D4D43] shadow-sm'
                : 'bg-white/70 hover:bg-white text-[#151515] border-[#141414]/20 hover:border-[#141414]/40'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isEditMode ? 'bg-emerald-300 animate-pulse' : 'bg-[#6B6964]'}`} />
            <span>{isEditMode ? 'EDITING ACTIVE' : 'EDIT MODE'}</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-2 xl:hidden">
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`text-[10px] font-mono px-2 py-1 rounded border uppercase ${
              isEditMode ? 'bg-[#1D4D43] text-white border-[#1D4D43]' : 'bg-white/80 border-[#141414]/20 text-[#151515]'
            }`}
          >
            {isEditMode ? 'EDIT ON' : 'EDIT'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#151515] hover:bg-black/5 rounded-lg transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F4F1EA]/95 backdrop-blur-xl border-b border-[#141414]/15 px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-widest text-[#151515]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`py-1.5 flex items-center justify-between ${
                  activeSection === item.id ? 'text-[#1D4D43] font-bold' : 'text-[#4A4742]'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="text-[#1D4D43]">●</span>}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#141414]/10 flex items-center justify-between text-xs font-mono">
            <span className="text-[#6B6964]">{saveStatus}</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={exportJSON}
                className="px-2 py-1 bg-white/80 border border-[#141414]/20 rounded text-[#151515]"
              >
                EXPORT JSON
              </button>
              <button
                onClick={resetToDefaults}
                className="px-2 py-1 bg-red-50 text-red-700 border border-red-200 rounded"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
