export type StageStatus = 'IDEA' | 'EXPERIMENT' | 'PROTOTYPE' | 'TESTING' | 'EXPLORING' | 'PAUSED';

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialCode: string;
  userId?: string;
  verificationUrl?: string;
  description: string;
  pdfUrl?: string;
  imageUrl?: string;
  focus: string[];
  signatories?: string[];
}

export interface DaySchedule {
  dayNumber: number;
  title: string;
  theme: string;
  overview: string;
  keyIdea?: string;
  highlights: string[];
  image?: string;
  imageCaption?: string;
  reflections: {
    prompt: string;
    answer: string;
  }[];
}

export interface ProtoSemWeek {
  weekNumber: number;
  title: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'UPCOMING';
  theme: string;
  overview: string;
  coreLessons?: {
    num: string;
    title: string;
    description: string;
  }[];
  days: DaySchedule[];
  blogs?: {
    title: string;
    summary: string;
    date: string;
    externalUrl?: string;
    coverImage?: string;
    tags: string[];
  }[];
  photos?: {
    url: string;
    caption: string;
    date: string;
    context: string;
    alt: string;
  }[];
}

export interface SkillCapability {
  id: string;
  name: string;
  category: 'COMPUTE' | 'ANALYZE' | 'VISUALIZE' | 'BUILD' | 'LEAD' | 'CONNECT';
  description: string;
  context: string;
  relatedProjects: string[];
  relatedProtoSem?: string;
}

export interface ProjectCaseStudy {
  id: string;
  projectNumber: string;
  title: string;
  tagline: string;
  problem: string;
  idea: string;
  approach: string[];
  tools: string[];
  whatILearned: string;
  currentStatus: string;
  nextStep: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  datasetUrl?: string;
  researchUrl?: string;
  presentationUrl?: string;
  image?: string;
}

export interface BuildIdea {
  id: string;
  title: string;
  category: 'BUILDING NOW' | 'EXPLORING' | 'PARKED';
  stage: StageStatus;
  whyItMatters: string;
  whatImTrying: string;
  currentStageText: string;
  nextMove: string;
  photo?: string;
  link?: string;
  tags: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'SCHOLARSHIP' | 'RESEARCH' | 'HONOR';
  awardedDate: string;
  awardingBody: string;
  recognition: string;
  signatories?: string[];
  paperDetails?: {
    conference: string;
    organizers: string;
    presentationDate: string;
    paperTitle: string;
    abstractText: string;
    slidesAvailable: boolean;
    presentationUrl?: string;
    abstractUrl?: string;
    paperUrl?: string;
  };
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  description: string;
  hasAudioWaveform?: boolean;
  audioTitle?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  caption: string;
  date: string;
  context: string;
  alt: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    headline: string;
    identity: string;
    statement: string;
    positioning: string[];
    portraitImage: string;
    currently: string;
    learning: string;
    exploring: string;
    preparing: string;
  };
  about: {
    heading: string;
    leadStatement: string;
    narrative: string[];
    education: {
      degree: string;
      institution: string;
      location: string;
      focus: string[];
    };
    journey: {
      stage: 'STUDENT' | 'BUILDER' | 'LEADER';
      subtitle: string;
      text: string;
    }[];
  };
  personalInfluence: {
    sectionTitle: string;
    subtitle: string;
    fatherStory: {
      title: string;
      quote: string;
      paragraphs: string[];
      influenceAreas: {
        title: string;
        description: string;
      }[];
      photo?: string;
    };
  };
  personality: {
    mbtiCode: string;
    roleName: string;
    metrics: {
      trait: string;
      value: number;
      label: string;
      spectrum: [string, string];
    }[];
    characteristics: {
      title: string;
      description: string;
    }[];
  };
  certificates: CertificateItem[];
  protosem: {
    title: string;
    subtitle: string;
    totalWeeks: number;
    currentCompletedWeeks: number;
    weeks: ProtoSemWeek[];
  };
  skills: SkillCapability[];
  projects: ProjectCaseStudy[];
  builds: BuildIdea[];
  achievements: AchievementItem[];
  leadership: LeadershipRole[];
  gallery: GalleryPhoto[];
  contact: {
    heading: string;
    subheading: string;
    email: string;
    linkedin: string;
    github: string;
    kaggle: string;
    leetcode: string;
    location: string;
  };
}
