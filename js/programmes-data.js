/**
 * University of Kurdistan Hewlêr (UKH) - Academic Programmes Data
 * Structured across Study Levels and Academic Schools
 */

const UKH_PROGRAMMES = [
  {
    id: "ai-msc",
    title: "Artificial Intelligence",
    degree: "MSc",
    level: "Postgraduate",
    school: "Science & Engineering",
    duration: "1 Year Full-Time (or 2 Years Part-Time)",
    credits: "180 UK Credits (90 ECTS)",
    intake: "October 2026 & February 2027",
    language: "English",
    tuition: "$4,800 / year (Scholarships up to 50% available)",
    featured: true,
    badge: "High Demand",
    shortDesc: "Pioneering graduate programme exploring deep learning, generative AI, autonomous robotics, computer vision, and ethical AI implementation for modern industries.",
    fullDesc: "The Master of Science in Artificial Intelligence at UKH prepares forward-thinking technologists and researchers to pioneer next-generation computational systems. Students gain rigorous theoretical foundations and hands-on laboratory mastery in machine learning algorithms, natural language processing, neural computing, robotics, and cloud-scale AI architectures.",
    highlights: [
      "Access to UKH Advanced AI & GPU Computing Cluster",
      "Industry collaboration with leading tech firms in the KRG and abroad",
      "Opportunity for dual-research projects with European universities",
      "Capstone industry dissertation solving regional and global challenges"
    ],
    curriculum: [
      "Deep Learning & Neural Architectures",
      "Advanced Machine Learning & Statistical Modeling",
      "Computer Vision & Pattern Recognition",
      "Natural Language Processing & Generative AI",
      "Autonomous Systems & Applied Robotics",
      "AI Ethics, Policy & Algorithmic Governance",
      "Research Methodology & Master's Dissertation"
    ],
    requirements: [
      "BSc in Computer Science, Software Engineering, Mathematics, or closely related STEM discipline with minimum 65% aggregate score",
      "English Proficiency: IELTS 6.0 (or UKH English Placement Test equivalent)",
      "Statement of Purpose detailing proposed research interest",
      "Academic / Professional Interview"
    ],
    careerPaths: [
      "Machine Learning Engineer",
      "AI Research Scientist",
      "Data Science Lead",
      "Autonomous Systems Architect",
      "AI Product Strategist"
    ]
  },
  {
    id: "cs-bsc",
    title: "Computer Science",
    degree: "BSc",
    level: "Undergraduate",
    school: "Science & Engineering",
    duration: "4 Years Full-Time",
    credits: "480 UK Credits (240 ECTS)",
    intake: "October 2026",
    language: "English",
    tuition: "$4,200 / year (Merit-based scholarships available)",
    featured: true,
    badge: "Accredited",
    shortDesc: "Comprehensive British-standard computer science curriculum covering modern software development, data structures, cloud platforms, cybersecurity, and algorithms.",
    fullDesc: "UKH's flagship undergraduate Computer Science degree delivers rigorous computational fundamentals alongside modern applied software engineering skills. Aligned with British quality assurance benchmarks, the programme equips graduates to build complex software architectures, secure distributed applications, and intelligent systems.",
    highlights: [
      "100% graduate employment track record in regional & international tech sectors",
      "Modern development labs equipped with high-spec workstations and cloud access",
      "Year 3 professional internship placement semester",
      "Annual Hackathons, coding competitions, and ACM student chapter activities"
    ],
    curriculum: [
      "Year 1: Programming Fundamentals (Python/C++), Discrete Mathematics, Computer Systems Architecture, Web Foundations",
      "Year 2: Object-Oriented Software Design (Java), Data Structures & Algorithms, Database Systems, Operating Systems",
      "Year 3: Computer Networks & Security, Software Engineering Methodologies, Cloud Computing, Full-Stack Web Systems",
      "Year 4: Artificial Intelligence, Distributed Systems, Mobile Computing, Senior Capstone Project"
    ],
    requirements: [
      "High School Diploma (Scientific branch) with minimum 70% average",
      "English Proficiency: IELTS 5.5 or UKH Language Center level completion",
      "UKH entrance aptitude exam in mathematics and logic"
    ],
    careerPaths: [
      "Full-Stack Software Engineer",
      "Cloud Solutions Developer",
      "Systems Architect",
      "Cybersecurity Analyst",
      "Mobile App Developer"
    ]
  },
  {
    id: "ba-bsc",
    title: "Business Administration",
    degree: "BSc",
    level: "Undergraduate",
    school: "Management & Economics",
    duration: "4 Years Full-Time",
    credits: "480 UK Credits (240 ECTS)",
    intake: "October 2026",
    language: "English",
    tuition: "$3,800 / year (Corporate & Merit discounts available)",
    featured: true,
    badge: "Popular",
    shortDesc: "Strategic leadership, finance, global trade, marketing, and entrepreneurship taught through international case studies and executive simulations.",
    fullDesc: "The BSc in Business Administration at the UKH School of Management & Economics is engineered to nurture strategic thinkers, innovative entrepreneurs, and agile corporate leaders. Built on international business pedagogy, students master cross-cultural management, data-driven financial decision-making, digital marketing, and venture incubation.",
    highlights: [
      "UKH Center for Entrepreneurship & Innovation incubator access",
      "Guest executive lectures from multinational CEOs and government leaders",
      "Hands-on corporate consulting project in the final year",
      "International exchange opportunities with partner business schools"
    ],
    curriculum: [
      "Year 1: Principles of Management, Microeconomics, Financial Accounting, Business Communication",
      "Year 2: Corporate Finance, Marketing Management, Macroeconomics, Business Analytics & Statistics",
      "Year 3: Organizational Behavior, Operations Management, International Business Strategy, Digital Marketing",
      "Year 4: Strategic Management, Entrepreneurship & New Venture Creation, Corporate Law & Ethics, Undergraduate Thesis"
    ],
    requirements: [
      "High School Diploma (Scientific or Literary) with minimum 65% average",
      "English Proficiency: IELTS 5.5 or UKH English Placement equivalent",
      "Personal statement and admissions interview"
    ],
    careerPaths: [
      "Business Operations Manager",
      "Financial Analyst",
      "Marketing Strategist",
      "Management Consultant",
      "Venture Founder / Entrepreneur"
    ]
  },
  {
    id: "med-mbbs",
    title: "Medicine",
    degree: "MBBS",
    level: "Undergraduate",
    school: "Medicine",
    duration: "6 Years Full-Time",
    credits: "Integrated Clinical & Pre-Clinical",
    intake: "October 2026",
    language: "English",
    tuition: "$9,500 / year (Government and academic scholarships available)",
    featured: true,
    badge: "Prestigious",
    shortDesc: "Pioneering medical education conforming to WFME and General Medical Council standards with clinical simulation and hospital rotations.",
    fullDesc: "The UKH School of Medicine offers an exemplary 6-year Bachelor of Medicine, Bachelor of Surgery (MBBS) programme. Taught entirely in English by eminent international and regional clinicians, the curriculum integrates clinical training from Year 1 utilizing advanced 3D anatomical simulation tables, standardized patient clinics, and rotations at premier teaching hospitals in Erbil.",
    highlights: [
      "Accreditation recognized across the Middle East, UK, and European medical registries",
      "State-of-the-art Clinical Simulation Lab with high-fidelity robotic patient manikins",
      "Early clinical immersion and community health engagements",
      "Clinical rotations in general surgery, internal medicine, pediatrics, obstetrics, and emergency trauma"
    ],
    curriculum: [
      "Years 1-2: Clinical Foundations, Human Anatomy & Histology, Medical Biochemistry, Physiology, Immunology & Pathology",
      "Year 3: Pharmacology, Clinical Microbiology, Diagnostic Radiology, Introduction to Clinical Skills & Patient Communication",
      "Years 4-5: Hospital Rotations: Internal Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Psychiatry, Community Medicine",
      "Year 6: Pre-internship Clinical Clerkship, Emergency & Critical Care, Elective Sub-Specialties, Comprehensive Board Examinations"
    ],
    requirements: [
      "High School Baccalaureate (Scientific branch) with top 90%+ percentile",
      "English Proficiency: IELTS 6.5 or TOEFL iBT 80+",
      "Competitive UKH Medical Admissions Test (UMAT) and Multiple Mini Interviews (MMI)"
    ],
    careerPaths: [
      "Licensed Medical Doctor / Physician",
      "Surgical Resident",
      "Clinical Specialist",
      "Medical Researcher / Academic",
      "Global Health Consultant"
    ]
  },
  {
    id: "se-bsc",
    title: "Software Engineering",
    degree: "BSc",
    level: "Undergraduate",
    school: "Science & Engineering",
    duration: "4 Years Full-Time",
    credits: "480 UK Credits (240 ECTS)",
    intake: "October 2026",
    language: "English",
    tuition: "$4,200 / year",
    featured: false,
    badge: "Industry Favorite",
    shortDesc: "Focused on large-scale enterprise system design, DevOps pipelines, software security, test automation, and mobile-first architectural patterns.",
    fullDesc: "The Software Engineering degree concentrates on the rigorous discipline of architecting, constructing, and maintaining mission-critical software. Students master modern Agile workflows, continuous integration/continuous delivery (CI/CD), software metrics, secure code craftsmanship, and distributed microservices.",
    highlights: [
      "Hands-on studio projects mirroring real software agency workflows",
      "Partnership with GitHub Education, AWS Academy, and Microsoft Learn",
      "Dedicated semester dedicated to industry internships"
    ],
    curriculum: [
      "Software Architecture & Design Patterns",
      "Agile Methodologies & DevOps Pipelines",
      "Secure Coding & Software Quality Assurance",
      "Distributed Cloud Computing & Microservices",
      "Full-Stack Web & Mobile Engineering"
    ],
    requirements: [
      "High School Diploma (Scientific) with minimum 70%",
      "English Proficiency: IELTS 5.5+",
      "Passing UKH Entrance Test"
    ],
    careerPaths: [
      "Senior Software Engineer",
      "DevOps / SRE Specialist",
      "QA Automation Architect",
      "Mobile Systems Engineer"
    ]
  },
  {
    id: "ce-bsc",
    title: "Civil & Infrastructure Engineering",
    degree: "BSc",
    level: "Undergraduate",
    school: "Science & Engineering",
    duration: "4 Years Full-Time",
    credits: "480 UK Credits (240 ECTS)",
    intake: "October 2026",
    language: "English",
    tuition: "$4,400 / year",
    featured: false,
    badge: "STEM",
    shortDesc: "Design sustainable modern cities, earthquake-resilient structures, transportation networks, and sustainable water management systems.",
    fullDesc: "Equipping engineers to lead modern urban transformation across Kurdistan and beyond, this programme provides hands-on geotechnical, structural, materials, and environmental engineering training using state-of-the-art laboratory testing facilities and BIM software.",
    highlights: [
      "Full structural and soil mechanics physical testing laboratories",
      "AutoCAD, Revit BIM, and SAP2000 industrial certification modules",
      "Field excursions to active regional mega-construction sites"
    ],
    curriculum: [
      "Structural Analysis & Mechanics of Materials",
      "Reinforced Concrete & Steel Design",
      "Geotechnical & Foundation Engineering",
      "Hydrology & Water Resources Engineering",
      "Transportation Systems & Sustainable Smart Cities"
    ],
    requirements: [
      "High School Diploma (Scientific) with minimum 70% in Mathematics & Physics",
      "English Proficiency: IELTS 5.5+"
    ],
    careerPaths: [
      "Structural Project Engineer",
      "Infrastructure & Highway Planner",
      "Geotechnical Consultant",
      "Construction Project Manager"
    ]
  },
  {
    id: "mba-postgrad",
    title: "Master of Business Administration (MBA)",
    degree: "MBA",
    level: "Postgraduate",
    school: "Management & Economics",
    duration: "18 Months (Executive Evening & Weekend format)",
    credits: "180 UK Credits (90 ECTS)",
    intake: "October 2026 & February 2027",
    language: "English",
    tuition: "$6,200 total programme",
    featured: true,
    badge: "Executive",
    shortDesc: "Premier executive programme designed for rising managers, senior directors, and entrepreneurs seeking strategic leadership and board mastery.",
    fullDesc: "The UKH MBA is tailored for working professionals seeking transformational career acceleration. Through rigorous Harvard-style case analysis, financial modeling, leadership labs, and international faculty mentorship, participants cultivate the executive insight required to drive organizational growth in dynamic emerging markets.",
    highlights: [
      "Convenient evening and weekend schedule designed for working executives",
      "Unrivaled executive alumni network across regional industries, banking, and government",
      "Executive coaching and personal leadership development labs"
    ],
    curriculum: [
      "Executive Leadership & Change Management",
      "Strategic Financial Management & Valuation",
      "Global Marketing & Customer Insights",
      "Operations & Digital Transformation Strategy",
      "Corporate Governance & Business Law",
      "Applied Strategic Capstone Consulting Project"
    ],
    requirements: [
      "Bachelor's degree in any discipline with minimum 60% grade average",
      "Minimum 2 years of relevant professional work experience",
      "English Proficiency: IELTS 6.0 or UKH equivalent",
      "Executive admission interview & CV review"
    ],
    careerPaths: [
      "Chief Executive / Managing Director",
      "Management Consultant",
      "Director of Operations / Strategy",
      "Investment Portfolio Manager"
    ]
  },
  {
    id: "ir-ba",
    title: "International Relations & Diplomacy",
    degree: "BA",
    level: "Undergraduate",
    school: "Social Sciences",
    duration: "4 Years Full-Time",
    credits: "480 UK Credits (240 ECTS)",
    intake: "October 2026",
    language: "English",
    tuition: "$3,600 / year",
    featured: false,
    badge: "Policy & Law",
    shortDesc: "Explore global geopolitics, international treaty law, conflict resolution, diplomacy, and Middle Eastern political dynamics.",
    fullDesc: "UKH's School of Social Sciences delivers an internationally acclaimed degree in International Relations & Diplomacy. Positioned in the diplomatic hub of Erbil, students examine geopolitical strategy, international treaties, diplomatic protocols, human rights legislation, and peacebuilding mechanisms.",
    highlights: [
      "Direct engagement with foreign consulates, UN agencies, and regional diplomatic missions",
      "Annual UKH Model United Nations (MUN) simulation leadership",
      "Policy research internships at UKH Center for Regional Policy"
    ],
    curriculum: [
      "Theories of International Relations",
      "Geopolitics of the Middle East",
      "International Law & Human Rights",
      "Diplomatic Practice & Negotiation",
      "Global Security & Conflict Resolution",
      "Comparative Government & Foreign Policy"
    ],
    requirements: [
      "High School Diploma (Scientific or Literary) with minimum 65%",
      "English Proficiency: IELTS 5.5+"
    ],
    careerPaths: [
      "Diplomatic Foreign Service Officer",
      "UN & NGO Country Director",
      "Geopolitical Risk Analyst",
      "Public Policy Advisor"
    ]
  },
  {
    id: "politics-phd",
    title: "Politics & International Studies",
    degree: "PhD",
    level: "PhD",
    school: "Social Sciences",
    duration: "3-4 Years Full-Time Research",
    credits: "Doctoral Dissertation Defense",
    intake: "Rolling Admissions 2026-2027",
    language: "English",
    tuition: "$5,000 / year (Doctoral fellowships available)",
    featured: false,
    badge: "Doctorate",
    shortDesc: "Advanced doctoral research program in governance, regional security, democratization, and political economy in the Middle East.",
    fullDesc: "The PhD in Politics & International Studies offers an intellectual haven for doctoral scholars to conduct original, groundbreaking empirical and theoretical research under the mentorship of internationally published faculty.",
    highlights: [
      "Fellowship stipends and research conference travel grants",
      "Joint supervision with distinguished European and UK university scholars",
      "Access to comprehensive regional archives and UKH digital databases"
    ],
    curriculum: [
      "Advanced Qualitative & Quantitative Research Methodologies",
      "Doctoral Research Seminar & Colloquium",
      "Comprehensive Field Exam",
      "Doctoral Dissertation Defense & Peer-Reviewed Publishing"
    ],
    requirements: [
      "Master's degree (MA/MSc) in Political Science, IR, or related field with Merit/Distinction",
      "Comprehensive 3,000-word doctoral research proposal",
      "English Proficiency: IELTS 6.5+"
    ],
    careerPaths: [
      "University Professor / Tenured Scholar",
      "Think Tank Research Director",
      "Senior Governmental Geopolitical Strategist"
    ]
  },
  {
    id: "cs-phd",
    title: "Computer Science & Engineering",
    degree: "PhD",
    level: "PhD",
    school: "Science & Engineering",
    duration: "3-4 Years Full-Time Research",
    credits: "Doctoral Dissertation Defense",
    intake: "Rolling Admissions 2026-2027",
    language: "English",
    tuition: "$5,200 / year (Research assistantships available)",
    featured: false,
    badge: "Doctorate",
    shortDesc: "High-impact doctoral inquiry in deep learning, quantum computing algorithms, cybersecurity resilience, and intelligent systems.",
    fullDesc: "Our doctoral program in Computer Science and Engineering pushes the boundaries of computational science. Scholars work alongside leading principal investigators on funded research projects covering distributed systems, natural language processing for low-resource languages, smart grid optimization, and biometrics.",
    highlights: [
      "Direct computational resource allocation on UKH High-Performance Cluster",
      "Publication support in IEEE, ACM, and Nature journals",
      "Option to spend 6 months at partner research centers in Europe or the UK"
    ],
    curriculum: [
      "Advanced Computing Theory & Research Methodologies",
      "Doctoral Seminar in Frontier Computational Sciences",
      "Dissertation Proposal Defense",
      "Doctoral Dissertation & International Defense Examination"
    ],
    requirements: [
      "Master's degree (MSc) in Computer Science, Software Engineering, or related discipline with minimum 75%",
      "Comprehensive research proposal in AI, security, or distributed systems",
      "IELTS 6.5+"
    ],
    careerPaths: [
      "Principal AI Research Scientist",
      "Computer Science University Professor",
      "R&D Director at Global Technology Firms"
    ]
  },
  {
    id: "data-cert",
    title: "Executive Certificate in Data Science & Machine Learning",
    degree: "Certificate",
    level: "Short Courses",
    school: "Science & Engineering",
    duration: "12 Weeks (Saturdays & Evenings)",
    credits: "Professional Certificate & Continuing Education Units",
    intake: "Monthly Cohorts (Next: Nov 2026)",
    language: "English",
    tuition: "$950 total course",
    featured: false,
    badge: "Short Course",
    shortDesc: "Intensive, practical boot camp covering Python for data science, Pandas, Scikit-Learn, SQL, and predictive analytics for corporate decision-makers.",
    fullDesc: "Designed for working professionals wanting rapid upskilling without committing to a full degree. Covers practical data wrangling, exploratory analysis, machine learning models, and real-time visualization dashboards.",
    highlights: [
      "Portfolio of 4 real-world data science projects for your GitHub/LinkedIn",
      "Taught by senior data architects and industry practitioners",
      "Accredited UKH Professional Development Certificate"
    ],
    curriculum: [
      "Module 1: Python Programming for Data Analytics & SQL Foundations",
      "Module 2: Exploratory Data Analysis, Pandas, NumPy & Data Visualization",
      "Module 3: Machine Learning: Regression, Classification & Clustering",
      "Module 4: End-to-End Capstone Project & Model Deployment"
    ],
    requirements: [
      "Basic familiarity with computers and quantitative concepts; no previous coding required"
    ],
    careerPaths: [
      "Junior Data Analyst",
      "Business Intelligence Specialist",
      "Data-Driven Marketing Strategist"
    ]
  },
  {
    id: "finance-cert",
    title: "Certificate in Financial Analysis & FinTech",
    degree: "Certificate",
    level: "Short Courses",
    school: "Management & Economics",
    duration: "8 Weeks (Weekend format)",
    credits: "Professional Certificate",
    intake: "Next Cohort: December 2026",
    language: "English",
    tuition: "$850 total course",
    featured: false,
    badge: "Short Course",
    shortDesc: "Master financial statement analysis, corporate valuation, blockchain in banking, and algorithmic trading tools.",
    fullDesc: "Equipping banking and corporate professionals with modern analytical and FinTech competencies. Learn financial modeling in Excel/Python, valuation methods, digital payment rails, and regulatory compliance.",
    highlights: [
      "Hands-on financial modeling templates used by Wall Street & London investment banks",
      "Case studies of Middle East FinTech disruptors",
      "Networking with regional finance executives"
    ],
    curriculum: [
      "Financial Statement Modeling & Ratio Analysis",
      "Corporate Valuation & DCF Modeling",
      "FinTech, Blockchain & Digital Banking Ecosystems",
      "Risk Management & Investment Portfolio Simulation"
    ],
    requirements: [
      "Open to professionals in accounting, finance, or general management"
    ],
    careerPaths: [
      "Financial Analyst",
      "FinTech Specialist",
      "Treasury Operations Officer"
    ]
  },
  {
    id: "health-cert",
    title: "Clinical Emergency & Trauma Simulation Certificate",
    degree: "Certificate",
    level: "Short Courses",
    school: "Medicine",
    duration: "4 Weeks (Intensive Hands-On)",
    credits: "Continuing Medical Education (CME) Accredited",
    intake: "Bi-Monthly (Next: Nov 2026)",
    language: "English",
    tuition: "$750 total course",
    featured: false,
    badge: "Clinical CME",
    shortDesc: "High-intensity clinical simulation training for physicians, nurses, and EMTs covering advanced life support, trauma management, and triage.",
    fullDesc: "Utilizing the UKH School of Medicine's cutting-edge Clinical Simulation Lab, practitioners rehearse acute resuscitation, trauma response, difficult airway management, and rapid triage under simulated clinical crises.",
    highlights: [
      "Hands-on practice on robotic high-fidelity patient manikins",
      "International Basic and Advanced Cardiac Life Support (ACLS) standards",
      "Debriefing with certified trauma resuscitation surgeons"
    ],
    curriculum: [
      "Advanced Airway Management & Ventilation",
      "Trauma Team Leadership & Crisis Resource Management",
      "Pediatric & Adult Resuscitation Protocols",
      "High-Fidelity Simulated Code Scenarios"
    ],
    requirements: [
      "Medical degree (MBBS/MD), Nursing degree, or qualified Paramedic credential"
    ],
    careerPaths: [
      "Emergency Room Practitioner",
      "ICU Clinical Nurse",
      "Trauma Team Lead"
    ]
  }
];

