"use server"

// Mock data representing real neighborhood characteristics
const MOCK_NEIGHBORHOODS = [
  {
    id: "capitol-hill-seattle",
    name: "Capitol Hill",
    city: "Seattle",
    state: "WA",
    description:
      "A vibrant, diverse neighborhood known for its arts scene, nightlife, and walkable streets. Popular with young professionals and creatives.",
    amenities: {
      parks: 4,
      restaurants: 5,
      shopping: 4,
      schools: 3,
      healthcare: 4,
      publicTransport: 5,
    },
    demographics: {
      diversity: 5,
      familyFriendly: 2,
      youngProfessionals: 5,
      seniorFriendly: 2,
    },
    housing: {
      medianPrice: 650000,
      apartments: 5,
      townhouses: 3,
      singleFamily: 2,
    },
    lifestyle: {
      pace: "busy" as const,
      walkability: 5,
      safety: 3,
      nightlife: 5,
      commute: 4,
    },
  },
  {
    id: "ballard-seattle",
    name: "Ballard",
    city: "Seattle",
    state: "WA",
    description:
      "A trendy neighborhood with a strong sense of community, excellent restaurants, and a growing tech presence. Great for young professionals and couples.",
    amenities: {
      parks: 4,
      restaurants: 5,
      shopping: 4,
      schools: 4,
      healthcare: 3,
      publicTransport: 3,
    },
    demographics: {
      diversity: 4,
      familyFriendly: 3,
      youngProfessionals: 5,
      seniorFriendly: 2,
    },
    housing: {
      medianPrice: 750000,
      apartments: 4,
      townhouses: 4,
      singleFamily: 3,
    },
    lifestyle: {
      pace: "balanced" as const,
      walkability: 4,
      safety: 4,
      nightlife: 4,
      commute: 3,
    },
  },
  {
    id: "queen-anne-seattle",
    name: "Queen Anne",
    city: "Seattle",
    state: "WA",
    description:
      "An upscale neighborhood with stunning views, close to downtown and cultural attractions. Popular with professionals and empty nesters.",
    amenities: {
      parks: 3,
      restaurants: 4,
      shopping: 3,
      schools: 4,
      healthcare: 5,
      publicTransport: 4,
    },
    demographics: {
      diversity: 3,
      familyFriendly: 3,
      youngProfessionals: 4,
      seniorFriendly: 4,
    },
    housing: {
      medianPrice: 850000,
      apartments: 5,
      townhouses: 2,
      singleFamily: 3,
    },
    lifestyle: {
      pace: "balanced" as const,
      walkability: 4,
      safety: 5,
      nightlife: 3,
      commute: 5,
    },
  },
  {
    id: "fremont-seattle",
    name: "Fremont",
    city: "Seattle",
    state: "WA",
    description:
      "A quirky, artistic neighborhood with a strong community feel. Known for local businesses, farmers markets, and family-friendly atmosphere.",
    amenities: {
      parks: 5,
      restaurants: 4,
      shopping: 3,
      schools: 4,
      healthcare: 3,
      publicTransport: 3,
    },
    demographics: {
      diversity: 4,
      familyFriendly: 5,
      youngProfessionals: 3,
      seniorFriendly: 3,
    },
    housing: {
      medianPrice: 700000,
      apartments: 2,
      townhouses: 3,
      singleFamily: 5,
    },
    lifestyle: {
      pace: "relaxed" as const,
      walkability: 4,
      safety: 4,
      nightlife: 2,
      commute: 3,
    },
  },
  {
    id: "bellevue-downtown",
    name: "Downtown Bellevue",
    city: "Bellevue",
    state: "WA",
    description:
      "A modern, upscale area with excellent shopping, dining, and business amenities. Perfect for professionals who value convenience and luxury.",
    amenities: {
      parks: 3,
      restaurants: 5,
      shopping: 5,
      schools: 5,
      healthcare: 5,
      publicTransport: 4,
    },
    demographics: {
      diversity: 4,
      familyFriendly: 4,
      youngProfessionals: 5,
      seniorFriendly: 3,
    },
    housing: {
      medianPrice: 950000,
      apartments: 5,
      townhouses: 3,
      singleFamily: 2,
    },
    lifestyle: {
      pace: "busy" as const,
      walkability: 4,
      safety: 5,
      nightlife: 3,
      commute: 5,
    },
  },
]

