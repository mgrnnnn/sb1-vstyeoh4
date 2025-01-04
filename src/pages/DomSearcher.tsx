import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PropertyList } from '../components/property/PropertyList';
import { PropertyMap } from '../components/property/PropertyMap';
import { SearchFilters } from '../components/search/SearchFilters';

export function DomSearcher() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dealType, setDealType] = useState('All deal types');
  const [metric, setMetric] = useState('Cashflow');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-[calc(100vh-64px)]"> {/* 64px is navbar height */}
        {/* Left Section */}
        <div className="w-3/5 overflow-y-auto p-6">
          {/* Search and Filters */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Enter postcode, district or town..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <SearchFilters
              dealType={dealType}
              setDealType={setDealType}
              metric={metric}
              setMetric={setMetric}
            />
          </div>

          {/* Property List */}
          <PropertyList />
        </div>

        {/* Right Section - Map */}
        <div className="w-2/5 relative">
          <PropertyMap />
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}