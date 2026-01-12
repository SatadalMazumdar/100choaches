import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Users, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-wylo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          Limited to 100 coaches only
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Launch your branded <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wylo-600 to-fuchsia-600">
            Coaching Growth Hub
          </span>
          <br/> in 15 minutes.
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          This month only, unlock our <span className="font-semibold text-slate-900">Growth Plan ($120/mo)</span> at <span className="font-bold text-wylo-700 bg-wylo-50 px-2 py-0.5 rounded">$50/mo</span> with done-for-you setup and a 30-day Success Sprint.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="shadow-xl shadow-wylo-500/20 px-10 py-5 text-lg" onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
            Join the 100 Coaches Sprint <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          {/* Seat Counter */}
          <div className="bg-white/60 backdrop-blur border border-slate-200 rounded-full p-2 pr-6 flex items-center gap-3 mt-4">
            <div className="bg-slate-100 rounded-full p-1.5">
               <Users className="w-4 h-4 text-slate-600" />
            </div>
            <div className="flex flex-col items-start">
               <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                 <div className="h-full bg-wylo-600 w-[57%] rounded-full animate-pulse"></div>
               </div>
               <span className="text-xs font-medium text-slate-600 mt-1">
                 <span className="text-wylo-700 font-bold">57</span>/100 seats claimed
               </span>
            </div>
          </div>
        </div>

        {/* Hero Visual/Mockup hint */}
        <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="bg-slate-900 rounded-2xl p-2 shadow-2xl ring-1 ring-slate-900/10">
                 <img 
                   src="https://picsum.photos/1200/650?grayscale" 
                   alt="App Dashboard Preview" 
                   className="rounded-xl w-full h-auto opacity-90"
                 />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl group cursor-pointer">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-full transition-transform transform group-hover:scale-110">
                        <div className="bg-white rounded-full p-4">
                            <svg className="w-8 h-8 text-wylo-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                    </div>
                 </div>
            </div>
             {/* Floating Elements */}
             <div className="hidden md:block absolute -right-12 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><CheckCircle2 size={20}/></div>
                    <div>
                        <p className="text-xs text-slate-500 font-medium">New Subscription</p>
                        <p className="text-sm font-bold text-slate-800">+$120.00</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};