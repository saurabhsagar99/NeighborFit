'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, MapPin, Users, Star, TrendingUp, Heart, Building, Coffee, Trees, Car, Bike, BookOpen, Music, CheckCircle, Home, School, Hospital, ShoppingBag, TreePine } from 'lucide-react'
import Link from 'next/link'
import { phagwaraNeighborhoods, Neighborhood } from '@/lib/data'

export default function ResultsPage() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<Neighborhood>(phagwaraNeighborhoods[0])
  const [userPreferences, setUserPreferences] = useState<any>(null)

  useEffect(() => {
    // In a real app, this would come from the quiz results
    // For now, we'll use a sample preference set
    setUserPreferences({
      pace: 'balanced',
      transportation: 'mixed',
      entertainment: 'arts',
      community: 'family'
    })
  }, [])

  const insights = {
    lifestyleMatch: "Your preference for a balanced lifestyle aligns well with neighborhoods that offer both activity and tranquility.",
    transportationMatch: "Your mixed transportation preferences make neighborhoods with good connectivity ideal for you.",
    culturalMatch: "Your interest in arts and culture suggests neighborhoods with rich cultural amenities would be perfect.",
    communityMatch: "You value family-friendly communities, which is reflected in our recommendations."
  }

  const recommendations = [
    "Consider neighborhoods with strong community bonds and family-oriented activities",
    "Look for areas with good transportation connectivity and parking options",
    "Prioritize neighborhoods with cultural amenities and educational institutions",
    "Focus on areas with a balanced pace of life and good safety ratings"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              Phagwara Neighborhoods
            </Badge>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your <span className="gradient-text">Phagwara Matches</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Based on your preferences, we've identified the best neighborhoods in Phagwara, Punjab that align with your lifestyle and values.
            </p>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Top Matches */}
            <div className="lg:col-span-2">
              <Card className="dark-card border-blue-500/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                    <Star className="w-6 h-6 text-blue-400" />
                    Phagwara Neighborhoods
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    These neighborhoods scored highest based on your preferences and lifestyle requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {phagwaraNeighborhoods.map((neighborhood, index) => (
                    <Card 
                      key={neighborhood.id}
                      className={`dark-card cursor-pointer transition-all duration-300 hover-lift ${
                        selectedNeighborhood.id === neighborhood.id 
                          ? 'border-blue-500 border-2 bg-blue-600/10' 
                          : 'border-slate-600 hover:border-blue-500/50'
                      }`}
                      onClick={() => setSelectedNeighborhood(neighborhood)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                                #{index + 1} Match
                              </Badge>
                              <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                                {neighborhood.matchScore}% Match
                              </Badge>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {neighborhood.name}
                            </h3>
                            <p className="text-slate-400 mb-3">
                              {neighborhood.city}, {neighborhood.state}
                            </p>
                            <p className="text-slate-300 mb-4">
                              {neighborhood.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {neighborhood.highlights.map((highlight, idx) => (
                                <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300">
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Detailed View */}
            <div className="lg:col-span-1">
              <Card className="dark-card border-blue-500/30 sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">
                    {selectedNeighborhood.name}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Detailed neighborhood analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-slate-800">
                      <TabsTrigger value="overview" className="text-slate-300">Overview</TabsTrigger>
                      <TabsTrigger value="amenities" className="text-slate-300">Amenities</TabsTrigger>
                      <TabsTrigger value="community" className="text-slate-300">Community</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="overview" className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Match Score</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <Progress value={selectedNeighborhood.matchScore} className="flex-1 h-3 bg-slate-700">
                              <div className="human-progress" style={{ width: `${selectedNeighborhood.matchScore}%` }} />
                            </Progress>
                            <span className="text-white font-semibold">{selectedNeighborhood.matchScore}%</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Housing</h4>
                          <p className="text-slate-300 text-sm">
                            Median Price: ₹{selectedNeighborhood.housing.medianPrice.toLocaleString()}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                              {selectedNeighborhood.housing.singleFamily}/5 Single Family
                            </Badge>
                            <Badge variant="outline" className="border-slate-600 text-slate-300 text-xs">
                              {selectedNeighborhood.housing.apartments}/5 Apartments
                            </Badge>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Lifestyle</h4>
                          <p className="text-slate-300 text-sm capitalize">
                            Pace: {selectedNeighborhood.lifestyle.pace}
                          </p>
                          <p className="text-slate-300 text-sm">
                            Safety: {selectedNeighborhood.lifestyle.safety}/5
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="amenities" className="space-y-4 mt-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 dark-card">
                          <School className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <div className="flex-1">
                            <span className="text-slate-300 text-sm">Schools</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold">{selectedNeighborhood.amenities.schools}/5</span>
                              <Progress value={selectedNeighborhood.amenities.schools * 20} className="flex-1 h-2 bg-slate-700">
                                <div className="human-progress" style={{ width: `${selectedNeighborhood.amenities.schools * 20}%` }} />
                              </Progress>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 dark-card">
                          <Hospital className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <div className="flex-1">
                            <span className="text-slate-300 text-sm">Healthcare</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold">{selectedNeighborhood.amenities.healthcare}/5</span>
                              <Progress value={selectedNeighborhood.amenities.healthcare * 20} className="flex-1 h-2 bg-slate-700">
                                <div className="human-progress" style={{ width: `${selectedNeighborhood.amenities.healthcare * 20}%` }} />
                              </Progress>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 dark-card">
                          <ShoppingBag className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <div className="flex-1">
                            <span className="text-slate-300 text-sm">Shopping</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold">{selectedNeighborhood.amenities.shopping}/5</span>
                              <Progress value={selectedNeighborhood.amenities.shopping * 20} className="flex-1 h-2 bg-slate-700">
                                <div className="human-progress" style={{ width: `${selectedNeighborhood.amenities.shopping * 20}%` }} />
                              </Progress>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 dark-card">
                          <TreePine className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <div className="flex-1">
                            <span className="text-slate-300 text-sm">Parks</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-semibold">{selectedNeighborhood.amenities.parks}/5</span>
                              <Progress value={selectedNeighborhood.amenities.parks * 20} className="flex-1 h-2 bg-slate-700">
                                <div className="human-progress" style={{ width: `${selectedNeighborhood.amenities.parks * 20}%` }} />
                              </Progress>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="community" className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Community Highlights</h4>
                          <div className="space-y-2">
                            {selectedNeighborhood.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-blue-400" />
                                <span className="text-slate-300 text-sm">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Demographics</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-300 text-sm">Family Friendly</span>
                              <span className="text-white font-semibold">{selectedNeighborhood.demographics.familyFriendly}/5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300 text-sm">Young Professionals</span>
                              <span className="text-white font-semibold">{selectedNeighborhood.demographics.youngProfessionals}/5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300 text-sm">Students</span>
                              <span className="text-white font-semibold">{selectedNeighborhood.demographics.students}/5</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white mb-2">Transportation</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-slate-300 text-sm">Bus Routes</span>
                              <span className="text-white font-semibold">{selectedNeighborhood.transportation.busRoutes}/5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300 text-sm">Connectivity</span>
                              <span className="text-white font-semibold">{selectedNeighborhood.transportation.connectivity}/5</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-300 text-sm">Auto Rickshaw</span>
                              <span className="text-white font-semibold">{selectedNeighborhood.transportation.autoRickshaw ? 'Yes' : 'No'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Insights Section */}
          <div className="mt-12">
            <Card className="dark-card border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  Your Analysis Insights
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Understanding what makes these neighborhoods perfect for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Lifestyle Alignment</h4>
                    <p className="text-slate-300 text-sm">{insights.lifestyleMatch}</p>
                    
                    <h4 className="font-semibold text-white">Transportation Preferences</h4>
                    <p className="text-slate-300 text-sm">{insights.transportationMatch}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Cultural Interests</h4>
                    <p className="text-slate-300 text-sm">{insights.culturalMatch}</p>
                    
                    <h4 className="font-semibold text-white">Community Values</h4>
                    <p className="text-slate-300 text-sm">{insights.communityMatch}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="mt-8">
            <Card className="dark-card border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-blue-400" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.map((recommendation, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 dark-card">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{recommendation}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link href="/quiz">
                    <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white w-full sm:w-auto">
                      Retake Assessment
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button className="human-button w-full sm:w-auto">
                      Learn More About Our Method
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
