export interface Project {
  title: string
  summary: string
  description: string
  imagePath: string
  imageAlt: string
  githubUrl: string
  liveUrl?: string
  status?: string
  stack: string[]
}

export const projects: Project[] = [
  {
    title: 'The Home Library',
    summary: 'Community book lending platform',
    description:
      'A community-driven platform for discovering, sharing, and borrowing books locally, with built-in loan tracking.',
    imagePath: '/images/projects/the-home-library-img.png',
    imageAlt: 'Screenshot of The Home Library',
    githubUrl: 'https://github.com/eden-jermendi/TheHomeLibrary',
    liveUrl: 'https://the-home-library.vercel.app/',
    stack: ['Community Platform', 'Book Lending', 'Local Sharing'],
  },
  {
    title: 'Coursework Tracker',
    summary: 'Full-stack academic planning app',
    description:
      'A productivity-focused application for managing academic progress with database-backed state and external API synchronization.',
    imagePath: '/images/projects/coursework-tracker-img.png',
    imageAlt: 'Screenshot of Coursework Tracker',
    githubUrl: 'https://github.com/eden-jermendi/coursework-tracker',
    liveUrl: 'https://coursework-tracker.vercel.app/',
    stack: ['React', 'Node.js', 'Express', 'Database'],
  },
  {
    title: 'Maramataka Calendar',
    summary: 'Digital maramataka exploration',
    description:
      'An interactive calendar project grounded in the traditional Maori lunar maramataka, designed as both a learning tool and a respectful digital interface.',
    imagePath: '/images/projects/maramataka-calendar-img.jpg',
    imageAlt: 'Screenshot of Maramataka Calendar',
    githubUrl: 'https://github.com/eden-jermendi/maramataka-calendar',
    status: 'Work in progress',
    stack: ['JavaScript', 'Calendar UI', 'Cultural Research'],
  },
  {
    title: 'Weather Oracle',
    summary: 'Playful weather tool with AI-assisted output',
    description:
      'An API-driven weather utility that blends forecast data with LLM-assisted presentation to create a more personal, conversational experience.',
    imagePath: '/images/projects/weather-oracle-img.png',
    imageAlt: 'Screenshot of Weather Oracle',
    githubUrl: 'https://github.com/eden-jermendi/weather-oracle',
    liveUrl: 'https://weather-oracle-2sgu.onrender.com/',
    stack: ['React', 'External APIs', 'LLM Integration'],
  },
  {
    title: 'Delete My Instagram Comments',
    summary: 'Browser-console automation utility',
    description:
      'A focused JavaScript utility for bulk comment management through browser developer tools, built to solve a narrow real-world frustration cleanly.',
    imagePath: '/images/projects/delete-my-insta-comments-img.jpg',
    imageAlt: 'Screenshot of Delete My Instagram Comments utility',
    githubUrl: 'https://github.com/eden-jermendi/delete-my-instagram-comments',
    stack: ['JavaScript', 'Automation', 'Browser Tools'],
  },
]
