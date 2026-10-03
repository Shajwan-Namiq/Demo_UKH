/**
 * University of Kurdistan Hewlêr (UKH) - Intelligent Academic AI Engine
 * Provides client-side institutional intelligence, programme discovery, 
 * admissions guidance, semantic search, and chat capabilities.
 */

const ukhKnowledgeBase = {
  institution: {
    name: "University of Kurdistan Hewlêr (UKH)",
    established: 2006,
    founder: "President Nechirvan Barzani",
    location: "30 Metre Avenue, Erbil, Kurdistan Region, Iraq",
    language: "English (100% English-medium instruction)",
    accreditation: "Ministry of Higher Education and Scientific Research (KRG) & benchmarked to British Quality Assurance (QAA)",
    motto: "Discover. Learn. Research. Lead.",
    ranking: "#1 English-Medium University in the Kurdistan Region and Iraq",
    academicYear: "2026–2027",
    admissionsStatus: "Applications Open for Fall 2026 Intake"
  },

  programmes: [
    {
      id: "msc-ai",
      title: "MSc Artificial Intelligence",
      degree: "Master of Science (MSc)",
      level: "Postgraduate",
      school: "School of Science & Engineering",
      interest: "Artificial Intelligence",
      duration: "1 Year Full-Time / 2 Years Part-Time",
      credits: "180 UK Credits / 90 ECTS",
      matchScore: 99,
      tags: ["Deep Learning", "Kurdish NLP", "Computer Vision", "Robotics", "Neural Networks"],
      summary: "Advanced postgraduate training in machine learning, neural networks, natural language processing, and autonomous systems with direct research focus on Kurdish language technologies.",
      entryRequirements: "Bachelor's degree in Computer Science, Software Engineering, Mathematics, or related STEM field with minimum GPA 2.8/4.0 (or UK 2:1 equivalent). English proficiency: IELTS 6.5 or UKH English Test.",
      careerOpportunities: ["AI Research Scientist", "Machine Learning Engineer", "Computer Vision Specialist", "Data Science Director", "Robotics Algorithm Engineer"],
      coreModules: ["Deep Learning & Neural Architectures", "Natural Language Processing & Speech", "Computer Vision & Autonomous Systems", "Ethics in AI & Algorithmic Fairness", "MSc Dissertation Project"]
    },
    {
      id: "bsc-cs",
      title: "BSc Computer Science",
      degree: "Bachelor of Science (BSc Hons)",
      level: "Undergraduate",
      school: "School of Science & Engineering",
      interest: "Computer Science",
      duration: "4 Years Full-Time",
      credits: "480 UK Credits / 240 ECTS",
      matchScore: 98,
      tags: ["Software Engineering", "Algorithms", "Cloud Computing", "Cybersecurity", "Web Technologies"],
      summary: "Comprehensive British-benchmarked computing education preparing graduates to architect enterprise software, distributed cloud systems, and cybersecurity defenses.",
      entryRequirements: "High School Scientific Track with minimum 65% aggregate score. English proficiency: IELTS 6.0 or passing UKH English Proficiency Examination.",
      careerOpportunities: ["Full-Stack Software Engineer", "Systems Architect", "Cloud DevOps Engineer", "Cybersecurity Analyst", "Database Engineer"],
      coreModules: ["Data Structures & Algorithms", "Object-Oriented Programming (Java/C++)", "Computer Architecture", "Database Systems & SQL", "Cloud & Distributed Systems", "Final Year Capstone Project"]
    },
    {
      id: "bsc-se",
      title: "BSc Software Engineering",
      degree: "Bachelor of Science (BSc Hons)",
      level: "Undergraduate",
      school: "School of Science & Engineering",
      interest: "Computer Science",
      duration: "4 Years Full-Time",
      credits: "480 UK Credits / 240 ECTS",
      matchScore: 96,
      tags: ["Agile Dev", "Mobile Apps", "Microservices", "DevOps", "QA Testing"],
      summary: "Focuses on the systematic design, development, testing, and lifecycle maintenance of mission-critical software systems using modern DevOps workflows.",
      entryRequirements: "High School Scientific Stream with 65%+ score. Passing UKH English Language Proficiency Test.",
      careerOpportunities: ["Lead Software Engineer", "Mobile App Developer (iOS/Android)", "DevOps Specialist", "QA Automation Engineer"],
      coreModules: ["Software Lifecycle & Agile", "Web & Mobile Development", "Software Design Patterns", "DevOps & CI/CD", "Enterprise Architecture"]
    },
    {
      id: "beng-civil",
      title: "BEng Civil & Infrastructure Engineering",
      degree: "Bachelor of Engineering (BEng Hons)",
      level: "Undergraduate",
      school: "School of Science & Engineering",
      interest: "Engineering",
      duration: "4 Years Full-Time",
      credits: "480 UK Credits / 240 ECTS",
      matchScore: 95,
      tags: ["Structural Analysis", "Geotechnical", "Hydraulics", "BIM", "Sustainable Infrastructure"],
      summary: "Prepares engineers to build resilient infrastructure, transportation networks, water management projects, and smart sustainable cities across the Middle East.",
      entryRequirements: "High School Scientific Track with 70%+ score with strong marks in Physics and Mathematics.",
      careerOpportunities: ["Structural Engineer", "Project Director", "Site Engineer", "Water Resource Consultant", "Urban Infrastructure Planner"],
      coreModules: ["Structural Mechanics", "Fluid Mechanics & Hydraulics", "Geotechnical Engineering", "Reinforced Concrete Design", "BIM & Project Management"]
    },
    {
      id: "beng-petroleum",
      title: "BEng Natural Resources & Energy Engineering",
      degree: "Bachelor of Engineering (BEng Hons)",
      level: "Undergraduate",
      school: "School of Science & Engineering",
      interest: "Engineering",
      duration: "4 Years Full-Time",
      credits: "480 UK Credits / 240 ECTS",
      matchScore: 94,
      tags: ["Petroleum Systems", "Renewable Energy", "Reservoir Modeling", "Geothermal", "HSE Standards"],
      summary: "Equips students with modern petroleum engineering techniques integrated with renewable transition technologies such as solar and geothermal energy.",
      entryRequirements: "High School Scientific Stream (70%+ aggregate). English proficiency certificate.",
      careerOpportunities: ["Energy Systems Analyst", "Drilling & Reservoir Engineer", "Renewable Energy Project Manager", "HSE Specialist"],
      coreModules: ["Reservoir Fluid Thermodynamics", "Drilling Technology", "Renewable Energy Systems", "Environmental Impact Assessment", "Energy Transition Capstone"]
    },
    {
      id: "bba-business",
      title: "BSc Business Administration",
      degree: "Bachelor of Science (BSc Hons)",
      level: "Undergraduate",
      school: "School of Management & Economics",
      interest: "Business",
      duration: "4 Years Full-Time",
      credits: "480 UK Credits / 240 ECTS",
      matchScore: 97,
      tags: ["Finance", "Strategic Management", "Marketing", "Supply Chain", "Entrepreneurship"],
      summary: "UK-accredited business curriculum developing leadership acumen, financial analytical prowess, and strategic management in regional and global markets.",
      entryRequirements: "High School Certificate (Scientific, Literary, or Commercial tracks) with minimum 60% aggregate.",
      careerOpportunities: ["Management Consultant", "Corporate Financial Analyst", "Marketing Director", "Operations Manager", "Venture Entrepreneur"],
      coreModules: ["Principles of Management", "Financial Accounting & Reporting", "Corporate Strategy", "Digital Marketing", "International Business Law", "Business Capstone"]
    },
    {
      id: "mba-exec",
      title: "Master of Business Administration (MBA)",
      degree: "Master of Business Administration (MBA)",
      level: "Postgraduate",
      school: "School of Management & Economics",
      interest: "Business",
      duration: "18 Months Executive Format",
      credits: "180 UK Credits / 90 ECTS",
      matchScore: 99,
      tags: ["Executive Leadership", "Corporate Finance", "Mergers & Acquisitions", "Global Strategy"],
      summary: "The Kurdistan Region's leading executive MBA program designed for senior managers, entrepreneurs, and high-impact leaders.",
      entryRequirements: "Recognized Bachelor degree (any field) with minimum 2.8 GPA and at least 2 years of relevant professional managerial experience.",
      careerOpportunities: ["Chief Executive Officer (CEO)", "Chief Operating Officer (COO)", "Senior Director", "Strategy Consultant", "Investment Banker"],
      coreModules: ["Executive Decision Analytics", "Strategic Financial Management", "Global Marketing Strategy", "Organizational Behavior & Change", "Strategic Business Transformation"]
    },
    {
      id: "mbchb-medicine",
      title: "Bachelor of Medicine & Surgery (MBChB)",
      degree: "Bachelor of Medicine & Bachelor of Surgery (MBChB)",
      level: "Undergraduate",
      school: "School of Medicine",
      interest: "Medicine",
      duration: "6 Years Full-Time",
      credits: "Integrated Clinical Curriculum",
      matchScore: 99,
      tags: ["Clinical Medicine", "Anatomy", "Surgery", "Pathology", "Public Health", "Hospital Rotations"],
      summary: "A premier British-modelled 6-year medical degree combining preclinical scientific grounding with early clinical rotations at premier teaching hospitals in Erbil.",
      entryRequirements: "High School Scientific Track with 85%+ aggregate (or equivalent Kurdistani/International Baccalaureate score). Rigorous medical admissions interview and English test.",
      careerOpportunities: ["Medical Doctor / Physician", "Surgeon", "Clinical Specialist", "Medical Academic Researcher", "Hospital Administrator"],
      coreModules: ["Human Anatomy & Histology", "Medical Physiology", "Pharmacology & Therapeutics", "Clinical Pathology", "Internal Medicine Rotations", "General Surgery & Trauma", "Pediatrics & Obstetrics"]
    },
    {
      id: "msc-public-health",
      title: "MSc International Public Health & Epidemiology",
      degree: "Master of Science (MSc)",
      level: "Postgraduate",
      school: "School of Medicine",
      interest: "Medicine",
      duration: "1 Year Full-Time / 2 Years Part-Time",
      credits: "180 UK Credits / 90 ECTS",
      matchScore: 95,
      tags: ["Epidemiology", "Biostatistics", "Health Policy", "Global Disease Control"],
      summary: "Prepares health leaders to manage healthcare systems, conduct epidemiological research, and formulate regional disease prevention policies.",
      entryRequirements: "Bachelor degree in Medicine, Nursing, Pharmacy, Dentistry, or Biological Sciences with minimum 2.8 GPA.",
      careerOpportunities: ["Public Health Director", "Epidemiologist", "WHO Consultant", "Hospital Quality Officer"],
      coreModules: ["Advanced Epidemiology", "Biostatistical Methods", "Health Systems Management", "Environmental & Occupational Health", "Public Health Thesis"]
    },
    {
      id: "ba-ir",
      title: "BA International Relations & Diplomacy",
      degree: "Bachelor of Arts (BA Hons)",
      level: "Undergraduate",
      school: "School of Social Sciences",
      interest: "Social Sciences",
      duration: "4 Years Full-Time",
      credits: "480 UK Credits / 240 ECTS",
      matchScore: 97,
      tags: ["Diplomacy", "Middle East Geopolitics", "International Law", "Foreign Policy", "Conflict Resolution"],
      summary: "Explores the dynamics of Middle Eastern foreign policy, international law, diplomatic negotiation, and global security governance.",
      entryRequirements: "High School Certificate (Scientific or Literary) with minimum 60% aggregate. Proficiency in English.",
      careerOpportunities: ["Diplomat / Foreign Affairs Officer", "Policy Advisor", "United Nations / NGO Specialist", "Political Risk Analyst", "Geopolitical Journalist"],
      coreModules: ["Theories of International Relations", "Middle Eastern Geopolitics", "Public International Law", "Diplomatic Protocol & Negotiation", "Security Studies"]
    },
    {
      id: "ma-peace",
      title: "MA Conflict Resolution & Peacebuilding",
      degree: "Master of Arts (MA)",
      level: "Postgraduate",
      school: "School of Social Sciences",
      interest: "Social Sciences",
      duration: "1 Year Full-Time / 2 Years Part-Time",
      credits: "180 UK Credits / 90 ECTS",
      matchScore: 94,
      tags: ["Peacebuilding", "Human Rights", "Post-Conflict Recovery", "Mediation", "Transitional Justice"],
      summary: "Specialized postgraduate program addressing regional peace architectures, community reconciliation, transitional justice, and international mediation.",
      entryRequirements: "Bachelor's degree in Social Sciences, Humanities, Law, or related disciplines with minimum 2.8 GPA.",
      careerOpportunities: ["Peacebuilding Specialist", "Human Rights Director", "Senior Mediator", "International Development Officer"],
      coreModules: ["Conflict Analysis & Transformation", "Mediation & Negotiation Workshop", "Transitional Justice & Human Rights", "Post-Conflict Reconstruction", "MA Dissertation"]
    },
    {
      id: "phd-cs",
      title: "PhD in Computer Science & Artificial Intelligence",
      degree: "Doctor of Philosophy (PhD)",
      level: "PhD",
      school: "School of Science & Engineering",
      interest: "Artificial Intelligence",
      duration: "3–4 Years Full-Time",
      credits: "Research Thesis",
      matchScore: 99,
      tags: ["Doctoral Research", "LLMs for Kurdish", "Speech Synthesis", "HPC", "Autonomous Systems"],
      summary: "Rigorous doctoral research program pushing the boundaries of AI, low-resource NLP for Kurdish dialects, computer vision, and applied machine intelligence.",
      entryRequirements: "Master's degree in Computer Science, AI, or related field with minimum 3.2 GPA, a recognized research proposal, and supervisor agreement.",
      careerOpportunities: ["University Professor", "Principal AI Scientist", "R&D Director", "Research Institute Fellow"],
      coreModules: ["Advanced Research Methodologies", "Doctoral Seminar Series", "Peer-Reviewed Journal Publishing", "Doctoral Dissertation Defense"]
    }
  ],

  admissionsGuide: {
    undergraduate: {
      title: "Undergraduate Application Track",
      deadlines: "Early Decision: July 15, 2026 | Regular Intake: September 10, 2026",
      requirements: [
        "Official 12th Grade High School Certificate (Attested by KRG Ministry of Education)",
        "Minimum 60% aggregate (65% for Engineering/CS, 85% for Medicine)",
        "English Language Proficiency (IELTS 6.0 / TOEFL iBT 70 or UKH Placement Test)",
        "Clear color copy of National ID / Passport",
        "4 recent passport-size photographs",
        "Completed Online Application Form & 50,000 IQD application fee"
      ],
      steps: [
        "Step 1: Choose your programme using our AI Finder",
        "Step 2: Verify high school stream requirements (Scientific vs Literary)",
        "Step 3: Sit for the UKH English Language Proficiency Test if needed",
        "Step 4: Upload attested transcripts to the UKH Admissions Portal",
        "Step 5: Attend academic interview (required for Medicine & Engineering)"
      ]
    },
    postgraduate: {
      title: "Postgraduate & Masters Track",
      deadlines: "Round 1: June 30, 2026 | Round 2: August 25, 2026",
      requirements: [
        "Recognized Bachelor's degree with minimum GPA 2.8/4.0 (or UK 2:1 equivalent)",
        "Official university transcripts and graduation certificate attested by Ministry of Higher Education",
        "English Language Proficiency: IELTS 6.5 or UKH ELC Certificate",
        "Two Academic or Professional Letters of Recommendation",
        "Statement of Purpose (500–800 words) detailing research or career goals",
        "Curriculum Vitae (CV) demonstrating professional background"
      ],
      steps: [
        "Step 1: Identify your Master's or PhD programme",
        "Step 2: Prepare research proposal (for PhD and research Master's)",
        "Step 3: Submit application dossier online via UKH Portal",
        "Step 4: Departmental admissions interview",
        "Step 5: Receive unconditional or conditional offer letter"
      ]
    },
    international: {
      title: "International Students Track",
      deadlines: "Priority Visa Deadline: July 1, 2026 | Final Deadline: August 15, 2026",
      requirements: [
        "High school or bachelor credentials with Ministry of Foreign Affairs attestation & English translation",
        "Valid passport with at least 18 months validity remaining",
        "UKH International Student Visa Sponsorship Support Letter",
        "Financial proof of funding / scholarship confirmation",
        "Medical screening certification upon arrival in Erbil"
      ],
      steps: [
        "Step 1: Submit international dossier online",
        "Step 2: Receive Letter of Acceptance & Visa Approval document",
        "Step 3: Book on-campus housing in UKH International Residence Halls",
        "Step 4: Airport reception & Erbil orientation by UKH International Office"
      ]
    }
  },

  scholarships: [
    {
      name: "President Nechirvan Barzani Academic Merit Award",
      coverage: "100% Tuition Waiver for entire degree",
      eligibility: "Top 5% high school graduates in Kurdistan Region or applicants with 95%+ high school score."
    },
    {
      name: "Women in STEM & AI Excellence Grant",
      coverage: "50% Tuition Waiver",
      eligibility: "Female candidates accepted into Computer Science, AI, or Engineering degrees."
    },
    {
      name: "Regional Public Service Fellowship",
      coverage: "30% - 50% Tuition Discount",
      eligibility: "Employees of public institutions and children of fallen Peshmerga heroes."
    },
    {
      name: "Family & Sibling Discount",
      coverage: "15% Tuition Reduction",
      eligibility: "Granted to siblings simultaneously enrolled at UKH."
    }
  ],

  research: {
    headline: "Research That Drives Regional Innovation & Global Knowledge",
    centres: [
      {
        name: "Centre for Artificial Intelligence & Kurdish Language Technologies (CAIKLT)",
        lead: "Dr. Sherko Ali, Chair of Machine Intelligence",
        focus: "Large Language Models for Sorani and Kurmanji Kurdish, speech synthesis, sentiment analysis, OCR for historical Kurdish manuscripts.",
        keyProject: "KurdishGPT: The first multi-dialect foundational model trained on 15B Kurdish tokens."
      },
      {
        name: "Centre for Energy Transition & Environmental Sustainability",
        lead: "Prof. Alan Farhad, Energy Systems Directorate",
        focus: "Smart water infrastructure for Kurdistan, solar microgrid deployment in Erbil, carbon capture in petroleum facilities.",
        keyProject: "Erbil Aquifer Sustainability Project in partnership with UNDP."
      },
      {
        name: "Centre for Heritage Preservation & Digital Archaeology",
        lead: "Dr. Tara Nawzad, Senior Fellow in Computational Heritage",
        focus: "Laser scanning and 3D digital twins of the ancient Erbil Citadel (UNESCO World Heritage Site).",
        keyProject: "Erbil Citadel Virtual Heritage Simulation."
      },
      {
        name: "Oncology & Molecular Genetics Laboratory",
        lead: "Dr. Baban Rostam, School of Medicine",
        focus: "Genetic profiling of regional oncological diseases and clinical pharmacology.",
        keyProject: "Kurdistan Genome Project: Mapping regional hereditary markers."
      }
    ]
  },

  campusLife: {
    facilities: [
      { name: "UKH Central Library", details: "3-storey academic library with over 45,000 volumes, 24/7 digital journal access via JSTOR and IEEE Xplore, silent study carrels, and collaborative research pods." },
      { name: "High-Performance Computing Lab", details: "Dedicated GPU clusters powered by NVIDIA A100s for AI training, machine vision research, and data simulations." },
      { name: "Sports & Recreation Centre", details: "Multi-court indoor sports complex for basketball, volleyball, table tennis, fully-equipped gym, and university soccer pitch." },
      { name: "UKH Student Center & Cafeteria", details: "Vibrant social hub with artisan coffee bars, outdoor garden terrace, student union lounge, and games room." },
      { name: "Student Accommodation", details: "Modern, secure on-campus and adjacent residential apartments with high-speed fiber internet, housekeeping, and 24/7 campus security." }
    ],
    clubs: [
      "UKH Robotics & AI Club",
      "Model United Nations (MUN) Society",
      "Debate and Public Speaking Club",
      "Kurdistan Heritage & Arts Society",
      "Women in Tech & Leadership",
      "UKH Music and Cultural Collective",
      "Medical Students Association (UKHMSA)",
      "Sports & Outdoor Adventures Club"
    ]
  },

  personalization: {
    prospective: [
      {
        icon: "🧭",
        title: "Find Your Best Degree",
        desc: "Use our interactive AI Programme Finder to match your personal interests and career aspirations with UKH degrees.",
        ctaText: "Launch AI Finder",
        ctaAction: "finder"
      },
      {
        icon: "📋",
        title: "Admissions & Entry Criteria",
        desc: "Review high school requirements, minimum scores, English test schedules, and the 2026 application roadmap.",
        ctaText: "Admissions Roadmap",
        ctaAction: "admissions"
      },
      {
        icon: "💰",
        title: "Scholarships & Financial Aid",
        desc: "Explore merit-based scholarships up to 100% tuition coverage for top graduates and Women in STEM grants.",
        ctaText: "Check Scholarships",
        ctaAction: "scholarships"
      }
    ],
    current: [
      {
        icon: "💻",
        title: "UKH Moodle & Portal",
        desc: "Direct access to syllabus materials, module assignments, academic timetables, and lecture video archives.",
        ctaText: "Access Student Portal",
        ctaAction: "portal"
      },
      {
        icon: "📚",
        title: "24/7 Digital Library",
        desc: "Search JSTOR, IEEE Xplore, and reserve collaborative study pods or high-performance GPU workstations.",
        ctaText: "Library Catalog",
        ctaAction: "library"
      },
      {
        icon: "🤝",
        title: "Career Services & Internships",
        desc: "Book 1-on-1 CV advisory sessions, mock technical interviews, and apply for exclusive partner corporate placements.",
        ctaText: "Career Center",
        ctaAction: "careers"
      }
    ],
    researcher: [
      {
        icon: "🔬",
        title: "Kurdish AI Research Cluster",
        desc: "Access NVIDIA A100 GPU compute clusters and Kurdish language corpora for NLP, computer vision, and speech experiments.",
        ctaText: "Explore Research Labs",
        ctaAction: "research"
      },
      {
        icon: "📜",
        title: "Grant Funding & Publications",
        desc: "Institutional seed grants up to $15,000 for interdisciplinary research addressing Middle Eastern challenges.",
        ctaText: "Funding Guidelines",
        ctaAction: "funding"
      },
      {
        icon: "🌐",
        title: "Global University Consortia",
        desc: "Collaborative research and dual-doctorate supervisory frameworks with renowned UK and European universities.",
        ctaText: "Partner Institutions",
        ctaAction: "partners"
      }
    ],
    faculty: [
      {
        icon: "🏛️",
        title: "Academic Portal & Grading",
        desc: "Submit course syllabi, verify student attendance records, record semester grades, and post course announcements.",
        ctaText: "Faculty Intranet",
        ctaAction: "faculty-portal"
      },
      {
        icon: "📖",
        title: "Curriculum Innovation",
        desc: "Resources for British QAA quality benchmark alignment, outcome-based syllabus design, and laboratory enhancements.",
        ctaText: "Teaching Resources",
        ctaAction: "curriculum"
      },
      {
        icon: "📅",
        title: "Academic Governance",
        desc: "Access University Senate resolutions, academic council minutes, and departmental committee schedules.",
        ctaText: "Senate Records",
        ctaAction: "governance"
      }
    ],
    alumni: [
      {
        icon: "🌐",
        title: "Global Alumni Network",
        desc: "Connect with over 4,000 UKH graduates working in tech, healthcare, diplomacy, and global leadership across 30+ nations.",
        ctaText: "Alumni Directory",
        ctaAction: "alumni-dir"
      },
      {
        icon: "🎓",
        title: "Executive & Lifelong Learning",
        desc: "Special 20% alumni tuition discount on all Executive MBA, MSc Artificial Intelligence, and professional certificates.",
        ctaText: "View Postgrad Programs",
        ctaAction: "postgrad"
      },
      {
        icon: "🌟",
        title: "Mentorship & Giving Back",
        desc: "Mentor ambitious undergraduate students, host guest lectures, or offer internship placements at your organization.",
        ctaText: "Join Mentor Network",
        ctaAction: "mentor"
      }
    ]
  },

  faqs: [
    {
      q: "Which programmes are available in Artificial Intelligence?",
      keywords: ["ai", "artificial intelligence", "machine learning", "deep learning", "nlp"],
      a: "UKH offers the **MSc in Artificial Intelligence** (1 year full-time or 2 years part-time) through the School of Science & Engineering. We also offer a **BSc in Computer Science** with an AI specialization track and a **PhD in Computer Science & AI**. Key research includes Kurdish Language Technologies, Deep Learning, and Computer Vision.",
      linkText: "View MSc Artificial Intelligence",
      linkUrl: "programme-detail.html?id=msc-ai"
    },
    {
      q: "What are the admission requirements?",
      keywords: ["admission", "requirements", "entry", "gpa", "qualifications", "prerequisites", "ielts", "toefl"],
      a: "Admission requirements depend on the level:\n• **Undergraduate:** High School Certificate (min. 60% for Business/Social Sciences, 65% for Engineering/CS, 85% for Medicine).\n• **Postgraduate:** Recognized Bachelor degree with minimum 2.8/4.0 GPA.\n• **English:** IELTS 6.0+ (UG) or 6.5+ (PG), or passing the official UKH English Proficiency Test.",
      linkText: "Explore Admissions Guide",
      linkUrl: "admissions.html"
    },
    {
      q: "How can I apply to UKH?",
      keywords: ["apply", "application", "how to apply", "process", "register", "enroll"],
      a: "Applying to UKH is completed in 5 simple steps:\n1. Choose your programme via our AI Finder.\n2. Check specific department entry criteria.\n3. Prepare your attested transcripts, passport copy, and photos.\n4. Submit your online application via our Admissions Portal.\n5. Complete your interview or English placement test and receive your offer letter!",
      linkText: "Start Application Now",
      linkUrl: "admissions.html#applicationSteps"
    },
    {
      q: "What scholarships are available?",
      keywords: ["scholarship", "financial aid", "discount", "merit", "funding", "waiver", "tuition fees"],
      a: "UKH offers multiple prestigious scholarship programs:\n• **Nechirvan Barzani Academic Merit Award:** Up to 100% full tuition waiver for top 5% ranked high school students.\n• **Women in STEM & AI Excellence Grant:** 50% tuition reduction for female engineers and scientists.\n• **Public Service Fellowship:** 30–50% tuition reduction for civil servants.\n• **Family Sibling Discount:** 15% tuition waiver for siblings.",
      linkText: "Learn About Scholarships",
      linkUrl: "admissions.html#scholarshipsSection"
    },
    {
      q: "Tell me about student life at UKH.",
      keywords: ["student life", "campus", "clubs", "activities", "sports", "accommodation", "dorm", "housing", "library"],
      a: "Student life at UKH is vibrant and international! Located in the heart of Erbil on 30 Metre Avenue, the campus features 18+ active student societies (including the AI Club, Debate Society, and MUN), state-of-the-art sports facilities, a 3-storey library with 24/7 digital access, modern dormitories, and frequent campus cultural festivals.",
      linkText: "Explore Student Life",
      linkUrl: "student-life.html"
    },
    {
      q: "I want to study AI but I have a Computer Science degree. What can I study at UKH?",
      keywords: ["study ai", "have a computer science degree", "cs degree", "postgraduate ai", "after cs"],
      a: "With a Computer Science degree, you are an ideal candidate for our **MSc in Artificial Intelligence**! This 1-year postgraduate programme provides specialized modules in Deep Learning, Kurdish NLP, Computer Vision, and Autonomous Robotics. Candidates with a GPA of 2.8+ are eligible for direct consideration.",
      linkText: "Explore MSc Artificial Intelligence",
      linkUrl: "programme-detail.html?id=msc-ai"
    },
    {
      q: "How do I apply for postgraduate study?",
      keywords: ["postgraduate study", "masters application", "apply for masters", "phd application", "apply for postgraduate"],
      a: "Postgraduate applications require your verified Bachelor's degree transcript, proof of English (IELTS 6.5 or UKH ELC test), a 500-word Statement of Purpose, and two academic/professional reference letters. The admissions portal is open for Fall 2026 intake.",
      linkText: "Go to Postgraduate Admissions",
      linkUrl: "admissions.html#postgradTrack"
    },
    {
      q: "Which research centres work on AI?",
      keywords: ["research centres", "work on ai", "caiklt", "kurdish nlp", "ai research", "research supervisors"],
      a: "The **Centre for Artificial Intelligence & Kurdish Language Technologies (CAIKLT)** is UKH's flagship AI research hub. Led by Dr. Sherko Ali, CAIKLT focuses on Kurdish LLMs (KurdishGPT), machine translation, and speech processing for low-resource languages.",
      linkText: "Explore Research at UKH",
      linkUrl: "research.html"
    },
    {
      q: "Where can I find the library?",
      keywords: ["where can i find the library", "library", "books", "study space", "library hours"],
      a: "The UKH Central Library is located in Building B, adjacent to the main academic quadrangle. It spans 3 storeys with quiet reading rooms, collaborative tech pods, and 24/7 digital access to IEEE, Springer, and JSTOR databases.",
      linkText: "View Campus Facilities",
      linkUrl: "student-life.html#campusFacilities"
    },
    {
      q: "What student clubs are available?",
      keywords: ["what student clubs are available", "clubs", "societies", "robotics club", "debate club"],
      a: "UKH hosts over 18 student-led societies including the **Robotics & AI Club**, **Model United Nations**, **Debate Society**, **Women in Tech**, **Medical Students Association**, and the **Music Collective**. Clubs meet weekly and represent UKH at national and international competitions.",
      linkText: "View All Student Clubs",
      linkUrl: "student-life.html#studentClubs"
    },
    {
      q: "Where can I find sports facilities?",
      keywords: ["sports", "gym", "football", "fitness", "facilities", "basketball"],
      a: "Our indoor sports pavilion and fitness center are located on the western wing of the campus. It includes an indoor basketball/volleyball court, modern weight gym with certified coaches, and an outdoor football pitch.",
      linkText: "See Sports at UKH",
      linkUrl: "student-life.html#sportsSection"
    },
    {
      q: "What services are available for students?",
      keywords: ["services", "support", "career", "counseling", "clinic", "student affairs"],
      a: "UKH provides comprehensive student support including: Career & Internship Placement Office, Academic Tutoring & Writing Center, Student Health Clinic, Psychological Counseling Services, and the International Student Office.",
      linkText: "View Student Services",
      linkUrl: "student-life.html#studentServices"
    }
  ],

  personalizationData: {
    "prospective": {
      role: "Prospective Student",
      badge: "🎓 Future UKH Leader",
      headline: "Begin Your Academic Journey at UKH",
      description: "Explore our British-benchmarked degree programmes, check admissions criteria, and discover scholarship opportunities.",
      cards: [
        { title: "Find Your Degree", desc: "Browse 13+ accredited Bachelor's, Master's, and Doctoral programs in English.", action: "Explore Programmes", url: "programmes.html", icon: "📚" },
        { title: "Admissions & Entry Criteria", desc: "Detailed requirements for high school and university graduates.", action: "View Requirements", url: "admissions.html", icon: "📋" },
        { title: "Scholarships & Awards", desc: "Merit-based tuition waivers up to 100% for top-achieving students.", action: "View Scholarships", url: "admissions.html#scholarshipsSection", icon: "✨" },
        { title: "Apply for 2026–2027", desc: "Submit your online application through the official admissions wizard.", action: "Start Application", url: "#", isApplyModal: true, icon: "🚀" }
      ]
    },
    "current": {
      role: "Current Student",
      badge: "📚 Active UKH Student",
      headline: "Welcome to Your UKH Digital Campus Hub",
      description: "Quick access to your academic portals, learning management systems, course registration, and campus services.",
      cards: [
        { title: "Student Information System (SIS)", desc: "View semester grades, GPA transcripts, tuition statements, and course schedules.", action: "Launch SIS Portal", url: "https://sis.ukh.edu.krd", isExternal: true, icon: "💻" },
        { title: "Moodle Learning Platform", desc: "Access lecture slides, submit assignments, and take quizzes for current courses.", action: "Go to Moodle VLE", url: "https://vle.ukh.edu.krd", isExternal: true, icon: "📖" },
        { title: "Central Library & Journals", desc: "Search over 500,000 digital academic articles on IEEE, ScienceDirect, and JSTOR.", action: "Search Library", url: "student-life.html#campusFacilities", icon: "🏛️" },
        { title: "Clubs & Campus Activities", desc: "Get involved in 18+ student societies, collegiate tournaments, and campus events.", action: "Explore Campus Life", url: "student-life.html#studentClubs", icon: "⚽" }
      ]
    },
    "researcher": {
      role: "Researcher & Academic",
      badge: "🔬 Scientific Investigator",
      headline: "Accelerating High-Impact Research at UKH",
      description: "Collaborate with UKH research centres, access high-performance computing clusters, and view recent faculty publications.",
      cards: [
        { title: "Research Centres & Labs", desc: "CAIKLT AI Centre, Environmental Sustainability Hub, and Erbil Heritage Lab.", action: "Explore Centres", url: "research.html#researchCentres", icon: "🧪" },
        { title: "Kurdish NLP & AI Repository", desc: "Access datasets, Kurdish foundational models, and open research benchmarks.", action: "View AI Research", url: "research.html#featuredResearch", icon: "🤖" },
        { title: "Faculty Publications", desc: "Browse peer-reviewed articles published in Nature, IEEE, and Springer by UKH scholars.", action: "View Publications", url: "research.html#publicationsSection", icon: "📄" },
        { title: "Research Grants & Funding", desc: "Apply for university seed funding, regional grants, and Horizon Europe partnerships.", action: "Research Office", url: "research.html", icon: "💡" }
      ]
    },
    "faculty": {
      role: "Faculty Member",
      badge: "🏛️ UKH Academic Staff",
      headline: "Faculty Administration & Academic Governance",
      description: "Resources for lecturers, department chairs, curriculum development, and institutional quality assurance.",
      cards: [
        { title: "Staff Portal & Intranet", desc: "Manage grading, attendance, syllabus submissions, and department memos.", action: "Staff Intranet", url: "https://staff.ukh.edu.krd", isExternal: true, icon: "🔐" },
        { title: "Academic Calendar 2026–2027", desc: "Important dates for semester terms, reading weeks, and final exam periods.", action: "View Academic Calendar", url: "index.html#eventsSection", icon: "📅" },
        { title: "Quality Assurance & QAA", desc: "British QAA quality benchmarks, student feedback surveys, and course review tools.", action: "QA Guidelines", url: "admissions.html", icon: "⭐" },
        { title: "Research Ethics Board (REB)", desc: "Submit research ethics proposals and clinical trial clearance documentation.", action: "Submit to REB", url: "research.html", icon: "🛡️" }
      ]
    },
    "alumni": {
      role: "Alumni",
      badge: "🌐 UKH Global Alumni",
      headline: "Stay Connected With Your Alma Mater",
      description: "Join over 4,000 UKH graduates holding leadership positions across Kurdistan, the Middle East, Europe, and North America.",
      cards: [
        { title: "Alumni Network & Directory", desc: "Connect with fellow graduates working in tech, healthcare, government, and finance.", action: "Join Network", url: "index.html#whyUKH", icon: "🤝" },
        { title: "Official Transcript Service", desc: "Order official attested degree certificates and academic transcript packages.", action: "Order Transcripts", url: "admissions.html", icon: "📜" },
        { title: "Student Mentorship Program", desc: "Mentor graduating seniors and offer internship placements at your company.", action: "Become a Mentor", url: "student-life.html", icon: "🌟" },
        { title: "UKH Alumni Endowment Fund", desc: "Support scholarships for promising underprivileged students from across the region.", action: "Give to UKH", url: "index.html#ctaSection", icon: "🎁" }
      ]
    }
  }
};

