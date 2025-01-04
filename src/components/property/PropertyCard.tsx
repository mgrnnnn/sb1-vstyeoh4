import React from 'react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-48 object-cover rounded-l-lg"
          />
        </div>
        <div className="w-2/3 p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Cashflow: £{property.cashflow}/mo
            </div>
          </div>
          <p className="text-gray-600 mb-4">{property.location}</p>
          <div className="flex justify-between items-end">
            <div className="text-sm text-gray-500">
              {property.views} views • {property.timeAgo}
            </div>
            <button className="text-blue-600 hover:text-blue-700">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}