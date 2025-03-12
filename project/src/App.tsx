import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Building2 } from 'lucide-react';
import SearchForm from './components/SearchForm';
import { getPropertyRecommendations } from './api/openai';
import type { SearchParams, SearchResponse } from './types';

function App() {
  const [searchParams, setSearchParams] = useState<SearchParams | null>(null);

  const { data, isLoading, error } = useQuery<SearchResponse>(
    ['propertyRecommendations', searchParams],
    () => getPropertyRecommendations(searchParams!),
    {
      enabled: !!searchParams,
      retry: 1,
      refetchOnWindowFocus: false, // Prevent automatic refetching
      staleTime: Infinity, // Keep data fresh indefinitely
    }
  );

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Building2 className="w-12 h-12 mx-auto text-blue-600" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Smart Property Finder
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Find your perfect property with AI-powered recommendations
          </p>
        </div>

        <div className="mb-12">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  Error fetching recommendations. Please try again.
                </p>
              </div>
            </div>
          </div>
        )}

        {data?.recommendations && data.recommendations.length > 0 && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                AI Recommendations
              </h3>
              <div className="space-y-6">
                {data.recommendations.map((recommendation, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App