import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const About: React.FC = () => {
  const { data, isEditMode, updateAbout, updatePersonalInfluence, updatePersonality } = usePortfolio();
  const { about, personalInfluence, personality } = data;

  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isEditingFather, setIsEditingFather] = useState(false);
  const [isEditingPersonality, setIsEditingPersonality] = useState(false);

  // Draft state for Father story
  const [fatherDraft, setFatherDraft] = useState({
    title: personalInfluence.fatherStory.title,
    quote: personalInfluence.fatherStory.quote,
    paragraphs: [...personalInfluence.fatherStory.paragraphs],
    influenceAreas: [...personalInfluence.fatherStory.influenceAreas]
  });

  const handleSaveFatherStory = () => {
    updatePersonalInfluence({
      fatherStory: {
        ...personalInfluence.fatherStory,
        title: fatherDraft.title,
        quote: fatherDraft.quote,
        paragraphs: fatherDraft.paragraphs,
        influenceAreas: fatherDraft.influenceAreas
      }
    });
    setIsEditingFather(false);
  };

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[#141414]/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
              // SECTION 01
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight">
              {about.heading}
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[#55524C] max-w-lg mt-3 md:mt-0">
            "{about.leadStatement}"
          </p>
        </div>

        {/* Narrative & Institutional Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-20">
          {/* Main Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-[#2B2925] text-base sm:text-lg leading-relaxed">
            {about.narrative.map((p, idx) => (
              <p key={idx} className="font-sans font-normal">
                {p}
              </p>
            ))}

            {/* Academic Credential Card */}
            <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm border border-[#141414]/15 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between border-b border-[#141414]/10 pb-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-semibold">
                  ACADEMIC FOUNDATION
                </span>
                <span className="text-xs font-mono text-[#6B6964]">2024 — 2027</span>
              </div>
              <h3 className="font-serif text-2xl text-[#151515] mb-1 font-medium">{about.education.degree}</h3>
              <div className="font-sans text-sm text-[#47443E] mb-4">
                {about.education.institution} · <span className="text-[#6B6964]">{about.education.location}</span>
              </div>

              <div className="text-xs font-mono text-[#6B6964] uppercase tracking-wider mb-2">
                Core Domains of Inquiry:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {about.education.focus.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs font-sans text-[#2B2925]">
                    <span className="text-[#1D4D43] font-mono">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Evolution Pathway: STUDENT -> BUILDER -> LEADER */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#FAF8F5]/90 border border-[#141414]/15 p-6 sm:p-8 rounded-sm shadow-sm">
              <div className="text-xs font-mono uppercase tracking-widest text-[#6B6964] mb-6 flex items-center justify-between">
                <span>EVOLUTION PATHWAY</span>
                <span className="text-[#1D4D43]">ARC REF. 01</span>
              </div>

              <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#141414]/15">
                {about.journey.map((step, idx) => (
                  <div key={idx} className="relative pl-9 group">
                    {/* Stepper Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-[#141414]/20 flex items-center justify-center font-mono text-xs font-bold text-[#1D4D43] group-hover:border-[#1D4D43] transition-colors shadow-xs">
                      0{idx + 1}
                    </div>

                    <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase font-bold mb-0.5">
                      {step.stage}
                    </div>
                    <div className="font-serif text-base font-semibold text-[#151515] mb-1.5">
                      {step.subtitle}
                    </div>
                    <div className="font-sans text-xs sm:text-sm text-[#55524C] leading-relaxed">
                      {step.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interdisciplinary Intersection Pill Box */}
            <div className="mt-6 p-4 bg-white/50 border border-[#141414]/10 rounded-sm text-xs font-mono text-[#55524C]">
              <div className="text-[#1D4D43] font-semibold uppercase mb-1">INTERSECTIONAL CONVERGENCE</div>
              <div>Data Science × Venture Incubation × Applied Research × Empathetic Leadership</div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SUBSECTION: THE PEOPLE WHO SHAPED HOW I THINK (MY FATHER) */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-20 pt-16 border-t border-[#141414]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#141414]/10">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
                // PERSONAL INFLUENCE & ROOTS
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#151515]">
                {personalInfluence.sectionTitle}
              </h3>
            </div>
            <div className="flex items-center space-x-3 mt-3 md:mt-0">
              <span className="text-xs font-mono text-[#6B6964]">{personalInfluence.subtitle}</span>
              {isEditMode && (
                <button
                  onClick={() => {
                    setFatherDraft({
                      title: personalInfluence.fatherStory.title,
                      quote: personalInfluence.fatherStory.quote,
                      paragraphs: [...personalInfluence.fatherStory.paragraphs],
                      influenceAreas: [...personalInfluence.fatherStory.influenceAreas]
                    });
                    setIsEditingFather(true);
                  }}
                  className="px-3 py-1 bg-[#1D4D43] text-white text-xs font-mono rounded hover:bg-[#153831]"
                >
                  ✎ Edit Story & Influences
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Father Quote & Story Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-2 border-[#1D4D43] pl-6 py-2">
                <span className="font-mono text-xs text-[#1D4D43] tracking-wider uppercase block mb-1">
                  CORE INFLUENCE · {personalInfluence.fatherStory.title}
                </span>
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#151515] leading-snug">
                  "{personalInfluence.fatherStory.quote}"
                </blockquote>
              </div>

              <div className="space-y-4 text-base font-sans text-[#33302B] leading-relaxed">
                {personalInfluence.fatherStory.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Three Key Business / Mindset Pillars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono tracking-widest text-[#6B6964] uppercase mb-2">
                PRINCIPLES LEARNED FROM BUSINESS EXPOSURE:
              </div>

              {personalInfluence.fatherStory.influenceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/70 border border-[#141414]/15 rounded-sm hover:border-[#1D4D43]/40 transition-colors shadow-xs"
                >
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4D43]"></span>
                    <h4 className="font-serif font-semibold text-base text-[#151515]">{area.title}</h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#55524C] leading-normal">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SUBSECTION: HOW I TEND TO WORK (ENFJ PERSONALITY SPECTRUM) */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-20 pt-16 border-t border-[#141414]/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#141414]/10">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
                // COGNITIVE FRAMEWORK & WORKSTYLE
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#151515]">
                HOW I TEND TO WORK
              </h3>
            </div>
            <div className="mt-3 md:mt-0 font-mono text-xs text-[#6B6964]">
              16 PERSONALITIES PROFILE ·{' '}
              <span className="font-bold text-[#1D4D43]">{personality.mbtiCode} ({personality.roleName})</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Visual Spectrum Bars (Elegant, Not Progress Bars) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono tracking-widest text-[#6B6964] uppercase mb-3">
                COGNITIVE SPECTRUM BENCHMARKS:
              </div>

              {personality.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 bg-white/65 border border-[#141414]/10 rounded-sm">
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-[#6B6964] uppercase">{metric.trait}</span>
                    <span className="font-semibold text-[#1D4D43]">{metric.label}</span>
                  </div>

                  {/* Dual-spectrum axis */}
                  <div className="relative h-2 bg-[#E6E2D8] rounded-full overflow-hidden flex items-center">
                    {/* Indicator pointer */}
                    <div
                      className="absolute top-0 bottom-0 bg-[#1D4D43] rounded-full transition-all duration-500"
                      style={{
                        left: `${Math.min(metric.value, 100)}%`,
                        width: '8px',
                        transform: 'translateX(-50%)'
                      }}
                    />
                    <div
                      className="h-full bg-gradient-to-r from-[#1D4D43]/20 via-[#1D4D43]/60 to-[#1D4D43]"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[10px] font-mono text-[#7A7771] mt-1.5">
                    <span>{metric.spectrum[0]}</span>
                    <span>{metric.spectrum[1]}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tasteful Characteristics Cards */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-mono tracking-widest text-[#6B6964] uppercase mb-3">
                WORKING CHARACTERISTICS IN ACTION:
              </div>

              {personality.characteristics.map((trait, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white/60 border border-[#141414]/10 rounded-sm hover:bg-white/90 hover:border-[#1D4D43]/30 transition-all"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#1D4D43]">0{idx + 1}</span>
                    <span className="font-serif font-semibold text-sm text-[#151515] tracking-wide">
                      {trait.title}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#55524C] leading-relaxed pl-5">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Father Story Modal Editor */}
      {isEditingFather && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#FAF8F5] border border-[#141414]/20 max-w-2xl w-full p-6 rounded shadow-2xl max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex justify-between items-center pb-4 border-b border-[#141414]/10 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#151515]">Edit Father & Business Story</h3>
              <button
                onClick={() => setIsEditingFather(false)}
                className="text-[#6B6964] hover:text-[#151515] font-mono text-sm"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Section Title / Person</label>
                <input
                  type="text"
                  value={fatherDraft.title}
                  onChange={(e) => setFatherDraft({ ...fatherDraft, title: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Inspirational Quote</label>
                <textarea
                  rows={2}
                  value={fatherDraft.quote}
                  onChange={(e) => setFatherDraft({ ...fatherDraft, quote: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-serif italic text-sm"
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Story Paragraph 1</label>
                <textarea
                  rows={3}
                  value={fatherDraft.paragraphs[0] || ''}
                  onChange={(e) => {
                    const next = [...fatherDraft.paragraphs];
                    next[0] = e.target.value;
                    setFatherDraft({ ...fatherDraft, paragraphs: next });
                  }}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Story Paragraph 2</label>
                <textarea
                  rows={3}
                  value={fatherDraft.paragraphs[1] || ''}
                  onChange={(e) => {
                    const next = [...fatherDraft.paragraphs];
                    next[1] = e.target.value;
                    setFatherDraft({ ...fatherDraft, paragraphs: next });
                  }}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                />
              </div>

              <div className="pt-2">
                <label className="block text-[#6B6964] uppercase mb-2">Key Mindset & Business Learnings</label>
                {fatherDraft.influenceAreas.map((area, idx) => (
                  <div key={idx} className="p-3 bg-white border border-[#141414]/15 rounded mb-2 space-y-2">
                    <input
                      type="text"
                      value={area.title}
                      onChange={(e) => {
                        const next = [...fatherDraft.influenceAreas];
                        next[idx] = { ...next[idx], title: e.target.value };
                        setFatherDraft({ ...fatherDraft, influenceAreas: next });
                      }}
                      className="w-full p-1.5 border border-[#141414]/20 rounded font-semibold text-xs"
                      placeholder="Title (e.g. Practical Enterprise Instinct)"
                    />
                    <textarea
                      rows={2}
                      value={area.description}
                      onChange={(e) => {
                        const next = [...fatherDraft.influenceAreas];
                        next[idx] = { ...next[idx], description: e.target.value };
                        setFatherDraft({ ...fatherDraft, influenceAreas: next });
                      }}
                      className="w-full p-1.5 border border-[#141414]/20 rounded text-xs font-sans"
                      placeholder="Description of the influence..."
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#141414]/10 flex justify-end space-x-2">
              <button
                onClick={() => setIsEditingFather(false)}
                className="px-4 py-1.5 border border-[#141414]/20 rounded font-mono text-xs hover:bg-black/5"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveFatherStory}
                className="px-4 py-1.5 bg-[#1D4D43] text-white rounded font-mono text-xs hover:bg-[#153831]"
              >
                Save Story
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