// University Statistics
const UKH_STATS = [
  { value: "100%", label: "English Instruction", desc: "All degree programmes delivered in English" },
  { value: "98%", label: "Graduate Employment", desc: "Graduates employed or pursuing higher degrees within 6 months" },
  { value: "25+", label: "Accredited Degrees", desc: "Across 4 specialized schools" },
  { value: "15:1", label: "Student-to-Faculty", desc: "Personalized mentorship and small class sizes" },
  { value: "40+", label: "Global University Partners", desc: "In the UK, USA, Europe, and Asia" }
];

// Featured News & Events
const UKH_NEWS = [
  {
    id: 1,
    title: "UKH Launches State-of-the-Art AI & Robotics Research Lab in Collaboration with Global Tech Leaders",
    category: "Research",
    date: "October 1, 2026",
    readTime: "4 min read",
    image: "assets/images/research.jpg",
    excerpt: "The University of Kurdistan Hewlêr inaugurated its brand-new Advanced AI & Robotics Laboratory, equipped with high-performance GPU clusters to accelerate regional tech innovation and autonomous systems development.",
    content: "The University of Kurdistan Hewlêr (UKH) celebrated the opening of its multi-million dollar Advanced Artificial Intelligence and Robotics Research Laboratory. The facility serves both undergraduate and postgraduate scholars, featuring cutting-edge workstations, robotic arms, neural modeling suites, and collaboration spaces designed to incubate tech solutions for healthcare, infrastructure, and smart cities across the Kurdistan Region."
  },
  {
    id: 2,
    title: "School of Medicine Achieves Landmark Clinical Simulation Accreditation",
    category: "Academic",
    date: "September 24, 2026",
    readTime: "3 min read",
    image: "assets/images/medical_sciences.jpg",
    excerpt: "The UKH School of Medicine has been officially recognized for its world-class interactive 3D digital anatomical tables and computerized simulation hospital wards, setting new standards for healthcare education.",
    content: "Continuing its trajectory of clinical excellence, the UKH School of Medicine has secured premier international accreditation for its Clinical Simulation Lab. Medical students at UKH experience early clinical immersion using high-fidelity human patient simulators, interactive 3D anatomical touchscreens, and emergency trauma practice suites."
  },
  {
    id: 3,
    title: "Annual International Student & Cultural Festival 2026 Celebrates Campus Diversity",
    category: "Campus Life",
    date: "September 15, 2026",
    readTime: "5 min read",
    image: "assets/images/campus_life.jpg",
    excerpt: "Students, faculty, and international diplomats gathered on the UKH campus square for the vibrant annual culture fair, featuring traditional Kurdish music, international cuisine, robotics demos, and student club exhibits.",
    content: "The UKH campus was transformed into a bustling celebration of culture and community during the Annual Student Life & Culture Festival. With student societies showcasing robotics, debate, fine arts, and sports, the event highlighted UKH's vibrant campus atmosphere."
  }
];

