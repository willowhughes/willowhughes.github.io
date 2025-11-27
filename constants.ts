
import { ProfileData, Project } from './types';

export const PROFILE: ProfileData = {
  name: 'Willow Hughes',
  handle: 'MS CS @ WWU',
  title: 'robotics & swe',
  location: 'bellingham, wa',
  email: 'willownoamhughes@gmail.com',
  resumeUrl: '/resume.pdf', 
  education: {
    degree: 'ms computer science',
    institution: 'western washington university',
    year: 'exp. march 2027',
    gpa: '3.80 / 4.00'
  },
  focus: ['robotics (ml & perception)', 'systems', 'backend'],
  bio: "building robust software systems, ranging from low-level multithreaded c programs to cloud-native azure architectures. i love solving hard engineering problems across the stack.",
  socials: [
    { platform: 'github', url: 'https://github.com/willowhughes', username: 'github', icon: 'Github' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/willow-hughes', username: 'linkedin', icon: 'Linkedin' },
    { platform: 'email', url: 'mailto:willownoamhughes@gmail.com', username: 'email', icon: 'Mail' },
  ]
};

export const EXPERIENCE: Project[] = [
  {
    id: 'premera',
    title: 'software engineering intern',
    org: 'premera blue cross',
    date: 'summer 2024',
    description: '• led migration of c#/sql web app to azure\n• developed ci/cd pipelines with yaml & bicep, reducing deployment time by 40%\n• implemented authn/authz with entra id',
    techStack: ['azure', 'c#', 'ci/cd', 'bicep', 'sql'],
  },
  {
    id: 'research',
    title: 'undergraduate researcher',
    org: 'western washington university',
    date: 'oct 2024 - present',
    description: '• collaborating with dr. qiang hao on integrating test-driven development (tdd) into cs education\n• targeting publication at sigcse 2026',
    techStack: ['research', 'education', 'java', 'tdd'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-tutor',
    title: 'conversational ai spanish tutor',
    date: '2025',
    description: 'real-time speech-to-speech web app with adaptive difficulty scaling. optimizing stt->llm->tts pipeline for <1s latency.',
    techStack: ['python', 'flask', 'react', 'webrtc', 'llm'],
    repo: 'https://github.com/willowhughes/ai-spanish-tutor',
    status: 'wip',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'deadwood',
    title: 'deadwood board game',
    date: '2024',
    description: 'digital board game built with 15+ classes using oop patterns (mvc, observer). dynamic xml-based game data parsing.',
    techStack: ['java', 'javafx', 'fxml', 'oop'],
    link: 'https://github.com/willowhughes/deadwood', 
    status: 'complete',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'img-proc',
    title: 'multithreaded image processing',
    date: '2024',
    description: 'implemented laplacian edge detection on ppm images in c. achieved ~70% runtime reduction using posix threads and workload balancing.',
    techStack: ['c', 'posix threads', 'optimization', 'linux'],
    status: 'complete',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'chat-server',
    title: 'multi-client chat application',
    date: '2024',
    description: 'scalable tcp chat server supporting 255+ concurrent clients. implemented non-blocking i/o using select() for event-driven architecture.',
    techStack: ['c', 'sockets', 'tcp', 'networks'],
    status: 'complete',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'yarnify',
    title: 'yarnify',
    date: '2023',
    description: 'android app integrating ravelry api to suggest knitting patterns based on user inventory. built with a team of 3.',
    techStack: ['java', 'android studio', 'rest api', 'room db'],
    link: 'https://github.com/willowhughes/yarnify',
    status: 'complete',
    image: 'https://images.unsplash.com/photo-1621360841012-d76811568209?q=80&w=1000&auto=format&fit=crop'
  },
];
