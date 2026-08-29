import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, CertificateItem, ProtoSemWeek, BuildIdea, AchievementItem, GalleryPhoto, DaySchedule } from '../types/portfolio';
import { INITIAL_PORTFOLIO_DATA } from '../data/initialPortfolio';

const STORAGE_KEY = 'dakshana_portfolio_data_v1';

interface PortfolioContextType {
  data: PortfolioData;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  saveStatus: string;
  updateData: (updater: (prev: PortfolioData) => PortfolioData) => void;
  updateProfile: (profile: Partial<PortfolioData['profile']>) => void;
  updateAbout: (about: Partial<PortfolioData['about']>) => void;
  updatePersonalInfluence: (influence: Partial<PortfolioData['personalInfluence']>) => void;
  updatePersonality: (personality: Partial<PortfolioData['personality']>) => void;
  addCertificate: (cert: CertificateItem) => void;
  updateCertificate: (id: string, cert: Partial<CertificateItem>) => void;
  deleteCertificate: (id: string) => void;
  addProtoSemWeek: (week: ProtoSemWeek) => void;
  updateProtoSemWeek: (weekNumber: number, week: Partial<ProtoSemWeek>) => void;
  addProtoSemDay: (weekNumber: number, day: DaySchedule) => void;
  updateProtoSemDay: (weekNumber: number, dayNumber: number, day: Partial<DaySchedule>) => void;
  addDayReflection: (weekNumber: number, dayNumber: number, prompt: string, answer: string) => void;
  addBuildIdea: (idea: BuildIdea) => void;
  updateBuildIdea: (id: string, idea: Partial<BuildIdea>) => void;
  deleteBuildIdea: (id: string) => void;
  addAchievement: (ach: AchievementItem) => void;
  updateAchievement: (id: string, ach: Partial<AchievementItem>) => void;
  deleteAchievement: (id: string) => void;
  addPhoto: (photo: GalleryPhoto) => void;
  updatePhoto: (id: string, photo: Partial<GalleryPhoto>) => void;
  deletePhoto: (id: string) => void;
  updateContact: (contact: Partial<PortfolioData['contact']>) => void;
  exportJSON: () => void;
  importJSON: (jsonStr: string) => boolean;
  resetToDefaults: () => void;
  saveToLocalStorage: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse saved portfolio data, using defaults', e);
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [saveStatus, setSaveStatus] = useState<string>('Saved');

