import OpenAI from 'openai';
import type { SearchParams, SearchResponse } from '../types';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getPropertyRecommendations(params: SearchParams): Promise<SearchResponse> {
  try {
    const formatCurrency = (amount: number) => 
      amount >= 10000000 
        ? `${(amount / 10000000).toFixed(2)} Cr` 
        : `${(amount / 100000).toFixed(2)} L`;

    const prompt = `
Find the top 3 property recommendations in 📍 ${params.location} (${params.area}) for a 🏠 ${params.propertyType} with 🛏 ${params.bhk} BHK, within 💰 ${formatCurrency(params.minBudget)} - ${formatCurrency(params.maxBudget)}.  

📌 Evaluate and compare based on:  
- 🏙 Location: Transport, infrastructure, safety  
- 💵 Cost: Best price within budget  
- 🏗 Features: Amenities, build quality  
- 📈 Market Value: Resale & appreciation potential  
- 🔍 Platform Check: Lowest price on 99acres, Housing.com, NoBroker, CommonFloor, PropTiger, MagicBricks  

📝 RESPONSE FORMAT (strictly follow this structure):  
📍 LOCATION: [City/Area] | 🏠 PROPERTY NAME: [Name] | 💰 COST: [Price]  

Provide exactly 3 recommendations in this format, no extra text or styling.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.6,
      max_tokens: 300,
      presence_penalty: -0.5,
      frequency_penalty: 0.3
    });

    const content = response.choices?.[0]?.message?.content?.trim();
    if (!content) throw new Error('Empty response from OpenAI.');

    // Remove numbering (if any) while keeping the formatting
    const recommendations = content
      .split('\n')
      .map(line => line.replace(/^\d️⃣ /, '').trim()) // Remove "1️⃣ ", "2️⃣ ", "3️⃣ " if present
      .filter(line => line.startsWith('📍 LOCATION:')); // Ensure only valid property lines are included

    return { recommendations };
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return {
      recommendations: [],
      error: 'Failed to fetch recommendations. Please try again.'
    };
  }
}
