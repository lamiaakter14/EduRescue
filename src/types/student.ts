// TypeScript types for student-facing components

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface EmergencyTicket {
  id: string;
  status: 'pending' | 'active' | 'resolved';
  subject: string;
  description: string;
  createdAt: Date;
  expert?: {
    name: string;
    avatar?: string;
  };
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article' | 'document';
  url: string;
}