  const saveToLocalStorage = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setSaveStatus('All changes saved');
      setTimeout(() => setSaveStatus('Saved'), 3000);
    } catch (e) {
      console.error('Error saving to localStorage', e);
      setSaveStatus('Error saving');
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setSaveStatus('All changes saved');
      const timer = setTimeout(() => setSaveStatus('Saved'), 2500);
      return () => clearTimeout(timer);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }, [data]);

  const updateData = (updater: (prev: PortfolioData) => PortfolioData) => {
    setData(prev => updater(prev));
  };

  const updateProfile = (profile: Partial<PortfolioData['profile']>) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...profile }
    }));
  };

  const updateAbout = (about: Partial<PortfolioData['about']>) => {
    setData(prev => ({
      ...prev,
      about: { ...prev.about, ...about }
    }));
  };

  const updatePersonalInfluence = (influence: Partial<PortfolioData['personalInfluence']>) => {
    setData(prev => ({
      ...prev,
      personalInfluence: { ...prev.personalInfluence, ...influence }
    }));
  };

  const updatePersonality = (personality: Partial<PortfolioData['personality']>) => {
    setData(prev => ({
      ...prev,
      personality: { ...prev.personality, ...personality }
    }));
  };

  const addCertificate = (cert: CertificateItem) => {
    setData(prev => ({
      ...prev,
      certificates: [cert, ...prev.certificates]
    }));
  };

  const updateCertificate = (id: string, cert: Partial<CertificateItem>) => {
    setData(prev => ({
      ...prev,
      certificates: prev.certificates.map(c => c.id === id ? { ...c, ...cert } : c)
    }));
  };

  const deleteCertificate = (id: string) => {
    setData(prev => ({
      ...prev,
      certificates: prev.certificates.filter(c => c.id !== id)
    }));
  };

  const addProtoSemWeek = (week: ProtoSemWeek) => {
    setData(prev => ({
      ...prev,
      protosem: {
        ...prev.protosem,
        weeks: [...prev.protosem.weeks, week]
      }
    }));
  };

  const updateProtoSemWeek = (weekNumber: number, week: Partial<ProtoSemWeek>) => {
    setData(prev => ({
      ...prev,
      protosem: {
        ...prev.protosem,
        weeks: prev.protosem.weeks.map(w => w.weekNumber === weekNumber ? { ...w, ...week } : w)
      }
    }));
  };

  const addProtoSemDay = (weekNumber: number, day: DaySchedule) => {
    setData(prev => ({
      ...prev,
      protosem: {
        ...prev.protosem,
        weeks: prev.protosem.weeks.map(w => {
          if (w.weekNumber === weekNumber) {
            return {
              ...w,
              days: [...w.days, day]
            };
          }
          return w;
        })
      }
    }));
  };

  const updateProtoSemDay = (weekNumber: number, dayNumber: number, day: Partial<DaySchedule>) => {
    setData(prev => ({
      ...prev,
      protosem: {
        ...prev.protosem,
        weeks: prev.protosem.weeks.map(w => {
          if (w.weekNumber === weekNumber) {
            return {
              ...w,
              days: w.days.map(d => d.dayNumber === dayNumber ? { ...d, ...day } : d)
            };
          }
          return w;
        })
      }
    }));
  };

  const addDayReflection = (weekNumber: number, dayNumber: number, prompt: string, answer: string) => {
    setData(prev => ({
      ...prev,
      protosem: {
        ...prev.protosem,
        weeks: prev.protosem.weeks.map(w => {
          if (w.weekNumber === weekNumber) {
            return {
              ...w,
              days: w.days.map(d => {
                if (d.dayNumber === dayNumber) {
                  return {
                    ...d,
                    reflections: [...(d.reflections || []), { prompt, answer }]
                  };
                }
                return d;
              })
            };
          }
          return w;
        })
      }
    }));
  };

  const addBuildIdea = (idea: BuildIdea) => {
    setData(prev => ({
      ...prev,
      builds: [idea, ...prev.builds]
    }));
  };

  const updateBuildIdea = (id: string, idea: Partial<BuildIdea>) => {
    setData(prev => ({
      ...prev,
      builds: prev.builds.map(b => b.id === id ? { ...b, ...idea } : b)
    }));
  };

  const deleteBuildIdea = (id: string) => {
    setData(prev => ({
      ...prev,
      builds: prev.builds.filter(b => b.id !== id)
    }));
  };

  const addAchievement = (ach: AchievementItem) => {
    setData(prev => ({
      ...prev,
      achievements: [ach, ...prev.achievements]
    }));
  };

  const updateAchievement = (id: string, ach: Partial<AchievementItem>) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.map(a => a.id === id ? { ...a, ...ach } : a)
    }));
  };

  const deleteAchievement = (id: string) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(a => a.id !== id)
    }));
  };

  const addPhoto = (photo: GalleryPhoto) => {
    setData(prev => ({
      ...prev,
      gallery: [photo, ...prev.gallery]
    }));
  };

  const updatePhoto = (id: string, photo: Partial<GalleryPhoto>) => {
    setData(prev => ({
      ...prev,
      gallery: prev.gallery.map(p => p.id === id ? { ...p, ...photo } : p)
    }));
  };

  const deletePhoto = (id: string) => {
    setData(prev => ({
      ...prev,
      gallery: prev.gallery.filter(p => p.id !== id)
    }));
  };

  const updateContact = (contact: Partial<PortfolioData['contact']>) => {
    setData(prev => ({
      ...prev,
      contact: { ...prev.contact, ...contact }
    }));
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dakshana_portfolio_data_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.profile && parsed.about && parsed.certificates && parsed.protosem) {
        setData(parsed);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        return true;
      }
    } catch (e) {
      console.error('Failed to import JSON', e);
    }
    return false;
  };

  const resetToDefaults = () => {
    if (window.confirm('Reset all portfolio data back to factory defaults? This will erase local custom edits.')) {
      setData(INITIAL_PORTFOLIO_DATA);
      localStorage.removeItem(STORAGE_KEY);
      setSaveStatus('Reset to original');
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isEditMode,
        setIsEditMode,
        activeSection,
        setActiveSection,
        saveStatus,
        updateData,
        updateProfile,
        updateAbout,
        updatePersonalInfluence,
        updatePersonality,
        addCertificate,
        updateCertificate,
        deleteCertificate,
        addProtoSemWeek,
        updateProtoSemWeek,
        addProtoSemDay,
        updateProtoSemDay,
        addDayReflection,
        addBuildIdea,
        updateBuildIdea,
        deleteBuildIdea,
        addAchievement,
        updateAchievement,
        deleteAchievement,
        addPhoto,
        updatePhoto,
        deletePhoto,
        updateContact,
        exportJSON,
        importJSON,
        resetToDefaults,
        saveToLocalStorage
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
