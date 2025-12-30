
import React from 'react';

export type Language = 'en' | 'pt';

export interface LinkItem {
  id: string;
  titles: Record<Language, string>;
  url: string;
  descriptions?: Record<Language, string>;
  icon: React.ReactNode;
  category: 'social' | 'project' | 'contact' | 'blog';
  color: string;
  size: 'small' | 'medium' | 'large';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
