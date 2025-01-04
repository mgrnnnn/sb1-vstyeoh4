import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-lg font-medium transition-all";
  const variantStyles = {
    primary: "bg-[#3B30A8] text-white hover:bg-opacity-90",
    secondary: "bg-white text-[#3B30A8] border-2 border-[#3B30A8] hover:bg-[#F8F7FF]"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}