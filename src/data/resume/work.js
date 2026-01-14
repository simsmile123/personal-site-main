/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Amazon',
    position: 'Software Development Engineer Intern',
    url: 'https://www.amazon.com/',
    startDate: '2025-05-01',
    endDate: '2025-08-01',
    summary: 'Arlington, VA',
    highlights: [
      'Shipped an AI code review tool to production that delivers feedback in minutes instead of weeks',
      'Built a code generator that automates repetitive coding tasks, saving developers 80% of manual work',
      'Tool adopted by team and remains in active use',
    ],
  },
  {
    name: 'Knudsen Institute, The Data Mine Corporate Partners Program',
    position: 'Project Lead - Teaching Assistant',
    url: 'https://datamine.purdue.edu/',
    startDate: '2024-08-01',
    endDate: '2025-05-01',
    summary: 'West Lafayette, IN',
    highlights: [
      'Led 12-member team building Named Entity Recognition models for manufacturing data, achieving 93.5% accuracy and 0.82 F1 score',
      'Built web scrapers using BeautifulSoup and Selenium, extracting data from 1500+ pages across 20+ manufacturer sites',
    ],
  },
  {
    name: 'Purdue Google Developer Group',
    position: 'Vice President',
    url: 'https://gdg.community.dev/gdg-on-campus-purdue-university-west-lafayette-united-states/',
    startDate: '2024-04-01',
    summary: 'West Lafayette, IN',
    highlights: [
      'Scaled organization from 0 to 200+ members through outreach, events, and technical workshops',
      'Mentored 30+ students in technical concepts and project deployments',
    ],
  },
  {
    name: 'Foodservice Consultants Studio',
    position: 'Software Engineering Intern',
    url: 'https://www.foodserviceconsultantsstudio.com/',
    startDate: '2024-06-01',
    endDate: '2024-08-01',
    summary: 'Richmond, VA',
    highlights: [
      'Built client management system handling 700+ projects with real-time status tracking and automated notifications',
      'Created backend features with automatic error checking, reducing data mistakes by 40%',
    ],
  },
  {
    name: 'Caterpillar Inc, Data Mine Corporate Partner',
    position: 'Full Stack Developer',
    url: 'https://datamine.purdue.edu/corporate/',
    startDate: '2023-08-01',
    endDate: '2024-04-30',
    summary: 'West Lafayette, IN',
    highlights: [
      'Built Flutter app for fleet managers to monitor EV chargers and predict charging times using LSTM models',
      'Designed UI in Figma and created Tableau dashboards for charge scheduling to optimize fleet operations',
    ],
  },
  {
    name: 'REAN Foundation',
    position: 'Product Manager and Marketer',
    url: '',
    startDate: '2022-05-01',
    endDate: '2022-08-01',
    summary: 'Ashburn, VA',
    highlights: [
      'Analyzed 10 health and wellness solutions suitable for low-income settings, implemented in Bangalore',
      'Created a framework to collect health data using FHIR (Fast Health Interoperability Resources)',
      'Built a conversational bot using Docker capable of answering wellness-related questions',
    ],
  },
  {
    name: 'HackTJ',
    position: 'Director',
    url: 'https://hacktj.org/',
    startDate: '2020-09-01',
    endDate: '2023-05-01',
    summary: 'Alexandria, VA',
    highlights: [
      'Raised $30,000 and coordinated with 15 company sponsors including Jane Street and Roam',
      'Increased participant applications by 33% and secured an overnight venue at Cvent',
      'Established the Women in Tech Panel, mentored 4 teams of hackers on product development',
      'Click the title to see our website',
    ],
  },
];

export default work;
