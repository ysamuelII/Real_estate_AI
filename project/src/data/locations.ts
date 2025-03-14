// Major cities in India with their areas
export const locations = [
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'hyderabad', label: 'Hyderabad' },
  { value: 'chennai', label: 'Chennai' },
  { value: 'pune', label: 'Pune' },
  { value: 'kolkata', label: 'Kolkata' },
  { value: 'ahmedabad', label: 'Ahmedabad' },
  { value: 'noida', label: 'Noida' },
  { value: 'gurgaon', label: 'Gurgaon' },
];

export const areasByLocation: Record<string, Array<{ value: string; label: string }>> = {
  mumbai: [
    { value: 'andheri', label: 'Andheri' },
    { value: 'bandra', label: 'Bandra' },
    { value: 'borivali', label: 'Borivali' },
    { value: 'chembur', label: 'Chembur' },
    { value: 'colaba', label: 'Colaba' },
    { value: 'dadar', label: 'Dadar' },
    { value: 'goregaon', label: 'Goregaon' },
    { value: 'juhu', label: 'Juhu' },
    { value: 'kandivali', label: 'Kandivali' },
    { value: 'kurla', label: 'Kurla' },
    { value: 'malad', label: 'Malad' },
    { value: 'mulund', label: 'Mulund' },
    { value: 'powai', label: 'Powai' },
    { value: 'santacruz', label: 'Santacruz' },
    { value: 'worli', label: 'Worli' }
  ],
  delhi: [
    { value: 'chandni-chowk', label: 'Chandni Chowk' },
    { value: 'connaught-place', label: 'Connaught Place' },
    { value: 'dwarka', label: 'Dwarka' },
    { value: 'greater-kailash', label: 'Greater Kailash' },
    { value: 'hauz-khas', label: 'Hauz Khas' },
    { value: 'janakpuri', label: 'Janakpuri' },
    { value: 'karol-bagh', label: 'Karol Bagh' },
    { value: 'lajpat-nagar', label: 'Lajpat Nagar' },
    { value: 'mayur-vihar', label: 'Mayur Vihar' },
    { value: 'paharganj', label: 'Paharganj' },
    { value: 'rohini', label: 'Rohini' },
    { value: 'saket', label: 'Saket' },
    { value: 'vasant-kunj', label: 'Vasant Kunj' },
    { value: 'vasant-vihar', label: 'Vasant Vihar' }
  ],
  bangalore: [
    { value: 'banashankari', label: 'Banashankari' },
    { value: 'bannerghatta', label: 'Bannerghatta' },
    { value: 'electronic-city', label: 'Electronic City' },
    { value: 'hebbal', label: 'Hebbal' },
    { value: 'indiranagar', label: 'Indiranagar' },
    { value: 'jayanagar', label: 'Jayanagar' },
    { value: 'jp-nagar', label: 'JP Nagar' },
    { value: 'koramangala', label: 'Koramangala' },
    { value: 'marathahalli', label: 'Marathahalli' },
    { value: 'rajajinagar', label: 'Rajajinagar' },
    { value: 'sarjapur', label: 'Sarjapur' },
    { value: 'whitefield', label: 'Whitefield' }
  ],
  hyderabad: [
    { value: 'ameerpet', label: 'Ameerpet' },
    { value: 'banjara-hills', label: 'Banjara Hills' },
    { value: 'begumpet', label: 'Begumpet' },
    { value: 'gachibowli', label: 'Gachibowli' },
    { value: 'hitech-city', label: 'HITEC City' },
    { value: 'jubilee-hills', label: 'Jubilee Hills' },
    { value: 'kukatpally', label: 'Kukatpally' },
    { value: 'madhapur', label: 'Madhapur' },
    { value: 'manikonda', label: 'Manikonda' },
    { value: 'miyapur', label: 'Miyapur' },
    { value: 'secunderabad', label: 'Secunderabad' },
    { value: 'attapur', label: 'Attapur' },
    { value: 'bowenpally', label: 'Bowenpally' },
    { value: 'chanda-nagar', label: 'Chanda Nagar' },
    { value: 'dilsukhnagar', label: 'Dilsukhnagar' },
    { value: 'himayatnagar', label: 'Himayatnagar' },
    { value: 'kompally', label: 'Kompally' },
    { value: 'kothapet', label: 'Kothapet' },
    { value: 'lb-nagar', label: 'LB Nagar' },
    { value: 'malkajgiri', label: 'Malkajgiri' },
    { value: 'mehdipatnam', label: 'Mehdipatnam' },
    { value: 'nallagandla', label: 'Nallagandla' },
    { value: 'nizampet', label: 'Nizampet' },
    { value: 'sainikpuri', label: 'Sainikpuri' },
    { value: 'tarnaka', label: 'Tarnaka' },
    { value: 'uppal', label: 'Uppal' }
  ],
  chennai: [
    { value: 'adyar', label: 'Adyar' },
    { value: 'anna-nagar', label: 'Anna Nagar' },
    { value: 'besant-nagar', label: 'Besant Nagar' },
    { value: 'guindy', label: 'Guindy' },
    { value: 'kilpauk', label: 'Kilpauk' },
    { value: 'kodambakkam', label: 'Kodambakkam' },
    { value: 'mylapore', label: 'Mylapore' },
    { value: 'nungambakkam', label: 'Nungambakkam' },
    { value: 'omr', label: 'OMR' },
    { value: 'porur', label: 'Porur' },
    { value: 't-nagar', label: 'T Nagar' },
    { value: 'velachery', label: 'Velachery' }
  ],
  pune: [
    { value: 'aundh', label: 'Aundh' },
    { value: 'baner', label: 'Baner' },
    { value: 'hinjewadi', label: 'Hinjewadi' },
    { value: 'kalyani-nagar', label: 'Kalyani Nagar' },
    { value: 'kharadi', label: 'Kharadi' },
    { value: 'koregaon-park', label: 'Koregaon Park' },
    { value: 'viman-nagar', label: 'Viman Nagar' },
    { value: 'wakad', label: 'Wakad' }
  ],
  kolkata: [
    { value: 'ballygunge', label: 'Ballygunge' },
    { value: 'behala', label: 'Behala' },
    { value: 'dumdum', label: 'Dumdum' },
    { value: 'gariahat', label: 'Gariahat' },
    { value: 'new-town', label: 'New Town' },
    { value: 'park-street', label: 'Park Street' },
    { value: 'salt-lake', label: 'Salt Lake' }
  ],
  ahmedabad: [
    { value: 'bopal', label: 'Bopal' },
    { value: 'navrangpura', label: 'Navrangpura' },
    { value: 'prahlad-nagar', label: 'Prahlad Nagar' },
    { value: 'satellite', label: 'Satellite' },
    { value: 'sg-highway', label: 'SG Highway' },
    { value: 'vastrapur', label: 'Vastrapur' }
  ],
  noida: [
    { value: 'sector-1', label: 'Sector 1' },
    { value: 'sector-15', label: 'Sector 15' },
    { value: 'sector-50', label: 'Sector 50' },
    { value: 'sector-62', label: 'Sector 62' },
    { value: 'sector-76', label: 'Sector 76' },
    { value: 'sector-100', label: 'Sector 100' },
    { value: 'sector-120', label: 'Sector 120' }
  ],
  gurgaon: [
    { value: 'cyber-city', label: 'Cyber City' },
    { value: 'dlf-phase-1', label: 'DLF Phase 1' },
    { value: 'golf-course-road', label: 'Golf Course Road' },
    { value: 'mg-road', label: 'MG Road' },
    { value: 'sector-14', label: 'Sector 14' },
    { value: 'sohna-road', label: 'Sohna Road' },
    { value: 'udyog-vihar', label: 'Udyog Vihar' }
  ]
};