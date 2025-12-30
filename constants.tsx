
import React from 'react';
import { LinkItem, Language } from './types';

export const RAFA_BIO: Record<Language, any> = {
  en: {
    name: "Rafa Rodrigues",
    role: "Software Engineer",
    location: "Brazil",
    tagline: "Building digital experiences with precision and creativity.",
    avatar: "/perfil.png",
    techStack: ["React", "TypeScript", "Node.js", "Next.js", "Python", "Cloud Architecture"],
    linksHeader: "Links",
    footerSuffix: "Precision Code"
  },
  pt: {
    name: "Rafa Rodrigues",
    role: "Engenheiro de Software",
    location: "Brasil",
    tagline: "Construindo experiências digitais com precisão e criatividade.",
    avatar: "/perfil.png",
    techStack: ["React", "TypeScript", "Node.js", "Next.js", "Python", "Arquitetura Cloud"],
    linksHeader: "Links",
    footerSuffix: "Código de Precisão"
  }
};

export const SOCIAL_LINKS: LinkItem[] = [
  {
    id: 'portfolio',
    titles: { en: 'Main Portfolio', pt: 'Portfólio Principal' },
    url: 'https://rafarodrigues.dev',
    descriptions: { 
      en: 'Explore my latest projects and deep dives.', 
      pt: 'Explore meus projetos mais recentes e detalhes técnicos.' 
    },
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    category: 'social',
    color: 'bg-[#26966E]',
    size: 'large'
  },
  {
    id: 'linkedin',
    titles: { en: 'LinkedIn', pt: 'LinkedIn' },
    url: 'https://www.linkedin.com/in/rafael-rodrigues-88a976226/',
    descriptions: { 
      en: 'Professional background and networking.', 
      pt: 'Trajetória profissional e networking.' 
    },
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    category: 'social',
    color: 'bg-zinc-800',
    size: 'medium'
  },
  {
    id: 'instagram',
    titles: { en: 'Instagram', pt: 'Instagram' },
    url: 'https://www.instagram.com/rafarodriguesdev',
    descriptions: { 
      en: 'Life, tech, and behind the scenes.', 
      pt: 'Vida, tecnologia e bastidores.' 
    },
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
    category: 'social',
    color: 'bg-zinc-800',
    size: 'small'
  },
  {
    id: 'tiktok',
    titles: { en: 'TikTok', pt: 'TikTok' },
    url: 'https://www.tiktok.com/@rafarodriguesdev?is_from_webapp=1&sender_device=pc',
    descriptions: { 
      en: 'Quick tech tips and daily routines.', 
      pt: 'Dicas rápidas de tecnologia e rotina.' 
    },
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.05.35-.04.72.01 1.07.13 1.03.88 2.12 1.93 2.51.84.34 1.8.31 2.6-.14.71-.38 1.14-1.11 1.25-1.89.06-1.42.04-2.84.05-4.26V.02z"/></svg>,
    category: 'social',
    color: 'bg-zinc-800',
    size: 'small'
  }
];
