import { Bot, Brain, Database, Zap, MessageSquare, Globe } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    name: 'AI Voicebot',
    description: 'Natural voice interactions powered by advanced AI technology for seamless communication.',
    icon: Bot,
  },
  {
    name: 'Smart Chatbot',
    description: 'Intelligent chatbot solutions that understand context and provide accurate responses.',
    icon: MessageSquare,
  },
  {
    name: 'Knowledge Base',
    description: 'Comprehensive enterprise knowledge management system with smart search capabilities.',
    icon: Database,
  },
  {
    name: 'AI Processing',
    description: 'Advanced AI algorithms for natural language processing and understanding.',
    icon: Brain,
  },
  {
    name: 'Real-time Response',
    description: 'Lightning-fast response times with high accuracy and reliability.',
    icon: Zap,
  },
  {
    name: 'Multi-language Support',
    description: 'Global reach with support for multiple languages and regional customization.',
    icon: Globe,
  },
];