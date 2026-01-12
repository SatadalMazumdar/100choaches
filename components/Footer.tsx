import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white font-bold text-sm">
             W
           </div>
           <span className="font-bold text-slate-900">Wylo</span>
        </div>
        
        <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Wylo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};