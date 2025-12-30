
import React, { useState } from 'react';
import { RAFA_BIO, SOCIAL_LINKS } from './constants';
import { LinkButton } from './components/LinkButton';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const bio = RAFA_BIO[lang];

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center overflow-x-hidden relative selection:bg-[#26966E] selection:text-white">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#000000]"></div>
        <div 
          className="absolute w-[120vw] h-[100vh] rounded-full blur-[120px] opacity-[0.25] animate-orbit-1"
          style={{ 
            background: 'radial-gradient(circle, #26966E 0%, transparent 70%)',
            top: '-20%',
            left: '-30%' 
          }}
        ></div>
        <div 
          className="absolute w-[100vw] h-[90vh] rounded-full blur-[140px] opacity-[0.2] animate-orbit-2"
          style={{ 
            background: 'radial-gradient(circle,rgb(108, 198, 166) 0%, transparent 60%)',
            bottom: '-10%',
            right: '-20%' 
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay" 
          style={{ 
            backgroundImage: `linear-gradient(#26966E 1px, transparent 1px), linear-gradient(90deg, #26966E 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <header className="w-full max-w-md pt-20 pb-12 px-6 flex flex-col items-center text-center relative">
        <div className="mb-10 z-20">
          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 backdrop-blur-xl shadow-xl">
            <svg className="w-3.5 h-3.5 text-[#26966E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <div className="flex items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-[0.2em]">
              <button 
                onClick={() => setLang('en')}
                className={`transition-all duration-300 hover:scale-110 ${lang === 'en' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
              >EN</button>
              <span className="w-[1px] h-3 bg-zinc-800"></span>
              <button 
                onClick={() => setLang('pt')}
                className={`transition-all duration-300 hover:scale-110 ${lang === 'pt' ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
              >PT</button>
            </div>
          </div>
        </div>

        <div className="relative mb-8 group">
          <div className="absolute -inset-10 opacity-60 blur-[60px] rounded-full bg-[#26966E] animate-pulse-slow"></div>
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#26966E] via-emerald-400 to-transparent rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-[2px]"></div>
          <img 
            src={bio.avatar} 
            alt={bio.name}
            className="relative w-32 h-32 rounded-full border border-white/20 p-1 object-cover bg-black shadow-[0_0_30px_rgba(38,150,110,0.3)] transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tighter text-white mb-3">
          {bio.name}
        </h1>
        
        <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-emerald-900"></div>
            <p className="text-zinc-500 text-[12px] font-mono uppercase tracking-[0.6em] font-medium">
              {bio.role}
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-emerald-900"></div>
        </div>
      </header>

      <main className="w-full max-w-md px-6 space-y-8 pb-24">
        <section className="space-y-4">
          <div className="pb-2 flex items-center gap-4 px-2">
            <span className="text-[11px] font-mono text-[#26966E] uppercase tracking-[0.8em] font-bold whitespace-nowrap drop-shadow-[0_0_8px_rgba(38,150,110,0.5)]">
              {bio.linksHeader}
            </span>
            <div className="h-[1px] w-full bg-gradient-to-r from-emerald-900/60 to-transparent"></div>
          </div>

          <div className="space-y-4">
            {SOCIAL_LINKS.map((link, index) => (
              <LinkButton key={link.id} link={link} index={index} lang={lang} />
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full max-w-md pb-16 text-center mt-auto">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-emerald-900/30"></div>
            <p className="text-[#26966E] text-[10px] font-mono tracking-[0.5em] uppercase transition-colors duration-500">
              {new Date().getFullYear()} - Rafa Rodrigues
            </p>
        </div>
      </footer>

      <style>{`
        @keyframes orbit1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.25; }
          50% { transform: translate(15%, 5%) scale(1.1); opacity: 0.35; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
        }
        @keyframes orbit2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          50% { transform: translate(-10%, -10%) scale(1.2); opacity: 0.3; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.4; filter: blur(60px); }
          50% { transform: scale(1.2); opacity: 0.6; filter: blur(80px); }
        }
        .animate-orbit-1 { animation: orbit1 18s infinite ease-in-out; }
        .animate-orbit-2 { animation: orbit2 22s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulseSlow 8s infinite ease-in-out; }
        body { background-color: #000000; }
      `}</style>
    </div>
  );
};

export default App;
