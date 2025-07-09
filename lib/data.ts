export interface Neighborhood {
  id: string
  name: string
  city: string
  state: string
  description: string
  matchScore: number
  highlights: string[]
  amenities: {
    parks: number
    restaurants: number
    shopping: number
    schools: number
    healthcare: number
    publicTransport: number
    gyms: number
    banks: number
    temples: number
    markets: number
  }
  demographics: {
    diversity: number
    familyFriendly: number
    youngProfessionals: number
    seniorFriendly: number
    students: number
  }
  housing: {
    medianPrice: number
    apartments: number
    townhouses: number
    singleFamily: number
    rentalAvailability: number
  }
  lifestyle: {
    pace: "busy" | "balanced" | "relaxed"
    walkability: number
    safety: number
    nightlife: number
    commute: number
    community: number
  }
  transportation: {
    busRoutes: number
    autoRickshaw: boolean
    cyclePaths: number
    parking: number
    connectivity: number
  }
  culture: {
    festivals: number
    communityEvents: number
    culturalDiversity: number
    traditionalValues: number
  }
  education: {
    schools: number
    colleges: number
    coachingCenters: number
    libraries: number
  }
  healthcare: {
    hospitals: number
    clinics: number
    pharmacies: number
    specialists: number
  }
  entertainment: {
    cinemas: number
    restaurants: number
    cafes: number
    shoppingCenters: number
  }
}