export async function submitQuizAnswers(answers: Record<string, any>) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Store answers in session storage (in a real app, this would go to a database)
  if (typeof window !== "undefined") {
    sessionStorage.setItem("quizAnswers", JSON.stringify(answers))
  }

  return { success: true }
}

export async function getNeighborhoodMatches() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // In a real app, this would fetch from a database
  let answers: Record<string, any> = {}
  if (typeof window !== "undefined") {
    const stored = sessionStorage.getItem("quizAnswers")
    if (stored) {
      answers = JSON.parse(stored)
    }
  }

  // Calculate match scores for each neighborhood
  const matchedNeighborhoods = MOCK_NEIGHBORHOODS.map((neighborhood) => {
    const matchScore = calculateMatchScore(answers, neighborhood)
    return {
      ...neighborhood,
      matchScore: Math.round(matchScore),
    }
  })

  // Sort by match score and return top matches
  return matchedNeighborhoods.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3)
}

function calculateMatchScore(userPreferences: Record<string, any>, neighborhood: any): number {
  let totalScore = 0
  let totalWeight = 0

  // Lifestyle preferences (40% weight)
  if (userPreferences.pace) {
    const paceScore =
      userPreferences.pace === neighborhood.lifestyle.pace
        ? 100
        : userPreferences.pace === "balanced" || neighborhood.lifestyle.pace === "balanced"
          ? 70
          : 30
    totalScore += paceScore * 0.4
    totalWeight += 0.4
  }

  // Commute importance (15% weight)
  if (userPreferences.commute) {
    const commuteScore = (neighborhood.lifestyle.commute / 5) * 100
    const weight = (userPreferences.commute / 5) * 0.15
    totalScore += commuteScore * weight
    totalWeight += weight
  }

  // Nightlife importance (10% weight)
  if (userPreferences.nightlife) {
    const nightlifeScore = (neighborhood.lifestyle.nightlife / 5) * 100
    const weight = (userPreferences.nightlife / 5) * 0.1
    totalScore += nightlifeScore * weight
    totalWeight += weight
  }

  // Walkability importance (15% weight)
  if (userPreferences.walkability) {
    const walkabilityScore = (neighborhood.lifestyle.walkability / 5) * 100
    const weight = (userPreferences.walkability / 5) * 0.15
    totalScore += walkabilityScore * weight
    totalWeight += weight
  }

  // Safety importance (20% weight)
  if (userPreferences.safety) {
    const safetyScore = (neighborhood.lifestyle.safety / 5) * 100
    const weight = (userPreferences.safety / 5) * 0.2
    totalScore += safetyScore * weight
    totalWeight += weight
  }

  // Amenities (based on selected amenities)
  if (userPreferences.amenities && Array.isArray(userPreferences.amenities)) {
    let amenityScore = 0
    let amenityCount = 0

    userPreferences.amenities.forEach((amenity: string) => {
      if (neighborhood.amenities[amenity]) {
        amenityScore += (neighborhood.amenities[amenity] / 5) * 100
        amenityCount++
      }
    })

    if (amenityCount > 0) {
      const avgAmenityScore = amenityScore / amenityCount
      totalScore += avgAmenityScore * 0.15
      totalWeight += 0.15
    }
  }

  // Community type preferences
  if (userPreferences.community_type) {
    let communityScore = 50 // Default neutral score

    switch (userPreferences.community_type) {
      case "diverse":
        communityScore = (neighborhood.demographics.diversity / 5) * 100
        break
      case "family":
        communityScore = (neighborhood.demographics.familyFriendly / 5) * 100
        break
      case "young":
        communityScore = (neighborhood.demographics.youngProfessionals / 5) * 100
        break
      case "senior":
        communityScore = (neighborhood.demographics.seniorFriendly / 5) * 100
        break
    }

    totalScore += communityScore * 0.1
    totalWeight += 0.1
  }

  // Housing type preferences
  if (userPreferences.housing_type) {
    let housingScore = 50 // Default neutral score

    switch (userPreferences.housing_type) {
      case "apartment":
        housingScore = (neighborhood.housing.apartments / 5) * 100
        break
      case "townhouse":
        housingScore = (neighborhood.housing.townhouses / 5) * 100
        break
      case "single_family":
        housingScore = (neighborhood.housing.singleFamily / 5) * 100
        break
    }

    totalScore += housingScore * 0.05
    totalWeight += 0.05
  }

  // Ensure we have a minimum weight to avoid division by zero
  if (totalWeight === 0) {
    return 50 // Default neutral score
  }

  return Math.max(0, Math.min(100, totalScore / totalWeight))
}
