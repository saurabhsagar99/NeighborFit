'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Users, Heart, TrendingUp, Home, Coffee, BookOpen, Music, Car, Bike, Trees, Building, Star } from 'lucide-react'
import Link from 'next/link'
import { getNeighborhoodMatches, lifestylePreferences } from '@/lib/data'

const questions = [
  {
    id: 1,
    title: "Lifestyle Preferences",
    description: "Tell us about your daily routines and activities",
    icon: <Heart className="w-6 h-6" />,
    options: [
      { id: 'busy', label: 'Active & Outdoorsy', description: 'I love hiking, running, and outdoor activities', icon: <Trees className="w-5 h-5" /> },
      { id: 'balanced', label: 'Social & Community', description: 'I enjoy meeting neighbors and community events', icon: <Users className="w-5 h-5" /> },
      { id: 'relaxed', label: 'Quiet & Peaceful', description: 'I prefer a calm, low-key environment', icon: <Home className="w-5 h-5" /> }
    ]
  },
  {
    id: 2,
    title: "Transportation Preferences",
    description: "How do you prefer to get around?",
    icon: <MapPin className="w-6 h-6" />,
    options: [
      { id: 'walking', label: 'Walking & Public Transit', description: 'I prefer walking and using public transportation', icon: <TrendingUp className="w-5 h-5" /> },
      { id: 'cycling', label: 'Cycling', description: 'I love biking as my primary mode of transport', icon: <Bike className="w-5 h-5" /> },
      { id: 'driving', label: 'Driving', description: 'I prefer driving and need good parking', icon: <Car className="w-5 h-5" /> },
      { id: 'mixed', label: 'Mixed Transportation', description: 'I use a combination of different transport methods', icon: <MapPin className="w-5 h-5" /> }
    ]
  },
  {
    id: 3,
    title: "Entertainment & Culture",
    description: "What cultural and entertainment activities interest you?",
    icon: <Star className="w-6 h-6" />,
    options: [
      { id: 'arts', label: 'Arts & Culture', description: 'I enjoy museums, theaters, and cultural events', icon: <BookOpen className="w-5 h-5" /> },
      { id: 'nightlife', label: 'Nightlife & Dining', description: 'I love restaurants, bars, and nightlife', icon: <Coffee className="w-5 h-5" /> },
      { id: 'sports', label: 'Sports & Recreation', description: 'I enjoy sports facilities and recreational activities', icon: <TrendingUp className="w-5 h-5" /> },
      { id: 'music', label: 'Music & Entertainment', description: 'I love live music and entertainment venues', icon: <Music className="w-5 h-5" /> }
    ]
  },
  {
    id: 4,
    title: "Community Values",
    description: "What matters most to you in a neighborhood?",
    icon: <Users className="w-6 h-6" />,
    options: [
      { id: 'diversity', label: 'Diversity & Inclusion', description: 'I value diverse, inclusive communities', icon: <Users className="w-5 h-5" /> },
      { id: 'family', label: 'Family-Friendly', description: 'I want a great place for families', icon: <Home className="w-5 h-5" /> },
      { id: 'professional', label: 'Professional Network', description: 'I value networking and career opportunities', icon: <Building className="w-5 h-5" /> },
      { id: 'creative', label: 'Creative & Artistic', description: 'I thrive in creative, artistic communities', icon: <Star className="w-5 h-5" /> }
    ]
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [matches, setMatches] = useState<any[]>([])

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Calculate matches based on user preferences
      const userPreferences = {
        pace: answers[0],
        transportation: answers[1],
        entertainment: answers[2],
        community: answers[3]
      }
      const neighborhoodMatches = getNeighborhoodMatches(userPreferences)
      setMatches(neighborhoodMatches)
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const canProceed = answers[currentQuestion]

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Card className="dark-card border-blue-500/30">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-4">
                Assessment Complete!
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Thank you for sharing your preferences. We've analyzed your responses and found the best neighborhoods in Phagwara for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Your Preferences Summary:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(answers).map(([questionIndex, answer]) => {
                    const question = questions[parseInt(questionIndex)]
                    const selectedOption = question.options.find(opt => opt.id === answer)
                    return (
                      <div key={questionIndex} className="dark-card p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {question.icon}
                          <span className="font-semibold text-white">{question.title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          {selectedOption?.icon}
                          <span>{selectedOption?.label}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Top Neighborhood Matches:</h3>
                <div className="space-y-4">
                  {matches.slice(0, 3).map((neighborhood, index) => (
                    <div key={neighborhood.id} className="dark-card p-4 border-blue-500/30">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-white">{neighborhood.name}</h4>
                        <Badge className="bg-green-600/20 text-green-300 border-green-500/30">
                          {neighborhood.matchScore}% Match
                        </Badge>
                      </div>
                      <p className="text-slate-300 text-sm mb-2">{neighborhood.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {neighborhood.highlights.slice(0, 2).map((highlight: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link href="/results">
                <Button size="lg" className="human-button text-lg px-8 py-6">
                  View Detailed Results
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-300">Progress</span>
              <span className="text-sm text-slate-300">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3 bg-slate-700">
              <div className="human-progress" style={{ width: `${progress}%` }} />
            </Progress>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="dark-card border-blue-500/30">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="friendly-icon w-12 h-12">
                  {currentQ.icon}
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-white">
                    {currentQ.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg mt-2">
                    {currentQ.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentQ.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className={`dark-card p-6 text-left transition-all duration-300 hover-lift ${
                      answers[currentQuestion] === option.id
                        ? 'border-blue-500 border-2 bg-blue-600/10'
                        : 'border-slate-600 hover:border-blue-500/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="friendly-icon w-10 h-10 flex-shrink-0">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-2">
                          {option.label}
                        </h3>
                        <p className="text-slate-300">
                          {option.description}
                        </p>
                      </div>
                      {answers[currentQuestion] === option.id && (
                        <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-700">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  {currentQuestion + 1} of {questions.length}
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="human-button"
                >
                  {currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