// Upcoming Academic & Campus Events
const UKH_EVENTS = [
  {
    id: 1,
    month: "OCT",
    day: "14",
    year: "2026",
    title: "International Symposium on Kurdish Natural Language Processing & AI",
    time: "10:00 AM - 4:00 PM (AST)",
    location: "UKH Main Auditorium & Online Livestream",
    category: "Academic Conference",
    desc: "Keynote lectures by visiting scholars from Oxford and Cambridge on low-resource language modeling, speech synthesis, and neural machine translation for Kurdish dialects."
  },
  {
    id: 2,
    month: "OCT",
    day: "22",
    year: "2026",
    title: "Annual University Open Day & Admissions Fair 2026",
    time: "9:00 AM - 5:00 PM (AST)",
    location: "Campus Central Plaza & School Foyers",
    category: "Admissions Event",
    desc: "Meet academic deans, explore state-of-the-art simulation laboratories, consult with admissions officers, and discover undergraduate and graduate scholarship pathways."
  },
  {
    id: 3,
    month: "NOV",
    day: "05",
    year: "2026",
    title: "Erbil Global Health & Clinical Simulation Workshop",
    time: "11:00 AM - 3:30 PM (AST)",
    location: "UKH School of Medicine Simulation Suites",
    category: "Clinical Workshop",
    desc: "Hands-on emergency trauma protocols and advanced cardiac resuscitation training led by European clinical education consultants."
  },
  {
    id: 4,
    month: "NOV",
    day: "18",
    year: "2026",
    title: "TEDxUKH 2026: Catalysts of Regional Transformation",
    time: "1:00 PM - 7:00 PM (AST)",
    location: "Hewlêr Arts & Cultural Hall",
    category: "Campus Life",
    desc: "Visionary talks by student entrepreneurs, tech founders, environmental researchers, and diplomatic leaders inspiring the next generation."
  }
];

