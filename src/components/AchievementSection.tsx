import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { AchievementItem } from '../types/portfolio';

export const AchievementSection: React.FC = () => {
  const { data, isEditMode, addAchievement, updateAchievement, deleteAchievement } = usePortfolio();
  const { achievements, leadership } = data;

  const [selectedPaper, setSelectedPaper] = useState<AchievementItem['paperDetails'] | null>(null);
  const [isPlayingWaveform, setIsPlayingWaveform] = useState(false);
  const [activeTab, setActiveTab] = useState<'ACHIEVEMENTS' | 'LEADERSHIP'>('ACHIEVEMENTS');
  const [isAddingModal, setIsAddingModal] = useState(false);
  const [editingAch, setEditingAch] = useState<AchievementItem | null>(null);

  const handleOpenAdd = () => {
    const newAch: AchievementItem = {
      id: `ach-${Date.now()}`,
      title: '',
      category: 'HONOR',
      awardedDate: '',
      awardingBody: '',
      recognition: ''
    };
    setEditingAch(newAch);
    setIsAddingModal(true);
  };

  const handleSaveAch = () => {
    if (!editingAch) return;
    const exists = achievements.some((a) => a.id === editingAch.id);
    if (exists) {
      updateAchievement(editingAch.id, editingAch);
    } else {
      addAchievement(editingAch);
    }
    setIsAddingModal(false);
    setEditingAch(null);
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 border-b border-[#141414]/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
              // SECTION 07
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight">
              ACHIEVEMENTS & LEADERSHIP
            </h2>
          </div>
          <div className="flex items-center space-x-3 mt-3 md:mt-0">
            {/* Tab switch */}
            <div className="flex bg-white/70 border border-[#141414]/15 rounded p-1 font-mono text-xs">
              <button
                onClick={() => setActiveTab('ACHIEVEMENTS')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'ACHIEVEMENTS'
                    ? 'bg-[#151515] text-white font-semibold'
                    : 'text-[#55524C] hover:text-[#151515]'
                }`}
              >
                ACHIEVEMENTS ({achievements.length})
              </button>
              <button
                onClick={() => setActiveTab('LEADERSHIP')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'LEADERSHIP'
                    ? 'bg-[#151515] text-white font-semibold'
                    : 'text-[#55524C] hover:text-[#151515]'
                }`}
              >
                LEADERSHIP ({leadership.length})
              </button>
            </div>

            {isEditMode && activeTab === 'ACHIEVEMENTS' && (
              <button
                onClick={handleOpenAdd}
                className="px-3.5 py-1.5 bg-[#1D4D43] text-white text-xs font-mono rounded hover:bg-[#153831] shadow-xs"
              >
                + ADD
              </button>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: ACADEMIC & RESEARCH ACHIEVEMENTS */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'ACHIEVEMENTS' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => (
              <div
                key={item.id}
                className="bg-[#FAF8F5]/90 border border-[#141414]/15 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-[#1D4D43]/40 shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#6B6964] pb-3 mb-4 border-b border-[#141414]/10">
                    <span className="text-[#1D4D43] font-semibold">{item.category}</span>
                    <span>{item.awardedDate}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#151515] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-[#55524C] uppercase tracking-wider mb-4">
                    {item.awardingBody}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#33302B] leading-relaxed mb-6">
                    {item.recognition}
                  </p>

                  {/* Research Paper Specifics */}
                  {item.paperDetails && (
                    <div className="p-4 bg-white/80 rounded border border-[#141414]/10 mb-6 space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#1D4D43] font-bold">
                        CONFERENCE PROCEEDINGS
                      </div>
                      <div className="font-serif text-sm font-semibold text-[#151515]">
                        "{item.paperDetails.paperTitle}"
                      </div>
                      <div className="font-sans text-xs text-[#6B6964]">
                        {item.paperDetails.organizers}
                      </div>
                    </div>
                  )}

                  {/* Signatories */}
                  {item.signatories && item.signatories.length > 0 && (
                    <div className="text-[11px] font-sans text-[#6B6964] mb-4 bg-white/50 p-2.5 rounded border border-[#141414]/10">
                      <span className="font-mono text-[10px] uppercase text-[#7A7771] block mb-0.5">
                        Conferred By / Signatories:
                      </span>
                      {item.signatories.join(' · ')}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#141414]/10 flex flex-wrap items-center gap-2">
                  {item.paperDetails ? (
                    <>
                      <button
                        onClick={() => setSelectedPaper(item.paperDetails)}
                        className="px-3.5 py-1.5 bg-[#151515] text-white text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-[#1D4D43] transition-colors"
                      >
                        VIEW ABSTRACT
                      </button>

                      <button
                        onClick={() => setSelectedPaper(item.paperDetails)}
                        className="px-3.5 py-1.5 bg-white border border-[#141414]/20 text-[#151515] text-xs font-mono uppercase tracking-wider rounded-sm hover:border-[#1D4D43] transition-colors"
                      >
                        VIEW PRESENTATION
                      </button>

                      <button
                        onClick={() => setSelectedPaper(item.paperDetails)}
                        className="px-3.5 py-1.5 text-[#6B6964] hover:text-[#151515] text-xs font-mono uppercase tracking-wider"
                      >
                        VIEW PAPER →
                      </button>
                    </>
                  ) : (
                    <div className="text-[10px] font-mono text-[#1D4D43] font-semibold">
                      VERIFIED MERITORIOUS RECORD · ACADEMIC YEAR 2025–2026
                    </div>
                  )}

                  {/* Edit Controls */}
                  {isEditMode && (
                    <div className="w-full mt-3 pt-2 border-t border-dashed border-[#141414]/20 flex justify-end space-x-2 text-[11px] font-mono">
                      <button
                        onClick={() => {
                          setEditingAch({ ...item });
                          setIsAddingModal(true);
                        }}
                        className="text-emerald-800 hover:underline"
                      >
                        ✎ Edit
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete achievement "${item.title}"?`)) {
                            deleteAchievement(item.id);
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
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: LEADERSHIP ROLES & ECOSYSTEM IMPACT */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'LEADERSHIP' && (
          <div className="space-y-8 animate-fadeIn">
            {leadership.map((lead) => (
              <div
                key={lead.id}
                className="bg-[#FAF8F5]/90 border border-[#141414]/15 rounded-sm p-6 sm:p-8 hover:border-[#1D4D43]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#141414]/10 pb-4 mb-5 gap-2">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-bold block mb-1">
                      {lead.organization}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#151515]">
                      {lead.role}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#6B6964] px-2.5 py-1 bg-white border border-[#141414]/10 rounded self-start md:self-auto">
                    {lead.period}
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#33302B] leading-relaxed mb-6">
                  {lead.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono uppercase text-[#6B6964] font-semibold block mb-2">
                    Key Executive Initiatives:
                  </span>
                  {lead.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 bg-white border border-[#141414]/10 rounded text-xs sm:text-sm font-sans text-[#2B2925] flex items-start space-x-2"
                    >
                      <span className="text-[#1D4D43] font-mono font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Audio Waveform for Founder Podcast Series */}
                {lead.hasAudioWaveform && (
                  <div className="p-4 sm:p-5 bg-white border border-[#1D4D43]/20 rounded-sm mt-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6B6964] mb-3">
                      <span className="text-[#1D4D43] font-bold uppercase flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#1D4D43] animate-pulse"></span>
                        <span>{lead.audioTitle}</span>
                      </span>
                      <button
                        onClick={() => setIsPlayingWaveform(!isPlayingWaveform)}
                        className="px-2.5 py-1 bg-black/5 hover:bg-black/10 rounded uppercase text-[10px] text-[#151515] transition-colors"
                      >
                        {isPlayingWaveform ? 'PAUSE WAVEFORM' : 'TEST WAVEFORM'}
                      </button>
                    </div>

                    {/* Interactive Animated Waveform Bars */}
                    <div className="flex items-center justify-between h-10 gap-1 px-2 bg-[#FAF8F5] rounded border border-[#141414]/10 overflow-hidden">
                      {Array.from({ length: 48 }).map((_, bIdx) => {
                        const baseHeight = ((bIdx % 7) + 2) * 12;
                        return (
                          <div
                            key={bIdx}
                            className={`w-1 bg-[#1D4D43] rounded-full transition-all duration-300 ${
                              isPlayingWaveform ? 'animate-pulse' : 'opacity-70'
                            }`}
                            style={{
                              height: isPlayingWaveform
                                ? `${Math.max(15, (baseHeight * (1 + Math.sin(bIdx + Date.now() * 0.001))) % 100)}%`
                                : `${baseHeight}%`
                            }}
                          />
                        );
                      })}
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-[#8C8880] mt-2">
                      <span>00:00</span>
                      <span>INTERACTIVE AUDIO ARCHIVE (EPISODES DISPATCHED)</span>
                      <span>24:18</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Conference Presentation Abstract Reader Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#FAF8F5] border border-[#141414]/30 max-w-3xl w-full p-6 sm:p-8 rounded shadow-2xl max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex justify-between items-start pb-4 border-b border-[#141414]/15 mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block mb-1">
                  PEER-REVIEWED RESEARCH DISPATCH // ICCSAM 2026
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#151515]">
                  {selectedPaper.paperTitle}
                </h3>
                <span className="text-xs font-mono text-[#6B6964] block mt-1">
                  {selectedPaper.conference} · {selectedPaper.presentationDate}
                </span>
              </div>
              <button
                onClick={() => setSelectedPaper(null)}
                className="px-3 py-1 font-mono text-xs bg-black/5 hover:bg-black/10 rounded"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="p-6 bg-white border border-[#141414]/15 rounded mb-6 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#1D4D43] font-bold block mb-2">
                  ABSTRACT & METHODOLOGICAL OVERVIEW:
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#2E2C28] leading-relaxed">
                  {selectedPaper.abstractText}
                </p>
              </div>

              <div className="pt-4 border-t border-[#141414]/10 text-xs font-mono text-[#6B6964]">
                <span className="block font-semibold uppercase mb-1">Affiliations & Organizers:</span>
                <div>{selectedPaper.organizers}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#6B6964]">
                Slide Deck & Presentation Session Archive
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => alert('Research presentation slides are archived with the conference committee.')}
                  className="px-4 py-2 bg-[#1D4D43] text-white rounded hover:bg-[#153831] transition-colors"
                >
                  DOWNLOAD PRESENTATION SLIDES
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Achievement Modal */}
      {isAddingModal && editingAch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#FAF8F5] border border-[#141414]/30 max-w-2xl w-full p-6 rounded shadow-2xl max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex justify-between items-center pb-4 border-b border-[#141414]/15 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#151515]">
                {achievements.some((a) => a.id === editingAch.id) ? 'Edit Achievement' : 'Add New Achievement'}
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
                <label className="block text-[#6B6964] uppercase mb-1">Title</label>
                <input
                  type="text"
                  value={editingAch.title}
                  onChange={(e) => setEditingAch({ ...editingAch, title: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-sm"
                  placeholder="e.g. Mahatma Gandhi Merit Scholarship"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Awarding Body</label>
                  <input
                    type="text"
                    value={editingAch.awardingBody}
                    onChange={(e) => setEditingAch({ ...editingAch, awardingBody: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                    placeholder="e.g. Kumaraguru Institutions / KCLAS"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Date</label>
                  <input
                    type="text"
                    value={editingAch.awardedDate}
                    onChange={(e) => setEditingAch({ ...editingAch, awardedDate: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                    placeholder="e.g. March 26, 2026"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Recognition Text / Citation</label>
                <textarea
                  rows={3}
                  value={editingAch.recognition}
                  onChange={(e) => setEditingAch({ ...editingAch, recognition: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  placeholder="Citation details..."
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
                onClick={handleSaveAch}
                className="px-4 py-1.5 bg-[#1D4D43] text-white rounded font-mono text-xs hover:bg-[#153831]"
              >
                Save Achievement
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
