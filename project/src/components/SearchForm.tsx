import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import { Search } from 'lucide-react';
import type { SearchParams } from '../types';
import { locations, areasByLocation } from '../data/locations';

const propertyTypes = [
  { value: 'flat', label: 'Flat' },
  { value: 'house', label: 'House/Villa' },
  { value: 'plot', label: 'Plot' },
];

const bhkOptions = [
  { value: '1', label: '1 BHK' },
  { value: '2', label: '2 BHK' },
  { value: '3', label: '3 BHK' },
  { value: '4', label: '4 BHK' },
  { value: '5', label: '5 BHK' },
  { value: '5+', label: '5+ BHK' },
];

const budgetRanges = [
  { value: '2000000', label: '20 Lakhs' },
  { value: '3000000', label: '30 Lakhs' },
  { value: '4000000', label: '40 Lakhs' },
  { value: '5000000', label: '50 Lakhs' },
  { value: '7500000', label: '75 Lakhs' },
  { value: '10000000', label: '1 Crore' },
  { value: '20000000', label: '2 Crores' },
  { value: '30000000', label: '3 Crores' },
  { value: '50000000', label: '5 Crores' },
  { value: '100000000', label: '10 Crores' },
];

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhk, setBhk] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');

  const availableAreas = useMemo(() => {
    return selectedLocation ? areasByLocation[selectedLocation as keyof typeof areasByLocation] : [];
  }, [selectedLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: selectedLocation,
      area: selectedArea,
      propertyType,
      bhk,
      minBudget: Number(minBudget),
      maxBudget: Number(maxBudget)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <Select
            options={locations}
            placeholder="Search location..."
            onChange={(option) => {
              setSelectedLocation(option?.value || '');
              setSelectedArea(''); // Reset area when location changes
            }}
            className="basic-select"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area
          </label>
          <Select
            options={availableAreas}
            placeholder="Select area..."
            value={availableAreas.find(area => area.value === selectedArea)}
            onChange={(option) => setSelectedArea(option?.value || '')}
            isDisabled={!selectedLocation}
            className="basic-select"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Property Type
          </label>
          <Select
            options={propertyTypes}
            placeholder="Select property type"
            onChange={(option) => setPropertyType(option?.value || '')}
            className="basic-select"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            BHK
          </label>
          <Select
            options={bhkOptions}
            placeholder="Select BHK"
            onChange={(option) => setBhk(option?.value || '')}
            className="basic-select"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Budget
          </label>
          <Select
            options={budgetRanges}
            placeholder="Select min budget"
            onChange={(option) => setMinBudget(option?.value || '')}
            className="basic-select"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Budget
          </label>
          <Select
            options={budgetRanges}
            placeholder="Select max budget"
            onChange={(option) => setMaxBudget(option?.value || '')}
            className="basic-select"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isLoading ? (
          <span>Searching...</span>
        ) : (
          <>
            <Search className="w-5 h-5 mr-2" />
            Search Properties
          </>
        )}
      </button>
    </form>
  );
}