import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { BuildIdea, StageStatus } from '../types/portfolio';

const BUILD_CATEGORIES = ['BUILDING NOW', 'EXPLORING', 'PARKED'] as const;
const STAGE_OPTIONS: StageStatus[] = ['IDEA', 'EXPERIMENT', 'PROTOTYPE', 'TESTING', 'EXPLORING', 'PAUSED'];

export const BuildSection: React.FC = () => {
  const { data, isEditMode, addBuildIdea, updateBuildIdea, deleteBuildIdea } = usePortfolio();
  const { builds } = data;

  const [activeTab, setActiveTab] = useState<'BUILDING NOW' | 'EXPLORING' | 'PARKED'>('BUILDING NOW');
  const [isAddingModal, setIsAddingModal] = useState(false);
  const [editingIdea, setEditingIdea] = useState<BuildIdea | null>(null);

  const filteredBuilds = builds.filter((b) => b.category === activeTab);

  const getStageBadgeStyle = (stage: StageStatus) => {
    switch (stage) {
      case 'EXPERIMENT':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case 'PROTOTYPE':
        return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'TESTING':
        return 'bg-blue-50 text-blue-800 border-blue-300';
      case 'EXPLORING':
        return 'bg-purple-50 text-purple-800 border-purple-300';
      case 'PAUSED':
        return 'bg-stone-100 text-stone-700 border-stone-300';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-300';
    }
  };

  const handleOpenAdd = () => {
    const newIdea: BuildIdea = {
      id: `build-${Date.now()}`,
      title: '',
      category: activeTab,
      stage: 'IDEA',
      whyItMatters: '',
      whatImTrying: '',
      currentStageText: '',
      nextMove: '',
      tags: []
    };
    setEditingIdea(newIdea);
    setIsAddingModal(true);
  };

  const handleSaveIdea = () => {
    if (!editingIdea) return;
    const exists = builds.some((b) => b.id === editingIdea.id);
    if (exists) {
      updateBuildIdea(editingIdea.id, editingIdea);
    } else {
      addBuildIdea(editingIdea);
    }
    setIsAddingModal(false);
    setEditingIdea(null);
  };

  return (
    <section id="build" className="py-20 lg:py-28 border-b border-[#141414]/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
              // SECTION 06 · FOUNDER NOTEBOOK & WORKING LABORATORY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight">
              WHAT I'M BUILDING
            </h2>
          </div>
          <div className="flex items-center space-x-3 mt-3 md:mt-0">
            <span className="font-serif italic text-base sm:text-lg text-[#55524C]">
              "Active hypotheses and exploratory systems."
            </span>
            {isEditMode && (
              <button
                onClick={handleOpenAdd}
                className="px-3.5 py-1.5 bg-[#1D4D43] text-white text-xs font-mono rounded hover:bg-[#153831] shadow-xs flex items-center space-x-1"
              >
                <span>+ ADD IDEA</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Selector: BUILDING NOW / EXPLORING / PARKED */}
        <div className="flex items-center space-x-3 mb-10 pb-2 border-b border-[#141414]/10 font-mono text-xs uppercase tracking-wider">
          {BUILD_CATEGORIES.map((tab) => {
            const count = builds.filter((b) => b.category === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-3 border-b-2 transition-all flex items-center space-x-2 ${
                  isActive
                    ? 'border-[#1D4D43] text-[#1D4D43] font-bold'
                    : 'border-transparent text-[#6B6964] hover:text-[#151515]'
                }`}
              >
                <span>{tab}</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-black/5 rounded-full">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Founder Notebook Card Layout (Distinct Laboratory Vibe) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBuilds.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5]/95 border border-[#141414]/15 rounded-sm p-6 flex flex-col justify-between hover:border-[#1D4D43]/40 hover:shadow-sm transition-all relative"
            >
              <div>
                {/* Top Metatags */}
                <div className="flex items-center justify-between text-[10px] font-mono text-[#6B6964] uppercase pb-2 mb-3 border-b border-[#141414]/10">
                  <span>LOG REF. 0{idx + 1}</span>
                  <span className={`px-2 py-0.5 rounded border text-[9px] font-bold ${getStageBadgeStyle(item.stage)}`}>
                    STAGE: {item.stage}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#151515] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Why It Matters */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase text-[#1D4D43] font-bold block mb-1">
                    WHY IT MATTERS:
                  </span>
                  <p className="font-sans text-xs text-[#33302B] leading-relaxed">
                    {item.whyItMatters}
                  </p>
                </div>

                {/* What I'm Trying */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase text-[#6B6964] font-semibold block mb-1">
                    WHAT I'M TRYING:
                  </span>
                  <p className="font-sans text-xs text-[#4A4742] leading-relaxed">
                    {item.whatImTrying}
                  </p>
                </div>

                {/* Current Stage Text */}
                <div className="p-3 bg-white/70 border border-[#141414]/10 rounded text-[11px] font-sans text-[#33302B] mb-4">
                  <span className="font-mono text-[9px] uppercase text-[#7A7771] block mb-0.5">
                    CURRENT EXPERIMENTAL STAGE:
                  </span>
                  {item.currentStageText}
                </div>
              </div>

              {/* Next Move & Tags */}
              <div className="pt-3 border-t border-[#141414]/10">
                <div className="text-[11px] font-sans text-[#1D4D43] mb-3 flex items-start space-x-1.5">
                  <span className="font-mono text-[10px] font-bold uppercase shrink-0">NEXT MOVE:</span>
                  <span className="leading-snug">{item.nextMove}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-mono px-2 py-0.5 bg-white border border-[#141414]/10 rounded text-[#4A4742]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Edit Controls */}
                {isEditMode && (
                  <div className="mt-4 pt-2 border-t border-dashed border-[#141414]/20 flex justify-end space-x-2 text-[11px] font-mono">
                    <button
                      onClick={() => {
                        setEditingIdea({ ...item });
                        setIsAddingModal(true);
                      }}
                      className="text-emerald-800 hover:underline"
                    >
                      ✎ Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete idea "${item.title}"?`)) {
                          deleteBuildIdea(item.id);
                        }
                      }}
                      className="text-red-700 hover:underline"
                    >
                      ✕ Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add / Edit Idea Modal */}
      {isAddingModal && editingIdea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#FAF8F5] border border-[#141414]/30 max-w-2xl w-full p-6 rounded shadow-2xl max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex justify-between items-center pb-4 border-b border-[#141414]/15 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#151515]">
                {builds.some((b) => b.id === editingIdea.id) ? 'Edit Build Idea' : 'Add New Build Idea'}
              </h3>
              <button
                onClick={() => setIsAddingModal(false)}
                className="text-[#6B6964] hover:text-[#151515] font-mono text-sm"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Idea Title</label>
                <input
                  type="text"
                  value={editingIdea.title}
                  onChange={(e) => setEditingIdea({ ...editingIdea, title: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-sm"
                  placeholder="e.g. Cross-Border B2B Trade Margin Simulator"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Category</label>
                  <select
                    value={editingIdea.category}
                    onChange={(e) =>
                      setEditingIdea({
                        ...editingIdea,
                        category: e.target.value as 'BUILDING NOW' | 'EXPLORING' | 'PARKED'
                      })
                    }
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded"
                  >
                    {BUILD_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Stage</label>
                  <select
                    value={editingIdea.stage}
                    onChange={(e) =>
                      setEditingIdea({ ...editingIdea, stage: e.target.value as StageStatus })
                    }
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded"
                  >
                    {STAGE_OPTIONS.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Why It Matters</label>
                <textarea
                  rows={2}
                  value={editingIdea.whyItMatters}
                  onChange={(e) => setEditingIdea({ ...editingIdea, whyItMatters: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  placeholder="The underlying tension or opportunity..."
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">What I'm Trying</label>
                <textarea
                  rows={2}
                  value={editingIdea.whatImTrying}
                  onChange={(e) => setEditingIdea({ ...editingIdea, whatImTrying: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  placeholder="The hypothesis or technical system..."
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Current Experimental Stage</label>
                <input
                  type="text"
                  value={editingIdea.currentStageText}
                  onChange={(e) => setEditingIdea({ ...editingIdea, currentStageText: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  placeholder="e.g. Building rule heuristics..."
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Next Move</label>
                <input
                  type="text"
                  value={editingIdea.nextMove}
                  onChange={(e) => setEditingIdea({ ...editingIdea, nextMove: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  placeholder="e.g. Test against 5 sample datasets..."
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Tags (Comma-separated)</label>
                <input
                  type="text"
                  value={editingIdea.tags.join(', ')}
                  onChange={(e) =>
                    setEditingIdea({
                      ...editingIdea,
                      tags: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                    })
                  }
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-mono text-xs"
                  placeholder="Python, Tooling, Logistics"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#141414]/10 flex justify-end space-x-2">
              <button
                onClick={() => setIsAddingModal(false)}
                className="px-4 py-1.5 border border-[#141414]/20 rounded font-mono text-xs hover:bg-black/5"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveIdea}
                className="px-4 py-1.5 bg-[#1D4D43] text-white rounded font-mono text-xs hover:bg-[#153831]"
              >
                Save Idea
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
