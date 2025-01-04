import React from 'react';
import { Calculator, Filter, TrendingUp, Percent, RefreshCw, DollarSign } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Calculator className="h-8 w-8 text-[#3B30A8]" />,
      title: "ROI Calculator",
      description: "Get instant Return on Investment calculations for any property"
    },
    {
      icon: <Filter className="h-8 w-8 text-[#3B30A8]" />,
      title: "Smart Filtering",
      description: "Filter properties by multiple financial metrics to find the best deals"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#3B30A8]" />,
      title: "Market Analysis",
      description: "Compare property prices with market averages to spot opportunities"
    },
    {
      icon: <Percent className="h-8 w-8 text-[#3B30A8]" />,
      title: "Yield Calculator",
      description: "Calculate potential gross yield and net yield for rental properties"
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-[#3B30A8]" />,
      title: "Flip Profit",
      description: "Estimate potential profit from property flipping with renovation costs"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#3B30A8]" />,
      title: "Cash Flow Analysis",
      description: "Project monthly and annual cash flows including all expenses"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#191308] mb-12">
          Powerful Features for Smart Investing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-[#7586D2] hover:shadow-lg transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#191308] mb-2">{feature.title}</h3>
              <p className="text-[#201E1F]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}