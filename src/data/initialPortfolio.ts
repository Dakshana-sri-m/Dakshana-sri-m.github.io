import { PortfolioData } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'DAKSHANA SRI M',
    headline: 'STUDENT → BUILDER → LEADER',
    identity: 'STUDENT → BUILDER → LEADER',
    statement: "I’m learning to turn curiosity into things worth building.",
    positioning: [
      'DATA SCIENCE',
      'VENTURE BUILDING',
      'APPLIED RESEARCH',
      'ORGANIZATIONAL LEADERSHIP'
    ],
    portraitImage: 'assets/dakshana_portrait.jpg',
    currently: 'ProtoSem · Week 1 completed',
    learning: 'Data Science + Advanced Computing',
    exploring: 'Data × Business × Technology',
    preparing: 'PG Entrance + Research'
  },
  about: {
    heading: 'ABOUT',
    leadStatement: 'WHERE I COME FROM SHAPES WHAT I BUILD.',
    narrative: [
      'I am an undergraduate in Data Science at Kumaraguru College of Liberal Arts and Science (KCLAS), Coimbatore. My work is situated at the intersection where computational rigour meets venture creation and empathetic leadership.',
      'Rather than treating data as an abstract academic discipline, I explore how algorithmic intelligence, enterprise logic, and grassroots systems can come together to solve concrete, high-stakes problems.',
      'From analyzing encrypted network traffic anomalies and presenting peer-reviewed research, to exploring cross-border export supply chains and directing student-led venture summits, my trajectory is guided by one core conviction: deep technical fluency is most potent when paired with human insight and entrepreneurial execution.'
    ],
    education: {
      degree: 'B.Sc. in Data Science',
      institution: 'Kumaraguru College of Liberal Arts and Science (KCLAS)',
      location: 'Coimbatore, Tamil Nadu, India',
      focus: [
        'Statistical Inference & Predictive Modeling',
        'Machine Learning & Pattern Categorization',
        'Venture Incubation & Applied Problem Solving',
        'Enterprise Data Architecture & Forensic Analytics'
      ]
    },
    journey: [
      {
        stage: 'STUDENT',
        subtitle: 'Foundational Inquiry & Computational Fluency',
        text: 'Mastering data structures, machine learning paradigms, statistical mathematics, and empirical research methodologies.'
      },
      {
        stage: 'BUILDER',
        subtitle: 'From Conceptual Frameworks to Working Prototypes',
        text: 'Translating problem spaces into functional prototypes through rapid iteration, exploratory systems, and venture modeling in ProtoSem.'
      },
      {
        stage: 'LEADER',
        subtitle: 'Cohort Synergy, Directorship & Ecosystem Impact',
        text: 'Directing entrepreneurial initiatives at LEED, representing my student cohort, and hosting venture founders to catalyze collaborative action.'
      }
    ]
  },
  personalInfluence: {
    sectionTitle: 'THE PEOPLE WHO SHAPED HOW I THINK',
    subtitle: 'Heritage, Business Exposure & Mentorship',
    fatherStory: {
      title: 'MY FATHER',
      quote: 'Watching genuine enterprise in action taught me that building is not about theories—it is about integrity, relentless observation, and practical resilience.',
      paragraphs: [
        'Growing up with direct exposure to business and enterprise through my father profoundly shaped how I evaluate challenges. He demonstrated firsthand that commerce and innovation are grounded in trust, continuous adaptability, and solving real human problems.',
        'This environment taught me to look beyond surface numbers and see the operational realities of supply chains, value creation, and market relationships. It is the reason I approach data science not merely as code, but as a lever for tangible economic and organizational impact.'
      ],
      influenceAreas: [
        {
          title: 'Practical Enterprise Instinct',
          description: 'Understanding that every algorithm or venture must anchor into real-world operational viability.'
        },
        {
          title: 'Resilience Through Ambiguity',
          description: 'Embracing uncertainty as an opportunity to iterate, pivot, and build enduring value.'
        },
        {
          title: 'People-First Leadership',
          description: 'Believing that true leadership is rooted in respect, transparent communication, and shared purpose.'
        }
      ]
    }
  },
  personality: {
    mbtiCode: 'ENFJ',
    roleName: 'PROTAGONIST',
    metrics: [
      {
        trait: 'Mind',
        value: 54,
        label: 'Extraverted (54%)',
        spectrum: ['Introverted (46%)', 'Extraverted (54%)']
      },
      {
        trait: 'Energy',
        value: 52,
        label: 'Intuitive (52%)',
        spectrum: ['Observant (48%)', 'Intuitive (52%)']
      },
      {
        trait: 'Nature',
        value: 57,
        label: 'Feeling (57%)',
        spectrum: ['Thinking (43%)', 'Feeling (57%)']
      },
      {
        trait: 'Tactics',
        value: 51,
        label: 'Judging (51%)',
        spectrum: ['Prospecting (49%)', 'Judging (51%)']
      },
      {
        trait: 'Identity',
        value: 51,
        label: 'Turbulent (51%)',
        spectrum: ['Assertive (49%)', 'Turbulent (51%)']
      }
    ],
    characteristics: [
      {
        title: 'PEOPLE-FIRST',
        description: 'Deeply empathetic in team dynamics, ensuring everyone feels heard and aligned toward a common mission.'
      },
      {
        title: 'IDEA-DRIVEN',
        description: 'Constantly synthesizing interdisciplinary connections across data, enterprise, and social systems.'
      },
      {
        title: 'COLLABORATIVE',
        description: 'Natural facilitator who bridges technical complexity with human communication to drive collective action.'
      },
      {
        title: 'PURPOSE-ORIENTED',
        description: 'Prioritizing long-term societal and organizational impact over superficial quick fixes.'
      },
      {
        title: 'ALWAYS REFINING',
        description: 'Conscientious and self-reflective, continually evaluating how to elevate craftsmanship and clarity.'
      }
    ]
  },
  certificates: [
    {
      id: 'cert-deloitte',
      name: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (Issued via Forage)',
      date: 'March 28, 2026',
      credentialCode: 'DoK5HySvEFfwT4QnW',
      userId: '69c60734448ed0424a2a5632',
      verificationUrl: '',
      description: 'Completed comprehensive practical forensic technology and data analytics modules including data quality assessment, forensic analytics methodology, and strategic insight presentation.',
      focus: ['Data Analysis', 'Forensic Technology', 'Data Quality Assessment', 'Analytical Storytelling'],
      signatories: ['Deloitte Forensic & Analytics Leadership', 'Forage Program Director']
    },
    {
      id: 'cert-simplilearn',
      name: 'Introduction to MS Excel',
      issuer: 'Simplilearn SkillUp (Powered by Microsoft)',
      date: 'July 5, 2026',
      credentialCode: '10432422',
      verificationUrl: '',
      description: 'Mastered core to intermediate spreadsheet modeling, data preparation pipelines, dynamic formula computation, and analytical worksheets for structured reporting.',
      focus: ['Data Preparation', 'Formulas & Functions', 'Analytical Worksheets', 'Data Modeling'],
      signatories: ['Simplilearn Certification Board', 'Microsoft Partner Network']
    },
    {
      id: 'cert-river-venture',
      name: 'Two-Day Entrepreneurship & Venture Building Bootcamp',
      issuer: 'Kumaraguru Institutions in association with River Venture Studios, Singapore',
      date: 'February 9–10, 2026',
      credentialCode: 'KI-RVS-ENT-2026-088',
      verificationUrl: '',
      description: 'Intensive immersion into global venture ideation frameworks, market validation, venture scalability, and sustainable commercialization strategies under international mentors.',
      focus: ['Global Venture Ideation', 'Scalability Frameworks', 'Market Validation', 'Cross-Border Ecosystems'],
      signatories: ['Dr. Viveka Kalidasan (River Venture Studios, Singapore)', 'Dr. D. Saravanan (Principal, KCLAS / Kumaraguru)']
    },
    {
      id: 'cert-amypo',
      name: 'Data Analytical Tool Certification',
      issuer: 'Amypo',
      date: 'January 2026',
      credentialCode: 'AMY-DAT-2026-441',
      verificationUrl: '',
      description: 'Certified expertise in multi-tool data manipulation, complex relational querying, interactive visualization, and exploratory data workflows.',
      focus: ['Analytical Tools', 'Querying & Extraction', 'Visual Analytics', 'Data Transformation'],
      signatories: ['Amypo Academic Lead']
    }
  ],
  protosem: {
    title: 'PROTOSEM',
    subtitle: '20 WEEKS. IDEA → PROTOTYPE.',
    totalWeeks: 20,
    currentCompletedWeeks: 2,
    weeks: [
      {
        weekNumber: 0,
        title: 'Week 0: Foundation, Empathy & Systems Thinking',
        status: 'COMPLETED',
        theme: 'CONNECT · OBSERVE · COLLABORATE · EXPLORE · ENVISION',
        overview: 'An intensive five-day sprint designed to break communication barriers, examine cognitive styles, execute hands-on rapid prototyping, deploy purposeful AI frameworks, and ignite the entrepreneurial mindset.',
        coreLessons: [
          {
            num: '01',
            title: 'CONNECTION FIRST',
            description: 'True collaboration begins when barriers drop. When individuals connect honestly as human beings before entering project mode, collective problem-solving reaches unmatched velocity.'
          },
          {
            num: '02',
            title: 'EMPATHY-DRIVEN PROBLEM IDENTIFICATION',
            description: 'The most compelling solutions originate directly from lived human experience and sharp environmental observation rather than speculative theory.'
          },
          {
            num: '03',
            title: 'COGNITIVE SYNERGY',
            description: 'Diverse personality archetypes and problem-solving styles are not sources of friction—they are strategic multipliers when harmonized with clarity.'
          },
          {
            num: '04',
            title: 'ITERATIVE ACTION OVER PERFECTION',
            description: 'Building physical and conceptual prototypes rapidly reveals hidden constraints ten times faster than prolonged passive deliberation.'
          },
          {
            num: '05',
            title: 'INTENTIONAL INNOVATION',
            description: 'Technology and AI are force multipliers, not solutions in themselves. Innovation must always be anchored to solving the right human problem with purpose.'
          }
        ],
        days: [
          {
            dayNumber: 1,
            title: 'Breaking Barriers & Seeing Problems',
            theme: 'CONNECT & OBSERVE',
            overview: 'Day 1 opened with interactive icebreakers and 360° self-introductions, culminating in the high-energy Rock-Paper-Scissors networking challenge. The cohort transitioned from initial hesitation into an active community observing lived everyday problems.',
            keyIdea: 'Connection and observation are the foundational starting points for meaningful problem-solving.',
            highlights: [
              '360° cohort self-introductions establishing psychological safety',
              'Rock–Paper–Scissors energizer breaking initial social friction',
              'Identifying real-world everyday pain points from lived experience',
              'Framing problem statements through firsthand observation'
            ],
            image: 'assets/protosem_team_building.jpg',
            imageCaption: 'Day 1: Engaging in hands-on collaborative problem framing and cohort icebreaking.',
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'We broke down social barriers across the new cohort through structured introductory challenges and interactive problem-observation exercises.'
              },
              {
                prompt: 'WHAT DID I NOTICE?',
                answer: 'How quickly group energy shifts from cautious polite distance to enthusiastic co-creation when given permission to be authentic.'
              },
              {
                prompt: 'WHAT DID I CONTRIBUTE?',
                answer: 'Facilitated active discussions in our breakout pod and helped synthesize everyday pain points into distinct problem categories.'
              },
              {
                prompt: 'WHAT SURPRISED ME?',
                answer: 'How many universal daily friction points we tolerate without realizing they represent viable venture and systems-design opportunities.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Listening without rushing to evaluate is the sharpest observation tool a builder can possess.'
              },
              {
                prompt: 'WHAT WOULD I DO DIFFERENTLY?',
                answer: 'Probe deeper into edge cases during the initial problem-framing sprint.'
              },
              {
                prompt: 'HOW DID THIS CHANGE MY THINKING?',
                answer: 'It proved that identifying meaningful problems is an observational habit, not a stroke of genius.'
              }
            ]
          },
          {
            dayNumber: 2,
            title: 'Understanding Ourselves Through Stories',
            theme: 'DISCOVER & REFLECT',
            overview: 'Examining self-awareness through the 16 Personalities framework, cognitive archetypes, and Gen Z web stories and comics. Cohort members mapped how different people perceive, interpret, and communicate under pressure.',
            keyIdea: 'Self-knowledge and cognitive empathy unlock effortless team collaboration.',
            highlights: [
              '16 Personalities MBTI deep dive and cognitive style mapping',
              'Gen Z web stories, visual narratives, and interactive comics',
              'Personal story sharing and exploring diverse experiential lenses',
              'Understanding divergent perceptual filters in multidisciplinary teams'
            ],
            image: 'assets/protosem_whiteboard.jpg',
            imageCaption: 'Day 2: Whiteboard ideation, cognitive style mapping, and story-driven self reflection.',
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'We explored our psychological and cognitive profiles (ENFJ) and shared personal narrative arcs to uncover how each person thinks and communicates.'
              },
              {
                prompt: 'WHAT DID I NOTICE?',
                answer: 'That miscommunication usually stems from unacknowledged cognitive differences rather than conflicting intentions.'
              },
              {
                prompt: 'WHAT DID I CONTRIBUTE?',
                answer: 'Shared my perspective on balancing empathetic mediation with structured milestone planning in group settings.'
              },
              {
                prompt: 'WHAT SURPRISED ME?',
                answer: 'The striking clarity that emerges when personality traits are framed as complementary superpowers rather than rigid labels.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Empathy in team leadership requires actively adapting to the other persons cognitive language.'
              },
              {
                prompt: 'WHAT WOULD I DO DIFFERENTLY?',
                answer: 'Document more of our collective whiteboard diagrams for long-term cohort reference.'
              },
              {
                prompt: 'HOW DID THIS CHANGE MY THINKING?',
                answer: 'It shifted my view of leadership from giving direction to creating optimal environments for diverse thinkers.'
              }
            ]
          },
          {
            dayNumber: 3,
            title: 'Becoming a Team & Hands-on Prototyping',
            theme: 'COLLABORATE & BUILD',
            overview: 'Formation of Beta Teams followed by the tactical Among Us-inspired communication challenge and the classic Spaghetti Tower Challenge. Teams navigated rapid resource constraints, negotiation, quick pivots, and structural failure modes.',
            keyIdea: 'Iterative physical testing beats prolonged debate every single time.',
            highlights: [
              'Beta Team structuring and role self-selection',
              'Among Us-inspired communication and active listening simulation',
              'Spaghetti Tower physical prototyping challenge under timed constraints',
              'Rapid negotiation, structural hypothesis testing, and dynamic pivoting'
            ],
            image: 'assets/protosem_team_building.jpg',
            imageCaption: 'Day 3: Rapid prototyping during the Spaghetti Tower challenge with team collaboration.',
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'Our Beta Team competed in high-speed physical builds and trust challenges, experiencing live iteration cycles under ticking clocks.'
              },
              {
                prompt: 'WHAT DID I NOTICE?',
                answer: 'The marshmallow weight broke structures that looked elegant in drawings because teams tested the weight only at the final second.'
              },
              {
                prompt: 'WHAT DID I CONTRIBUTE?',
                answer: 'Advocated for early structural load-testing from minute three instead of waiting until the final deadline.'
              },
              {
                prompt: 'WHAT SURPRISED ME?',
                answer: 'How much stress tests reveal about an individual’s natural decision-making under uncertainty.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Build the riskiest assumption first. Early failure is the cheapest data you will ever get.'
              },
              {
                prompt: 'WHAT WOULD I DO DIFFERENTLY?',
                answer: 'Allocate even more time to debriefing post-failure mechanisms with the team.'
              },
              {
                prompt: 'HOW DID THIS CHANGE MY THINKING?',
                answer: 'It cured me of any lingering attachment to premature perfection.'
              }
            ]
          },
          {
            dayNumber: 4,
            title: 'Exploring AI & Purposeful Technology',
            theme: 'EXPLORE & ELEVATE',
            overview: 'Hands-on exploration of contemporary AI workflows, prompt engineering, multi-agent frameworks, and specialized research tooling. Emphasis was placed on critical discernment: employing AI to augment deep thinking rather than replacing it.',
            keyIdea: 'Use technology intentionally to solve the right problem, not just because the tool is novel.',
            highlights: [
              'Modern generative AI pipelines and specialized research toolchains',
              'Custom prompt engineering frameworks for structured problem breakdown',
              'Rapid research synthesis and multi-modal prototyping',
              'Critical assessment of AI outputs and ethical alignment'
            ],
            image: 'assets/protosem_whiteboard.jpg',
            imageCaption: 'Day 4: Framing AI workflows and structured prompt architectures for rapid problem synthesis.',
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'We dissected state-of-the-art AI systems and tested customized workflows to accelerate data synthesis and ideation.'
              },
              {
                prompt: 'WHAT DID I NOTICE?',
                answer: 'AI without a precise, nuanced problem frame produces generic fluff; with rigorous constraints, it becomes an exponential amplifier.'
              },
              {
                prompt: 'WHAT DID I CONTRIBUTE?',
                answer: 'Designed targeted prompt sequences linking data science exploratory logic with business model canvas generation.'
              },
              {
                prompt: 'WHAT SURPRISED ME?',
                answer: 'How much human domain intuition is required to spot subtle algorithmic hallucinations in specialized research.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Mastering AI is 80% clear question formulation and 20% tooling.'
              },
              {
                prompt: 'WHAT WOULD I DO DIFFERENTLY?',
                answer: 'Build a reusable prompt library notebook immediately during the session.'
              },
              {
                prompt: 'HOW DID THIS CHANGE MY THINKING?',
                answer: 'I view AI not as a shortcut, but as a sparring partner that forces me to sharpen my own core logic.'
              }
            ]
          },
          {
            dayNumber: 5,
            title: 'The Spark of Entrepreneurship',
            theme: 'IGNITE & ENVISION',
            overview: 'The finale of Week 0 hosted in the grand auditorium, diving into the Youth Entrepreneurship Program. The cohort explored customer-centric enterprise mechanics, societal impact, venture resilience, and the 20-week transformation roadmap ahead.',
            keyIdea: 'Sustainable venture building is the art of creating enduring societal value through disciplined iteration.',
            highlights: [
              'Youth Entrepreneurship Program kickoff and venture roadmap',
              'Customer-centric enterprise architectures and unit economics basics',
              'Designing for societal sustainability and long-term ecosystem resilience',
              'Setting 20-week personal milestones for the ProtoSem incubation journey'
            ],
            image: 'assets/protosem_auditorium.jpg',
            imageCaption: 'Day 5: Youth Entrepreneurship Program grand session in the university auditorium.',
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'We assembled in the auditorium to synthesize Week 0 learnings and ground our upcoming 20-week venture building journey in real-world enterprise standards.'
              },
              {
                prompt: 'WHAT DID I NOTICE?',
                answer: 'The shared sense of purpose across the entire cohort as we transitioned from individual learners into committed venture builders.'
              },
              {
                prompt: 'WHAT DID I CONTRIBUTE?',
                answer: 'Articulated my commitment to exploring data-driven enterprise solutions and cross-border supply chain transparency.'
              },
              {
                prompt: 'WHAT SURPRISED ME?',
                answer: 'How the 20-week runway suddenly felt both expansive and urgently immediate.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'A venture is an ongoing conversation with reality. If you stop listening, the venture dies.'
              },
              {
                prompt: 'WHAT WOULD I DO DIFFERENTLY?',
                answer: 'Set up automated daily journaling habits right from day five.'
              },
              {
                prompt: 'HOW DID THIS CHANGE MY THINKING?',
                answer: 'It solidified my ambition: to build data products that stand on both technical merit and viable business fundamentals.'
              }
            ]
          }
        ],
        blogs: [
          {
            title: 'ProtoSem Week 0 Retrospective: Foundations of a Builder',
            summary: 'A comprehensive retrospective on our first 5 days in ProtoSem—from psychological safety and MBTI cognitive mapping to spaghetti prototypes and entrepreneurial vision.',
            date: 'February 2026',
            externalUrl: '',
            coverImage: 'assets/protosem_auditorium.jpg',
            tags: ['ProtoSem', 'Venture Building', 'Retrospective', 'Week 0']
          }
        ],
        photos: [
          {
            url: 'assets/protosem_auditorium.jpg',
            caption: 'Auditorium session during the Youth Entrepreneurship kickoff on Day 5.',
            date: 'February 2026',
            context: 'ProtoSem Day 5',
            alt: 'ProtoSem Auditorium Entrepreneurship Session'
          },
          {
            url: 'assets/protosem_team_building.jpg',
            caption: 'Beta team collaborating on physical prototyping during the Spaghetti Tower challenge on Day 3.',
            date: 'February 2026',
            context: 'ProtoSem Day 3',
            alt: 'ProtoSem Spaghetti Tower Challenge'
          },
          {
            url: 'assets/protosem_whiteboard.jpg',
            caption: 'Design thinking whiteboard mapping cognitive styles, user journeys, and sticky notes on Day 2.',
            date: 'February 2026',
            context: 'ProtoSem Day 2',
            alt: 'ProtoSem Whiteboard Ideation'
          }
        ]
      },
      {
        weekNumber: 1,
        title: 'Week 1: Problem Space Exploration & Market Discovery',
        status: 'COMPLETED',
        theme: 'INTERROGATE · MAP · VALIDATE · REFINE',
        overview: 'Diving deep into specific domain problem spaces, conducting exploratory user interviews, mapping stakeholder value chains, and testing initial solution hypotheses.',
        days: [
          {
            dayNumber: 1,
            title: 'Deconstructing Problem Vectors',
            theme: 'PROBLEM DECONSTRUCTION',
            overview: 'Breaking down ambiguous problem statements into measurable sub-variables and causal loops.',
            highlights: ['First-principles decomposition', 'Root cause mapping', 'Identifying implicit assumptions'],
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'Deconstructed real-world industry problem statements into clear structural variables.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Most perceived problems are merely symptoms of underlying systemic blockages.'
              }
            ]
          },
          {
            dayNumber: 2,
            title: 'Stakeholder Landscape Mapping',
            theme: 'VALUE CHAIN MAPPING',
            overview: 'Mapping primary, secondary, and tertiary stakeholders across enterprise and supply networks.',
            highlights: ['Stakeholder incentive analysis', 'Information asymmetry mapping', 'Identifying gatekeepers'],
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'Mapped out multi-party incentive structures in supply chains.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Solutions fail when they demand behavior change without aligning economic incentives.'
              }
            ]
          },
          {
            dayNumber: 3,
            title: 'Data-Driven Validation Protocols',
            theme: 'HYPOTHESIS TESTING',
            overview: 'Designing quantitative and qualitative validation experiments to test key venture hypotheses.',
            highlights: ['Hypothesis matrix formulation', 'Designing low-bias inquiry protocols', 'Metric selection'],
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'Formulated empirical hypotheses for our exploratory venture ideas.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'A hypothesis is only useful if it is strictly falsifiable.'
              }
            ]
          },
          {
            dayNumber: 4,
            title: 'Competitive & Alternative System Audit',
            theme: 'ECOSYSTEM AUDIT',
            overview: 'Auditing existing workarounds, legacy software solutions, and offline practices.',
            highlights: ['Non-consumption analysis', 'Workaround audit', 'Feature parity traps'],
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'Analyzed how users currently cope with existing friction points in target industries.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Your real competitor is almost always the user’s default inertia or Excel sheet.'
              }
            ]
          },
          {
            dayNumber: 5,
            title: 'Week 1 Synthesis & Cohort Pitchback',
            theme: 'SYNTHESIS & PIVOT',
            overview: 'Presenting Week 1 problem matrices to mentors and iterating based on critical feedback.',
            highlights: ['Peer critique sprint', 'Mentor feedback integration', 'Scope consolidation'],
            reflections: [
              {
                prompt: 'WHAT ACTUALLY HAPPENED?',
                answer: 'Synthesized Week 1 discoveries and defended our problem scope before mentors.'
              },
              {
                prompt: 'WHAT DID I LEARN?',
                answer: 'Clarity of focus is more respected than breadth of ambition.'
              }
            ]
          }
        ]
      }
    ]
  },
  skills: [
    {
      id: 'skill-python',
      name: 'Python',
      category: 'COMPUTE',
      description: 'Core programming language for numerical analysis, machine learning pipelines, automation, and algorithmic experimentation.',
      context: 'Applied extensively in network traffic classification models, anomaly detection scripts, and data modeling pipelines.',
      relatedProjects: ['proj-network-traffic']
    },
    {
      id: 'skill-sql',
      name: 'SQL',
      category: 'COMPUTE',
      description: 'Relational data querying, complex aggregations, window functions, and database schema structuring.',
      context: 'Utilized for analytical queries across structured transaction datasets and forensic audits.',
      relatedProjects: ['proj-network-traffic', 'proj-family-export']
    },
    {
      id: 'skill-ml',
      name: 'Machine Learning',
      category: 'COMPUTE',
      description: 'Supervised classification, feature engineering, clustering algorithms, and model evaluation protocols.',
      context: 'Central focus of ICCSAM 2026 research paper on network categorization and security threats.',
      relatedProjects: ['proj-network-traffic']
    },
    {
      id: 'skill-stats',
      name: 'Statistics',
      category: 'ANALYZE',
      description: 'Hypothesis testing, probability distributions, variance analysis, and inferential modeling.',
      context: 'Underpins academic research in Data Science at KCLAS and empirical experimentation in ProtoSem.',
      relatedProjects: ['proj-network-traffic', 'proj-circular-economy'],
      relatedProtoSem: 'ProtoSem Week 1'
    },
    {
      id: 'skill-analytics',
      name: 'Data Analytics',
      category: 'ANALYZE',
      description: 'Exploratory data analysis (EDA), trend identification, metric definition, and business intelligence.',
      context: 'Validated through Deloitte Job Simulation and live exploratory case studies.',
      relatedProjects: ['proj-family-export', 'proj-circular-economy']
    },
    {
      id: 'skill-traffic-analysis',
      name: 'Network Traffic Analysis',
      category: 'ANALYZE',
      description: 'Packet metadata inspection, flow-level feature extraction, and traffic anomaly identification.',
      context: 'Applied in my primary technical research project presented at ICCSAM 2026.',
      relatedProjects: ['proj-network-traffic']
    },
    {
      id: 'skill-forensic-tech',
      name: 'Forensic Technology',
      category: 'ANALYZE',
      description: 'Digital audit trails, data integrity verification, and structured forensic methodology.',
      context: 'Completed during Deloitte Forensic Analytics simulation program.',
      relatedProjects: ['proj-network-traffic']
    },
    {
      id: 'skill-excel',
      name: 'MS Excel',
      category: 'VISUALIZE',
      description: 'Financial modeling, dynamic pivot tables, lookups, sensitivity tables, and analytical dashboards.',
      context: 'Microsoft / Simplilearn SkillUp certified; used for rapid business modeling and inventory planning.',
      relatedProjects: ['proj-family-export', 'proj-circular-economy']
    },
    {
      id: 'skill-powerbi',
      name: 'Power BI',
      category: 'VISUALIZE',
      description: 'Interactive business intelligence dashboarding, DAX expressions, and executive reporting.',
      context: 'Used for enterprise KPI tracking and visual data storytelling.',
      relatedProjects: ['proj-family-export']
    },
    {
      id: 'skill-tableau',
      name: 'Tableau',
      category: 'VISUALIZE',
      description: 'Visual exploratory analysis, geographic heatmaps, and multifaceted interactive dashboards.',
      context: 'Exploratory data visualization for multi-variable research datasets.',
      relatedProjects: ['proj-circular-economy']
    },
    {
      id: 'skill-bigquery',
      name: 'BigQuery',
      category: 'VISUALIZE',
      description: 'Cloud-scale analytical querying and data warehousing on large distributed datasets.',
      context: 'Exploring high-scale data extraction for research and analytics pipelines.',
      relatedProjects: ['proj-network-traffic']
    },
    {
      id: 'skill-prototyping',
      name: 'Rapid Prototyping',
      category: 'BUILD',
      description: 'Translating conceptual user journeys into tangible mockups and functional MVPs within tight cycles.',
      context: 'Core methodology practiced weekly in ProtoSem sprints.',
      relatedProjects: ['proj-circular-economy'],
      relatedProtoSem: 'ProtoSem Week 0 Day 3'
    },
    {
      id: 'skill-experimentation',
      name: 'Experimentation',
      category: 'BUILD',
      description: 'Designing falsifiable business and technical tests, A/B hypotheses, and rapid learning loops.',
      context: 'Applied across ProtoSem validation sprints and machine learning parameter tuning.',
      relatedProjects: ['proj-network-traffic'],
      relatedProtoSem: 'ProtoSem Week 1 Day 3'
    },
    {
      id: 'skill-venture-building',
      name: 'Venture Building',
      category: 'BUILD',
      description: 'Market sizing, unit economics, value proposition design, and cross-border expansion strategy.',
      context: 'Honed through Kumaraguru & River Venture Studios Bootcamp and family business explorations.',
      relatedProjects: ['proj-family-export', 'proj-circular-economy']
    },
    {
      id: 'skill-venture-incubation',
      name: 'Strategic Venture Incubation',
      category: 'LEAD',
      description: 'Structuring cohort programs, mentoring early student builders, and creating venture pipeline frameworks.',
      context: 'Executive leadership as Director @ LEED and campus entrepreneurial ecosystem lead.',
      relatedProjects: []
    },
    {
      id: 'skill-event-logistics',
      name: 'Event Logistics',
      category: 'LEAD',
      description: 'End-to-end planning, speaker curation, budget allocation, and operations for large-scale student summits.',
      context: 'Organizing E-Summit and Shark Tank at Kumaraguru.',
      relatedProjects: []
    },
    {
      id: 'skill-pitch-evaluation',
      name: 'Pitch Deck Evaluation',
      category: 'LEAD',
      description: 'Critiquing venture models, assessing unit economics, and stress-testing pitch presentations.',
      context: 'Screening startup submissions for campus Shark Tank events.',
      relatedProjects: []
    },
    {
      id: 'skill-moderation',
      name: 'Live Moderation',
      category: 'LEAD',
      description: 'Facilitating high-level keynote conversations, panel discussions, and founder dialogues with poise.',
      context: 'Moderating guest speakers and interactive townhalls.',
      relatedProjects: []
    },
    {
      id: 'skill-podcasting',
      name: 'Podcasting',
      category: 'LEAD',
      description: 'Audio production, founder interviews, narrative storytelling, and ecosystem voice creation.',
      context: 'Leading the LEED Founder Podcast Series featuring active entrepreneurs.',
      relatedProjects: []
    },
    {
      id: 'skill-conflict-resolution',
      name: 'Conflict Resolution',
      category: 'CONNECT',
      description: 'Navigating divergent viewpoints, mediating team tensions, and building win-win consensus.',
      context: 'Class Representative role and inter-team alignment during intense ProtoSem sprints.',
      relatedProjects: [],
      relatedProtoSem: 'ProtoSem Week 0 Day 2'
    },
    {
      id: 'skill-liaison',
      name: 'Faculty-Student Liaison',
      category: 'CONNECT',
      description: 'Managing communication bridges between academic leadership and student cohorts with transparency.',
      context: 'Elected Class Representative for Data Science undergraduate cohort.',
      relatedProjects: []
    },
    {
      id: 'skill-coordination',
      name: 'Cross-Functional Coordination',
      category: 'CONNECT',
      description: 'Synchronizing deliverables across technical, design, marketing, and logistical teams.',
      context: 'Directorship responsibilities across LEED and campus community initiatives.',
      relatedProjects: []
    },
    {
      id: 'skill-social-empathy',
      name: 'Social Empathy',
      category: 'CONNECT',
      description: 'Deep listening and community engagement grounded in genuine social responsibility.',
      context: 'Volunteer operations with Namadhu Pangu rural community programs.',
      relatedProjects: ['proj-circular-economy']
    }
  ],
  projects: [
    {
      id: 'proj-network-traffic',
      projectNumber: '01',
      title: 'Network Traffic Type Categorization & Threat Detection',
      tagline: 'Machine learning applied to high-throughput network flow categorization and anomaly detection.',
      problem: 'Modern computer networks generate massive streams of encrypted, diverse traffic flows. Traditional rule-based intrusion detection systems struggle to keep pace with novel anomalous patterns, protocol camouflage, and polymorphic security threats.',
      idea: 'Implement supervised and semi-supervised machine learning classifiers trained on statistical flow-level telemetry to accurately categorize traffic types and isolate threat signatures without requiring payload decryption.',
      approach: [
        'Curated and preprocessed multi-class network flow datasets with rigorous feature normalization.',
        'Engineered temporal and volumetric flow metrics (packet inter-arrival times, byte-to-packet ratios, flow duration).',
        'Evaluated multi-model architectures including ensemble trees and gradient boosting classifiers.',
        'Validated model robustness across class-imbalance scenarios using precision-recall and F1 benchmarks.'
      ],
      tools: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Network Telemetry', 'Matplotlib'],
      whatILearned: 'Data quality and feature representativeness matter vastly more than model complexity. In security contexts, false positives carry heavy operational overhead, making metric calibration essential.',
      currentStatus: 'Research presented at the 3rd International Conference on Computational Sciences and Applied Mathematics (ICCSAM 2026).',
      nextStep: 'Investigate lightweight edge-deployable inference pipelines for real-time packet stream categorization.',
      category: 'Data Science & Cybersecurity',
      githubUrl: '',
      demoUrl: '',
      datasetUrl: '',
      researchUrl: '',
      presentationUrl: ''
    },
    {
      id: 'proj-family-export',
      projectNumber: '02',
      title: 'Family Enterprise Global Export Expansion',
      tagline: 'Strategic international B2B market exploration, trade logistics, and cross-border supply chain modeling.',
      problem: 'Traditional manufacturing and regional commodity businesses often face growth ceilings in domestic markets due to localized price competition, distributor dependency, and fragmented margin realization.',
      idea: 'Develop an analytical framework to map overseas buyer demand, regulatory compliance requirements, cross-border freight economics, and direct B2B channel partnerships for high-margin global trade.',
      approach: [
        'Conducted structured secondary trade data analysis across target import markets in Southeast Asia and the Middle East.',
        'Mapped export certification compliance pathways, customs clearance protocols, and phytosanitary standards.',
        'Constructed unit-economics and container freight simulation worksheets in MS Excel to evaluate gross margin sensitivity.',
        'Designed direct outreach strategies for overseas distributor identification and sample validation.'
      ],
      tools: ['Market Research', 'MS Excel', 'Trade Logistics', 'B2B Negotiation', 'Supply Chain Analysis'],
      whatILearned: 'International trade is fundamentally built on documentation precision, risk management, and verified relationship channels. Operational friction in logistics can erase theoretical margins if not planned proactively.',
      currentStatus: 'Active exploration and market mapping phase.',
      nextStep: 'Validate buyer sample acceptance criteria and finalize pilot consignment trade logistics.',
      category: 'Venture & International Trade',
      githubUrl: '',
      demoUrl: '',
      datasetUrl: '',
      researchUrl: '',
      presentationUrl: ''
    },
    {
      id: 'proj-circular-economy',
      projectNumber: '03',
      title: 'Circular Economy & By-Product Monetization',
      tagline: 'Exploring value-added economic opportunities from agricultural and industrial processing waste streams.',
      problem: 'Agricultural and agro-processing operations generate substantial secondary by-products that are typically treated as disposal liabilities or sold for negligible scrap value, creating both ecological waste and economic loss.',
      idea: 'Identify bio-refinement, secondary processing, and upcycled product formulations that transform agricultural residue into high-value commercial inputs for consumer or industrial markets.',
      approach: [
        'Surveyed regional agro-industrial processing clusters to catalog primary waste stream volumes and compositions.',
        'Researched chemical and material properties of discarded organic by-products for secondary industrial utility.',
        'Modeled collection logistics, processing capital expenditure, and break-even recovery economics.',
        'Drafted pilot value proposition canvases for potential commercial buyers in sustainable packaging and soil enrichment.'
      ],
      tools: ['Systems Thinking', 'Material Flow Analysis', 'Financial Modeling', 'Sustainability Metrics'],
      whatILearned: 'Circular solutions only achieve scale when they are economically superior on unit cost, not merely environmentally desirable.',
      currentStatus: 'Concept exploration and feasibility study in progress.',
      nextStep: 'Conduct small-scale lab feasibility testing on sample residue conversion and evaluate pilot yield.',
      category: 'Venture & Sustainability',
      githubUrl: '',
      demoUrl: '',
      datasetUrl: '',
      researchUrl: '',
      presentationUrl: ''
    }
  ],
  builds: [
    {
      id: 'build-data-audit',
      title: 'Automated Tabular Data Quality & Anomaly Triage Engine',
      category: 'BUILDING NOW',
      stage: 'EXPERIMENT',
      whyItMatters: 'Data science teams spend up to 70% of their time manually diagnosing dirty datasets and silent formatting shifts.',
      whatImTrying: 'A lightweight Python library that generates statistical profiling, schema anomaly reports, and forensic audit trails automatically.',
      currentStageText: 'Building core rule heuristics and distribution drift detectors.',
      nextMove: 'Test engine against noisy real-world enterprise datasets from Kaggle and local businesses.',
      tags: ['Python', 'Data Quality', 'Automation', 'CLI Tool']
    },
    {
      id: 'build-export-hub',
      title: 'Cross-Border B2B Trade Margin Simulator',
      category: 'BUILDING NOW',
      stage: 'PROTOTYPE',
      whyItMatters: 'Small and medium exporters often miscalculate landed costs due to multi-tiered duties, FX volatility, and freight surcharges.',
      whatImTrying: 'An interactive financial worksheet and web tool that calculates true landed margin across diverse Incoterms (FOB, CIF, DDP).',
      currentStageText: 'Refining formula mechanics and FX fluctuation buffer models.',
      nextMove: 'Pilot model with live export inquiries from regional manufacturers.',
      tags: ['Financial Modeling', 'Export Logistics', 'MS Excel', 'Tooling']
    },
    {
      id: 'build-proto-journal',
      title: 'Interactive 20-Week Builder Reflection System',
      category: 'BUILDING NOW',
      stage: 'PROTOTYPE',
      whyItMatters: 'Accelerated learning occurs when daily building is paired with structured metacognitive reflection prompts.',
      whatImTrying: 'A dedicated personal retrospective web system integrated directly into this portfolio for weekly ProtoSem tracking.',
      currentStageText: 'Implemented and live within this portfolio workspace.',
      nextMove: 'Maintain daily logs throughout the entire 20-week incubator sprint.',
      tags: ['React', 'ProtoSem', 'Journaling', 'Knowledge Base']
    },
    {
      id: 'build-agro-waste',
      title: 'Agro-Residue Material Upcycling Framework',
      category: 'EXPLORING',
      stage: 'EXPLORING',
      whyItMatters: 'Bridging agricultural surplus with eco-packaging manufacturers to generate secondary farm revenues.',
      whatImTrying: 'Mapping regional Tamil Nadu agricultural processing clusters to pinpoint high-volume bio-waste outputs.',
      currentStageText: 'Conducting exploratory field interviews and literature synthesis.',
      nextMove: 'Identify 2 specific waste streams with immediate buyer demand.',
      tags: ['Circular Economy', 'Sustainability', 'Agritech']
    },
    {
      id: 'build-pg-prep',
      title: 'Adaptive Data Science & CS PG Entrance Preparation Tracker',
      category: 'EXPLORING',
      stage: 'IDEA',
      whyItMatters: 'Balancing rigorous coursework, ProtoSem incubation, and national competitive entrance exams requires disciplined topic tracking.',
      whatImTrying: 'A structured spaced-repetition and syllabus-coverage tracker for advanced mathematics, algorithms, and data structures.',
      currentStageText: 'Drafting syllabus breakdown and daily question-bank sprint quotas.',
      nextMove: 'Integrate past year paper analysis into weekly review routines.',
      tags: ['Research Prep', 'Academics', 'Study Systems']
    },
    {
      id: 'build-founder-pod',
      title: 'Student Entrepreneurship Audio Archive & Founder Micro-Stories',
      category: 'PARKED',
      stage: 'PAUSED',
      whyItMatters: 'Documenting the authentic, unpolished early journeys of first-time campus founders in Tier-2 innovation hubs.',
      whatImTrying: 'An intimate interview podcast series exploring early failure pivots, mentor navigation, and initial customer discovery.',
      currentStageText: 'Pilot episode concepts outlined; recording schedule paused during ProtoSem sprint.',
      nextMove: 'Resume production post ProtoSem midterm evaluations with campus incubator founders.',
      tags: ['Podcasting', 'LEED', 'Storytelling', 'Audio']
    }
  ],
  achievements: [
    {
      id: 'ach-merit-scholarship',
      title: 'Mahatma Gandhi Merit Scholarship',
      category: 'SCHOLARSHIP',
      awardedDate: 'March 26, 2026',
      awardingBody: 'Kumaraguru Institutions / KCLAS',
      recognition: 'Awarded for outstanding meritorious academic and leadership performance during Academic Year 2025–2026 across the institution.',
      signatories: ['Shri Shankar Vanavarayar (President, Kumaraguru Institutions)', 'Dr. Deepesh (Academic Authority)']
    },
    {
      id: 'ach-iccsam-conference',
      title: 'International Conference Paper Presentation',
      category: 'RESEARCH',
      awardedDate: 'August 18, 2026',
      awardingBody: '3rd International Conference on Computational Sciences and Applied Mathematics (ICCSAM 2026)',
      recognition: 'Selected and presented peer-reviewed research paper titled "Network Traffic Type Categorization Using Machine Learning" before international academic delegates.',
      paperDetails: {
        conference: '3rd International Conference on Computational Sciences and Applied Mathematics (ICCSAM 2026)',
        organizers: 'VET Institute of Arts and Science (VETIAS) in association with Asia Pacific University of Technology and Innovation (APU), Malaysia',
        presentationDate: 'August 18, 2026',
        paperTitle: 'Network Traffic Type Categorization Using Machine Learning',
        abstractText: 'With exponential growth in encrypted multi-protocol network traffic, rapid and accurate flow categorization is critical for proactive cybersecurity and adaptive network resource management. This research investigates the application of supervised machine learning classifiers trained on non-payload statistical flow telemetry (inter-arrival packet variance, flow duration, and byte distribution). Comparative evaluations demonstrate robust multi-class categorization performance and anomalous pattern isolation without infringing user data privacy.',
        slidesAvailable: true,
        presentationUrl: '',
        abstractUrl: '',
        paperUrl: ''
      },
      signatories: ['ICCSAM 2026 Conference Chairs', 'VETIAS & APU Academic Committee']
    }
  ],
  leadership: [
    {
      id: 'lead-leed',
      role: 'Director',
      organization: 'LEED (League of Entrepreneurs and Ecosystem Developers)',
      period: '2025 – Present',
      highlights: [
        'E-Summit: Led campus-wide entrepreneurship summit hosting founders, investors, and over 500+ student participants.',
        'Shark Tank: Conceptualized and executed campus live-pitch competition evaluating student startup models and seed prize grants.',
        'Founder Podcast Series: Produced and hosted insightful conversations dissecting early venture hurdles with active entrepreneurs.'
      ],
      description: 'Steering strategic entrepreneurial culture, startup incubation pipelines, and experiential venture programs across the university.',
      hasAudioWaveform: true,
      audioTitle: 'Founder Podcast Series — Episode Archive & Dialogue Excerpts'
    },
    {
      id: 'lead-class-rep',
      role: 'Class Representative',
      organization: 'B.Sc. Data Science Cohort, KCLAS',
      period: 'Academic Year 2024 – 2026',
      highlights: [
        'Student-Faculty Liaison: Mediating academic feedback, curriculum pacing, and scheduling requirements with departmental faculty.',
        'Cohort Coordination: Organizing peer study circles, practical lab schedules, and inter-departmental collaboration.',
        'Academic Workflow Management: Facilitating streamlined resource distribution and dispute resolution.'
      ],
      description: 'Serving as the primary elected bridge between the undergraduate student body and faculty leadership to foster an environment of academic excellence and mutual trust.'
    },
    {
      id: 'lead-namadhu-pangu',
      role: 'Volunteer',
      organization: 'Namadhu Pangu Community Outreach',
      period: '2024 – Present',
      highlights: [
        'Community Engagement: Facilitating rural educational workshops and community development drives in surrounding districts.',
        'Social Impact Operations: Coordinating grassroots logistics, volunteer mobilization, and field surveys.'
      ],
      description: 'Actively participating in social empathy initiatives, grassroots outreach, and community upliftment programs.'
    }
  ],
  gallery: [
    {
      id: 'gal-portrait',
      url: 'assets/dakshana_portrait.jpg',
      title: 'Dakshana Sri M — Editorial Portrait',
      caption: 'Student, builder, and future tech leader based in Coimbatore, Tamil Nadu.',
      date: '2026',
      context: 'Personal Archive',
      alt: 'Dakshana Sri M Editorial Portrait'
    },
    {
      id: 'gal-auditorium',
      url: 'assets/protosem_auditorium.jpg',
      title: 'Youth Entrepreneurship Summit',
      caption: 'ProtoSem Day 5 session in the university auditorium discussing customer-centric enterprise design.',
      date: 'February 2026',
      context: 'ProtoSem Week 0',
      alt: 'ProtoSem Auditorium Entrepreneurship Session'
    },
    {
      id: 'gal-team',
      url: 'assets/protosem_team_building.jpg',
      title: 'Hands-on Rapid Prototyping Sprint',
      caption: 'Beta team engaging in the Spaghetti Tower structural design and rapid iteration challenge.',
      date: 'February 2026',
      context: 'ProtoSem Week 0 Day 3',
      alt: 'ProtoSem Spaghetti Tower Challenge'
    },
    {
      id: 'gal-whiteboard',
      url: 'assets/protosem_whiteboard.jpg',
      title: 'Cognitive Mapping & Design Ideation',
      caption: 'Visualizing user journeys, 16 Personalities cognitive styles, and systemic problem vectors.',
      date: 'February 2026',
      context: 'ProtoSem Week 0 Day 2',
      alt: 'ProtoSem Whiteboard Ideation'
    }
  ],
  contact: {
    heading: "LET'S BUILD SOMETHING WORTH TALKING ABOUT.",
    subheading: 'Open for research collaborations, venture discussions, data science inquiries, and thoughtful exchanges.',
    email: 'dakshanasri.m@gmail.com',
    linkedin: 'https://linkedin.com/in/dakshana-sri',
    github: 'https://github.com/dakshanasri',
    kaggle: 'https://kaggle.com/dakshanasri',
    leetcode: 'https://leetcode.com/dakshanasri',
    location: 'Coimbatore, Tamil Nadu, India'
  }
};
