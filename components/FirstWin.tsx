import React, { useState, useEffect } from 'react';
import { Target, Calendar, ShoppingBag, BookOpen, CheckCircle2 } from 'lucide-react';

export const FirstWin: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const steps = [
    { 
        id: 1,
        icon: <BookOpen className="w-6 h-6" />, 
        title: "First course is live", 
        desc: "Launch your curriculum",
        color: "bg-blue-100 text-blue-600",
    },
    { 
        id: 2,
        icon: <Calendar className="w-6 h-6" />, 
        title: "First session goes live", 
        desc: "Bookings rolling in",
        color: "bg-purple-100 text-purple-600",
    },
    { 
        id: 3,
        icon: <ShoppingBag className="w-6 h-6" />, 
        title: "First product is listed", 
        desc: "Start selling digital goods",
        color: "bg-pink-100 text-pink-600",
    },
    { 
        id: 4,
        icon: <Target className="w-6 h-6" />, 
        title: "First membership is running", 
        desc: "Recurring revenue starts",
        color: "bg-orange-100 text-orange-600",
    }
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds per step
    const intervalTime = 50; // Update progress every 50ms
    const stepsCount = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
        // Reset progress and move to next tab
        setProgress(0);
        currentStep = 0;
        setActiveTab((prev) => (prev + 1) % steps.length);
    }, duration);

    const progressTimer = setInterval(() => {
        currentStep++;
        const newProgress = Math.min((currentStep / stepsCount) * 100, 100);
        setProgress(newProgress);
    }, intervalTime);

    return () => {
        clearInterval(timer);
        clearInterval(progressTimer);
    };
  }, [steps.length]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Creative - Left side (The Fancy Animation) */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center">
             {/* Main Container Frame representing the 'Hub' */}
             <div className="relative w-full max-w-md bg-white rounded-3xl border-2 border-blue-50/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 md:p-8 overflow-hidden z-10 ring-1 ring-slate-900/5">
                {/* Background decoration inside card */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-wylo-50 to-transparent rounded-bl-full opacity-60"></div>
                
                <div className="space-y-4 relative">
                    {steps.map((step, idx) => {
                        const isActive = idx === activeTab;
                        return (
                            <div 
                               key={step.id}
                               className={`
                                   relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ease-out border
                                   ${isActive 
                                     ? 'bg-white border-wylo-100 shadow-lg scale-100 opacity-100 translate-x-0 z-10' 
                                     : 'bg-slate-50/50 border-transparent opacity-40 scale-95 hover:opacity-60 grayscale-[0.3]'
                                   }
                               `}
                            >
                                {/* Icon Box */}
                                <div className={`
                                    relative p-3 rounded-xl transition-all duration-300
                                    ${isActive ? step.color : 'bg-slate-200 text-slate-400'}
                                    ${isActive ? 'shadow-md' : ''}
                                `}>
                                    {step.icon}
                                    
                                    {/* Pulse Ring for Active */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-xl bg-current opacity-20 animate-ping"></div>
                                    )}
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className={`font-bold text-lg truncate transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                                        {step.title}
                                    </h3>
                                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-10 opacity-100 mt-0.5' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-sm text-slate-500">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Status Indicator */}
                                <div className="flex flex-col items-end gap-1 pl-2">
                                    {isActive ? (
                                        <div className="flex items-center justify-center w-6 h-6">
                                            <span className="relative flex h-3 w-3">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center w-6 h-6">
                                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Progress Bar for Active Item */}
                                {isActive && (
                                    <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-slate-100 overflow-hidden rounded-full mx-auto">
                                        <div 
                                            className="h-full bg-wylo-500 transition-all duration-75 ease-linear"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
             </div>

             {/* Background Blob behind the card */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-wylo-100/40 rounded-full blur-3xl animate-pulse"></div>
             
             {/* Floating Badge (Storytelling element) */}
             <div className="absolute -right-4 -top-4 md:-right-8 md:top-10 animate-bounce duration-[3000ms] z-20">
                 <div className="bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 transform rotate-3">
                     <div className="bg-green-100 p-1.5 rounded-lg text-green-600">
                         <CheckCircle2 size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1">Status</p>
                        <span className="text-sm font-bold text-slate-800 leading-none">Goal Hit!</span>
                     </div>
                 </div>
             </div>
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