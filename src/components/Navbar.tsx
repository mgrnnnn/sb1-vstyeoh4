import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Briefcase } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <nav className="bg-white py-4 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-8 w-8 text-[#3B30A8]" />
          <span className="text-2xl font-bold text-[#3B30A8]">DomDealer</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-[#191308] hover:text-[#3B30A8]">Features</a>
          <a href="#how-it-works" className="text-[#191308] hover:text-[#3B30A8]">How it Works</a>
          <a href="#pricing" className="text-[#191308] hover:text-[#3B30A8]">Pricing</a>
          {user ? (
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-[#3B30A8] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Dashboard
            </button>
          ) : (
            <button 
              onClick={() => navigate('/auth')}
              className="bg-[#3B30A8] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}