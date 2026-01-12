import React from 'react';
import { Gift, ArrowUpRight } from 'lucide-react';

export const RewardSection: React.FC = () => {
  return (
    <section className="py-32 bg-wylo-900 relative overflow-hidden -mt-16 rounded-t-[3rem] z-20">
        {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-wylo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                    <Gift size={16} /> The Safety Net Reward
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Your success comes <br/> with a great reward.
                </h2>
                <div className="space-y-6 text-lg text-slate-200">
                    <p>
                        We believe your growth hub should pay for itself fast. That’s why, when you join this seasonal sprint and earn at least <span className="text-white font-bold">$50</span> in your first month with Wylo, you’ll get your next month <span className="text-white font-bold underline decoration-fuchsia-400 decoration-2">free</span>.
                    </p>
                    <p>
                        And because we set you up with a 30-day goal and done-for-you launch, most coaches hit that milestone quickly. So start your growth hub now.
                    </p>
                </div>
            </div>

            <div className="relative">
                {/* Process Visual */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                        <div className="bg-wylo-500 p-2 rounded-lg text-white"><ArrowUpRight /></div>
                        <div>
                            <p className="text-slate-300 text-sm">Step 1</p>
                            <p className="text-white font-bold">Launch to Win</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-center -my-2 text-white/30 text-2xl">↓</div>

                     <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                        <div className="bg-fuchsia-500 p-2 rounded-lg text-white"><Gift /></div>
                        <div>
                            <p className="text-slate-300 text-sm">Step 2</p>
                            <p className="text-white font-bold">Unlock Reward</p>
                        </div>
                    </div>

                    <div className="flex justify-center -my-2 text-white/30 text-2xl">↓</div>

                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 rounded-xl text-center transform hover:scale-105 transition-transform duration-300 shadow-xl">
                        <div className="flex justify-center mb-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs border-2 border-green-500">🥳</div>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs border-2 border-green-500">🎉</div>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs border-2 border-green-500">🚀</div>
                            </div>
                        </div>
                        <h3 className="text-white font-bold text-xl">Get 1 Month Free</h3>
                        <p className="text-green-50 text-sm font-medium mt-1">$120 worth of value</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};