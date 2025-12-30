
import React from 'react';
import { LinkItem, Language } from '../types';

interface Props {
  link: LinkItem;
  index: number;
  lang: Language;
}

export const LinkButton: React.FC<Props> = ({ link, index, lang }) => {
  const isPrimary = link.id === 'portfolio';
  const title = link.titles[lang];
  const description = link.descriptions ? link.descriptions[lang] : undefined;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${index * 100}ms` }}
      className={`group relative w-full overflow-hidden rounded-2xl p-5 flex items-center gap-5 transition-all duration-500 active:scale-[0.98] animate-fade-in-up border ${
        isPrimary 
        ? 'bg-[#26966E]/10 border-[#26966E]/30 hover:border-[#26966E]/60' 
        : 'bg-white/[0.03] border-white/[0.05] hover:border-[#26966E]/30'
      } backdrop-blur-md shadow-2xl`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#26966E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div 
        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#26966E] transition-all duration-500 ${
          isPrimary ? 'opacity-100 shadow-[0_0_15px_#26966E]' : 'opacity-20 group-hover:opacity-100'
        }`}
      ></div>
      
      <div className={`relative flex-shrink-0 p-3.5 rounded-xl transition-all duration-500 group-hover:scale-110 ${
        isPrimary ? 'bg-[#26966E] text-white' : 'bg-white/5 text-[#26966E] border border-white/5'
      }`}>
        {link.icon}
      </div>

      <div className="flex-1 relative z-10">
        <h3 className="text-[16px] font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400">
          {title}
        </h3>
        {description && (
          <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
        )}
      </div>

      <div className="relative z-10 text-zinc-600 group-hover:text-[#26966E] transition-all duration-300 transform group-hover:translate-x-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </a>
  );
};
