import React, { useState, useEffect } from 'react';
import { Target, Calendar, ShoppingBag, BookOpen, CheckCircle2, Check } from 'lucide-react';
import Lottie from 'lottie-react';
import firstWinAnimation from '../animations/firstWinAnimation.json';

export const FirstWin: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const steps = [
    { 
        id: 1,
        icon: <BookOpen className="w-5 h-5" />, 
        title: "First course is live", 
        desc: "Launch your curriculum",
        color: "text-blue-600",
        glow: "from-blue-500/20 to-blue-500/5",
        badge: "Course Live! 🚀",
        top: "26.6%"
    },
    { 
        id: 2,
        icon: <Calendar className="w-5 h-5" />, 
        title: "First session goes live", 
        desc: "Bookings rolling in",
        color: "text-purple-600",
        glow: "from-purple-500/20 to-purple-500/5",
        badge: "Bookings Open! 📅",
        top: "43.3%"
    },
    { 
        id: 3,
        icon: <ShoppingBag className="w-5 h-5" />, 
        title: "First product is listed", 
        desc: "Start selling digital goods",
        color: "text-pink-600",
        glow: "from-pink-500/20 to-pink-500/5",
        badge: "First Sale! 💸",
        top: "60%"
    },
    { 
        id: 4,
        icon: <Target className="w-5 h-5" />, 
        title: "First membership is running", 
        desc: "Recurring revenue starts",
        color: "text-orange-600",
        glow: "from-orange-500/20 to-orange-500/5",
        badge: "MRR Started! 📈",
        top: "76.6%"
    }
  ];

  useEffect(() => {
    // Sync React state with Lottie animation (12s total cycle = 3s per step)
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Creative - Left side (Ultra Fancy Card with Storytelling) */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center perspective-1000 group">
             {/* 3D Tilt Container */}
             <div className="relative w-full max-w-md aspect-square transform transition-transform duration-700 ease-out group-hover:rotate-y-6 group-hover:rotate-x-6 preserve-3d">
                
                {/* Adaptive Ambient Glow - Toned Down */}
                <div className={`absolute -inset-4 bg-gradient-to-r rounded-[3rem] blur-2xl opacity-10 transition-colors duration-1000 ${steps[activeTab].glow}`}></div>

                {/* Main Card Container */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden ring-1 ring-slate-900/5 transition-all duration-500">
                    
                    {/* Lottie Background Layer */}
                    <div className="absolute inset-0 z-0 scale-105 opacity-50 mix-blend-multiply">
                      <Lottie 
                        animationData={firstWinAnimation} 
                        loop={true}
                        autoplay={true}
                        speed={0.5} 
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    
                    {/* Text Content Overlay */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        {steps.map((step, idx) => {
                            const isActive = idx === activeTab;
                            const isPast = idx < activeTab;
                            
                            return (
                                <div 
                                   key={step.id}
                                   className={`
                                     absolute left-[12%] right-[8%] h-[13%] flex items-center gap-4 px-4 
                                     transition-all duration-500 ease-spring
                                     ${isActive ? 'translate-x-2 scale-105' : 'translate-x-0 scale-100'}
                                   `}
                                   style={{ top: step.top, transform: `translateY(-50%) ${isActive ? 'translateX(8px) scale(1.05)' : ''}` }}
                                >
                                    {/* Icon with Glow/Checkmark */}
                                    <div className={`
                                        relative p-2.5 rounded-xl transition-all duration-500 flex items-center justify-center z-10
                                        ${isActive 
                                          ? 'bg-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] ring-1 ring-white/60 scale-110 ' + step.color 
                                          : isPast
                                            ? 'bg-green-100 text-green-600 scale-90'
                                            : 'bg-white/40 backdrop-blur-sm text-slate-300 border border-white/40 scale-95'}
                                    `}>
                                        {isPast ? <Check className="w-5 h-5" /> : step.icon}
                                    </div>

                                    {/* Text with Staggered Fade */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`font-bold text-base transition-all duration-300 ${isActive ? 'text-slate-900 tracking-wide' : isPast ? 'text-slate-400' : 'text-slate-300'}`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-xs transition-all duration-500 ${isActive ? 'text-slate-600 opacity-100 translate-y-0' : 'text-slate-400/0 opacity-0 -translate-y-1'}`}>
                                            {step.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Small Status Dot */}
                                    {isActive && (
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
             </div>

             {/* Floating 3D Badge - Dynamic Storytelling */}
             <div className="absolute -right-4 top-10 animate-bounce duration-[3000ms] z-30 transition-all duration-300 hover:scale-110">
                 <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] border border-white/50 flex items-center gap-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                     <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-2 rounded-xl text-green-600 shadow-inner">
                         <CheckCircle2 size={20} />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1.5">Status Update</p>
                        <div className="h-6 w-32 overflow-hidden relative">
                             {steps.map((step, idx) => (
                                 <span 
                                    key={step.id}
                                    className={`
                                        absolute top-0 left-0 text-sm font-bold text-slate-800 leading-none whitespace-nowrap transition-all duration-500
                                        ${idx === activeTab ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                                    `}
                                 >
                                    {step.badge}
                                 </span>
                             ))}
                        </div>
                     </div>
                 </div>
             </div>

             {/* Floating 3D Elements - Toned Down */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-wylo-50/20 to-purple-50/20 rounded-full blur-3xl animate-[spin_15s_linear_infinite]"></div>
          </div>

          {/* Content - Right side */}
          <div className="order-1 lg:order-2">
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
               Your first win <br/> in 30 days. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-wylo-600 to-fuchsia-600">Choose your outcome.</span>
             </h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                This isn’t another tool or program to figure out everything on your own. It’s a guided sprint to your first success - whether that’s launching your first course, event, membership, or digital product.
             </p>
             <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                 <div className="w-1 bg-gradient-to-b from-wylo-500 to-fuchsia-500 h-full min-h-[3rem] rounded-full"></div>
                 <p className="text-lg text-slate-700 font-medium italic">
                    We’ll co-pilot with you every step, from setup to launch, until your first win goes live.
                 </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};