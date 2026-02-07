// Course catalog data for Techorbit
export const courseCategories = [
  {
    id: 'next-gen',
    name: 'Next Gen Technologies',
    iconName: 'Brain',
    description: 'Master cutting-edge AI and data technologies',
    courses: ['data-science', 'artificial-intelligence', 'generative-ai', 'machine-learning']
  },
  {
    id: 'fullstack',
    name: 'Full Stack Development',
    iconName: 'Code2',
    description: 'Build modern web applications end-to-end',
    courses: ['fullstack-java', 'fullstack-python', 'mern-stack', 'react-js']
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    iconName: 'Cloud',
    description: 'Deploy and manage cloud infrastructure',
    courses: ['aws', 'azure', 'gcp', 'devops', 'data-engineering']
  },
  {
    id: 'testing',
    name: 'Software Testing',
    iconName: 'FlaskConical',
    description: 'Ensure quality with comprehensive testing',
    courses: ['manual-testing', 'automation-testing', 'selenium', 'playwright']
  },
  {
    id: 'security',
    name: 'Cyber Security',
    iconName: 'Shield',
    description: 'Protect systems from digital threats',
    courses: ['ethical-hacking', 'soc-analyst']
  },
  {
    id: 'analytics',
    name: 'Business & Analytics',
    iconName: 'BarChart3',
    description: 'Transform data into business insights',
    courses: ['business-analyst', 'power-bi', 'tableau']
  }
];

