// Course catalog data for Techorbit
export const courseCategories = [
  {
    id: 'next-gen',
    name: 'Next Gen Technologies',
    iconName: 'Brain',
    description: 'Master cutting-edge AI and emerging technologies',
    courses: ['ai-ml', 'fullstack-ai', '5g-technology']
  },
  {
    id: 'hardware',
    name: 'Hardware & Manufacturing',
    iconName: 'Cpu',
    description: 'Build and design cutting-edge hardware systems',
    courses: ['drone-technology', '3d-printing']
  },
  {
    id: 'security',
    name: 'Cyber Security',
    iconName: 'Shield',
    description: 'Protect systems from digital threats',
    courses: ['cybersecurity']
  }
];

export const courses = [
  // AI/ML Course
  {
    slug: 'ai-ml',
    title: 'AI & Machine Learning',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '6 months',
    mode: 'Online / Classroom',
    level: 'Intermediate to Advanced',
    description: 'Comprehensive Artificial Intelligence and Machine Learning program covering neural networks, deep learning, NLP, computer vision, and real-world AI applications. Build intelligent systems from scratch and deploy production-ready ML models.',
    shortDescription: 'Master AI, Deep Learning & ML Engineering',
    image: '/images/courses/ai-ml.jpg',
    tools: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Hugging Face', 'LangChain', 'Keras'],
    highlights: ['Hands-on AI projects', 'Deep learning mastery', 'NLP & Computer Vision', 'Generative AI', 'Industry mentorship'],
    curriculum: [
      { title: 'Python & Data Science Foundations', topics: ['Python programming', 'NumPy & Pandas', 'Data visualization', 'Statistical analysis', 'Data preprocessing'] },
      { title: 'Machine Learning Fundamentals', topics: ['Supervised learning', 'Unsupervised learning', 'Model evaluation', 'Feature engineering', 'Ensemble methods'] },
      { title: 'Deep Learning & Neural Networks', topics: ['Neural network architecture', 'CNNs for computer vision', 'RNNs & LSTMs', 'Transfer learning', 'Model optimization'] },
      { title: 'Natural Language Processing', topics: ['Text processing', 'Sentiment analysis', 'Transformers & BERT', 'Language models', 'Chatbot development'] },
      { title: 'Computer Vision', topics: ['Image processing', 'Object detection', 'Image segmentation', 'Face recognition', 'Video analysis'] },
      { title: 'Generative AI & LLMs', topics: ['GPT & Large Language Models', 'Prompt engineering', 'RAG applications', 'Fine-tuning LLMs', 'AI agents & automation'] },
      { title: 'MLOps & Deployment', topics: ['Model deployment', 'Docker & Kubernetes', 'ML pipelines', 'Monitoring & maintenance', 'Cloud ML services'] },
      { title: 'Capstone Project', topics: ['End-to-end AI project', 'Industry problem solving', 'Production deployment', 'Portfolio building'] }
    ],
    outcomes: ['AI/ML Engineer', 'Data Scientist', 'Deep Learning Engineer', 'NLP Engineer', 'Computer Vision Engineer', 'MLOps Engineer']
  },
  // Full Stack AI Course (from brochure)
  {
    slug: 'fullstack-ai',
    title: 'Full Stack AI',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '6 months',
    mode: 'Offline Classroom',
    level: 'Beginner to Advanced',
    description: 'Master both MERN Stack development and Agentic AI in one comprehensive program. Build intelligent web applications where your React frontend connects to AI-powered backends that can understand natural language, process documents, and make decisions autonomously.',
    shortDescription: 'MERN Stack + Agentic AI Engineering',
    image: '/images/courses/fullstack-ai.jpg',
    tools: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'LangChain', 'LangGraph', 'OpenAI API', 'Claude API'],
    highlights: ['20+ real projects', '100% hands-on', 'MERN + AI integration', 'Industry-ready portfolio', 'Offline classroom learning'],
    curriculum: [
      { title: 'Python Fundamentals', topics: ['Python basics', 'OOP', 'Data structures', 'Error handling', 'File operations'] },
      { title: 'JavaScript Fundamentals', topics: ['ES6+ syntax', 'DOM manipulation', 'Async/await', 'Closures', 'Modules'] },
      { title: 'React.js Frontend', topics: ['Components & hooks', 'State management', 'React Router', 'Redux Toolkit', 'Performance optimization'] },
      { title: 'Node.js & Express Backend', topics: ['REST APIs', 'Authentication', 'Middleware', 'File uploads', 'Security'] },
      { title: 'MongoDB Database', topics: ['Document model', 'Mongoose ODM', 'Aggregation', 'Indexing', 'Cloud deployment'] },
      { title: 'Full Stack Integration', topics: ['API integration', 'Socket.io', 'GraphQL', 'Testing', 'Error handling'] },
      { title: 'LLM & AI Foundations', topics: ['Transformer architecture', 'Prompt engineering', 'API integration', 'Embeddings', 'Vector databases'] },
      { title: 'Agentic AI Development', topics: ['LangChain framework', 'RAG systems', 'AI agents', 'Tool calling', 'Multi-agent systems'] },
      { title: 'Production AI Systems', topics: ['Deployment', 'Monitoring', 'Scaling', 'Cost optimization', 'Security'] },
      { title: 'Capstone Project', topics: ['Full stack AI application', 'End-to-end deployment', 'Portfolio project'] }
    ],
    outcomes: ['Full Stack AI Engineer', 'AI Application Developer', 'MERN Stack Developer', 'LLM Engineer', 'Product Engineer']
  },
  // Drone Technology Course
  {
    slug: 'drone-technology',
    title: 'Drone Technology',
    category: 'hardware',
    categoryName: 'Hardware & Manufacturing',
    duration: '6 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Comprehensive drone engineering course covering flight dynamics, autopilot systems, sensor integration, and autonomous navigation. Learn to design, build, and program professional UAVs for industrial applications.',
    shortDescription: 'Build and program professional drones',
    image: '/images/courses/drone-technology.jpg',
    tools: ['PX4 Autopilot', 'ArduPilot', 'QGroundControl', 'Mission Planner', 'MAVLink', 'ROS', 'SolidWorks'],
    highlights: ['Hands-on drone building', 'Autonomous navigation', 'Sensor fusion', 'Field testing', 'Industry applications'],
    curriculum: [
      { title: 'Drone Fundamentals & Aerodynamics', topics: ['Multirotor configurations', 'Flight dynamics', 'Aerodynamic principles', 'Frame design', 'Lift & thrust calculations'] },
      { title: 'Autopilot & Flight Control Systems', topics: ['PX4/ArduPilot platforms', 'Flight controller hardware', 'Firmware installation', 'Ground control stations', 'Flight modes'] },
      { title: 'Sensor Integration & Calibration', topics: ['IMU sensors', 'GPS/RTK integration', 'Magnetometer', 'Barometer', 'Calibration procedures', 'Vibration isolation'] },
      { title: 'Power Management & Propulsion', topics: ['Battery chemistry (LiPo/Li-ion)', 'Motor-propeller matching', 'ESC configuration', 'Power distribution', 'Flight time optimization'] },
      { title: 'Sensors & Navigation', topics: ['GPS/RTK integration', 'Sensor fusion (EKF)', 'PID tuning', 'Waypoint navigation', 'LiDAR & obstacle avoidance'] },
      { title: 'Control Algorithms & PID Tuning', topics: ['PID control theory', 'Rate controllers', 'Attitude controllers', 'Tuning methodology', 'Advanced control strategies'] },
      { title: 'Autonomous Navigation', topics: ['Waypoint missions', 'Return-to-home', 'Geofencing', 'Vision-based navigation', 'Swarm coordination'] },
      { title: 'Field Testing & Applications', topics: ['Pre-flight checklists', 'Flight testing', 'Troubleshooting', 'Agricultural drones', 'Surveying & mapping', 'Inspection drones'] }
    ],
    outcomes: ['Drone Engineer', 'UAV Developer', 'Robotics Engineer', 'Agricultural Drone Specialist', 'Surveying Technician', 'Drone Pilot']
  },
  // 3D Printing Course
  {
    slug: '3d-printing',
    title: '3D Printing & Additive Manufacturing',
    category: 'hardware',
    categoryName: 'Hardware & Manufacturing',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Beginner to Intermediate',
    description: 'Master 3D printing technologies from design to production. Learn FDM, SLA, SLS technologies, CAD modeling, slicing software, and industrial additive manufacturing processes for rapid prototyping and production.',
    shortDescription: 'Master additive manufacturing technologies',
    image: '/images/courses/3d-printing.jpg',
    tools: ['Fusion 360', 'Blender', 'Cura', 'PrusaSlicer', 'SolidWorks', 'Meshmixer', 'Tinkercad'],
    highlights: ['Hands-on printing', 'Multiple technologies', 'CAD modeling', 'Material science', 'Industry applications'],
    curriculum: [
      { title: '3D Printing Fundamentals', topics: ['Additive manufacturing principles', 'FDM technology', 'SLA/DLP technology', 'SLS & metal printing', 'Technology comparison'] },
      { title: 'CAD Design for 3D Printing', topics: ['Fusion 360 essentials', 'Design for additive manufacturing', 'Parametric modeling', 'Organic modeling with Blender', 'STL optimization'] },
      { title: 'Slicing & Print Preparation', topics: ['Slicer software mastery', 'Support structures', 'Infill patterns', 'Print orientation', 'Quality settings'] },
      { title: 'Materials & Properties', topics: ['PLA/ABS/PETG filaments', 'Specialty materials', 'Resins & photopolymers', 'Material selection', 'Storage & handling'] },
      { title: 'Post-Processing Techniques', topics: ['Support removal', 'Sanding & finishing', 'Painting & coating', 'Assembly techniques', 'Quality inspection'] },
      { title: 'Industrial Applications', topics: ['Rapid prototyping', 'Functional parts', 'Medical applications', 'Aerospace components', 'Automotive parts'] },
      { title: 'Capstone Project', topics: ['Complete product design', 'Multi-part assemblies', 'Client project', 'Portfolio development'] }
    ],
    outcomes: ['3D Printing Technician', 'Additive Manufacturing Engineer', 'Prototyping Specialist', 'Product Designer', 'CAD Engineer', 'Manufacturing Engineer']
  },
  // 5G Technology Course
  {
    slug: '5g-technology',
    title: '5G Technology',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master 5G wireless technology including network architecture, spectrum management, deployment strategies, and next-gen applications. Prepare for careers in telecom and IoT with hands-on 5G network configuration.',
    shortDescription: 'Next-gen wireless communications',
    image: '/images/courses/5g-technology.jpg',
    tools: ['Network simulators', 'Wireshark', 'MATLAB', 'RF analyzers', '5G NR tools', 'LTE/NR Protocol analyzers'],
    highlights: ['Network architecture', 'RF engineering', 'Deployment planning', 'IoT integration', 'Industry certification prep'],
    curriculum: [
      { title: '5G Fundamentals', topics: ['Evolution from 4G to 5G', '5G NR architecture', 'Spectrum bands', 'Key capabilities (eMBB, URLLC, mMTC)', '5G standards'] },
      { title: 'Radio Access Network', topics: ['Massive MIMO', 'Beamforming techniques', 'mmWave technology', 'Small cells', 'Antenna systems'] },
      { title: 'Core Network Architecture', topics: ['5G Core (5GC)', 'Network slicing', 'Service-based architecture', 'Control & user plane separation', 'Edge computing'] },
      { title: 'Protocol Stack & Signaling', topics: ['NR protocol stack', 'RRC signaling', 'NAS protocols', 'QoS framework', 'Security procedures'] },
      { title: 'Deployment & Optimization', topics: ['Network planning', 'Site deployment', 'Coverage optimization', 'Capacity planning', 'Troubleshooting'] },
      { title: '5G Applications & IoT', topics: ['IoT & M2M communications', 'V2X for automotive', 'Industrial IoT', 'Smart cities', 'Private 5G networks'] },
      { title: 'Industry Project', topics: ['5G network design', 'Simulation & analysis', 'Performance optimization', 'Documentation'] }
    ],
    outcomes: ['5G Network Engineer', 'RF Engineer', 'Telecom Consultant', 'Network Architect', 'IoT Solutions Engineer', 'Wireless Systems Engineer']
  },
  // Cybersecurity Course
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'security',
    categoryName: 'Cyber Security',
    duration: '6 months',
    mode: 'Online / Classroom',
    level: 'Beginner to Advanced',
    description: 'Comprehensive cybersecurity program covering ethical hacking, penetration testing, network security, incident response, and security operations. Prepare for industry certifications and protect organizations from cyber threats.',
    shortDescription: 'Master ethical hacking & security operations',
    image: '/images/courses/cybersecurity.jpg',
    tools: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'Splunk', 'Nessus', 'OSINT tools'],
    highlights: ['Ethical hacking labs', 'Real attack scenarios', 'CTF challenges', 'Certification prep', 'SOC operations'],
    curriculum: [
      { title: 'Cybersecurity Fundamentals', topics: ['Security concepts', 'CIA triad', 'Attack types', 'Defense in depth', 'Security frameworks'] },
      { title: 'Network Security', topics: ['TCP/IP security', 'Firewalls & IDS/IPS', 'VPN technologies', 'Network monitoring', 'Secure architecture'] },
      { title: 'Ethical Hacking & Penetration Testing', topics: ['Reconnaissance', 'Scanning & enumeration', 'Exploitation techniques', 'Post-exploitation', 'Reporting'] },
      { title: 'Web Application Security', topics: ['OWASP Top 10', 'SQL injection', 'XSS attacks', 'CSRF & SSRF', 'API security'] },
      { title: 'Security Operations (SOC)', topics: ['SIEM operations', 'Log analysis', 'Threat hunting', 'Incident detection', 'Alert triage'] },
      { title: 'Incident Response & Forensics', topics: ['IR process', 'Malware analysis', 'Digital forensics', 'Evidence handling', 'Recovery procedures'] },
      { title: 'Cloud Security', topics: ['AWS/Azure security', 'Cloud vulnerabilities', 'Container security', 'IAM best practices', 'Compliance'] },
      { title: 'Certification Prep & Capstone', topics: ['CEH/CompTIA Security+ prep', 'Practice exams', 'Red team exercise', 'Blue team exercise', 'Final assessment'] }
    ],
    outcomes: ['Cybersecurity Analyst', 'Ethical Hacker', 'Penetration Tester', 'SOC Analyst', 'Security Engineer', 'Incident Responder']
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Venkatesh Kumar',
    role: 'Cloud Architect at Infosys',
    course: 'AI & Machine Learning',
    image: '/images/testimonials/1.jpg',
    quote: 'The AWS and Azure training was top-notch. The real-world scenarios and hands-on labs prepared me perfectly for cloud architecture roles. Got promoted within 4 months!'
  },
  {
    id: 2,
    name: 'Priya Reddy',
    role: 'Data Scientist at Google',
    course: 'AI & Machine Learning',
    image: '/images/testimonials/2.jpg',
    quote: 'The Data Science program at Techorbit completely transformed my career. The hands-on projects and mentor support helped me land my dream job at Google within 3 months of completing the course.'
  },
  {
    id: 3,
    name: 'Lakshmi Naidu',
    role: 'Full Stack Developer at Microsoft',
    course: 'Full Stack AI',
    image: '/images/testimonials/3.jpg',
    quote: 'From zero coding knowledge to a developer at Microsoft in 6 months! Techorbit structured curriculum and project-based learning made all the difference. Highly recommended!'
  },
  {
    id: 4,
    name: 'Rahul Verma',
    role: 'Drone Engineer at ideaForge',
    course: 'Drone Technology',
    image: '/images/testimonials/4.jpg',
    quote: 'Building my first autonomous drone in the lab was an incredible experience. The practical approach and exposure to PX4 and ArduPilot prepared me for real industry challenges.'
  },
  {
    id: 5,
    name: 'Sneha Nair',
    role: 'Security Analyst at Deloitte',
    course: 'Cybersecurity',
    image: '/images/testimonials/5.jpg',
    quote: 'The ethical hacking labs and CTF challenges were intense but rewarding. I cleared my CEH certification on the first attempt and got placed within a month of completing the course.'
  }
];