/**
 * Intelligent AI Engine for Natural Language Querying & Recommendations
 */
const ukhAIEngine = {
  /**
   * Universal search and assistant answer synthesizer
   */
  askAssistant(userQuery) {
    if (!userQuery || userQuery.trim().length === 0) {
      return {
        answer: "Please ask a question about UKH programmes, admissions, campus facilities, or scholarships.",
        suggestions: ["Which programmes are available in AI?", "What are the admission requirements?", "What scholarships are available?"]
      };
    }

    const cleanQuery = userQuery.toLowerCase().trim();

    // 1. Direct match with knowledge base FAQ entries
    for (const faq of ukhKnowledgeBase.faqs) {
      const matchFound = faq.keywords.some(kw => cleanQuery.includes(kw));
      if (matchFound) {
        return {
          answer: faq.a,
          linkText: faq.linkText,
          linkUrl: faq.linkUrl,
          relatedProgrammes: this.findRelatedProgrammes(cleanQuery),
          suggestions: this.getSuggestedPrompts(cleanQuery)
        };
      }
    }

    // 2. Keyword-based programme matching
    const matchedProgrammes = this.findRelatedProgrammes(cleanQuery);
    if (matchedProgrammes.length > 0) {
      const topProg = matchedProgrammes[0];
      return {
        answer: `I found **${matchedProgrammes.length} programme(s)** at UKH that match your inquiry. Our standout option is **${topProg.title}** (${topProg.level}) in the *${topProg.school}*. It features courses in ${topProg.tags.slice(0, 3).join(", ")}.`,
        linkText: `View ${topProg.title}`,
        linkUrl: `programme-detail.html?id=${topProg.id}`,
        relatedProgrammes: matchedProgrammes,
        suggestions: ["What are the admission requirements?", "How can I apply?", "Are scholarships available?"]
      };
    }

    // 3. Admissions criteria queries
    if (cleanQuery.includes("admission") || cleanQuery.includes("apply") || cleanQuery.includes("gpa") || cleanQuery.includes("deadline")) {
      return {
        answer: `Applications are currently open for the **2026–2027 Academic Year**! UKH admissions require an attested high school certificate (or Bachelor's degree for postgraduate programs) and demonstrated English proficiency (IELTS or the UKH English test). Our AI Admissions Guide can step you through each phase.`,
        linkText: "Open Admissions Guide",
        linkUrl: "admissions.html",
        suggestions: ["Undergraduate requirements", "Postgraduate requirements", "Scholarship options"]
      };
    }

    // 4. Default intelligent fallback with university context
    return {
      answer: `Thank you for your question about the **University of Kurdistan Hewlêr (UKH)**. As Kurdistan's premier English-medium university, UKH offers internationally benchmarked undergraduate and postgraduate degrees across our Schools of Science & Engineering, Medicine, Management & Economics, and Social Sciences. Would you like me to guide you to our programmes, admissions, or research initiatives?`,
      linkText: "Explore All Programmes",
      linkUrl: "programmes.html",
      suggestions: [
        "Which programmes are available in Artificial Intelligence?",
        "What are the admission requirements?",
        "Tell me about student life at UKH",
        "What scholarships are available?"
      ]
    };
  },

  /**
   * Helper to retrieve programmes matching query keywords
   */
  findRelatedProgrammes(query) {
    const q = query.toLowerCase();
    return ukhKnowledgeBase.programmes.filter(p => {
      const titleMatch = p.title.toLowerCase().includes(q);
      const interestMatch = p.interest.toLowerCase().includes(q);
      const tagMatch = p.tags.some(t => q.includes(t.toLowerCase()) || t.toLowerCase().includes(q));
      const schoolMatch = p.school.toLowerCase().includes(q);
      return titleMatch || interestMatch || tagMatch || schoolMatch;
    });
  },

  /**
   * AI Programme Finder algorithm
   */
  recommendProgrammes(interest, level) {
    let matches = ukhKnowledgeBase.programmes;

    if (interest && interest !== "All") {
      matches = matches.filter(p => p.interest.toLowerCase() === interest.toLowerCase());
    }

    if (level && level !== "All") {
      matches = matches.filter(p => p.level.toLowerCase() === level.toLowerCase());
    }

    // If no exact combination, return interest matches regardless of level
    if (matches.length === 0 && interest && interest !== "All") {
      matches = ukhKnowledgeBase.programmes.filter(p => p.interest.toLowerCase() === interest.toLowerCase());
    }

    return matches;
  },

  /**
   * Program-specific simulated AI responses for programme-detail.html
   */
  getProgrammeAIAnswer(programmeId, questionType) {
    const prog = ukhKnowledgeBase.programmes.find(p => p.id === programmeId) || ukhKnowledgeBase.programmes[0];

    switch (questionType) {
      case "study":
        return `In **${prog.title}**, you will complete **${prog.credits}** of British-benchmarked coursework. Core subjects include: **${prog.coreModules.join(", ")}**. Teaching takes place in state-of-the-art labs with hands-on capstone projects.`;
      
      case "careers":
        return `Graduates of **${prog.title}** excel in both regional and multinational organizations. Prominent career pathways include: **${prog.careerOpportunities.join(", ")}**. UKH has a 94% graduate employment rate within 6 months.`;
      
      case "entry":
        return `Entry criteria for **${prog.title}**:\n• **Academic Background:** ${prog.entryRequirements}\n• **Language Requirement:** All instruction is in English. IELTS 6.0+ (UG) or 6.5+ (PG), or take the on-campus UKH English Test.`;
      
      case "duration":
        return `The duration for **${prog.title}** is **${prog.duration}**. Academic semesters run from October to February (Fall) and March to June (Spring), followed by the summer dissertation/internship period.`;
      
      case "suitability":
        return `**${prog.title}** is ideal for motivated students seeking rigorous British-standard education in ${prog.interest}. If you want to lead technological, medical, or commercial advancement in the Kurdistan Region and globally, this curriculum is tailored for you.`;
      
      default:
        return `${prog.title} is an accredited degree delivered by the ${prog.school}. Feel free to ask our admissions advisors for full syllabus details.`;
    }
  },

  /**
   * Interactive Admissions Step Guidance
   */
  getAdmissionsGuidance(level, field, hasQualification) {
    const track = ukhKnowledgeBase.admissionsGuide[level.toLowerCase()] || ukhKnowledgeBase.admissionsGuide.undergraduate;
    
    let pathSummary = `### Recommended Application Path for ${level} in ${field}\n\n`;
    
    if (hasQualification === "yes") {
      pathSummary += `✅ **Immediate Eligibility Confirmed:** Since you already hold the required qualification, you are fast-tracked for Fall 2026 intake.\n\n`;
    } else {
      pathSummary += `⏳ **Conditional Admissions Track:** As a final-year student, you may apply with your preliminary predicted transcripts and receive a **Conditional Offer Letter**.\n\n`;
    }

    pathSummary += `**Important Deadlines:** ${track.deadlines}\n\n`;
    pathSummary += `**Required Documentation Checklist:**\n`;
    track.requirements.forEach(req => {
      pathSummary += `• ${req}\n`;
    });

    return pathSummary;
  },

  /**
   * Helper suggestions generator
   */
  getSuggestedPrompts(cleanQuery) {
    if (cleanQuery.includes("ai") || cleanQuery.includes("computer")) {
      return ["MSc Artificial Intelligence details", "BSc Computer Science modules", "Scholarships for STEM"];
    }
    if (cleanQuery.includes("admission") || cleanQuery.includes("apply")) {
      return ["Undergraduate deadlines", "Postgraduate GPA requirements", "English test waiver"];
    }
    return [
      "Which programmes are available in Artificial Intelligence?",
      "What are the admission requirements?",
      "Tell me about student life at UKH",
      "What scholarships are available?"
    ];
  }
};

// Expose globally
window.ukhKnowledgeBase = ukhKnowledgeBase;
window.ukhAIEngine = ukhAIEngine;
