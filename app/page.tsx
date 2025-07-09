import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MapPin, Users, TrendingUp, Heart, Star, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">NeighborFit</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
            <Link href="/research" className="text-slate-300 hover:text-white transition-colors">Research</Link>
            <Link href="/methodology" className="text-slate-300 hover:text-white transition-colors">Methodology</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30 hover:bg-blue-600/30">
              <Star className="w-4 h-4 mr-2" />
              Phagwara Neighborhood Matching
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Find Your Perfect</span>
              <br />
              <span className="text-white">Neighborhood in Phagwara</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Our sophisticated algorithm analyzes your lifestyle preferences, daily routines, and community values 
              to connect you with the best neighborhoods in Phagwara, Punjab that truly align with your way of life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/quiz">
              <Button size="lg" className="human-button text-lg px-8 py-6">
                Start Your Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="dark-card hover-lift">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">8</div>
                <div className="text-slate-400">Phagwara Neighborhoods</div>
              </CardContent>
            </Card>
            <Card className="dark-card hover-lift">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">42+</div>
                <div className="text-slate-400">Data Points Analyzed</div>
              </CardContent>
            </Card>
            <Card className="dark-card hover-lift">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-slate-400">Match Accuracy</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">NeighborFit</span> for Phagwara?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive approach goes beyond basic demographics to understand what truly makes a neighborhood feel like home in Phagwara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="dark-card hover-lift">
              <CardHeader>
                <div className="friendly-icon w-12 h-12 mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Lifestyle Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  We analyze your daily routines, hobbies, and social preferences to find neighborhoods that support your lifestyle in Phagwara.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="dark-card hover-lift">
              <CardHeader>
                <div className="friendly-icon w-12 h-12 mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Local Community Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Understand the cultural and social dynamics of Phagwara neighborhoods before making your decision.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="dark-card hover-lift">
              <CardHeader>
                <div className="friendly-icon w-12 h-12 mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Data-Driven Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Our algorithm processes thousands of data points specific to Phagwara to provide accurate, personalized recommendations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="dark-card border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <span className="handwritten-text text-2xl">A Personal Note</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-slate-300 leading-relaxed">
                <p className="mb-4">
                  Finding the right neighborhood in Phagwara is more than just location—it's about finding a community that resonates with your values and lifestyle. 
                  Our team has spent years developing this system because we believe everyone deserves to feel at home in their neighborhood.
                </p>
                <p className="text-sm text-slate-400 italic">
                  "The best neighborhoods in Phagwara aren't just places to live—they're places to thrive."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your <span className="gradient-text">Perfect Match</span> in Phagwara?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Take our comprehensive assessment and discover neighborhoods in Phagwara that align with your lifestyle and values.
          </p>
          <Link href="/quiz">
            <Button size="lg" className="human-button text-lg px-8 py-6">
              Begin Your Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">NeighborFit</span>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/research" className="hover:text-white transition-colors">Research</Link>
              <Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
            <p>© 2024 NeighborFit. Advanced neighborhood matching technology for Phagwara, Punjab.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
