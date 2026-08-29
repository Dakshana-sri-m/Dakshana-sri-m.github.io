import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectCaseStudy } from '../types/portfolio';

export const ProjectSection: React.FC = () => {
  const { data, isEditMode } = usePortfolio();
  const { projects } = data;

  const [expandedProject, setExpandedProject] = useState<string | null>(projects[0]?.id || null);

  return (
    <section id="project" className="py-20 lg:py-28 border-b border-[#141414]/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
              // SECTION 05
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight">
              PROJECT
            </h2>
          </div>
          <p className="font-serif italic text-lg text-[#55524C] max-w-md mt-3 md:mt-0">
            "Deep case studies examining real-world systems, trade networks, and data architectures."
          </p>
        </div>

        {/* Editorial Case Studies Stack */}
        <div className="space-y-12">
          {projects.map((proj) => {
            const isExpanded = expandedProject === proj.id;

            return (
              <div
                key={proj.id}
                className="bg-[#FAF8F5]/90 border border-[#141414]/15 rounded-sm p-6 sm:p-10 transition-all duration-300 shadow-sm hover:border-[#1D4D43]/40"
              >
                {/* Project Header Banner */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#141414]/10 pb-6 mb-8 gap-4">
                  <div>
                    <div className="flex items-center space-x-3 text-xs font-mono text-[#6B6964] mb-2">
                      <span className="font-bold text-[#1D4D43]">CASE STUDY // {proj.projectNumber}</span>
                      <span>·</span>
                      <span>{proj.category}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#151515] leading-tight">
                      {proj.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#55524C] mt-2 max-w-3xl">
                      {proj.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : proj.id)}
                    className="self-start md:self-center px-4 py-2 bg-white border border-[#141414]/20 rounded text-xs font-mono tracking-wider uppercase text-[#151515] hover:bg-[#151515] hover:text-white transition-colors"
                  >
                    {isExpanded ? 'COLLAPSE CASE STUDY' : 'READ FULL CASE STUDY →'}
                  </button>
                </div>

                {/* Primary Overview Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  {/* The Problem */}
                  <div className="lg:col-span-6 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-bold block">
                      THE PROBLEM
                    </span>
                    <p className="font-sans text-sm sm:text-base text-[#2E2C28] leading-relaxed">
                      {proj.problem}
                    </p>
                  </div>

                  {/* The Idea */}
                  <div className="lg:col-span-6 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-bold block">
                      THE IDEA
                    </span>
                    <p className="font-sans text-sm sm:text-base text-[#2E2C28] leading-relaxed">
                      {proj.idea}
                    </p>
                  </div>
                </div>

                {/* Expanded Case Study Details */}
                {isExpanded && (
                  <div className="pt-6 border-t border-[#141414]/10 space-y-8 animate-fadeIn">
                    {/* The Approach */}
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-bold block mb-3">
                        THE APPROACH & METHODOLOGY
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {proj.approach.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3.5 bg-white border border-[#141414]/10 rounded text-xs font-sans text-[#33302B] flex items-start space-x-2"
                          >
                            <span className="text-[#1D4D43] font-mono font-bold">0{sIdx + 1}.</span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools & What I Learned */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-5 space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#6B6964] block font-semibold">
                          TOOLS & FRAMEWORKS
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tools.map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-mono px-3 py-1 bg-white border border-[#141414]/15 rounded text-[#151515]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-2 bg-white/60 p-4 rounded border border-[#141414]/10">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] block font-bold">
                          WHAT I LEARNED
                        </span>
                        <p className="font-sans text-xs sm:text-sm text-[#3A3833] leading-relaxed italic">
                          "{proj.whatILearned}"
                        </p>
                      </div>
                    </div>

                    {/* Status & Next Step */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#141414]/10 font-mono text-xs">
                      <div className="p-3 bg-white/40 border border-[#141414]/10 rounded">
                        <span className="text-[#6B6964] uppercase text-[10px] block mb-0.5">
                          CURRENT STATUS
                        </span>
                        <span className="text-[#151515] font-sans font-medium text-xs">{proj.currentStatus}</span>
                      </div>
                      <div className="p-3 bg-white/40 border border-[#141414]/10 rounded">
                        <span className="text-[#1D4D43] uppercase text-[10px] block mb-0.5 font-bold">
                          NEXT STEP
                        </span>
                        <span className="text-[#151515] font-sans text-xs">{proj.nextStep}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
