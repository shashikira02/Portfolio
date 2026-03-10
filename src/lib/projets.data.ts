export type Project = {
  id: number;
  name: string;
  date?: string;
  description: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl: string;
  image?: string;
};

export const projects = [
  {
    id: 1,
    name: 'ClickCart - Online Store',
    // date: 'May 2025',
    description: [
      'a full-stack e-commerce platform using the MERN stack with features like authentication, product management, and Stripe payments',
      'Implemented JWT-based authentication, Nodemailer email notifications, and a responsive front end using React.',
    ],
    technologies: ['Node.js', 'Express.js', 'React.js', 'REST API', 'MongoDB'],
    demoUrl: 'https://qkart-xl4l.vercel.app/',
    githubUrl: 'https://github.com/shashikira02/ClickCart',
    // image: '',
  },
  {
    id: 2,
    name: 'Triply - Travel Website',
    // date: 'Jan 2025',
    description: [
      'Created a dynamic and responsive travel platform over 12 Countries, delivering an engaging user experience.',
      ' Initiated key pages including destination search, filterable activities with multi-select filters, interactive image carousels, and booking details to enhance user engagement and seamless exploration of over 100 cities and activities.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://triply-eight.vercel.app/',
    githubUrl: 'https://github.com/shashikira02/Triply',
    // image: '',
  },
  {
    id: 3,
    name: 'Medify - Medical Center Finder and Booking App',
    // date: 'Jan 2026',
    description: [
      'a fully responsive medical center search platform with state city lookup, dynamic dropdowns, and results listing using data fetched from REST APIs',
      ' Implemented an end-to-end appointment booking flow with calendar scheduling, time slot selection, booking persistence via localStorage, and a dedicated My Bookings page.',
    ],
    technologies: ['React.js', 'Swiper', 'REST API'],
    demoUrl: 'https://medify-shashi.netlify.app/',
    githubUrl: 'https://github.com/shashikira02/Medify',
    // image: '',
  },
  {
    id: 4,
    name: 'Online Billing System',
    description: [
      'Designed a web-based platform capable of handling over 1,000 invoices daily, ensuring seamless payment tracking.',
      'Simplified comprehensive financial reporting tools to streamline business operations.',
      'Introduced automated email reminders, improving payment compliance and reducing overdue invoices',
    ],
    // demoUrl: '',
    technologies: ['PHP', 'HTML', 'JavaScript', 'SQL'],
    githubUrl: 'https://github.com/shashikira02/Billing-Software',
    // image: ''
  },
  {
    id: 5,
    name: 'COVID-19 Hospital Management System',
    description: [
      'Introduced real-time bed availability updates for over 1,000 beds, optimizing hospital resource allocation.',
      'Executed resource management and staff scheduling modules to improve patient care and operational efficiency',
      'Established electronic health records (EHR) to ensure seamless access to patient data across departments, enhancing care coordination and effective monitoring for over 5,000 patients',
    ],
    // demoUrl: '',
    technologies: ['Djano', 'HTML', 'JavaScript', 'SQL'],
    githubUrl: 'https://github.com/shashikira02/Billing-Software',
    // image: ''
  },
];
