import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#141414]/15 bg-[#FAF8F5]/90 text-center font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#151515]">
          DAKSHANA SRI M
        </div>
        <div className="font-mono text-xs text-[#1D4D43] uppercase tracking-widest font-semibold">
          STUDENT → BUILDER → LEADER
        </div>
        <p className="font-serif italic text-xs sm:text-sm text-[#6B6964]">
          "Still building."
        </p>

        <div className="pt-6 border-t border-[#141414]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8C8880] max-w-2xl mx-auto">
          <span>COIMBATORE, TAMIL NADU · INDIA</span>
          <span>© {currentYear} DAKSHANA SRI M. LIVING ARCHIVE.</span>
        </div>
      </div>
    </footer>
  );
};
