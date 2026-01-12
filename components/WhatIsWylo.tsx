import React from 'react';
import { Layers, Zap, Users, CreditCard, Layout, MessageCircle } from 'lucide-react';

export const WhatIsWylo: React.FC = () => {
  const features = [
    { icon: <Layout className="w-5 h-5" />, label: 'Courses' },
    { icon: <Zap className="w-5 h-5" />, label: 'Challenges' },
    { icon: <Layers className="w-5 h-5" />, label: 'Memberships' },
    { icon: <Users className="w-5 h-5" />, label: 'Community' },
    { icon: <CreditCard className="w-5 h-5" />, label: 'Payments' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Events' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Coach, monetize, engage, <br/>
              <span className="text-wylo-600">and grow like a pro.</span>
            </h2>
            
            <div className="h-1 w-20 bg-wylo-200 rounded-full"></div>

            <div className="space-y-6 text-lg text-slate-600">
              <p className="font-medium text-slate-900 text-xl">
                Everything your coaching business needs, in one branded hub.
              </p>
              <p>
                Wylo is your Growth Hub, a single, branded space where you can run your entire coaching business. Courses, challenges, memberships, events, community, and payments - all in one place, under your brand.
              </p>
              <p>
                No more scattered links, lost DMs, and juggling apps.
              </p>
            </div>

            <div className="pt-4">
                <button className="flex items-center gap-2 text-wylo-700 font-semibold hover:gap-3 transition-all group">
                    Watch a Growth Hub in action 
                    <span className="bg-wylo-100 p-2 rounded-full group-hover:bg-wylo-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                </button>
            </div>
          </div>

          {/* Right Visual - Grid of features simulating a hub */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-wylo-100 to-fuchsia-50 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
             <div className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-white hover:shadow-lg rounded-2xl border border-slate-100 transition-all duration-300 group cursor-default">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-wylo-600 mb-3 group-hover:scale-110 transition-transform ring-1 ring-slate-100">
                            {feature.icon}
                        </div>
                        <span className="font-semibold text-slate-700">{feature.label}</span>
                    </div>
                ))}
             </div>
             
             {/* Decorative Label */}
             <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-lg transform -rotate-2">
                 <p className="font-mono text-sm">One Branded Hub</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};