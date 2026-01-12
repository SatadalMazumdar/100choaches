import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-gradient-to-tr from-wylo-600 to-fuchsia-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
             W
           </div>
           <span className="text-xl font-bold text-slate-900 tracking-tight">Wylo</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-slate-600 hover:text-wylo-600 font-medium transition-colors">Benefits</a>
          <a href="#sprint" className="text-slate-600 hover:text-wylo-600 font-medium transition-colors">The Sprint</a>
          <a href="#pricing" className="text-slate-600 hover:text-wylo-600 font-medium transition-colors">Pricing</a>
          <a href="#testimonials" className="text-slate-600 hover:text-wylo-600 font-medium transition-colors">Success Stories</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}>
            Join the Sprint
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col gap-4 animate-fade-in">
           <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Benefits</a>
           <a href="#sprint" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">The Sprint</a>
           <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 font-medium p-2">Success Stories</a>
           <Button fullWidth onClick={() => {
             setIsMobileMenuOpen(false);
             document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
           }}>
             Join the Sprint
           </Button>
        </div>
      )}
    </nav>
  );
};