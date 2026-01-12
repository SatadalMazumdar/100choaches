import React from 'react';

const testimonials = [
  {
    text: "Wylo transformed my chaotic coaching business into a streamlined machine. The setup was instant.",
    name: "Sarah Jenkins",
    role: "Fitness Coach",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    text: "I launched my first course in 2 weeks thanks to the sprint. The support is unreal.",
    name: "David Chen",
    role: "Business Mentor",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    text: "Finally, an app that doesn't feel like a spreadsheet. My clients actually love logging in.",
    name: "Elena Rodriguez",
    role: "Wellness Guide",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
            Hear what people say about Wylo
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="flex gap-1 text-yellow-400 mb-6">
                        {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                    </div>
                    <p className="text-lg text-slate-700 italic mb-8">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                        <div>
                            <p className="font-bold text-slate-900">{t.name}</p>
                            <p className="text-sm text-slate-500">{t.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};