
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
  date?: string; // e.g., "summer 2024" or "jan 2024 - present"
  org?: string;  // for work experience
  status?: 'wip' | 'complete';
  image?: string; // URL for the project thumbnail
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    gpa: string;
}

export interface ProfileData {
  name: string;
  handle: string; // Used for "ms cs @ wwu"
  title: string; // Secondary title if needed, or mapped to handle
  location: string;
  email: string;
  bio: string; 
  education: Education;
  focus: string[];
  socials: SocialLink[];
  resumeUrl: string;
}
