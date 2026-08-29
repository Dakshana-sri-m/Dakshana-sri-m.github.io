import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero: React.FC = () => {
  const { data, isEditMode, updateProfile } = usePortfolio();
  const { profile } = data;
  const [isEditingModal, setIsEditingModal] = useState(false);

  // Local draft state for quick modal editing
  const [formData, setFormData] = useState({ ...profile });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditingModal(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center border-b border-[#141414]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Edit Button in Edit Mode */}
        {isEditMode && (
          <div className="mb-6 flex items-center justify-between bg-emerald-50/90 border border-emerald-300/80 p-3 rounded-lg text-xs font-mono text-emerald-900">
            <span>✎ HERO SECTION (EDIT MODE ACTIVE)</span>
            <button
              onClick={() => {
                setFormData({ ...profile });
                setIsEditingModal(true);
              }}
              className="bg-[#1D4D43] text-white px-3 py-1 rounded text-xs hover:bg-[#153831] transition-colors"
            >
              Edit Hero Details
            </button>
          </div>
        )}

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typography & Narrative Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Monospace Metadata Tag */}
            <div className="flex items-center space-x-3 text-xs font-mono tracking-widest text-[#6B6964] uppercase">
              <span className="w-6 h-[1px] bg-[#1D4D43]"></span>
              <span className="text-[#1D4D43] font-semibold">{profile.identity}</span>
              <span>·</span>
              <span>COIMBATORE, INDIA</span>
            </div>

            {/* Large Serif Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#151515] tracking-tight leading-[1.1]">
                {profile.name}
              </h1>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#3A3833] max-w-2xl leading-snug font-light">
                "{profile.statement}"
              </p>
            </div>

            {/* Secondary Positioning Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.positioning.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 bg-white/75 border border-[#141414]/15 rounded text-[#2E2C28] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Live Status Matrix Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 font-mono text-xs">
              <div className="p-3.5 bg-white/60 backdrop-blur-sm border border-[#141414]/10 rounded-sm hover:border-[#1D4D43]/40 transition-colors">
                <div className="text-[10px] text-[#7A7771] tracking-widest uppercase mb-1 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span>CURRENTLY</span>
                </div>
                <div className="font-sans font-medium text-[#151515] text-sm">{profile.currently}</div>
              </div>

              <div className="p-3.5 bg-white/60 backdrop-blur-sm border border-[#141414]/10 rounded-sm hover:border-[#1D4D43]/40 transition-colors">
                <div className="text-[10px] text-[#7A7771] tracking-widest uppercase mb-1">LEARNING</div>
                <div className="font-sans font-medium text-[#151515] text-sm">{profile.learning}</div>
              </div>

              <div className="p-3.5 bg-white/60 backdrop-blur-sm border border-[#141414]/10 rounded-sm hover:border-[#1D4D43]/40 transition-colors">
                <div className="text-[10px] text-[#7A7771] tracking-widest uppercase mb-1">EXPLORING</div>
                <div className="font-sans font-medium text-[#151515] text-sm">{profile.exploring}</div>
              </div>

              <div className="p-3.5 bg-white/60 backdrop-blur-sm border border-[#141414]/10 rounded-sm hover:border-[#1D4D43]/40 transition-colors">
                <div className="text-[10px] text-[#7A7771] tracking-widest uppercase mb-1">PREPARING</div>
                <div className="font-sans font-medium text-[#151515] text-sm">{profile.preparing}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('project')}
                className="px-5 py-2.5 bg-[#151515] text-[#FAF8F5] text-xs font-mono tracking-widest uppercase hover:bg-[#1D4D43] transition-all duration-200 shadow-sm rounded-sm"
              >
                EXPLORE MY WORK
              </button>
              <button
                onClick={() => scrollTo('protosem')}
                className="px-5 py-2.5 bg-white/80 border border-[#141414]/20 text-[#151515] text-xs font-mono tracking-widest uppercase hover:border-[#1D4D43] hover:text-[#1D4D43] transition-all duration-200 rounded-sm"
              >
                SEE PROTOSEM
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-4 py-2.5 text-[#55524C] hover:text-[#151515] text-xs font-mono tracking-widest uppercase transition-colors"
              >
                LET'S CONNECT →
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Treatment */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md group">
              {/* Asymmetric Offset Background Accent Box */}
              <div className="absolute -inset-2 lg:-inset-3 bg-[#E8E4D9]/80 rounded-sm -rotate-1 group-hover:rotate-0 transition-transform duration-500 -z-10 border border-[#141414]/10" />

              {/* Main Portrait Frame */}
              <div className="relative overflow-hidden rounded-sm border border-[#141414]/20 bg-[#FAF8F5] shadow-[0_12px_32px_rgba(20,20,20,0.08)]">
                <img
                  src={profile.portraitImage}
                  alt={profile.name}
                  className="w-full h-auto max-h-[520px] object-cover object-top filter grayscale-[12%] contrast-[102%] group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Subtle Monospace Image Metadata Stamp */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-end justify-between text-[10px] font-mono">
                  <div>
                    <span className="block font-semibold">DAKSHANA SRI M</span>
                    <span className="opacity-80 text-[9px]">Data Science · ProtoSem Fellow</span>
                  </div>
                  <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded text-[9px]">
                    ARCHIVE 2026
                  </span>
                </div>
              </div>

              {/* Editorial Caption Tag Below */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#6B6964] px-1">
                <span>PORTRAIT // ARCHIVE REF. 01</span>
                <span>KCLAS, COIMBATORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Edit Modal */}
      {isEditingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#FAF8F5] border border-[#141414]/20 max-w-2xl w-full p-6 rounded shadow-2xl max-h-[90vh] overflow-y-auto font-sans">
            <div className="flex justify-between items-center pb-4 border-b border-[#141414]/10 mb-4">
              <h3 className="font-serif text-xl font-bold text-[#151515]">Edit Hero Profile Details</h3>
              <button
                onClick={() => setIsEditingModal(false)}
                className="text-[#6B6964] hover:text-[#151515] font-mono text-sm"
              >
                ✕ CLOSE
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-sm"
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Main Statement / Philosophy</label>
                <textarea
                  rows={2}
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-serif italic text-sm"
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Identity Tag</label>
                <input
                  type="text"
                  value={formData.identity}
                  onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-[#6B6964] uppercase mb-1">Portrait Image URL / Path</label>
                <input
                  type="text"
                  value={formData.portraitImage}
                  onChange={(e) => setFormData({ ...formData, portraitImage: e.target.value })}
                  className="w-full p-2 bg-white border border-[#141414]/20 rounded font-mono text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Currently</label>
                  <input
                    type="text"
                    value={formData.currently}
                    onChange={(e) => setFormData({ ...formData, currently: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Learning</label>
                  <input
                    type="text"
                    value={formData.learning}
                    onChange={(e) => setFormData({ ...formData, learning: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Exploring</label>
                  <input
                    type="text"
                    value={formData.exploring}
                    onChange={(e) => setFormData({ ...formData, exploring: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[#6B6964] uppercase mb-1">Preparing</label>
                  <input
                    type="text"
                    value={formData.preparing}
                    onChange={(e) => setFormData({ ...formData, preparing: e.target.value })}
                    className="w-full p-2 bg-white border border-[#141414]/20 rounded font-sans text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#141414]/10 flex justify-end space-x-2">
              <button
                onClick={() => setIsEditingModal(false)}
                className="px-4 py-1.5 border border-[#141414]/20 rounded font-mono text-xs hover:bg-black/5"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-1.5 bg-[#1D4D43] text-white rounded font-mono text-xs hover:bg-[#153831]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