export const trustMetrics = [
  { value: '10+', label: 'Years Experience', iconName: 'Trophy' },
  { value: '5,000+', label: 'Students Trained', iconName: 'GraduationCap' },
  { value: '25+', label: 'Expert Mentors', iconName: 'Users' },
  { value: '95%', label: 'Placement Rate', iconName: 'Briefcase' }
];

export const trainingModes = [
  {
    id: 'online',
    title: 'Online Training',
    description: 'Learn from anywhere with live interactive sessions, recorded content, and 24/7 access to materials.',
    iconName: 'Globe',
    features: ['Live classes', 'Recorded sessions', 'Flexible timing', '24/7 support']
  },
  {
    id: 'classroom',
    title: 'Classroom Training',
    description: 'Immersive in-person learning experience with hands-on labs and face-to-face mentorship.',
    iconName: 'School',
    features: ['Face-to-face learning', 'Lab access', 'Peer networking', 'Direct mentorship']
  },
  {
    id: 'corporate',
    title: 'Corporate Training',
    description: 'Customized training programs for organizations in AI, Drones, 3D Printing, 5G, and Cybersecurity.',
    iconName: 'Building2',
    features: ['Custom curriculum', 'On-site/remote', 'Team training', 'Progress tracking']
  }
];

export const whyChooseUs = [
  { title: 'Industry-Aligned Curriculum', description: 'Courses designed with input from AI, Drone, 3D Printing, 5G, and Cybersecurity experts.', iconName: 'BookOpen' },
  { title: 'Hands-On Labs & Projects', description: 'Build real drones, print 3D prototypes, hack ethically, and deploy AI models.', iconName: 'Wrench' },
  { title: 'Expert Mentorship', description: 'Learn from professionals with 10+ years of experience in emerging technologies.', iconName: 'UserCheck' },
  { title: 'Resume & Interview Prep', description: 'Dedicated sessions to craft winning resumes and ace technical interviews.', iconName: 'FileText' },
  { title: 'Flexible Learning', description: 'Choose between online, classroom, or weekend batches to suit your schedule.', iconName: 'Clock' },
  { title: 'Placement Assistance', description: '95% placement rate with top tech companies, startups, and government organizations.', iconName: 'Target' }
];

