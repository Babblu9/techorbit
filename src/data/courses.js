// Course catalog data for Techorbit
export const courseCategories = [
  {
    id: 'next-gen',
    name: 'Next Gen Technologies',
    iconName: 'Brain',
    description: 'Master cutting-edge AI and data technologies',
    courses: ['data-science', 'artificial-intelligence', 'generative-ai', 'machine-learning', 'python-data-science']
  },
  {
    id: 'fullstack',
    name: 'Full Stack Development',
    iconName: 'Code2',
    description: 'Build modern web applications end-to-end',
    courses: ['fullstack-java', 'fullstack-python', 'mern-stack', 'react-js', 'angular', 'flutter']
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    iconName: 'Cloud',
    description: 'Deploy and manage cloud infrastructure',
    courses: ['aws', 'azure', 'gcp', 'devops', 'data-engineering', 'kubernetes', 'docker', 'terraform', 'jenkins']
  },
  {
    id: 'data-platforms',
    name: 'Data Platforms',
    iconName: 'Database',
    description: 'Master modern data platforms and analytics',
    courses: ['snowflake', 'databricks', 'data-analytics', 'business-intelligence']
  },
  {
    id: 'testing',
    name: 'Software Testing',
    iconName: 'FlaskConical',
    description: 'Ensure quality with comprehensive testing',
    courses: ['manual-testing', 'automation-testing', 'selenium', 'playwright', 'api-testing', 'performance-testing']
  },
  {
    id: 'security',
    name: 'Cyber Security',
    iconName: 'Shield',
    description: 'Protect systems from digital threats',
    courses: ['ethical-hacking', 'soc-analyst', 'comptia-security', 'network-security']
  },
  {
    id: 'networking',
    name: 'Networking',
    iconName: 'Network',
    description: 'Build and manage network infrastructure',
    courses: ['ccna']
  },
  {
    id: 'analytics',
    name: 'Business & Analytics',
    iconName: 'BarChart3',
    description: 'Transform data into business insights',
    courses: ['business-analyst', 'power-bi', 'tableau']
  },
  {
    id: 'creative',
    name: 'Creative Design',
    iconName: 'Palette',
    description: 'Create stunning visual content',
    courses: ['graphic-design', 'motion-graphics', 'video-editing']
  },
  {
    id: 'medical',
    name: 'Medical & Clinical Skills',
    iconName: 'Stethoscope',
    description: 'Healthcare IT and clinical data expertise',
    courses: ['medical-coding', 'clinical-data', 'healthcare-analytics']
  },
  {
    id: 'agile',
    name: 'Agile & Project Management',
    iconName: 'Kanban',
    description: 'Lead projects with agile methodologies',
    courses: ['pmp', 'scrum-master', 'agile']
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    iconName: 'Building',
    description: 'Master enterprise platforms and CRM',
    courses: ['sap', 'salesforce', 'servicenow']
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
  },
  // Cloud & DevOps - Azure
  {
    slug: 'azure',
    title: 'Microsoft Azure',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master Microsoft Azure cloud services, infrastructure, and enterprise solutions.',
    shortDescription: 'Azure cloud administration and development',
    image: '/images/courses/azure.jpg',
    tools: ['Azure Portal', 'Azure CLI', 'Azure DevOps', 'ARM Templates', 'PowerShell'],
    highlights: ['Azure certifications prep', 'Real cloud projects', 'Enterprise architecture', 'Hybrid cloud'],
    curriculum: [
      { title: 'Azure Fundamentals', topics: ['Cloud concepts', 'Azure services', 'Portal navigation'] },
      { title: 'Compute Services', topics: ['Virtual Machines', 'App Services', 'Azure Functions'] },
      { title: 'Storage & Networking', topics: ['Blob storage', 'VNets', 'Load balancers', 'DNS'] },
      { title: 'Security & Identity', topics: ['Azure AD', 'RBAC', 'Key Vault', 'Security Center'] },
      { title: 'DevOps Integration', topics: ['Azure DevOps', 'CI/CD pipelines', 'ARM templates'] }
    ],
    outcomes: ['Azure Administrator', 'Cloud Engineer', 'Azure Developer', 'Solutions Architect']
  },
  // Cloud & DevOps - GCP
  {
    slug: 'gcp',
    title: 'Google Cloud Platform',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Learn Google Cloud Platform services for building scalable applications and data solutions.',
    shortDescription: 'GCP cloud services and architecture',
    image: '/images/courses/gcp.jpg',
    tools: ['GCP Console', 'gcloud CLI', 'Cloud SDK', 'Terraform', 'BigQuery'],
    highlights: ['GCP certification prep', 'Big data tools', 'Kubernetes native', 'ML integration'],
    curriculum: [
      { title: 'GCP Fundamentals', topics: ['Cloud concepts', 'GCP services overview', 'IAM'] },
      { title: 'Compute & Networking', topics: ['Compute Engine', 'VPC', 'Load balancing', 'Cloud Run'] },
      { title: 'Storage Solutions', topics: ['Cloud Storage', 'Cloud SQL', 'Firestore', 'BigQuery'] },
      { title: 'Kubernetes', topics: ['GKE', 'Container deployment', 'Scaling', 'Monitoring'] },
      { title: 'Data & ML', topics: ['BigQuery', 'Dataflow', 'AI Platform', 'AutoML'] }
    ],
    outcomes: ['GCP Engineer', 'Cloud Architect', 'Data Engineer', 'DevOps Engineer']
  },
  // Cloud & DevOps - Data Engineering
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Advanced',
    description: 'Build robust data pipelines and infrastructure to power analytics and machine learning.',
    shortDescription: 'Design and build data pipelines',
    image: '/images/courses/data-engineering.jpg',
    tools: ['Apache Spark', 'Airflow', 'Kafka', 'AWS/Azure', 'Python', 'SQL'],
    highlights: ['ETL pipelines', 'Real-time streaming', 'Data warehousing', 'Cloud data platforms'],
    curriculum: [
      { title: 'Data Engineering Basics', topics: ['Data architecture', 'ETL concepts', 'Data modeling'] },
      { title: 'SQL & Databases', topics: ['Advanced SQL', 'Data warehouses', 'NoSQL databases'] },
      { title: 'Big Data Processing', topics: ['Apache Spark', 'PySpark', 'Data transformations'] },
      { title: 'Data Pipelines', topics: ['Apache Airflow', 'DAGs', 'Scheduling', 'Monitoring'] },
      { title: 'Streaming & Cloud', topics: ['Kafka', 'Real-time processing', 'Cloud data services'] }
    ],
    outcomes: ['Data Engineer', 'ETL Developer', 'Big Data Engineer', 'Analytics Engineer']
  },
  // Software Testing - Manual Testing
  {
    slug: 'manual-testing',
    title: 'Manual Testing',
    category: 'testing',
    categoryName: 'Software Testing',
    duration: '2 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Master software testing fundamentals, test case design, and defect management.',
    shortDescription: 'Software testing fundamentals',
    image: '/images/courses/manual-testing.jpg',
    tools: ['JIRA', 'TestRail', 'Excel', 'Zephyr', 'Bugzilla'],
    highlights: ['ISTQB preparation', 'Test case design', 'Agile testing', 'Real project experience'],
    curriculum: [
      { title: 'Testing Fundamentals', topics: ['SDLC', 'STLC', 'Testing types', 'Test levels'] },
      { title: 'Test Design', topics: ['Test cases', 'Test scenarios', 'Boundary analysis', 'Equivalence partitioning'] },
      { title: 'Defect Management', topics: ['Bug lifecycle', 'Defect tracking', 'Severity/Priority'] },
      { title: 'Agile Testing', topics: ['Scrum', 'Sprint testing', 'User stories', 'Acceptance criteria'] },
      { title: 'API Testing Basics', topics: ['REST APIs', 'Postman', 'API test cases'] }
    ],
    outcomes: ['QA Analyst', 'Test Engineer', 'QA Lead', 'Test Manager']
  },
  // Software Testing - Playwright
  {
    slug: 'playwright',
    title: 'Playwright Testing',
    category: 'testing',
    categoryName: 'Software Testing',
    duration: '2 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Modern end-to-end testing with Playwright for web applications across all browsers.',
    shortDescription: 'Modern web testing with Playwright',
    image: '/images/courses/playwright.jpg',
    tools: ['Playwright', 'TypeScript', 'JavaScript', 'VS Code', 'GitHub Actions'],
    highlights: ['Cross-browser testing', 'API testing', 'Visual testing', 'CI/CD integration'],
    curriculum: [
      { title: 'Playwright Basics', topics: ['Setup', 'Selectors', 'Actions', 'Assertions'] },
      { title: 'Advanced Features', topics: ['Page objects', 'Fixtures', 'Parallel testing'] },
      { title: 'API Testing', topics: ['Request context', 'Mocking', 'API assertions'] },
      { title: 'Visual Testing', topics: ['Screenshots', 'Visual comparison', 'Trace viewer'] },
      { title: 'CI/CD', topics: ['GitHub Actions', 'Docker', 'Reporting', 'Best practices'] }
    ],
    outcomes: ['Test Automation Engineer', 'SDET', 'QA Engineer', 'DevOps QA']
  },
  // Cyber Security - SOC Analyst
  {
    slug: 'soc-analyst',
    title: 'SOC Analyst',
    category: 'security',
    categoryName: 'Cyber Security',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Learn to monitor, detect, and respond to security incidents as a SOC analyst.',
    shortDescription: 'Security operations and incident response',
    image: '/images/courses/soc-analyst.jpg',
    tools: ['Splunk', 'SIEM', 'Wireshark', 'Nessus', 'Snort'],
    highlights: ['Real attack scenarios', 'Threat hunting', 'Incident response', 'Compliance'],
    curriculum: [
      { title: 'SOC Fundamentals', topics: ['SOC operations', 'Security frameworks', 'Threat landscape'] },
      { title: 'Network Security', topics: ['TCP/IP', 'Firewalls', 'IDS/IPS', 'Network analysis'] },
      { title: 'SIEM Operations', topics: ['Splunk', 'Log analysis', 'Correlation rules', 'Alerts'] },
      { title: 'Incident Response', topics: ['IR process', 'Malware analysis', 'Forensics basics'] },
      { title: 'Threat Intelligence', topics: ['Threat hunting', 'IOCs', 'MITRE ATT&CK', 'Reporting'] }
    ],
    outcomes: ['SOC Analyst', 'Security Analyst', 'Incident Responder', 'Threat Hunter']
  },
  // Business & Analytics - Business Analyst
  {
    slug: 'business-analyst',
    title: 'Business Analyst',
    category: 'analytics',
    categoryName: 'Business & Analytics',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Learn to bridge business needs with technical solutions through requirements analysis.',
    shortDescription: 'Requirements and process analysis',
    image: '/images/courses/business-analyst.jpg',
    tools: ['JIRA', 'Confluence', 'MS Visio', 'Excel', 'SQL'],
    highlights: ['Agile/Scrum', 'User stories', 'Process modeling', 'Stakeholder management'],
    curriculum: [
      { title: 'BA Fundamentals', topics: ['BA role', 'SDLC', 'Requirements types', 'Stakeholder analysis'] },
      { title: 'Requirements Engineering', topics: ['Elicitation', 'Documentation', 'User stories', 'Acceptance criteria'] },
      { title: 'Process Modeling', topics: ['BPMN', 'Use cases', 'Data flow diagrams', 'Wireframes'] },
      { title: 'Agile BA', topics: ['Scrum', 'Kanban', 'Backlog management', 'Sprint planning'] },
      { title: 'Tools & SQL', topics: ['JIRA', 'Confluence', 'Basic SQL', 'Reporting'] }
    ],
    outcomes: ['Business Analyst', 'Product Owner', 'Requirements Analyst', 'Scrum Master']
  },
  // Business & Analytics - Tableau
  {
    slug: 'tableau',
    title: 'Tableau',
    category: 'analytics',
    categoryName: 'Business & Analytics',
    duration: '2 months',
    mode: 'Online',
    level: 'Beginner',
    description: 'Create powerful data visualizations and interactive dashboards with Tableau.',
    shortDescription: 'Data visualization with Tableau',
    image: '/images/courses/tableau.jpg',
    tools: ['Tableau Desktop', 'Tableau Public', 'Tableau Server', 'Tableau Prep'],
    highlights: ['Interactive dashboards', 'Data storytelling', 'Calculations', 'Publishing'],
    curriculum: [
      { title: 'Tableau Basics', topics: ['Interface', 'Data connections', 'Chart types'] },
      { title: 'Visualizations', topics: ['Bar charts', 'Line charts', 'Maps', 'Scatter plots'] },
      { title: 'Calculations', topics: ['Calculated fields', 'Table calculations', 'LOD expressions'] },
      { title: 'Dashboards', topics: ['Dashboard design', 'Filters', 'Parameters', 'Actions'] },
      { title: 'Publishing', topics: ['Tableau Server', 'Tableau Public', 'Sharing', 'Permissions'] }
    ],
    outcomes: ['Tableau Developer', 'Data Analyst', 'BI Analyst', 'Visualization Specialist']
  },
  // Data Platforms - Data Analytics
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    category: 'data-platforms',
    categoryName: 'Data Platforms',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Learn to analyze data, create visualizations, and derive actionable insights for business decisions.',
    shortDescription: 'Transform raw data into insights',
    image: '/images/courses/data-analytics.jpg',
    tools: ['Excel', 'SQL', 'Python', 'Power BI', 'Tableau'],
    highlights: ['Data visualization', 'Statistical analysis', 'Business reporting', 'Dashboard creation'],
    curriculum: [
      { title: 'Analytics Fundamentals', topics: ['Data types', 'Data sources', 'Data quality'] },
      { title: 'Excel & SQL', topics: ['Advanced Excel', 'SQL queries', 'Data manipulation'] },
      { title: 'Python for Analytics', topics: ['Pandas', 'NumPy', 'Data cleaning'] },
      { title: 'Visualization', topics: ['Power BI', 'Tableau basics', 'Storytelling'] },
      { title: 'Capstone Project', topics: ['End-to-end analytics', 'Presentation', 'Reporting'] }
    ],
    outcomes: ['Data Analyst', 'Business Analyst', 'Analytics Consultant', 'BI Developer']
  },
  // Data Platforms - Business Intelligence
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    category: 'data-platforms',
    categoryName: 'Data Platforms',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master BI tools and techniques to build data warehouses, reports, and enterprise dashboards.',
    shortDescription: 'Enterprise reporting and analytics',
    image: '/images/courses/business-intelligence.jpg',
    tools: ['Power BI', 'Tableau', 'SQL Server', 'SSIS', 'SSRS'],
    highlights: ['Data warehousing', 'ETL processes', 'Enterprise reporting', 'KPI dashboards'],
    curriculum: [
      { title: 'BI Fundamentals', topics: ['BI architecture', 'Data warehousing', 'OLAP'] },
      { title: 'ETL Development', topics: ['SSIS', 'Data transformation', 'Data loading'] },
      { title: 'Report Development', topics: ['SSRS', 'Report design', 'Parameters'] },
      { title: 'Dashboard Design', topics: ['Power BI', 'KPIs', 'Drill-through'] },
      { title: 'Enterprise BI', topics: ['Governance', 'Security', 'Performance'] }
    ],
    outcomes: ['BI Developer', 'BI Analyst', 'Data Warehouse Developer', 'ETL Developer']
  },
  // Data Platforms - Snowflake
  {
    slug: 'snowflake',
    title: 'Snowflake',
    category: 'data-platforms',
    categoryName: 'Data Platforms',
    duration: '2 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Learn Snowflake cloud data platform for building scalable data warehouses and data lakes.',
    shortDescription: 'Cloud data warehousing with Snowflake',
    image: '/images/courses/snowflake.jpg',
    tools: ['Snowflake', 'SQL', 'Python', 'dbt', 'Snowpipe'],
    highlights: ['Cloud architecture', 'Data sharing', 'Zero-copy cloning', 'Auto-scaling'],
    curriculum: [
      { title: 'Snowflake Basics', topics: ['Architecture', 'Virtual warehouses', 'Databases'] },
      { title: 'Data Loading', topics: ['Stages', 'Snowpipe', 'COPY command'] },
      { title: 'SQL in Snowflake', topics: ['Queries', 'Functions', 'Performance'] },
      { title: 'Data Sharing', topics: ['Secure shares', 'Reader accounts', 'Marketplace'] },
      { title: 'Advanced Topics', topics: ['Streams', 'Tasks', 'Time travel'] }
    ],
    outcomes: ['Snowflake Developer', 'Data Engineer', 'Cloud Data Architect', 'Analytics Engineer']
  },
  // Data Platforms - Databricks
  {
    slug: 'databricks',
    title: 'Databricks',
    category: 'data-platforms',
    categoryName: 'Data Platforms',
    duration: '3 months',
    mode: 'Online',
    level: 'Advanced',
    description: 'Master Databricks unified analytics platform for big data processing and machine learning.',
    shortDescription: 'Unified analytics on Databricks',
    image: '/images/courses/databricks.jpg',
    tools: ['Databricks', 'Apache Spark', 'Delta Lake', 'MLflow', 'Python'],
    highlights: ['Lakehouse architecture', 'Spark processing', 'ML pipelines', 'Delta Lake'],
    curriculum: [
      { title: 'Databricks Fundamentals', topics: ['Workspace', 'Clusters', 'Notebooks'] },
      { title: 'Spark on Databricks', topics: ['DataFrames', 'Spark SQL', 'Transformations'] },
      { title: 'Delta Lake', topics: ['ACID transactions', 'Time travel', 'Optimization'] },
      { title: 'ML with Databricks', topics: ['MLflow', 'Model training', 'Feature store'] },
      { title: 'Production Pipelines', topics: ['Jobs', 'Workflows', 'Monitoring'] }
    ],
    outcomes: ['Databricks Developer', 'Data Engineer', 'ML Engineer', 'Platform Engineer']
  },
  // Next Gen - Python Data Science
  {
    slug: 'python-data-science',
    title: 'Python for Data Science',
    category: 'next-gen',
    categoryName: 'Next Gen Technologies',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Learn Python programming with focus on data science libraries and practical applications.',
    shortDescription: 'Python fundamentals for data work',
    image: '/images/courses/python-data-science.jpg',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    highlights: ['Python basics', 'Data manipulation', 'Visualization', 'Statistical analysis'],
    curriculum: [
      { title: 'Python Fundamentals', topics: ['Syntax', 'Data types', 'Functions', 'OOP'] },
      { title: 'NumPy', topics: ['Arrays', 'Operations', 'Broadcasting'] },
      { title: 'Pandas', topics: ['DataFrames', 'Cleaning', 'Aggregation'] },
      { title: 'Visualization', topics: ['Matplotlib', 'Seaborn', 'Plotly'] },
      { title: 'Projects', topics: ['EDA', 'Data cleaning', 'Reporting'] }
    ],
    outcomes: ['Python Developer', 'Data Analyst', 'Junior Data Scientist', 'Automation Engineer']
  },
  // Testing - API Testing
  {
    slug: 'api-testing',
    title: 'API Testing',
    category: 'testing',
    categoryName: 'Software Testing',
    duration: '2 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Master REST API testing with Postman, REST Assured, and automated test frameworks.',
    shortDescription: 'Automate REST API testing',
    image: '/images/courses/api-testing.jpg',
    tools: ['Postman', 'REST Assured', 'Newman', 'Swagger', 'JMeter'],
    highlights: ['REST principles', 'Test automation', 'CI/CD integration', 'Performance testing'],
    curriculum: [
      { title: 'API Basics', topics: ['HTTP methods', 'REST principles', 'JSON/XML'] },
      { title: 'Postman', topics: ['Collections', 'Variables', 'Assertions', 'Newman'] },
      { title: 'REST Assured', topics: ['Java setup', 'Request/Response', 'Validation'] },
      { title: 'Advanced Testing', topics: ['Authentication', 'Data-driven', 'Mocking'] },
      { title: 'CI/CD', topics: ['Jenkins integration', 'Reporting', 'Best practices'] }
    ],
    outcomes: ['API Test Engineer', 'SDET', 'QA Automation Engineer', 'Backend Tester']
  },
  // Testing - Performance Testing
  {
    slug: 'performance-testing',
    title: 'Performance Testing',
    category: 'testing',
    categoryName: 'Software Testing',
    duration: '2 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Learn performance testing with JMeter, LoadRunner, and monitoring tools.',
    shortDescription: 'Load and performance testing',
    image: '/images/courses/performance-testing.jpg',
    tools: ['JMeter', 'LoadRunner', 'Gatling', 'Grafana', 'New Relic'],
    highlights: ['Load testing', 'Stress testing', 'Performance analysis', 'Monitoring'],
    curriculum: [
      { title: 'Performance Basics', topics: ['Types of testing', 'Metrics', 'Requirements'] },
      { title: 'JMeter', topics: ['Test plans', 'Samplers', 'Assertions', 'Reports'] },
      { title: 'LoadRunner', topics: ['VuGen', 'Controller', 'Analysis'] },
      { title: 'Analysis', topics: ['Bottleneck identification', 'Tuning', 'Reporting'] },
      { title: 'Advanced Topics', topics: ['Cloud testing', 'APM tools', 'CI integration'] }
    ],
    outcomes: ['Performance Test Engineer', 'Load Test Specialist', 'QA Engineer', 'Site Reliability Engineer']
  },
  // Cloud DevOps - Kubernetes
  {
    slug: 'kubernetes',
    title: 'Kubernetes',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '2 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Master container orchestration with Kubernetes for deploying scalable applications.',
    shortDescription: 'Container orchestration with K8s',
    image: '/images/courses/kubernetes.jpg',
    tools: ['Kubernetes', 'kubectl', 'Helm', 'Prometheus', 'Istio'],
    highlights: ['Container orchestration', 'Service mesh', 'Auto-scaling', 'CKA prep'],
    curriculum: [
      { title: 'K8s Fundamentals', topics: ['Architecture', 'Pods', 'Services', 'Deployments'] },
      { title: 'Workloads', topics: ['ReplicaSets', 'DaemonSets', 'Jobs', 'CronJobs'] },
      { title: 'Networking', topics: ['Services', 'Ingress', 'Network policies'] },
      { title: 'Storage', topics: ['Volumes', 'PV/PVC', 'StorageClasses'] },
      { title: 'Advanced', topics: ['Helm', 'Operators', 'Security', 'Monitoring'] }
    ],
    outcomes: ['Kubernetes Administrator', 'DevOps Engineer', 'Platform Engineer', 'SRE']
  },
  // Cloud DevOps - Docker
  {
    slug: 'docker',
    title: 'Docker',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '1.5 months',
    mode: 'Online',
    level: 'Beginner',
    description: 'Learn containerization with Docker for building, shipping, and running applications.',
    shortDescription: 'Containerize applications with Docker',
    image: '/images/courses/docker.jpg',
    tools: ['Docker', 'Docker Compose', 'Docker Hub', 'Dockerfile', 'Docker Swarm'],
    highlights: ['Containerization', 'Image building', 'Multi-container apps', 'CI/CD'],
    curriculum: [
      { title: 'Docker Basics', topics: ['Installation', 'Images', 'Containers', 'Commands'] },
      { title: 'Dockerfile', topics: ['Build images', 'Layers', 'Best practices'] },
      { title: 'Docker Compose', topics: ['Multi-container', 'Networks', 'Volumes'] },
      { title: 'Docker Hub', topics: ['Push/Pull', 'Private registry', 'Automation'] },
      { title: 'Production', topics: ['Docker Swarm', 'Security', 'Logging'] }
    ],
    outcomes: ['Docker Developer', 'DevOps Engineer', 'Cloud Engineer', 'Backend Developer']
  },
  // Cloud DevOps - Terraform
  {
    slug: 'terraform',
    title: 'Terraform',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '2 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Master Infrastructure as Code with Terraform for multi-cloud deployments.',
    shortDescription: 'Infrastructure as Code with Terraform',
    image: '/images/courses/terraform.jpg',
    tools: ['Terraform', 'HCL', 'AWS/Azure/GCP', 'Terraform Cloud', 'Terragrunt'],
    highlights: ['IaC principles', 'Multi-cloud', 'State management', 'Modules'],
    curriculum: [
      { title: 'Terraform Basics', topics: ['HCL syntax', 'Providers', 'Resources'] },
      { title: 'State Management', topics: ['Remote state', 'Locking', 'Workspaces'] },
      { title: 'Modules', topics: ['Module creation', 'Registry', 'Best practices'] },
      { title: 'Multi-Cloud', topics: ['AWS', 'Azure', 'GCP resources'] },
      { title: 'Enterprise', topics: ['Terraform Cloud', 'Sentinel', 'CI/CD'] }
    ],
    outcomes: ['Terraform Developer', 'Infrastructure Engineer', 'Cloud Architect', 'DevOps Engineer']
  },
  // Cloud DevOps - Jenkins
  {
    slug: 'jenkins',
    title: 'Jenkins',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    duration: '1.5 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Build CI/CD pipelines with Jenkins for automated software delivery.',
    shortDescription: 'CI/CD automation with Jenkins',
    image: '/images/courses/jenkins.jpg',
    tools: ['Jenkins', 'Groovy', 'Git', 'Docker', 'Maven'],
    highlights: ['Pipeline as Code', 'Integrations', 'Distributed builds', 'Security'],
    curriculum: [
      { title: 'Jenkins Basics', topics: ['Installation', 'Jobs', 'Configuration'] },
      { title: 'Pipelines', topics: ['Declarative', 'Scripted', 'Stages'] },
      { title: 'Integrations', topics: ['Git', 'Docker', 'SonarQube', 'Nexus'] },
      { title: 'Distributed Builds', topics: ['Master/Agent', 'Cloud agents', 'Scaling'] },
      { title: 'Best Practices', topics: ['Shared libraries', 'Security', 'Backup'] }
    ],
    outcomes: ['Jenkins Administrator', 'CI/CD Engineer', 'DevOps Engineer', 'Build Engineer']
  },
  // Security - CompTIA Security+
  {
    slug: 'comptia-security',
    title: 'CompTIA Security+',
    category: 'security',
    categoryName: 'Cyber Security',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Prepare for CompTIA Security+ certification with comprehensive security fundamentals.',
    shortDescription: 'Security+ certification prep',
    image: '/images/courses/comptia-security.jpg',
    tools: ['Wireshark', 'Nmap', 'Metasploit', 'Virtual labs', 'Security tools'],
    highlights: ['Certification prep', 'Hands-on labs', 'Practice exams', 'Security fundamentals'],
    curriculum: [
      { title: 'Security Concepts', topics: ['CIA triad', 'Risk management', 'Threats'] },
      { title: 'Architecture', topics: ['Network security', 'Cloud security', 'Virtualization'] },
      { title: 'Implementation', topics: ['Identity management', 'Cryptography', 'PKI'] },
      { title: 'Operations', topics: ['Incident response', 'Forensics', 'Monitoring'] },
      { title: 'Governance', topics: ['Policies', 'Compliance', 'Privacy'] }
    ],
    outcomes: ['Security Analyst', 'IT Security Specialist', 'System Administrator', 'Help Desk Analyst']
  },
  // Networking - CCNA
  {
    slug: 'ccna',
    title: 'CCNA Certification',
    category: 'networking',
    categoryName: 'Networking',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Prepare for Cisco CCNA certification with networking fundamentals and hands-on labs.',
    shortDescription: 'Cisco networking certification',
    image: '/images/courses/ccna.jpg',
    tools: ['Cisco Packet Tracer', 'GNS3', 'Wireshark', 'Cisco routers/switches'],
    highlights: ['CCNA certification', 'Hands-on labs', 'Network design', 'Troubleshooting'],
    curriculum: [
      { title: 'Network Fundamentals', topics: ['OSI model', 'TCP/IP', 'Ethernet'] },
      { title: 'Switching', topics: ['VLANs', 'STP', 'EtherChannel'] },
      { title: 'Routing', topics: ['Static routing', 'OSPF', 'EIGRP'] },
      { title: 'IP Services', topics: ['DHCP', 'NAT', 'NTP', 'SNMP'] },
      { title: 'Security & Automation', topics: ['ACLs', 'AAA', 'Network automation'] }
    ],
    outcomes: ['Network Administrator', 'Network Engineer', 'IT Support Specialist', 'NOC Technician']
  },
  // Security - Network Security
  {
    slug: 'network-security',
    title: 'Network Security',
    category: 'security',
    categoryName: 'Cyber Security',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Learn to secure network infrastructure with firewalls, IDS/IPS, and security best practices.',
    shortDescription: 'Secure network infrastructure',
    image: '/images/courses/network-security.jpg',
    tools: ['Palo Alto', 'Cisco ASA', 'Snort', 'pfSense', 'Wireshark'],
    highlights: ['Firewall configuration', 'IDS/IPS', 'VPN', 'Network monitoring'],
    curriculum: [
      { title: 'Network Security Basics', topics: ['Threats', 'Vulnerabilities', 'Defense in depth'] },
      { title: 'Firewalls', topics: ['Types', 'Configuration', 'Rules', 'NAT'] },
      { title: 'IDS/IPS', topics: ['Detection methods', 'Snort', 'Tuning'] },
      { title: 'VPN', topics: ['Site-to-site', 'Remote access', 'IPSec'] },
      { title: 'Security Operations', topics: ['Monitoring', 'Logging', 'Incident response'] }
    ],
    outcomes: ['Network Security Engineer', 'Security Analyst', 'Firewall Administrator', 'SOC Analyst']
  },
  // Creative - Graphic Design
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    category: 'creative',
    categoryName: 'Creative Design',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Learn graphic design fundamentals with Adobe Creative Suite for print and digital media.',
    shortDescription: 'Visual design with Adobe tools',
    image: '/images/courses/graphic-design.jpg',
    tools: ['Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Figma'],
    highlights: ['Design principles', 'Brand identity', 'Print design', 'Digital graphics'],
    curriculum: [
      { title: 'Design Fundamentals', topics: ['Color theory', 'Typography', 'Layout', 'Composition'] },
      { title: 'Adobe Photoshop', topics: ['Photo editing', 'Compositing', 'Effects'] },
      { title: 'Adobe Illustrator', topics: ['Vector graphics', 'Logo design', 'Illustrations'] },
      { title: 'InDesign', topics: ['Print layouts', 'Brochures', 'Magazines'] },
      { title: 'Portfolio', topics: ['Brand identity project', 'Print campaign', 'Digital assets'] }
    ],
    outcomes: ['Graphic Designer', 'Visual Designer', 'Brand Designer', 'Marketing Designer']
  },
  // Creative - Motion Graphics
  {
    slug: 'motion-graphics',
    title: 'Motion Graphics',
    category: 'creative',
    categoryName: 'Creative Design',
    duration: '3 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Create stunning animations and motion graphics with After Effects and Cinema 4D.',
    shortDescription: 'Animation and visual effects',
    image: '/images/courses/motion-graphics.jpg',
    tools: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Illustrator', 'Lottie'],
    highlights: ['Animation principles', '2D/3D motion', 'Visual effects', 'Title sequences'],
    curriculum: [
      { title: 'Animation Basics', topics: ['12 principles', 'Keyframes', 'Easing'] },
      { title: 'After Effects', topics: ['Compositions', 'Effects', 'Expressions'] },
      { title: '3D Motion', topics: ['Cinema 4D basics', '3D text', 'Rendering'] },
      { title: 'Advanced Techniques', topics: ['Particle systems', 'Tracking', 'Compositing'] },
      { title: 'Showreel', topics: ['Project work', 'Showreel creation', 'Portfolio'] }
    ],
    outcomes: ['Motion Designer', 'VFX Artist', 'Animator', 'Video Producer']
  },
  // Creative - Video Editing
  {
    slug: 'video-editing',
    title: 'Video Editing',
    category: 'creative',
    categoryName: 'Creative Design',
    duration: '2 months',
    mode: 'Online',
    level: 'Beginner',
    description: 'Master video editing with Premiere Pro and DaVinci Resolve for professional content creation.',
    shortDescription: 'Professional video editing',
    image: '/images/courses/video-editing.jpg',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Audition', 'Media Encoder'],
    highlights: ['Editing techniques', 'Color grading', 'Audio mixing', 'YouTube/Social'],
    curriculum: [
      { title: 'Editing Basics', topics: ['Timeline', 'Cuts', 'Transitions', 'Pacing'] },
      { title: 'Premiere Pro', topics: ['Workflow', 'Effects', 'Multicam', 'Export'] },
      { title: 'Color Grading', topics: ['DaVinci Resolve', 'Color correction', 'LUTs'] },
      { title: 'Audio', topics: ['Sound design', 'Music', 'Voice-over', 'Mixing'] },
      { title: 'Projects', topics: ['YouTube video', 'Short film', 'Social media'] }
    ],
    outcomes: ['Video Editor', 'Content Creator', 'YouTube Producer', 'Social Media Manager']
  },
  // Web Development - Angular
  {
    slug: 'angular',
    title: 'Angular',
    category: 'fullstack',
    categoryName: 'Full Stack Development',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Build enterprise-grade single-page applications with Angular framework and TypeScript.',
    shortDescription: 'Enterprise web apps with Angular',
    image: '/images/courses/angular.jpg',
    tools: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material'],
    highlights: ['Component architecture', 'TypeScript mastery', 'State management', 'Enterprise patterns'],
    curriculum: [
      { title: 'Angular Fundamentals', topics: ['Components', 'Modules', 'Templates', 'TypeScript'] },
      { title: 'Data & Forms', topics: ['Services', 'HTTP client', 'Reactive forms', 'Validation'] },
      { title: 'Routing & State', topics: ['Router', 'Guards', 'NgRx', 'State management'] },
      { title: 'Advanced Angular', topics: ['Lazy loading', 'Pipes', 'Directives', 'Testing'] },
      { title: 'Project', topics: ['Enterprise app', 'Best practices', 'Deployment'] }
    ],
    outcomes: ['Angular Developer', 'Frontend Developer', 'Full Stack Developer', 'UI Engineer']
  },
  // Mobile Development - Flutter
  {
    slug: 'flutter',
    title: 'Flutter Development',
    category: 'fullstack',
    categoryName: 'Full Stack Development',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Build beautiful cross-platform mobile apps for iOS and Android with Flutter and Dart.',
    shortDescription: 'Cross-platform mobile development',
    image: '/images/courses/flutter.jpg',
    tools: ['Flutter', 'Dart', 'Firebase', 'VS Code', 'Android Studio'],
    highlights: ['Single codebase', 'Hot reload', 'Beautiful UI', 'Native performance'],
    curriculum: [
      { title: 'Dart & Flutter Basics', topics: ['Dart syntax', 'Widgets', 'State management'] },
      { title: 'UI Development', topics: ['Layouts', 'Material design', 'Custom widgets'] },
      { title: 'Data & Backend', topics: ['API integration', 'Firebase', 'Local storage'] },
      { title: 'Advanced Features', topics: ['Animations', 'Platform channels', 'Testing'] },
      { title: 'App Publishing', topics: ['Play Store', 'App Store', 'CI/CD'] }
    ],
    outcomes: ['Flutter Developer', 'Mobile Developer', 'Cross-platform Developer', 'App Developer']
  },
  // Medical - Medical Coding
  {
    slug: 'medical-coding',
    title: 'Medical Coding',
    category: 'medical',
    categoryName: 'Medical & Clinical Skills',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Beginner',
    description: 'Learn medical coding with ICD-10, CPT, and HCPCS for healthcare billing and documentation.',
    shortDescription: 'Healthcare coding certification',
    image: '/images/courses/medical-coding.jpg',
    tools: ['ICD-10', 'CPT', 'HCPCS', '3M Encoder', 'Epic'],
    highlights: ['CPC certification prep', 'Anatomy basics', 'Coding guidelines', 'Compliance'],
    curriculum: [
      { title: 'Medical Terminology', topics: ['Anatomy', 'Physiology', 'Medical terms'] },
      { title: 'ICD-10-CM', topics: ['Diagnosis coding', 'Guidelines', 'Code structure'] },
      { title: 'CPT Coding', topics: ['Procedure codes', 'E/M coding', 'Modifiers'] },
      { title: 'HCPCS & Billing', topics: ['HCPCS codes', 'Claims', 'Reimbursement'] },
      { title: 'Certification Prep', topics: ['CPC exam', 'Practice tests', 'Case studies'] }
    ],
    outcomes: ['Medical Coder', 'Billing Specialist', 'Health Information Technician', 'Coding Auditor']
  },
  // Medical - Clinical Data Management
  {
    slug: 'clinical-data',
    title: 'Clinical Data Management',
    category: 'medical',
    categoryName: 'Medical & Clinical Skills',
    duration: '3 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Master clinical trial data management, database design, and regulatory compliance.',
    shortDescription: 'Clinical trials data management',
    image: '/images/courses/clinical-data.jpg',
    tools: ['Medidata Rave', 'Oracle Clinical', 'SAS', 'Excel', 'EDC systems'],
    highlights: ['GCP guidelines', 'Database design', 'Data validation', 'CDISC standards'],
    curriculum: [
      { title: 'Clinical Trials Basics', topics: ['Trial phases', 'GCP', 'Regulatory requirements'] },
      { title: 'Database Design', topics: ['CRF design', 'EDC systems', 'Validation rules'] },
      { title: 'Data Management', topics: ['Data entry', 'Query management', 'SAE handling'] },
      { title: 'CDISC Standards', topics: ['CDASH', 'SDTM', 'ADaM basics'] },
      { title: 'Quality & Reporting', topics: ['Audits', 'Database lock', 'TLFs'] }
    ],
    outcomes: ['Clinical Data Manager', 'Data Coordinator', 'CDM Associate', 'Database Programmer']
  },
  // Medical - Healthcare Analytics
  {
    slug: 'healthcare-analytics',
    title: 'Healthcare Analytics',
    category: 'medical',
    categoryName: 'Medical & Clinical Skills',
    duration: '3 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Analyze healthcare data to improve patient outcomes and operational efficiency.',
    shortDescription: 'Data analytics for healthcare',
    image: '/images/courses/healthcare-analytics.jpg',
    tools: ['SQL', 'Python', 'Tableau', 'Power BI', 'SAS'],
    highlights: ['Population health', 'Predictive analytics', 'HIPAA compliance', 'Quality metrics'],
    curriculum: [
      { title: 'Healthcare Data Basics', topics: ['EHR data', 'Claims data', 'Healthcare metrics'] },
      { title: 'SQL for Healthcare', topics: ['Queries', 'Data extraction', 'Reporting'] },
      { title: 'Analytics Tools', topics: ['Python/R basics', 'Tableau dashboards'] },
      { title: 'Predictive Modeling', topics: ['Risk stratification', 'Readmission prediction'] },
      { title: 'Compliance & Projects', topics: ['HIPAA', 'Quality measures', 'Capstone'] }
    ],
    outcomes: ['Healthcare Analyst', 'Clinical Analyst', 'Population Health Analyst', 'BI Analyst']
  },
  // Project Management - PMP
  {
    slug: 'pmp',
    title: 'PMP Certification',
    category: 'agile',
    categoryName: 'Agile & Project Management',
    duration: '3 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Prepare for PMI Project Management Professional certification with comprehensive training.',
    shortDescription: 'PMP certification prep',
    image: '/images/courses/pmp.jpg',
    tools: ['MS Project', 'PMBOK Guide', 'PMI Standards', 'Exam simulators'],
    highlights: ['35 PDUs', 'Exam prep', 'Practice tests', 'Application guidance'],
    curriculum: [
      { title: 'Project Environment', topics: ['Governance', 'Project types', 'Stakeholders'] },
      { title: 'Predictive Approach', topics: ['Planning', 'Scope', 'Schedule', 'Cost'] },
      { title: 'Agile Approach', topics: ['Agile principles', 'Hybrid methods'] },
      { title: 'People & Leadership', topics: ['Team management', 'Communication', 'Conflict'] },
      { title: 'Exam Preparation', topics: ['Full-length mocks', 'Time management', 'Strategies'] }
    ],
    outcomes: ['Project Manager', 'Program Manager', 'PMO Lead', 'Delivery Manager']
  },
  // Agile - Scrum Master
  {
    slug: 'scrum-master',
    title: 'Scrum Master',
    category: 'agile',
    categoryName: 'Agile & Project Management',
    duration: '1 month',
    mode: 'Online',
    level: 'Beginner',
    description: 'Master Scrum framework and prepare for Certified ScrumMaster (CSM) certification.',
    shortDescription: 'Scrum Master certification',
    image: '/images/courses/scrum-master.jpg',
    tools: ['JIRA', 'Confluence', 'Miro', 'Scrum Guide'],
    highlights: ['CSM certification', 'Sprint facilitation', 'Scrum events', 'Servant leadership'],
    curriculum: [
      { title: 'Agile & Scrum Basics', topics: ['Agile manifesto', 'Scrum theory', 'Values'] },
      { title: 'Scrum Roles', topics: ['Scrum Master', 'Product Owner', 'Developers'] },
      { title: 'Scrum Events', topics: ['Sprint planning', 'Daily scrum', 'Review', 'Retro'] },
      { title: 'Scrum Artifacts', topics: ['Backlog', 'Sprint backlog', 'Increment'] },
      { title: 'Facilitation', topics: ['Team dynamics', 'Impediments', 'Scaling'] }
    ],
    outcomes: ['Scrum Master', 'Agile Coach', 'Delivery Lead', 'Product Owner']
  },
  // Agile - Agile Fundamentals
  {
    slug: 'agile',
    title: 'Agile Fundamentals',
    category: 'agile',
    categoryName: 'Agile & Project Management',
    duration: '1 month',
    mode: 'Online',
    level: 'Beginner',
    description: 'Learn agile principles, methodologies, and practices for software development teams.',
    shortDescription: 'Agile methodology basics',
    image: '/images/courses/agile.jpg',
    tools: ['JIRA', 'Trello', 'Azure DevOps', 'Miro'],
    highlights: ['Agile mindset', 'Scrum & Kanban', 'User stories', 'Continuous improvement'],
    curriculum: [
      { title: 'Agile Mindset', topics: ['Manifesto', 'Principles', 'Adaptive vs predictive'] },
      { title: 'Scrum Framework', topics: ['Roles', 'Events', 'Artifacts'] },
      { title: 'Kanban', topics: ['Visual boards', 'WIP limits', 'Flow'] },
      { title: 'User Stories', topics: ['Writing stories', 'Acceptance criteria', 'Estimation'] },
      { title: 'Agile Practices', topics: ['Stand-ups', 'Retrospectives', 'Velocity'] }
    ],
    outcomes: ['Agile Practitioner', 'Team Lead', 'Business Analyst', 'Developer']
  },
  // Enterprise - SAP
  {
    slug: 'sap',
    title: 'SAP',
    category: 'enterprise',
    categoryName: 'Enterprise Solutions',
    duration: '4 months',
    mode: 'Online / Classroom',
    level: 'Intermediate',
    description: 'Learn SAP ERP modules for enterprise resource planning and business process management.',
    shortDescription: 'SAP ERP training',
    image: '/images/courses/sap.jpg',
    tools: ['SAP S/4HANA', 'SAP GUI', 'SAP Fiori', 'ABAP basics'],
    highlights: ['Hands-on access', 'Real scenarios', 'Certification prep', 'Module specialization'],
    curriculum: [
      { title: 'SAP Basics', topics: ['ERP concepts', 'SAP navigation', 'Master data'] },
      { title: 'Module Overview', topics: ['MM', 'SD', 'FICO', 'PP', 'HCM'] },
      { title: 'Chosen Module Deep Dive', topics: ['Configuration', 'Transactions', 'Reports'] },
      { title: 'Integration', topics: ['Cross-module integration', 'IDocs', 'Workflows'] },
      { title: 'Certification', topics: ['Practice exams', 'Real-world scenarios'] }
    ],
    outcomes: ['SAP Consultant', 'SAP Analyst', 'ERP Specialist', 'Business Analyst']
  },
  // Enterprise - Salesforce
  {
    slug: 'salesforce',
    title: 'Salesforce',
    category: 'enterprise',
    categoryName: 'Enterprise Solutions',
    duration: '3 months',
    mode: 'Online',
    level: 'Beginner',
    description: 'Master Salesforce CRM platform for sales, service, and marketing automation.',
    shortDescription: 'Salesforce CRM training',
    image: '/images/courses/salesforce.jpg',
    tools: ['Salesforce', 'Lightning', 'Apex', 'SOQL', 'Flow Builder'],
    highlights: ['Admin certification', 'Developer basics', 'Lightning components', 'Trailhead'],
    curriculum: [
      { title: 'Salesforce Basics', topics: ['CRM concepts', 'Navigation', 'Objects'] },
      { title: 'Administration', topics: ['Users', 'Security', 'Data management'] },
      { title: 'Automation', topics: ['Flow Builder', 'Process automation', 'Approval process'] },
      { title: 'Reporting', topics: ['Reports', 'Dashboards', 'Analytics'] },
      { title: 'Development Intro', topics: ['Apex basics', 'SOQL', 'Lightning components'] }
    ],
    outcomes: ['Salesforce Admin', 'Salesforce Developer', 'CRM Analyst', 'Business Analyst']
  },
  // Enterprise - ServiceNow
  {
    slug: 'servicenow',
    title: 'ServiceNow',
    category: 'enterprise',
    categoryName: 'Enterprise Solutions',
    duration: '3 months',
    mode: 'Online',
    level: 'Intermediate',
    description: 'Learn ServiceNow platform for IT service management, workflows, and automation.',
    shortDescription: 'ServiceNow ITSM training',
    image: '/images/courses/servicenow.jpg',
    tools: ['ServiceNow', 'ITIL', 'JavaScript', 'Flow Designer', 'IntegrationHub'],
    highlights: ['CSA certification', 'ITSM modules', 'Workflow automation', 'Instance access'],
    curriculum: [
      { title: 'ServiceNow Basics', topics: ['Platform overview', 'Navigation', 'Tables'] },
      { title: 'ITSM Modules', topics: ['Incident', 'Problem', 'Change', 'CMDB'] },
      { title: 'Configuration', topics: ['Forms', 'Lists', 'Business rules', 'UI policies'] },
      { title: 'Automation', topics: ['Flow Designer', 'Scheduled jobs', 'Notifications'] },
      { title: 'Development', topics: ['Scripting', 'APIs', 'Integration'] }
    ],
    outcomes: ['ServiceNow Admin', 'ServiceNow Developer', 'ITSM Analyst', 'Platform Specialist']
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