export const courses = [
  // Next Gen Technologies
  {
    slug: 'data-science',
    title: 'Data Science',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master data analysis, machine learning, and statistical modeling to extract insights from complex datasets.',
    shortDescription: 'Learn to analyze data and build predictive models',
    image: '/images/courses/data-science.jpg',
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Jupyter'],
    highlights: ['Real-world projects', 'Industry datasets', 'Capstone project', 'Career support'],
    curriculum: [
      { title: 'Python for Data Science', topics: ['Python basics', 'NumPy', 'Pandas', 'Data manipulation'] },
      { title: 'Statistical Analysis', topics: ['Descriptive stats', 'Probability', 'Hypothesis testing'] },
      { title: 'Machine Learning', topics: ['Supervised learning', 'Unsupervised learning', 'Model evaluation'] },
      { title: 'Data Visualization', topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard creation'] },
      { title: 'Capstone Project', topics: ['End-to-end ML project', 'Deployment', 'Presentation'] }
    ],
    outcomes: ['Data Scientist', 'ML Engineer', 'Data Analyst', 'Business Intelligence Developer']
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '5 months',
    mode: 'Online / Classroom',
    level: 'Advanced',
    description: 'Deep dive into neural networks, deep learning, and AI applications for real-world problem solving.',
    shortDescription: 'Build intelligent systems with deep learning',
    image: '/images/courses/ai.jpg',
    tools: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'NLTK'],
    highlights: ['Neural network architectures', 'Computer vision', 'NLP projects', 'Research papers'],
    curriculum: [
      { title: 'AI Foundations', topics: ['AI history', 'Problem solving', 'Search algorithms'] },
      { title: 'Deep Learning', topics: ['Neural networks', 'CNNs', 'RNNs', 'Transformers'] },
      { title: 'Computer Vision', topics: ['Image processing', 'Object detection', 'Image segmentation'] },
      { title: 'NLP', topics: ['Text processing', 'Sentiment analysis', 'Language models'] },
      { title: 'AI in Production', topics: ['Model deployment', 'MLOps', 'Scaling AI systems'] }
    ],
    outcomes: ['AI Engineer', 'Deep Learning Engineer', 'Research Scientist', 'ML Architect']
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '3 months',
    mode: 'Online',
    level: 'Advanced',
    description: 'Learn to build and fine-tune large language models, image generators, and AI-powered applications.',
    shortDescription: 'Create with LLMs and generative models',
    image: '/images/courses/gen-ai.jpg',
    tools: ['OpenAI API', 'LangChain', 'Hugging Face', 'Stable Diffusion', 'DALL-E'],
    highlights: ['Prompt engineering', 'Fine-tuning LLMs', 'RAG applications', 'AI agents'],
    curriculum: [
      { title: 'GenAI Foundations', topics: ['LLM architecture', 'Transformer models', 'Tokenization'] },
      { title: 'Prompt Engineering', topics: ['Prompt design', 'Few-shot learning', 'Chain of thought'] },
      { title: 'Building with LLMs', topics: ['OpenAI API', 'LangChain', 'Vector databases'] },
      { title: 'Image Generation', topics: ['Diffusion models', 'Stable Diffusion', 'ControlNet'] },
      { title: 'AI Applications', topics: ['Chatbots', 'RAG systems', 'AI agents'] }
    ],
    outcomes: ['GenAI Engineer', 'LLM Developer', 'AI Product Manager', 'Prompt Engineer']
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Comprehensive machine learning course covering algorithms, model building, and deployment.',
    shortDescription: 'Build and deploy ML models',
    image: '/images/courses/ml.jpg',
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'MLflow', 'AWS SageMaker'],
    highlights: ['Algorithm deep-dives', 'Feature engineering', 'Model optimization', 'Production deployment'],
    curriculum: [
      { title: 'ML Fundamentals', topics: ['Types of ML', 'Bias-variance', 'Overfitting'] },
      { title: 'Supervised Learning', topics: ['Regression', 'Classification', 'Ensemble methods'] },
      { title: 'Unsupervised Learning', topics: ['Clustering', 'Dimensionality reduction', 'Anomaly detection'] },
      { title: 'Feature Engineering', topics: ['Feature selection', 'Encoding', 'Feature stores'] },
      { title: 'MLOps', topics: ['Model versioning', 'CI/CD for ML', 'Monitoring'] }
    ],
    outcomes: ['ML Engineer', 'Data Scientist', 'MLOps Engineer', 'AI Developer']
  },
  // Full Stack Development
  {
    slug: 'fullstack-java',
    title: 'Full Stack Java',
    category: 'fullstack',
    categoryName: 'Full Stack Development',
    duration: '5 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master Java backend with Spring Boot and modern frontend frameworks for enterprise applications.',
    shortDescription: 'Build enterprise apps with Java & Spring',
    image: '/images/courses/java.jpg',
    tools: ['Java', 'Spring Boot', 'Hibernate', 'React', 'MySQL', 'Docker'],
    highlights: ['Spring ecosystem', 'Microservices', 'REST APIs', 'Enterprise patterns'],
    curriculum: [
      { title: 'Core Java', topics: ['OOP', 'Collections', 'Multithreading', 'Java 17+'] },
      { title: 'Spring Framework', topics: ['Spring Core', 'Spring Boot', 'Spring Security'] },
      { title: 'Database & ORM', topics: ['SQL', 'Hibernate', 'JPA', 'Database design'] },
      { title: 'Frontend', topics: ['HTML/CSS', 'JavaScript', 'React', 'REST integration'] },
      { title: 'Microservices', topics: ['Service design', 'API Gateway', 'Docker', 'Kubernetes'] }
    ],
    outcomes: ['Java Developer', 'Backend Engineer', 'Full Stack Developer', 'Software Architect']
  },
  {
    slug: 'fullstack-python',
    title: 'Full Stack Python',
    category: 'fullstack',
    categoryName: 'Full Stack Development',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Build web applications with Django/Flask backend and React frontend.',
    shortDescription: 'Web development with Python frameworks',
    image: '/images/courses/python.jpg',
    tools: ['Python', 'Django', 'Flask', 'React', 'PostgreSQL', 'Redis'],
    highlights: ['Django REST Framework', 'Authentication', 'Deployment', 'Testing'],
    curriculum: [
      { title: 'Python Fundamentals', topics: ['Python basics', 'OOP', 'File handling'] },
      { title: 'Django Framework', topics: ['MVT pattern', 'ORM', 'Admin', 'Forms'] },
      { title: 'REST APIs', topics: ['DRF', 'Serializers', 'Authentication', 'Permissions'] },
      { title: 'Frontend Integration', topics: ['React', 'API consumption', 'State management'] },
      { title: 'Deployment', topics: ['Docker', 'AWS/Heroku', 'CI/CD', 'Monitoring'] }
    ],
    outcomes: ['Python Developer', 'Django Developer', 'Full Stack Engineer', 'Backend Developer']
  },
  {
    slug: 'mern-stack',
    title: 'MERN Stack',
    category: 'fullstack',
    categoryName: 'Full Stack Development',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Complete JavaScript stack with MongoDB, Express, React, and Node.js.',
    shortDescription: 'JavaScript full stack development',
    image: '/images/courses/mern.jpg',
    tools: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT'],
    highlights: ['Single language stack', 'Real-time apps', 'NoSQL database', 'Modern React'],
    curriculum: [
      { title: 'JavaScript Mastery', topics: ['ES6+', 'Async/await', 'Modules'] },
      { title: 'Node.js & Express', topics: ['Server setup', 'Routing', 'Middleware'] },
      { title: 'MongoDB', topics: ['NoSQL concepts', 'Mongoose', 'Aggregation'] },
      { title: 'React Development', topics: ['Components', 'Hooks', 'Redux', 'Routing'] },
      { title: 'Full Stack Project', topics: ['Authentication', 'File uploads', 'Deployment'] }
    ],
    outcomes: ['MERN Developer', 'JavaScript Developer', 'Full Stack Engineer', 'Node.js Developer']
  },
  {
    slug: 'react-js',
    title: 'React JS',
    category: 'fullstack',
    categoryName: 'Full Stack Development',
    duration: '3 months',
    mode: 'Online',
    level: 'Beginner',
    description: 'Master React for building modern, interactive user interfaces.',
    shortDescription: 'Build modern UIs with React',
    image: '/images/courses/react.jpg',
    tools: ['React', 'Redux', 'React Router', 'Jest', 'Styled Components'],
    highlights: ['Hooks deep-dive', 'State management', 'Performance optimization', 'Testing'],
    curriculum: [
      { title: 'React Fundamentals', topics: ['JSX', 'Components', 'Props', 'State'] },
      { title: 'Hooks & Patterns', topics: ['useState', 'useEffect', 'Custom hooks'] },
      { title: 'State Management', topics: ['Context API', 'Redux Toolkit', 'Zustand'] },
      { title: 'Advanced React', topics: ['Performance', 'Code splitting', 'Server components'] },
      { title: 'Testing & Tooling', topics: ['Jest', 'React Testing Library', 'Storybook'] }
    ],
    outcomes: ['React Developer', 'Frontend Developer', 'UI Engineer', 'Web Developer']
  },
  // Cloud & DevOps
  {
    slug: 'aws',
    title: 'AWS Cloud',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master Amazon Web Services from fundamentals to advanced architectures.',
    shortDescription: 'Cloud computing with AWS',
    image: '/images/courses/aws.jpg',
    tools: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'EKS'],
    highlights: ['Certification prep', 'Hands-on labs', 'Real architectures', 'Cost optimization'],
    curriculum: [
      { title: 'AWS Fundamentals', topics: ['Cloud concepts', 'IAM', 'VPC', 'EC2'] },
      { title: 'Storage & Database', topics: ['S3', 'EBS', 'RDS', 'DynamoDB'] },
      { title: 'Serverless', topics: ['Lambda', 'API Gateway', 'Step Functions'] },
      { title: 'Containers', topics: ['ECS', 'EKS', 'Fargate', 'ECR'] },
      { title: 'Architecture', topics: ['Well-Architected', 'High availability', 'Disaster recovery'] }
    ],
    outcomes: ['AWS Solutions Architect', 'Cloud Engineer', 'DevOps Engineer', 'SRE']
  },
  {
    slug: 'devops',
    title: 'DevOps',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Learn CI/CD, infrastructure as code, and modern DevOps practices.',
    shortDescription: 'Automate and scale with DevOps',
    image: '/images/courses/devops.jpg',
    tools: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'GitHub Actions'],
    highlights: ['Complete CI/CD', 'Container orchestration', 'IaC', 'Monitoring'],
    curriculum: [
      { title: 'DevOps Culture', topics: ['Principles', 'Agile', 'Collaboration'] },
      { title: 'Containers', topics: ['Docker', 'Docker Compose', 'Container security'] },
      { title: 'Kubernetes', topics: ['Pods', 'Deployments', 'Services', 'Helm'] },
      { title: 'CI/CD', topics: ['Jenkins', 'GitHub Actions', 'ArgoCD'] },
      { title: 'IaC & Monitoring', topics: ['Terraform', 'Ansible', 'Prometheus', 'Grafana'] }
    ],
    outcomes: ['DevOps Engineer', 'SRE', 'Platform Engineer', 'Release Engineer']
  },
  // Software Testing
  {
    slug: 'automation-testing',
    title: 'Automation Testing',
    category: 'testing',
    categoryName: 'Software Testing',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master test automation frameworks and tools for efficient quality assurance.',
    shortDescription: 'Automate testing with modern tools',
    image: '/images/courses/automation.jpg',
    tools: ['Selenium', 'TestNG', 'Cucumber', 'REST Assured', 'Appium'],
    highlights: ['Framework design', 'API testing', 'Mobile testing', 'CI integration'],
    curriculum: [
      { title: 'Testing Fundamentals', topics: ['SDLC', 'Test types', 'Test planning'] },
      { title: 'Selenium WebDriver', topics: ['Locators', 'Actions', 'Waits', 'POM'] },
      { title: 'Test Frameworks', topics: ['TestNG', 'JUnit', 'BDD with Cucumber'] },
      { title: 'API Testing', topics: ['REST Assured', 'Postman', 'API automation'] },
      { title: 'CI/CD Integration', topics: ['Jenkins', 'Docker', 'Reports'] }
    ],
    outcomes: ['QA Automation Engineer', 'SDET', 'Test Lead', 'Quality Engineer']
  },
  {
    slug: 'selenium',
    title: 'Selenium',
    category: 'testing',
    categoryName: 'Software Testing',
    duration: '2 months',
    mode: 'Online',
    level: 'Beginner',
    description: 'Complete Selenium WebDriver training for web application testing.',
    shortDescription: 'Web testing with Selenium',
    image: '/images/courses/selenium.jpg',
    tools: ['Selenium WebDriver', 'Java', 'TestNG', 'Maven', 'Grid'],
    highlights: ['Hands-on practice', 'Real projects', 'Framework building', 'Best practices'],
    curriculum: [
      { title: 'Selenium Basics', topics: ['Setup', 'WebDriver API', 'Locators'] },
      { title: 'Advanced Selenium', topics: ['Actions', 'Alerts', 'Frames', 'Windows'] },
      { title: 'TestNG Framework', topics: ['Annotations', 'Data providers', 'Parallel'] },
      { title: 'Page Object Model', topics: ['POM design', 'PageFactory', 'Reusability'] },
      { title: 'Selenium Grid', topics: ['Parallel execution', 'Cross-browser', 'Cloud grids'] }
    ],
    outcomes: ['Selenium Tester', 'QA Engineer', 'Test Automation Engineer']
  },
  // Cyber Security
  {
    slug: 'ethical-hacking',
    title: 'Ethical Hacking',
    category: 'security',
    categoryName: 'Cyber Security',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Learn penetration testing, vulnerability assessment, and ethical hacking techniques.',
    shortDescription: 'Penetration testing & security',
    image: '/images/courses/hacking.jpg',
    tools: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark'],
    highlights: ['Real-world labs', 'CTF challenges', 'Certification prep', 'Legal aspects'],
    curriculum: [
      { title: 'Security Fundamentals', topics: ['CIA triad', 'Attack types', 'Defense in depth'] },
      { title: 'Reconnaissance', topics: ['Footprinting', 'Scanning', 'Enumeration'] },
      { title: 'Exploitation', topics: ['Vulnerabilities', 'Metasploit', 'Web attacks'] },
      { title: 'Web Security', topics: ['OWASP Top 10', 'SQL injection', 'XSS'] },
      { title: 'Reporting', topics: ['Documentation', 'Risk assessment', 'Remediation'] }
    ],
    outcomes: ['Ethical Hacker', 'Penetration Tester', 'Security Analyst', 'Security Consultant']
  },
  // Business & Analytics
  {
    slug: 'power-bi',
    title: 'Power BI',
    category: 'analytics',
    categoryName: 'Business & Analytics',
    duration: '2 months',
    mode: 'Online',
    level: 'Beginner',
    description: 'Create stunning dashboards and reports with Microsoft Power BI.',
    shortDescription: 'Data visualization with Power BI',
    image: '/images/courses/powerbi.jpg',
    tools: ['Power BI Desktop', 'Power Query', 'DAX', 'Power BI Service'],
    highlights: ['Interactive dashboards', 'DAX formulas', 'Data modeling', 'Sharing reports'],
    curriculum: [
      { title: 'Power BI Basics', topics: ['Interface', 'Data import', 'Visualizations'] },
      { title: 'Data Transformation', topics: ['Power Query', 'Data cleaning', 'Merging'] },
      { title: 'DAX', topics: ['Measures', 'Calculated columns', 'Time intelligence'] },
      { title: 'Data Modeling', topics: ['Relationships', 'Star schema', 'Best practices'] },
      { title: 'Publishing', topics: ['Power BI Service', 'Sharing', 'Row-level security'] }
    ],
    outcomes: ['BI Developer', 'Data Analyst', 'Report Developer', 'BI Consultant']
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Data Scientist at TCS',
    course: 'Data Science',
    image: '/images/testimonials/1.jpg',
    quote: 'Techorbit transformed my career. The hands-on projects and mentor support helped me land my dream job within 3 months of completing the course.'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'DevOps Engineer at Infosys',
    course: 'DevOps',
    image: '/images/testimonials/2.jpg',
    quote: 'The practical approach to learning DevOps tools made all the difference. I went from zero cloud experience to deploying production systems.'
  },
  {
    id: 3,
    name: 'Sneha Patel',
    role: 'Full Stack Developer at Wipro',
    course: 'MERN Stack',
    image: '/images/testimonials/3.jpg',
    quote: 'Excellent curriculum and supportive instructors. The mock interviews prepared me well for real tech interviews.'
  },
  {
    id: 4,
    name: 'Amit Kumar',
    role: 'QA Lead at Accenture',
    course: 'Automation Testing',
    image: '/images/testimonials/4.jpg',
    quote: 'From manual testing to automation lead in 6 months. Techorbit curriculum is industry-relevant and practical.'
  },
  {
    id: 5,
    name: 'Neha Reddy',
    role: 'AWS Solutions Architect',
    course: 'AWS',
    image: '/images/testimonials/5.jpg',
    quote: 'Cleared my AWS certification on first attempt. The hands-on labs and real-world scenarios were invaluable.'
  }
];

