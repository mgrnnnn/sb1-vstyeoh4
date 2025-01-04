import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SearchFiltersProps {
  dealType: string;
  setDealType: (type: string) => void;
  metric: string;
  setMetric: (metric: string) => void;
}

export function SearchFilters({ dealType, setDealType, metric, setMetric }: SearchFiltersProps) {
  const dealTypes = ['All deal types', 'Rent to SAR', 'Flips'];
  const metrics = ['Cashflow', 'Payback', 'Flip profit'];

  return (
    <div className="flex gap-4">
      <div className="relative w-48">
        <select
          value={dealType}
          onChange={(e) => setDealType(e.target.value)}
          className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {dealTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
      </div>

      <div className="relative w-48">
        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {metrics.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
      </div>
    </div>
  );
}