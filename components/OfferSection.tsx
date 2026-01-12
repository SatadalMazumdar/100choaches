import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Rocket, Settings, GraduationCap, ArrowRight, Clock } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="offer" className="py-24 bg-white relative z-10 overflow-visible">
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-wylo-50/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro / Button Area */}
        <div className="flex flex-col items-center mb-10 relative z-20">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-wylo-600 to-fuchsia-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                <Button size="lg" className="relative px-14 py-4 text-lg bg-wylo-600 hover:bg-wylo-700 shadow-2xl shadow-wylo-500/40 text-white border-0 rounded-full font-bold tracking-wide transform hover:-translate-y-1 transition-all duration-200">
                    Start now
                </Button>
             </div>
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto relative group perspective-1000">
           
           {/* Shadow Layers */}
           <div className="absolute top-10 left-4 right-4 bottom-0 bg-slate-200/50 blur-2xl rounded-[3rem] -z-10 transform scale-95 translate-y-4"></div>
           
           <div className="relative bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transform transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.15)]">
               
               {/* Dark Header Strip with Shimmer */}
               <div className="bg-[#0F172A] text-white text-center py-5 relative overflow-hidden">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_2.5s_infinite_linear]"></div>
                  <div className="relative z-10 flex items-center justify-center gap-2">
                      <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-slate-100">
                          Exclusive 100-Coach Sprint Offer
                      </span>
                  </div>
               </div>
               
               <div className="p-8 md:p-14">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 border-b border-slate-100 pb-10">
                      <div className="space-y-2">
                          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Here's what's included</h3>
                          <div className="flex items-center gap-2 text-slate-500 font-medium">
                              <Clock className="w-4 h-4 text-wylo-500" />
                              <span className="text-sm md:text-base">Limited time offer for this month only.</span>
                          </div>
                      </div>
                      
                      <div className="flex flex-col items-end w-full md:w-auto">
                          <div className="flex items-center gap-3 mb-1 w-full md:justify-end">
                              <span className="bg-green-50 text-green-700 text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-green-100">Save $70/mo</span>
                              <span className="text-slate-400 text-sm md:text-base font-semibold line-through decoration-slate-300">$120/mo</span>
                          </div>
                          <div className="flex items-baseline gap-1">
                              <span className="text-6xl md:text-7xl font-bold text-wylo-600 tracking-tighter drop-shadow-sm">$50</span>
                              <span className="text-2xl font-medium text-slate-400">/mo</span>
                          </div>
                      </div>
                  </div>

                  {/* Interactive Feature Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                      {/* Feature 1 */}
                      <div 
                        className={`group/card relative p-6 rounded-2xl transition-all duration-300 cursor-default ${hoveredFeature === 0 ? 'bg-blue-50/40 ring-1 ring-blue-100 scale-[1.02]' : 'hover:bg-slate-50'}`}
                        onMouseEnter={() => setHoveredFeature(0)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-3 shadow-sm border border-blue-100">
                              <Rocket className="w-7 h-7" />
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover/card:text-blue-700 transition-colors">Branded Growth Hub</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">
                              Courses, memberships, challenges, events, payments, community.
                          </p>
                          <div className={`mt-4 h-6 overflow-hidden transition-all duration-300 ${hoveredFeature === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                               <span className="text-blue-600 text-xs font-bold flex items-center uppercase tracking-wide">
                                   Explore Hub <ArrowRight className="w-3 h-3 ml-1" />
                               </span>
                          </div>
                      </div>

                      {/* Feature 2 */}
                      <div 
                        className={`group/card relative p-6 rounded-2xl transition-all duration-300 cursor-default ${hoveredFeature === 1 ? 'bg-purple-50/40 ring-1 ring-purple-100 scale-[1.02]' : 'hover:bg-slate-50'}`}
                        onMouseEnter={() => setHoveredFeature(1)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                          <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-3 shadow-sm border border-purple-100">
                              <Settings className="w-7 h-7" />
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover/card:text-purple-700 transition-colors">Done-for-you Setup</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">
                              Branding, template, migration, and a comprehensive kickoff call.
                          </p>
                           <div className={`mt-4 h-6 overflow-hidden transition-all duration-300 ${hoveredFeature === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                               <span className="text-purple-600 text-xs font-bold flex items-center uppercase tracking-wide">
                                   See Process <ArrowRight className="w-3 h-3 ml-1" />
                               </span>
                          </div>
                      </div>

                      {/* Feature 3 */}
                      <div 
                        className={`group/card relative p-6 rounded-2xl transition-all duration-300 cursor-default ${hoveredFeature === 2 ? 'bg-emerald-50/40 ring-1 ring-emerald-100 scale-[1.02]' : 'hover:bg-slate-50'}`}
                        onMouseEnter={() => setHoveredFeature(2)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                          <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-3 shadow-sm border border-emerald-100">
                              <GraduationCap className="w-7 h-7" />
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover/card:text-emerald-700 transition-colors">30-Day Success Sprint</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">
                              Weekly check-ins + templates to ensure you launch successfully.
                          </p>
                           <div className={`mt-4 h-6 overflow-hidden transition-all duration-300 ${hoveredFeature === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                               <span className="text-emerald-600 text-xs font-bold flex items-center uppercase tracking-wide">
                                   View Roadmap <ArrowRight className="w-3 h-3 ml-1" />
                               </span>
                          </div>
                      </div>
                  </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
};