export const phagwaraNeighborhoods: Neighborhood[] = [
  {
    id: "civil-lines",
    name: "Civil Lines",
    city: "Phagwara",
    state: "Punjab",
    description: "A well-established residential area with government offices, schools, and a peaceful environment. Known for its wide roads and organized layout.",
    matchScore: 92,
    highlights: ["Government Offices", "Educational Hub", "Peaceful Environment", "Well-Planned"],
    amenities: {
      parks: 4,
      restaurants: 3,
      shopping: 4,
      schools: 5,
      healthcare: 4,
      publicTransport: 4,
      gyms: 3,
      banks: 5,
      temples: 3,
      markets: 4
    },
    demographics: {
      diversity: 4,
      familyFriendly: 5,
      youngProfessionals: 3,
      seniorFriendly: 4,
      students: 4
    },
    housing: {
      medianPrice: 4500000,
      apartments: 3,
      townhouses: 4,
      singleFamily: 5,
      rentalAvailability: 4
    },
    lifestyle: {
      pace: "balanced",
      walkability: 4,
      safety: 5,
      nightlife: 2,
      commute: 4,
      community: 4
    },
    transportation: {
      busRoutes: 4,
      autoRickshaw: true,
      cyclePaths: 3,
      parking: 4,
      connectivity: 4
    },
    culture: {
      festivals: 4,
      communityEvents: 4,
      culturalDiversity: 3,
      traditionalValues: 5
    },
    education: {
      schools: 5,
      colleges: 3,
      coachingCenters: 4,
      libraries: 3
    },
    healthcare: {
      hospitals: 4,
      clinics: 4,
      pharmacies: 4,
      specialists: 3
    },
    entertainment: {
      cinemas: 2,
      restaurants: 3,
      cafes: 2,
      shoppingCenters: 3
    }
  },
  {
    id: "model-town",
    name: "Model Town",
    city: "Phagwara",
    state: "Punjab",
    description: "A modern residential colony with excellent infrastructure, shopping complexes, and a vibrant community. Popular among young families and professionals.",
    matchScore: 88,
    highlights: ["Modern Infrastructure", "Shopping Complexes", "Young Community", "Well-Connected"],
    amenities: {
      parks: 3,
      restaurants: 5,
      shopping: 5,
      schools: 4,
      healthcare: 4,
      publicTransport: 5,
      gyms: 4,
      banks: 4,
      temples: 2,
      markets: 5
    },
    demographics: {
      diversity: 4,
      familyFriendly: 4,
      youngProfessionals: 5,
      seniorFriendly: 3,
      students: 3
    },
    housing: {
      medianPrice: 5200000,
      apartments: 4,
      townhouses: 5,
      singleFamily: 4,
      rentalAvailability: 5
    },
    lifestyle: {
      pace: "busy",
      walkability: 5,
      safety: 4,
      nightlife: 4,
      commute: 5,
      community: 4
    },
    transportation: {
      busRoutes: 5,
      autoRickshaw: true,
      cyclePaths: 4,
      parking: 4,
      connectivity: 5
    },
    culture: {
      festivals: 3,
      communityEvents: 4,
      culturalDiversity: 4,
      traditionalValues: 3
    },
    education: {
      schools: 4,
      colleges: 2,
      coachingCenters: 3,
      libraries: 2
    },
    healthcare: {
      hospitals: 3,
      clinics: 4,
      pharmacies: 4,
      specialists: 3
    },
    entertainment: {
      cinemas: 3,
      restaurants: 5,
      cafes: 4,
      shoppingCenters: 5
    }
  },
  {
    id: "railway-colony",
    name: "Railway Colony",
    city: "Phagwara",
    state: "Punjab",
    description: "A quiet, family-oriented neighborhood near the railway station. Known for its railway employee community and peaceful atmosphere.",
    matchScore: 85,
    highlights: ["Railway Community", "Peaceful", "Family-Oriented", "Near Station"],
    amenities: {
      parks: 3,
      restaurants: 2,
      shopping: 3,
      schools: 4,
      healthcare: 3,
      publicTransport: 5,
      gyms: 2,
      banks: 3,
      temples: 4,
      markets: 3
    },
    demographics: {
      diversity: 3,
      familyFriendly: 5,
      youngProfessionals: 2,
      seniorFriendly: 5,
      students: 2
    },
    housing: {
      medianPrice: 3800000,
      apartments: 4,
      townhouses: 3,
      singleFamily: 4,
      rentalAvailability: 3
    },
    lifestyle: {
      pace: "relaxed",
      walkability: 4,
      safety: 5,
      nightlife: 1,
      commute: 5,
      community: 5
    },
    transportation: {
      busRoutes: 5,
      autoRickshaw: true,
      cyclePaths: 3,
      parking: 3,
      connectivity: 5
    },
    culture: {
      festivals: 4,
      communityEvents: 5,
      culturalDiversity: 2,
      traditionalValues: 5
    },
    education: {
      schools: 4,
      colleges: 1,
      coachingCenters: 2,
      libraries: 2
    },
    healthcare: {
      hospitals: 3,
      clinics: 3,
      pharmacies: 3,
      specialists: 2
    },
    entertainment: {
      cinemas: 1,
      restaurants: 2,
      cafes: 1,
      shoppingCenters: 2
    }
  },
  {
    id: "bus-stand-area",
    name: "Bus Stand Area",
    city: "Phagwara",
    state: "Punjab",
    description: "A bustling commercial and residential area near the main bus stand. Perfect for those who want easy access to transportation and shopping.",
    matchScore: 82,
    highlights: ["Transportation Hub", "Commercial Area", "Shopping", "Well-Connected"],
    amenities: {
      parks: 2,
      restaurants: 4,
      shopping: 5,
      schools: 3,
      healthcare: 4,
      publicTransport: 5,
      gyms: 3,
      banks: 4,
      temples: 3,
      markets: 5
    },
    demographics: {
      diversity: 5,
      familyFriendly: 3,
      youngProfessionals: 4,
      seniorFriendly: 2,
      students: 4
    },
    housing: {
      medianPrice: 4200000,
      apartments: 5,
      townhouses: 3,
      singleFamily: 3,
      rentalAvailability: 5
    },
    lifestyle: {
      pace: "busy",
      walkability: 4,
      safety: 3,
      nightlife: 4,
      commute: 5,
      community: 3
    },
    transportation: {
      busRoutes: 5,
      autoRickshaw: true,
      cyclePaths: 2,
      parking: 3,
      connectivity: 5
    },
    culture: {
      festivals: 3,
      communityEvents: 3,
      culturalDiversity: 5,
      traditionalValues: 3
    },
    education: {
      schools: 3,
      colleges: 2,
      coachingCenters: 4,
      libraries: 2
    },
    healthcare: {
      hospitals: 4,
      clinics: 4,
      pharmacies: 5,
      specialists: 4
    },
    entertainment: {
      cinemas: 3,
      restaurants: 4,
      cafes: 3,
      shoppingCenters: 5
    }
  },
  {
    id: "college-road",
    name: "College Road",
    city: "Phagwara",
    state: "Punjab",
    description: "A vibrant area near educational institutions with a mix of students and families. Known for its academic environment and cultural activities.",
    matchScore: 87,
    highlights: ["Educational Hub", "Student-Friendly", "Cultural Activities", "Academic Environment"],
    amenities: {
      parks: 3,
      restaurants: 4,
      shopping: 4,
      schools: 5,
      healthcare: 3,
      publicTransport: 4,
      gyms: 3,
      banks: 3,
      temples: 3,
      markets: 4
    },
    demographics: {
      diversity: 4,
      familyFriendly: 4,
      youngProfessionals: 4,
      seniorFriendly: 3,
      students: 5
    },
    housing: {
      medianPrice: 4800000,
      apartments: 4,
      townhouses: 4,
      singleFamily: 4,
      rentalAvailability: 4
    },
    lifestyle: {
      pace: "balanced",
      walkability: 4,
      safety: 4,
      nightlife: 3,
      commute: 4,
      community: 4
    },
    transportation: {
      busRoutes: 4,
      autoRickshaw: true,
      cyclePaths: 4,
      parking: 4,
      connectivity: 4
    },
    culture: {
      festivals: 4,
      communityEvents: 4,
      culturalDiversity: 4,
      traditionalValues: 4
    },
    education: {
      schools: 5,
      colleges: 5,
      coachingCenters: 5,
      libraries: 4
    },
    healthcare: {
      hospitals: 3,
      clinics: 4,
      pharmacies: 4,
      specialists: 3
    },
    entertainment: {
      cinemas: 3,
      restaurants: 4,
      cafes: 4,
      shoppingCenters: 4
    }
  },
  {
    id: "industrial-area",
    name: "Industrial Area",
    city: "Phagwara",
    state: "Punjab",
    description: "A developing area near industrial zones with affordable housing options. Good for professionals working in nearby industries.",
    matchScore: 78,
    highlights: ["Industrial Proximity", "Affordable Housing", "Developing Area", "Employment Hub"],
    amenities: {
      parks: 2,
      restaurants: 2,
      shopping: 3,
      schools: 3,
      healthcare: 3,
      publicTransport: 3,
      gyms: 2,
      banks: 3,
      temples: 2,
      markets: 3
    },
    demographics: {
      diversity: 3,
      familyFriendly: 3,
      youngProfessionals: 5,
      seniorFriendly: 2,
      students: 2
    },
    housing: {
      medianPrice: 3200000,
      apartments: 4,
      townhouses: 3,
      singleFamily: 3,
      rentalAvailability: 4
    },
    lifestyle: {
      pace: "busy",
      walkability: 3,
      safety: 4,
      nightlife: 2,
      commute: 4,
      community: 3
    },
    transportation: {
      busRoutes: 3,
      autoRickshaw: true,
      cyclePaths: 2,
      parking: 4,
      connectivity: 3
    },
    culture: {
      festivals: 2,
      communityEvents: 3,
      culturalDiversity: 3,
      traditionalValues: 3
    },
    education: {
      schools: 3,
      colleges: 2,
      coachingCenters: 2,
      libraries: 2
    },
    healthcare: {
      hospitals: 3,
      clinics: 3,
      pharmacies: 3,
      specialists: 2
    },
    entertainment: {
      cinemas: 2,
      restaurants: 2,
      cafes: 2,
      shoppingCenters: 3
    }
  },
  {
    id: "old-city",
    name: "Old City",
    city: "Phagwara",
    state: "Punjab",
    description: "The historic heart of Phagwara with traditional markets, temples, and a strong sense of community. Rich in cultural heritage.",
    matchScore: 80,
    highlights: ["Cultural Heritage", "Traditional Markets", "Strong Community", "Historic Area"],
    amenities: {
      parks: 2,
      restaurants: 3,
      shopping: 4,
      schools: 3,
      healthcare: 4,
      publicTransport: 4,
      gyms: 2,
      banks: 4,
      temples: 5,
      markets: 5
    },
    demographics: {
      diversity: 4,
      familyFriendly: 4,
      youngProfessionals: 2,
      seniorFriendly: 4,
      students: 2
    },
    housing: {
      medianPrice: 3500000,
      apartments: 3,
      townhouses: 4,
      singleFamily: 4,
      rentalAvailability: 3
    },
    lifestyle: {
      pace: "balanced",
      walkability: 4,
      safety: 4,
      nightlife: 3,
      commute: 4,
      community: 5
    },
    transportation: {
      busRoutes: 4,
      autoRickshaw: true,
      cyclePaths: 3,
      parking: 3,
      connectivity: 4
    },
    culture: {
      festivals: 5,
      communityEvents: 5,
      culturalDiversity: 4,
      traditionalValues: 5
    },
    education: {
      schools: 3,
      colleges: 2,
      coachingCenters: 3,
      libraries: 3
    },
    healthcare: {
      hospitals: 4,
      clinics: 4,
      pharmacies: 4,
      specialists: 3
    },
    entertainment: {
      cinemas: 2,
      restaurants: 3,
      cafes: 2,
      shoppingCenters: 4
    }
  },
  {
    id: "new-colony",
    name: "New Colony",
    city: "Phagwara",
    state: "Punjab",
    description: "A modern residential development with contemporary amenities and planned infrastructure. Popular among new families and professionals.",
    matchScore: 85,
    highlights: ["Modern Development", "Planned Infrastructure", "Contemporary Amenities", "Family-Friendly"],
    amenities: {
      parks: 4,
      restaurants: 3,
      shopping: 4,
      schools: 4,
      healthcare: 4,
      publicTransport: 3,
      gyms: 4,
      banks: 3,
      temples: 3,
      markets: 4
    },
    demographics: {
      diversity: 3,
      familyFriendly: 5,
      youngProfessionals: 4,
      seniorFriendly: 4,
      students: 3
    },
    housing: {
      medianPrice: 5500000,
      apartments: 4,
      townhouses: 5,
      singleFamily: 5,
      rentalAvailability: 3
    },
    lifestyle: {
      pace: "balanced",
      walkability: 4,
      safety: 5,
      nightlife: 2,
      commute: 3,
      community: 4
    },
    transportation: {
      busRoutes: 3,
      autoRickshaw: true,
      cyclePaths: 4,
      parking: 5,
      connectivity: 3
    },
    culture: {
      festivals: 3,
      communityEvents: 4,
      culturalDiversity: 3,
      traditionalValues: 4
    },
    education: {
      schools: 4,
      colleges: 2,
      coachingCenters: 3,
      libraries: 3
    },
    healthcare: {
      hospitals: 3,
      clinics: 4,
      pharmacies: 4,
      specialists: 3
    },
    entertainment: {
      cinemas: 2,
      restaurants: 3,
      cafes: 3,
      shoppingCenters: 4
    }
  }
]

