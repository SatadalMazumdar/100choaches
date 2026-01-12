import React from 'react';
import { Gift, Rocket, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

export const RewardSection: React.FC = () => {
  return (
    <section className="py-32 bg-wylo-900 relative overflow-hidden -mt-16 rounded-t-[3rem] z-20">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-wylo-500/30 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Storytelling Side */}
            <div className="text-white relative">
                <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-fuchsia-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 text-fuchsia-200 shadow-lg shadow-fuchsia-900/20">
                    <Sparkles size={16} className="text-fuchsia-400" /> 
                    The Safety Net Reward
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                    Hit your first milestone.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-wylo-300">
                        The next month is on us.
                    </span>
                </h2>
                
                <div className="space-y-6 text-lg text-slate-300 leading-relaxed max-w-xl">
                    <p>
                        We’re so confident in your success, we’re putting our money on it.
                    </p>
                    <p>
                        Join the sprint, launch your hub, and earn just <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded">$50</span> in your first 30 days. When you do, we’ll credit your account with a full month of Wylo.
                    </p>
                    <p className="text-white font-medium flex items-center gap-2">
                        <CheckCircle2 size={20} className="text-green-400" />
                        It’s essentially risk-free.
                    </p>
                </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-full blur-2xl opacity-40"></div>

                    {/* Timeline Container */}
                    <div className="relative space-y-8">
                        {/* Connecting Line */}
                        <div className="absolute left-8 top-8 bottom-24 w-0.5 bg-gradient-to-b from-wylo-500 via-fuchsia-500 to-transparent opacity-30"></div>

                        {/* Step 1 */}
                        <div className="relative flex items-center gap-6 group">
                            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                                <Rocket className="text-wylo-600" size={28} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Launch your Hub</h3>
                                <p className="text-slate-400 text-sm">Set up your profile & invite members</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex items-center gap-6 group">
                             <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                                <div className="text-fuchsia-600 font-bold text-xl">$50</div>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Earn your first $50</h3>
                                <p className="text-slate-400 text-sm">Sell a product or get memberships</p>
                            </div>
                        </div>

                        {/* Reward Card */}
                        <div className="relative mt-4 ml-4">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white transform hover:-translate-y-1 transition-all duration-300 shadow-xl border border-green-400/30 overflow-hidden">
                                {/* Shine effect */}
                                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                                
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                        <Gift size={24} className="text-white" />
                                    </div>
                                    <span className="text-green-100 text-xs font-bold uppercase tracking-wider bg-black/10 px-3 py-1 rounded-full">Reward Unlocked</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-1">Get 1 Month Free</h3>
                                <p className="text-green-50 text-sm opacity-90 mb-4">We cover your next invoice ($120 value)</p>
                                
                                <div className="flex items-center gap-2 text-xs font-medium text-green-100 bg-white/10 p-2 rounded-lg w-fit">
                                    <Trophy size={14} />
                                    <span>Keep 100% of your earnings</span>
                                </div>
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