// Leading University Researchers & Faculty
const UKH_RESEARCHERS = [
  {
    id: "r1",
    name: "Prof. Dr. Ariane Rostami",
    title: "Chair of Artificial Intelligence & Computational Linguistics",
    school: "School of Science & Engineering",
    domain: "Deep Learning, Natural Language Processing, Low-Resource Dialects",
    publicationsCount: 64,
    citations: "1,820",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Ph.D. from Imperial College London. Principal investigator of the Kurdish Foundation Models initiative, funded by international research consortia."
  },
  {
    id: "r2",
    name: "Dr. Kovan M. Sherwani",
    title: "Director of Clinical Simulation & Senior Consultant Surgeon",
    school: "School of Medicine",
    domain: "Clinical Simulation, Emergency Trauma Protocols, Medical AI",
    publicationsCount: 42,
    citations: "1,240",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    bio: "Fellow of the Royal College of Surgeons (FRCS). Oversees WFME clinical accreditation and emergency simulation research at UKH."
  },
  {
    id: "r3",
    name: "Dr. Leyla Barzani",
    title: "Director of the Centre for Regional Policy & Peace Studies",
    school: "School of Social Sciences",
    domain: "Middle East Geopolitics, Constitutional Governance, Peacebuilding",
    publicationsCount: 38,
    citations: "980",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Former visiting fellow at Sciences Po Paris. Specializes in regional economic diversification, diplomacy, and cross-border environmental governance."
  },
  {
    id: "r4",
    name: "Dr. Dana Farooq",
    title: "Associate Professor of Sustainable Infrastructure Engineering",
    school: "School of Science & Engineering",
    domain: "Water Resource Hydrology, Seismic Resilience, Smart Materials",
    publicationsCount: 31,
    citations: "790",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Ph.D. from University of Manchester. Leading regional groundwater preservation and drought mitigation research for the Kurdistan Region."
  }
];

