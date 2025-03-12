export interface Location {
  id: string;
  name: string;
}

export interface PropertyType {
  type: string;
  bhk: string;
}

export interface SearchParams {
  location: string;
  area: string;
  propertyType: string;
  bhk: string;
  minBudget: number;
  maxBudget: number;
}

export interface SearchResponse {
  recommendations: string[];
  error?: string;
}