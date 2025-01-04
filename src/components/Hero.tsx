import React from 'react';
import { TrendingUp, DollarSign, Home } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-[#F8F7FF] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#191308] mb-6">
            Find the Most Profitable Real Estate Deals
          </h1>
          <p className="text-xl text-[#201E1F] mb-8">
            Automatically analyze properties across multiple platforms. Get instant ROI calculations, 
            cash flow projections, and investment metrics to make informed decisions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-[#3B30A8] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-[#3B30A8] text-[#3B30A8] px-8 py-3 rounded-lg hover:bg-[#F8F7FF] transition-all text-lg">
              Learn More
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="text-[#3B30A8]" />
              <span className="text-[#191308]">Real-time Analysis</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <DollarSign className="text-[#3B30A8]" />
              <span className="text-[#191308]">ROI Calculations</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Home className="text-[#3B30A8]" />
              <span className="text-[#191308]">Multiple Platforms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}