// High-Impact Peer-Reviewed Publications
const UKH_PUBLICATIONS = [
  {
    title: "KurdoLLM: Pre-trained Transformer Architectures for Low-Resource Kurdish Dialects",
    authors: "Rostami, A., Mustafa, H., & Evans, G.",
    journal: "Transactions of the Association for Computational Linguistics (TACL)",
    year: "2026",
    doi: "10.1162/tacl_a_00582",
    category: "Artificial Intelligence"
  },
  {
    title: "Efficacy of High-Fidelity 3D Simulation in Undergraduate Emergency Trauma Clerkships",
    authors: "Sherwani, K. M., Al-Bayati, S., & Thorne, C.",
    journal: "The Lancet Regional Health - Medical Education",
    year: "2026",
    doi: "10.1016/j.lanepe.2025.100912",
    category: "Medicine"
  },
  {
    title: "Groundwater Depletion and Climate Adaptation Pathways in the Erbil Basin",
    authors: "Farooq, D., & Jensen, M.",
    journal: "Journal of Hydrology & Environmental Management",
    year: "2025",
    doi: "10.1016/j.jhydrol.2025.131104",
    category: "Environment"
  },
  {
    title: "Energy Diversification and Sovereign Wealth Strategy in Post-Oil Middle Eastern Economies",
    authors: "Barzani, L., & Henderson, P.",
    journal: "Middle East Policy & International Affairs Review",
    year: "2025",
    doi: "10.1111/mepo.12740",
    category: "Social Sciences"
  }
];

// Helper to get programme by ID or default to MSc AI
function getProgrammeById(id) {
  return UKH_PROGRAMMES.find(p => p.id === id) || UKH_PROGRAMMES[0];
}

