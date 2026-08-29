import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SkillCapability } from '../types/portfolio';

const CATEGORIES = ['ALL', 'COMPUTE', 'ANALYZE', 'VISUALIZE', 'BUILD', 'LEAD', 'CONNECT'] as const;

export const SkillSection: React.FC = () => {
  const { data } = usePortfolio();
  const { skills, projects } = data;

  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<SkillCapability | null>(null);

  const filteredSkills = activeCategory === 'ALL'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  const getProjectTitle = (projId: string) => {
    const proj = projects.find((p) => p.id === projId);
    return proj ? proj.title : projId;
  };

  return (
    <section id="skill" className="py-20 lg:py-28 border-b border-[#141414]/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
              // SECTION 04
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight">
              SKILL
            </h2>
          </div>
          <p className="font-mono text-xs text-[#6B6964] max-w-md mt-3 md:mt-0">
            NON-LINEAR CAPABILITY MATRIX · 6 CORE DOMAINS (NO ARBITRARY PERCENTAGE BARS)
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-mono tracking-wider uppercase transition-all border ${
                activeCategory === cat
                  ? 'bg-[#151515] text-white border-[#151515] shadow-xs'
                  : 'bg-white/70 border-[#141414]/15 text-[#4A4742] hover:bg-white hover:border-[#1D4D43]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Capability Map Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className={`cursor-pointer p-5 bg-[#FAF8F5]/90 border rounded-sm transition-all duration-200 flex flex-col justify-between group ${
                selectedSkill?.id === skill.id
                  ? 'border-[#1D4D43] ring-1 ring-[#1D4D43] bg-white shadow-sm'
                  : 'border-[#141414]/15 hover:border-[#1D4D43]/50 hover:bg-white hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-[#6B6964] uppercase mb-2">
                  <span className="text-[#1D4D43] font-semibold">{skill.category}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    INSPECT ↗
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#151515] mb-2 group-hover:text-[#1D4D43] transition-colors">
                  {skill.name}
                </h3>

                <p className="font-sans text-xs text-[#4E4B45] leading-relaxed mb-4 line-clamp-2">
                  {skill.description}
                </p>
              </div>

              {/* Linked Evidence Badges */}
              <div className="pt-3 border-t border-[#141414]/10 flex items-center justify-between text-[10px] font-mono text-[#7A7771]">
                <span>
                  {skill.relatedProjects.length > 0
                    ? `${skill.relatedProjects.length} PROJECT LINK(S)`
                    : 'CORE CAPABILITY'}
                </span>
                {skill.relatedProtoSem && <span className="text-[#1D4D43]">PROTOSEM EXP</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Detail Inspector Drawer */}
        {selectedSkill && (
          <div className="mt-10 p-6 sm:p-8 bg-white border-2 border-[#1D4D43]/30 rounded-sm shadow-md animate-fadeIn">
            <div className="flex items-start justify-between pb-4 mb-4 border-b border-[#141414]/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block mb-1">
                  CAPABILITY DEEP DIVE // {selectedSkill.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#151515]">
                  {selectedSkill.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-2.5 py-1 text-xs font-mono bg-black/5 hover:bg-black/10 rounded"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div>
                <span className="font-mono text-xs uppercase text-[#6B6964] block mb-1 font-semibold">
                  Practical Application & Context:
                </span>
                <p className="font-sans text-[#2E2C28] leading-relaxed mb-4">
                  {selectedSkill.context}
                </p>
                <p className="font-sans text-[#55524C] leading-relaxed">
                  {selectedSkill.description}
                </p>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {selectedSkill.relatedProjects.length > 0 && (
                  <div className="p-4 bg-[#FAF8F5] border border-[#141414]/10 rounded">
                    <span className="text-[#1D4D43] font-bold block mb-2">
                      LINKED PROJECTS & CASE STUDIES:
                    </span>
                    {selectedSkill.relatedProjects.map((pId) => (
                      <a
                        key={pId}
                        href="#project"
                        className="block text-[#151515] hover:text-[#1D4D43] hover:underline mb-1"
                      >
                        → {getProjectTitle(pId)}
                      </a>
                    ))}
                  </div>
                )}

                {selectedSkill.relatedProtoSem && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-900">
                    <span className="font-bold block mb-1">PROTOSEM EXPERIENCE:</span>
                    <div>Applied during {selectedSkill.relatedProtoSem} sprints and workshops.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
