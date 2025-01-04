import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

function PriceCard({ title, price, isYearly, originalPrice, features, isPopular, hasTrial }: PriceCardProps) {
  return (
    <div className={`rounded-2xl p-8 ${isPopular ? 'bg-[#3B30A8] text-white ring-4 ring-[#7586D2]' : 'bg-white ring-1 ring-black/10'}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      
      <div className="mt-4 flex items-baseline">
        {isYearly && title !== 'Free' ? (
          <>
            <span className="text-4xl font-bold tracking-tight">$39</span>
            <span className="text-sm font-semibold">/month</span>
            <span className="ml-2 text-sm text-gray-400">($468/year)</span>
          </>
        ) : (
          <>
            <span className="text-4xl font-bold tracking-tight">{price}</span>
            <span className="text-sm font-semibold">/{isYearly ? 'year' : 'month'}</span>
          </>
        )}
      </div>
      
      {isYearly && originalPrice && price !== 'Free' && (
        <div className="mt-1">
          <span className="text-sm line-through">$49/month</span>
        </div>
      )}

      {hasTrial && (
        <div className="mt-2">
          <span className="text-sm font-medium">Includes 14-day free trial</span>
        </div>
      )}

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className={`h-5 w-5 shrink-0 ${isPopular ? 'text-white' : 'text-[#3B30A8]'}`} />
            <span className="ml-3 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={isPopular ? 'secondary' : 'primary'}
        className="mt-8 w-full"
      >
        Get started
      </Button>
    </div>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

const plans = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic property analysis",
      "Up to 10 properties/month",
      "ROI calculator",
      "Basic filtering options",
      "Email support"
    ]
  },
  {
    title: "Professional",
    price: isYearly ? "$468" : "$49", // 39 * 12 = 468
    originalPrice: isYearly ? "$49" : undefined,
    features: [
      "Unlimited property analysis",
      "Advanced financial metrics",
      "Custom filtering options",
      "Flip profit calculator",
      "Cash flow projections",
      "Priority support",
    ],
    isPopular: true,
    hasTrial: true
  }
];



  return (
    <section id="pricing" className="py-20 bg-[#F8F7FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#191308] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#201E1F] mb-8">
            Choose the plan that best fits your investment strategy
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-[#3B30A8] font-semibold' : 'text-[#201E1F]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#3B30A8]"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-[#3B30A8] font-semibold' : 'text-[#201E1F]'}`}>
              Yearly (Save 20%)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PriceCard
              key={plan.title}
              {...plan}
              isYearly={isYearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
}