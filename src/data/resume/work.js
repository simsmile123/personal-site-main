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
    name: 'Knudsen Institute, The Data Mine Corporate Partners Program',
    position: 'Project Manager - Teaching Assistant',
    url: 'https://datamine.purdue.edu/',
    startDate: '2024-08-01',
    summary: 'West Lafayette, IN',
    highlights: [
      'Leading a team of 12 students in web scraping and information extraction techniques through prompt engineering for a Large Language Model aimed at enhancing manufacturing language comprehension',
      'Facilitating weekly meetings, driving discussions on progress, troubleshooting, and teaching web scraping',
    ],
  },
  {
    name: 'Purdue Google Developer Student Club',
    position: 'Head of Marketing and Treasurer',
    url: 'https://gdg.community.dev/gdg-on-campus-purdue-university-west-lafayette-united-states/',
    startDate: '2024-04-01',
    summary: 'West Lafayette, IN',
    highlights: [
      'Boosted in-person engagement by 200% with 450 members',
      'Provided mentorship to team members on machine learning techniques, refining their software development',
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
      'Built a customer relationship management database capable of housing 700+ foodservice projects',
      'Designed an excel script to help reduce human error',
    ],
  },
  {
    name: 'Caterpillar Inc, Data Mine Corporate Partner',
    position: 'Full Stack Developer',
    url: 'https://datamine.purdue.edu/corporate/', // Add URL if available
    startDate: '2023-08-01',
    endDate: '2024-04-30',
    summary: 'West Lafayette, IN',
    highlights: [
      'Predict battery state of charge using a data-driven model, and synthesize high fidelity battery data sets using machine learning',
      'Develop a full stack app that guides operators in receiving electric chargers using push notifications',
      'Establish the navigation functionality with the Dijkstra algorithm',
    ],
  },
  {
    name: 'REAN Foundation',
    position: 'Product Manager and Marketer',
    url: '', // Add URL if available
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
    url: 'https://hacktj.org/', // Replace with specific URL if available
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
  {
    name: 'U.S. State Department',
    position: 'NSLI-Y Hindi Program Participant',
    url: 'https://www.nsliforyouth.org/', // Replace with specific URL if available
    startDate: '2023-05-01',
    endDate: '2023-08-01',
    summary: 'Bangalore, India',
    highlights: [
      'Completed an intensive language immersion program sponsored by the U.S. Department of State, achieving advanced proficiency in Hindi',
    ],
  },
  {
    name: 'Self-employed',
    position: 'Mathematics Tutor',
    url: '', // Add URL if available
    startDate: '2021-05-01',
    endDate: '2023-08-01',
    summary: 'Ashburn, VA',
    highlights: [
      'Engaged with four students, virtually and in-person, and taught difficult concepts in Calculus and Algebra',
    ],
  },
  {
    name: 'Panera Bread',
    position: 'Cashier',
    url: 'https://www.panerabread.com/', // Replace with specific URL if available
    startDate: '2022-11-01',
    endDate: '2023-06-01',
    summary: 'Ashburn, Virginia',
    highlights: [
      'Provided excellent customer service, processing transactions accurately and efficiently; Handled customer concerns professionally and effectively',
    ],
  },
];

export default work;