export const trustMetrics = [
  { value: '10+', label: 'Years Experience', iconName: 'Trophy' },
  { value: '25,000+', label: 'Students Trained', iconName: 'GraduationCap' },
  { value: '50+', label: 'Expert Mentors', iconName: 'Users' },
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
    description: 'Customized training programs for organizations to upskill their workforce.',
    iconName: 'Building2',
    features: ['Custom curriculum', 'On-site/remote', 'Team training', 'Progress tracking']
  }
];

export const whyChooseUs = [
  { title: 'Industry-Aligned Curriculum', description: 'Courses designed with input from industry experts and updated regularly.', iconName: 'BookOpen' },
  { title: 'Real-Time Projects', description: 'Work on actual business problems and build a portfolio that stands out.', iconName: 'Wrench' },
  { title: 'Expert Mentorship', description: 'Learn from professionals with 10+ years of industry experience.', iconName: 'UserCheck' },
  { title: 'Resume & Interview Prep', description: 'Dedicated sessions to craft winning resumes and ace interviews.', iconName: 'FileText' },
  { title: 'Flexible Learning', description: 'Choose between online, classroom, or weekend batches.', iconName: 'Clock' },
  { title: 'Placement Assistance', description: '95% placement rate with top IT companies and startups.', iconName: 'Target' }
];