export const lifestylePreferences = {
  pace: {
    busy: "I prefer a fast-paced, active lifestyle with lots of social activities and entertainment options",
    balanced: "I like a mix of activity and relaxation, with moderate social opportunities",
    relaxed: "I prefer a calm, peaceful environment with minimal noise and crowds"
  },
  transportation: {
    walking: "I prefer walking and using public transportation for daily commute",
    cycling: "I love cycling as my primary mode of transport",
    driving: "I prefer driving and need good parking facilities",
    mixed: "I use a combination of different transportation methods"
  },
  entertainment: {
    arts: "I enjoy museums, theaters, and cultural events",
    nightlife: "I love restaurants, bars, and nightlife",
    sports: "I enjoy sports facilities and recreational activities",
    music: "I love live music and entertainment venues"
  },
  community: {
    diversity: "I value diverse, inclusive communities",
    family: "I want a great place for families",
    professional: "I value networking and career opportunities",
    creative: "I thrive in creative, artistic communities"
  }
}

export const calculateMatchScore = (userPreferences: any, neighborhood: Neighborhood): number => {
  let score = 0
  let totalFactors = 0

  // Lifestyle pace matching
  if (userPreferences.pace === neighborhood.lifestyle.pace) {
    score += 20
  } else if (
    (userPreferences.pace === 'balanced' && (neighborhood.lifestyle.pace === 'busy' || neighborhood.lifestyle.pace === 'relaxed')) ||
    (neighborhood.lifestyle.pace === 'balanced')
  ) {
    score += 15
  } else {
    score += 5
  }
  totalFactors += 20

  // Transportation preferences
  if (userPreferences.transportation === 'walking' && neighborhood.lifestyle.walkability >= 4) {
    score += 15
  } else if (userPreferences.transportation === 'cycling' && neighborhood.transportation.cyclePaths >= 3) {
    score += 15
  } else if (userPreferences.transportation === 'driving' && neighborhood.transportation.parking >= 4) {
    score += 15
  } else if (userPreferences.transportation === 'mixed') {
    score += 12
  } else {
    score += 5
  }
  totalFactors += 15

  // Entertainment preferences
  if (userPreferences.entertainment === 'arts' && neighborhood.culture.culturalDiversity >= 4) {
    score += 15
  } else if (userPreferences.entertainment === 'nightlife' && neighborhood.lifestyle.nightlife >= 3) {
    score += 15
  } else if (userPreferences.entertainment === 'sports' && neighborhood.amenities.parks >= 3) {
    score += 15
  } else if (userPreferences.entertainment === 'music' && neighborhood.entertainment.restaurants >= 4) {
    score += 15
  } else {
    score += 8
  }
  totalFactors += 15

  // Community values
  if (userPreferences.community === 'diversity' && neighborhood.demographics.diversity >= 4) {
    score += 15
  } else if (userPreferences.community === 'family' && neighborhood.demographics.familyFriendly >= 4) {
    score += 15
  } else if (userPreferences.community === 'professional' && neighborhood.demographics.youngProfessionals >= 4) {
    score += 15
  } else if (userPreferences.community === 'creative' && neighborhood.culture.culturalDiversity >= 4) {
    score += 15
  } else {
    score += 8
  }
  totalFactors += 15

  // Safety and community
  score += (neighborhood.lifestyle.safety / 5) * 10
  totalFactors += 10

  // Education access
  if (neighborhood.education.schools >= 4) {
    score += 10
  } else {
    score += (neighborhood.education.schools / 5) * 10
  }
  totalFactors += 10

  // Healthcare access
  if (neighborhood.healthcare.hospitals >= 3) {
    score += 10
  } else {
    score += (neighborhood.healthcare.hospitals / 5) * 10
  }
  totalFactors += 10

  // Transportation connectivity
  score += (neighborhood.transportation.connectivity / 5) * 5
  totalFactors += 5

  return Math.round((score / totalFactors) * 100)
}

export const getNeighborhoodMatches = (userPreferences: any): Neighborhood[] => {
  return phagwaraNeighborhoods
    .map(neighborhood => ({
      ...neighborhood,
      matchScore: calculateMatchScore(userPreferences, neighborhood)
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
} 