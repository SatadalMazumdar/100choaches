import React from 'react';
import { Button } from './ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-wylo-50 to-white border border-wylo-100 rounded-[3rem] p-8 md:p-20 shadow-2xl shadow-wylo-100/50">
            <h2 className="text-sm font-bold text-wylo-600 tracking-widest uppercase mb-4">Start the year strong</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 max-w-3xl mx-auto leading-tight">
                Start fresh with your own <br/>
                <span className="text-wylo-600">branded coaching growth hub.</span>
            </h3>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                We’ll set up your hub with you, guide you to your first 30-day goal, and reward you with a free month when you hit $50.
            </p>

            <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="px-12 py-5 text-lg">Start Fresh Now</Button>
                <p className="text-sm text-slate-500">
                    Only <span className="font-bold text-slate-700">100 coaches</span> can join this sprint. Seats are filling fast.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};