// Alumni success stories
export const alumni = [
  {
    name: 'Arun Krishnan',
    batch: '2024',
    course: 'AI & Machine Learning',
    company: 'Tech Mahindra',
    role: 'AI Engineer',
    image: '/images/alumni/arun.jpg',
    linkedIn: '#'
  },
  {
    name: 'Priya Sharma',
    batch: '2024',
    course: 'Drone Technology',
    company: 'ideaForge',
    role: 'Drone Engineer',
    image: '/images/alumni/priya.jpg',
    linkedIn: '#'
  },
  {
    name: 'Rahul Verma',
    batch: '2023',
    course: '3D Printing',
    company: 'Stratasys',
    role: 'Additive Manufacturing Specialist',
    image: '/images/alumni/rahul.jpg',
    linkedIn: '#'
  },
  {
    name: 'Sneha Nair',
    batch: '2024',
    course: '5G Technology',
    company: 'Ericsson',
    role: '5G Network Engineer',
    image: '/images/alumni/sneha.jpg',
    linkedIn: '#'
  },
  {
    name: 'Vikram Singh',
    batch: '2023',
    course: 'Cybersecurity',
    company: 'Deloitte',
    role: 'Security Analyst',
    image: '/images/alumni/vikram.jpg',
    linkedIn: '#'
  },
  {
    name: 'Meera Patel',
    batch: '2024',
    course: 'AI & Machine Learning',
    company: 'Infosys',
    role: 'Data Scientist',
    image: '/images/alumni/meera.jpg',
    linkedIn: '#'
  },
  {
    name: 'Karthik Reddy',
    batch: '2023',
    course: 'Drone Technology',
    company: 'DRDO',
    role: 'UAV Systems Engineer',
    image: '/images/alumni/karthik.jpg',
    linkedIn: '#'
  },
  {
    name: 'Ananya Gupta',
    batch: '2024',
    course: 'Cybersecurity',
    company: 'TCS',
    role: 'Penetration Tester',
    image: '/images/alumni/ananya.jpg',
    linkedIn: '#'
  }
];

// Hiring partners for these specific courses
export const hiringPartners = [
  { name: 'Tech Mahindra', logo: '/images/partners/tech-mahindra.png' },
  { name: 'ideaForge', logo: '/images/partners/ideaforge.png' },
  { name: 'Stratasys', logo: '/images/partners/stratasys.png' },
  { name: 'Ericsson', logo: '/images/partners/ericsson.png' },
  { name: 'Deloitte', logo: '/images/partners/deloitte.png' },
  { name: 'DRDO', logo: '/images/partners/drdo.png' },
  { name: 'Infosys', logo: '/images/partners/infosys.png' },
  { name: 'TCS', logo: '/images/partners/tcs.png' },
  { name: 'Wipro', logo: '/images/partners/wipro.png' },
  { name: 'Nokia', logo: '/images/partners/nokia.png' },
  { name: 'Airbus', logo: '/images/partners/airbus.png' },
  { name: 'Qualcomm', logo: '/images/partners/qualcomm.png' }
];
