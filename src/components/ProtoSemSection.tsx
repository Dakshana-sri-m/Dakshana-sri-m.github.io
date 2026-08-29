import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProtoSemWeek, DaySchedule } from '../types/portfolio';

const PROMPT_OPTIONS = [
  'WHAT ACTUALLY HAPPENED?',
  'WHAT DID I NOTICE?',
  'WHAT DID I CONTRIBUTE?',
  'WHAT SURPRISED ME?',
  'WHAT DID I LEARN?',
  'WHAT WOULD I DO DIFFERENTLY?',
  'HOW DID THIS CHANGE MY THINKING?'
];

export const ProtoSemSection: React.FC = () => {
  const { data, isEditMode, addProtoSemWeek, updateProtoSemWeek, addDayReflection } = usePortfolio();
  const { protosem } = data;

  const [selectedWeekNum, setSelectedWeekNum] = useState<number>(0);
  const [selectedDayNum, setSelectedDayNum] = useState<number>(1);
  const [isAddingReflection, setIsAddingReflection] = useState(false);
  const [newPrompt, setNewPrompt] = useState(PROMPT_OPTIONS[0]);
  const [newAnswer, setNewAnswer] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; caption: string; context: string } | null>(null);

  const currentWeek = protosem.weeks.find((w) => w.weekNumber === selectedWeekNum) || protosem.weeks[0];
  const currentDay = currentWeek?.days?.find((d) => d.dayNumber === selectedDayNum) || currentWeek?.days?.[0];

  const handleSaveReflection = () => {
    if (!newAnswer.trim()) return;
    addDayReflection(selectedWeekNum, selectedDayNum, newPrompt, newAnswer);
    setNewAnswer('');
    setIsAddingReflection(false);
  };

  const handleAddNewWeek = () => {
    const nextWeekNum = protosem.weeks.length;
    const newWeek: ProtoSemWeek = {
      weekNumber: nextWeekNum,
      title: `Week ${nextWeekNum}: Concept Validation & Development`,
      status: 'UPCOMING',
      theme: 'EXPLORE · DEVELOP · TEST',
      overview: 'Future sprint iteration in the 20-week ProtoSem incubation program.',
      days: [
        {
          dayNumber: 1,
          title: 'Sprint Kickoff & Objective Setting',
          theme: 'ALIGNMENT',
          overview: 'Setting measurable sprint milestones and allocating development tasks.',
          highlights: ['Sprint backlog grooming', 'Hypothesis definition'],
          reflections: []
        }
      ]
    };
    addProtoSemWeek(newWeek);
    setSelectedWeekNum(nextWeekNum);
    setSelectedDayNum(1);
  };

  return (
    <section id="protosem" className="py-20 lg:py-28 border-b border-[#141414]/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#141414]/10">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#1D4D43] uppercase mb-1 font-semibold">
              // SECTION 03 · THE FLAGSHIP INCUBATOR JOURNEY
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] tracking-tight">
              {protosem.title}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-3 md:mt-0">
            <span className="font-serif italic text-lg sm:text-xl text-[#3A3833]">
              {protosem.subtitle}
            </span>
            {isEditMode && (
              <button
                onClick={handleAddNewWeek}
                className="px-3 py-1 bg-[#1D4D43] text-white text-xs font-mono rounded hover:bg-[#153831] shadow-xs"
              >
                + ADD WEEK
              </button>
            )}
          </div>
        </div>

        {/* 20-Week Horizontal Timeline Navigator */}
        <div className="mb-14 pb-4 overflow-x-auto scrollbar-thin">
          <div className="flex items-center space-x-2 min-w-max pb-2">
            {Array.from({ length: protosem.totalWeeks }).map((_, idx) => {
              const weekData = protosem.weeks.find((w) => w.weekNumber === idx);
              const isCompleted = idx < protosem.currentCompletedWeeks;
              const isSelected = selectedWeekNum === idx;
              const isCurrent = idx === 1;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedWeekNum(idx);
                    setSelectedDayNum(1);
                  }}
                  className={`px-3.5 py-2 rounded-sm text-xs font-mono transition-all duration-200 flex items-center space-x-2 border ${
                    isSelected
                      ? 'bg-[#151515] text-white border-[#151515] shadow-sm'
                      : isCompleted
                      ? 'bg-white/80 border-[#1D4D43]/40 text-[#1D4D43] hover:bg-white'
                      : 'bg-white/40 border-[#141414]/10 text-[#8C8880] hover:bg-white/70'
                  }`}
                >
                  <span className="font-bold">WEEK {idx < 10 ? `0${idx}` : idx}</span>
                  <span className="text-[10px]">
                    {isCompleted ? '✓' : isCurrent ? '●' : '○'}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[#7A7771] pt-1 px-1">
            <span>WEEK 00 — FOUNDATION (COMPLETED)</span>
            <span>WEEK 01 — MARKET DISCOVERY (COMPLETED)</span>
            <span>WEEKS 02–20 — PROTOTYPING & VENTURE INCUBATION (UPCOMING)</span>
          </div>
        </div>

        {/* Selected Week Context Banner */}
        {currentWeek && (
          <div className="mb-14 p-6 sm:p-8 bg-[#FAF8F5]/90 border border-[#141414]/15 rounded-sm shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#141414]/10 pb-4 mb-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block mb-1">
                  SPRINT OVERVIEW // {currentWeek.theme}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#151515] font-medium">
                  {currentWeek.title}
                </h3>
              </div>
              <div className="flex items-center space-x-3">
                <span
                  className={`px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full border ${
                    currentWeek.status === 'COMPLETED'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-amber-50 text-amber-800 border-amber-300'
                  }`}
                >
                  STATUS: {currentWeek.status}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#3A3833] max-w-4xl leading-relaxed">
              {currentWeek.overview}
            </p>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 5 CORE LESSONS (LARGE EDITORIAL TYPOGRAPHY - NO ORDINARY CARDS) */}
        {/* ------------------------------------------------------------- */}
        {currentWeek?.coreLessons && currentWeek.coreLessons.length > 0 && (
          <div className="mb-20 pt-10 border-t border-[#141414]/15">
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block mb-1">
                // SPRINT METACONCEPTS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#151515]">
                5 CORE LESSONS
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 border-t border-b border-[#141414]/15 py-10">
              {currentWeek.coreLessons.map((lesson) => (
                <div key={lesson.num} className="flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-serif text-3xl sm:text-4xl text-[#1D4D43] font-light block mb-2">
                      {lesson.num}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#151515] tracking-tight leading-snug mb-3">
                      {lesson.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-[#55524C] leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* DAILY DEEP DIVE & REFLECTION JOURNAL */}
        {/* ------------------------------------------------------------- */}
        {currentWeek?.days && currentWeek.days.length > 0 && (
          <div className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#141414]/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block mb-1">
                  // DAILY DECONSTRUCTION & JOURNAL
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#151515]">
                  DAILY SPRINT JOURNEY
                </h3>
              </div>
              {/* Day Selector Pills */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3 md:mt-0">
                {currentWeek.days.map((day) => (
                  <button
                    key={day.dayNumber}
                    onClick={() => setSelectedDayNum(day.dayNumber)}
                    className={`px-3 py-1 text-xs font-mono uppercase rounded-sm border transition-all ${
                      selectedDayNum === day.dayNumber
                        ? 'bg-[#1D4D43] text-white border-[#1D4D43]'
                        : 'bg-white/80 border-[#141414]/15 text-[#4A4742] hover:bg-white'
                    }`}
                  >
                    DAY 0{day.dayNumber}
                  </button>
                ))}
              </div>
            </div>

            {currentDay && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Day Narrative, Key Idea, and Highlights */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-semibold mb-1">
                      DAY 0{currentDay.dayNumber} · {currentDay.theme}
                    </div>
                    <h4 className="font-serif text-2xl sm:text-3xl text-[#151515] font-semibold leading-snug">
                      {currentDay.title}
                    </h4>
                  </div>

                  {currentDay.keyIdea && (
                    <div className="border-l-2 border-[#1D4D43] pl-4 py-1.5 bg-[#FAF8F5] italic font-serif text-base sm:text-lg text-[#2A2824]">
                      "{currentDay.keyIdea}"
                    </div>
                  )}

                  <p className="font-sans text-sm sm:text-base text-[#3A3833] leading-relaxed">
                    {currentDay.overview}
                  </p>

                  {/* Highlights List */}
                  <div className="p-5 bg-white/70 border border-[#141414]/10 rounded-sm">
                    <span className="text-xs font-mono uppercase text-[#6B6964] block mb-3 font-semibold">
                      Key Activities & Exercises:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm font-sans text-[#2B2925]">
                      {currentDay.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[#1D4D43] font-mono">→</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contextual Photograph if attached */}
                  {currentDay.image && (
                    <div
                      onClick={() =>
                        setSelectedPhoto({
                          url: currentDay.image!,
                          caption: currentDay.imageCaption || currentDay.title,
                          context: `ProtoSem Week ${currentWeek.weekNumber} · Day ${currentDay.dayNumber}`
                        })
                      }
                      className="cursor-pointer group relative overflow-hidden rounded-sm border border-[#141414]/20 bg-black/5"
                    >
                      <img
                        src={currentDay.image}
                        alt={currentDay.title}
                        className="w-full h-56 sm:h-64 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="p-3 bg-white/95 border-t border-[#141414]/10 text-xs font-mono text-[#55524C] flex justify-between items-center">
                        <span className="truncate">{currentDay.imageCaption}</span>
                        <span className="text-[#1D4D43] shrink-0 font-bold ml-2">ZOOM ↗</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Personal Journal Reflections System */}
                <div className="lg:col-span-6 flex flex-col justify-between bg-[#FAF8F5]/80 border border-[#141414]/15 p-6 sm:p-8 rounded-sm">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#141414]/10">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block">
                          PERSONAL JOURNAL
                        </span>
                        <h5 className="font-serif text-lg font-bold text-[#151515]">
                          Metacognitive Reflections
                        </h5>
                      </div>
                      <button
                        onClick={() => setIsAddingReflection(true)}
                        className="px-3 py-1 bg-[#151515] text-white text-xs font-mono rounded hover:bg-[#1D4D43] transition-colors"
                      >
                        + ADD REFLECTION
                      </button>
                    </div>

                    {/* Reflection Items List */}
                    <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
                      {currentDay.reflections && currentDay.reflections.length > 0 ? (
                        currentDay.reflections.map((ref, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-white border border-[#141414]/10 rounded-sm hover:border-[#1D4D43]/30 transition-colors shadow-xs"
                          >
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4D43] font-bold block mb-1">
                              PROMPT 0{idx + 1}: {ref.prompt}
                            </span>
                            <p className="font-sans text-xs sm:text-sm text-[#2A2824] leading-relaxed">
                              {ref.answer}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 font-mono text-xs text-[#88857E]">
                          No reflections recorded for this day yet. Click "+ ADD REFLECTION" to capture your observations.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Add Reflection Inline Drawer */}
                  {isAddingReflection && (
                    <div className="mt-6 pt-4 border-t border-[#141414]/15 bg-white p-4 rounded border border-[#141414]/10 animate-fadeIn">
                      <span className="text-xs font-mono uppercase font-bold text-[#151515] block mb-2">
                        Add New Daily Reflection:
                      </span>
                      <select
                        value={newPrompt}
                        onChange={(e) => setNewPrompt(e.target.value)}
                        className="w-full p-2 bg-[#FAF8F5] border border-[#141414]/20 rounded text-xs font-mono mb-2"
                      >
                        {PROMPT_OPTIONS.map((p, idx) => (
                          <option key={idx} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      <textarea
                        rows={3}
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                        placeholder="Write your honest observation, takeaway or learning..."
                        className="w-full p-2 border border-[#141414]/20 rounded text-xs font-sans mb-3"
                      />
                      <div className="flex justify-end space-x-2 font-mono text-xs">
                        <button
                          onClick={() => setIsAddingReflection(false)}
                          className="px-3 py-1 border border-[#141414]/20 rounded hover:bg-black/5"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveReflection}
                          className="px-3 py-1 bg-[#1D4D43] text-white rounded hover:bg-[#153831]"
                        >
                          Save Reflection
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* PROTOSEM EDITORIAL GALLERY & BLOGS */}
        {/* ------------------------------------------------------------- */}
        {currentWeek?.blogs && currentWeek.blogs.length > 0 && (
          <div className="pt-10 border-t border-[#141414]/15">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#141414]/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#1D4D43] font-semibold block mb-1">
                  // RETROSPECTIVES & ESSAYS
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#151515]">
                  PROTOSEM ESSAY ARCHIVE
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentWeek.blogs.map((blog, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] border border-[#141414]/15 p-6 sm:p-8 rounded-sm hover:border-[#1D4D43]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#6B6964] mb-3">
                      <span>PUBLICATION ARCHIVE</span>
                      <span>{blog.date}</span>
                    </div>

                    <h5 className="font-serif text-xl sm:text-2xl font-bold text-[#151515] mb-2 leading-snug">
                      {blog.title}
                    </h5>

                    <p className="font-sans text-xs sm:text-sm text-[#47443E] leading-relaxed mb-4">
                      {blog.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {blog.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-white border border-[#141414]/10 rounded text-[#33312C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#141414]/10 flex items-center justify-between">
                    <button
                      onClick={() =>
                        alert(
                          `"${blog.title}"\n\nFull retrospective document is archived in the ProtoSem knowledge repository.`
                        )
                      }
                      className="px-4 py-2 bg-[#151515] text-white text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-[#1D4D43] transition-colors"
                    >
                      READ ESSAY
                    </button>
                    <span className="text-[10px] font-mono text-[#7A7771]">VERIFIED DISPATCH</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Photo Zoom Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF8F5] max-w-4xl w-full p-4 rounded-sm shadow-2xl border border-[#141414]/30 overflow-hidden"
          >
            <div className="flex justify-between items-center pb-2 mb-2 border-b border-[#141414]/10 text-xs font-mono">
              <span className="text-[#1D4D43] font-semibold">{selectedPhoto.context}</span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-2 py-1 bg-black/5 hover:bg-black/10 rounded"
              >
                ✕ CLOSE
              </button>
            </div>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full max-h-[70vh] object-contain rounded-sm"
            />
            <div className="pt-3 text-xs font-mono text-[#33302B] text-center">
              {selectedPhoto.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
