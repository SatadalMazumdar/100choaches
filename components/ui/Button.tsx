import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-wylo-600 text-white hover:bg-wylo-700 hover:shadow-lg hover:shadow-wylo-500/30 focus:ring-wylo-500 border border-transparent",
    secondary: "bg-wylo-100 text-wylo-900 hover:bg-wylo-200 focus:ring-wylo-500 border border-transparent",
    outline: "bg-transparent border-2 border-wylo-600 text-wylo-600 hover:bg-wylo-50 focus:ring-wylo-500",
    ghost: "bg-transparent text-slate-600 hover:text-wylo-600 hover:bg-wylo-50/50 focus:ring-wylo-500"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};