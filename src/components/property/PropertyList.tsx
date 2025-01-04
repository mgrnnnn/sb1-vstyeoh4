import React from 'react';
import { PropertyCard } from './PropertyCard';
import { useProperties } from '../../hooks/useProperties';

export function PropertyList() {
  const { properties, loading, error } = useProperties();

  if (loading) return <div className="text-center py-8">Loading properties...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Error loading properties</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">561,326 Property Deals</h2>
        <button className="text-blue-600 hover:text-blue-700">Save Search</button>
      </div>
      <div className="space-y-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}