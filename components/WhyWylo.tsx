import React from 'react';
import { ShieldCheck, TrendingUp, Sparkles, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Keep clients longer",
    desc: "No more dropouts from lost links or scattered groups."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Sell more naturally",
    desc: "Upsells become easy with a built-in store and community."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Look professional",
    desc: "Your brand is front and center in a clean, premium hub."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Save time & effort",
    desc: "Focus on coaching and not on juggling multiple apps."
  }
];

export const WhyWylo: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Why coaches are moving <br/>
            their business to Wylo
          </h2>
          <p className="text-lg text-slate-600">
            Coaches don’t join Wylo for another app. They join because it grows their business and cuts all the chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-wylo-50 rounded-2xl flex items-center justify-center text-wylo-600 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};