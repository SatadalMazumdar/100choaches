import React from 'react';
import { Button } from './ui/Button';
import { Play } from 'lucide-react';

export const LaunchSupport: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-wylo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-block bg-wylo-500/20 text-wylo-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-wylo-500/30">
                15-Minute Switch Kit
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                We’ll help you launch your coaching hub in 15 minutes.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                With Wylo’s setup and onboarding support, you’ll have a working growth hub before you finish your breakfast. We do the heavy lifting; you just bring your logo and first offering.
              </p>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-none">
                Join the 100 Coaches Sprint
              </Button>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden relative shadow-2xl">
                 <img src="https://picsum.photos/800/450?grayscale" alt="Founder Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </div>
                 </div>
                 <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-xs">
                    Founder's Message
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};