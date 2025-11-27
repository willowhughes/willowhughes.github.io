import React from 'react';
import { Github, Linkedin, Mail, MapPin, Terminal, Cpu, FileText, ExternalLink, Monitor, GraduationCap, Target, Briefcase, Code } from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  switch (name) {
    case 'Github':
      return <Github className={className} />;
    case 'Linkedin':
      return <Linkedin className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'Location':
      return <MapPin className={className} />;
    case 'Terminal':
      return <Terminal className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'FileText':
        return <FileText className={className} />;
    case 'ExternalLink':
        return <ExternalLink className={className} />;
    case 'Monitor':
        return <Monitor className={className} />;
    case 'GraduationCap':
        return <GraduationCap className={className} />;
    case 'Target':
        return <Target className={className} />;
    case 'Briefcase':
        return <Briefcase className={className} />;
    case 'Code':
        return <Code className={className} />;
    default:
      return null;
  }
};