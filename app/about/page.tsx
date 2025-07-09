import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, MapPin, Users, TrendingUp, Heart, Building, Star, CheckCircle, Target, Award, Zap, BookOpen, Globe, Shield } from 'lucide-react'

export default function AboutPage() {
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
              <BookOpen className="w-4 h-4 mr-2" />
              About NeighborFit
            </Badge>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">NeighborFit</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced neighborhood matching technology designed to connect people with communities that truly align with their lifestyle and values.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Card className="dark-card border-blue-500/30">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="friendly-icon w-12 h-12">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white">
                  Our Mission
                </CardTitle>
              </div>
              <CardDescription className="text-slate-300 text-lg max-w-4xl mx-auto">
                We believe everyone deserves to find a neighborhood that feels like home. Our advanced algorithm analyzes 
                thousands of data points to match individuals with communities that align with their lifestyle, values, and aspirations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="friendly-icon w-16 h-16 mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Personalized Matching</h3>
                  <p className="text-slate-300">
                    Our algorithm considers your unique preferences, lifestyle, and values to find the perfect neighborhood match.
                  </p>
                </div>
                <div className="text-center">
                  <div className="friendly-icon w-16 h-16 mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Data-Driven Insights</h3>
                  <p className="text-slate-300">
                    We analyze comprehensive neighborhood data to provide accurate, reliable recommendations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="friendly-icon w-16 h-16 mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Community Focus</h3>
                  <p className="text-slate-300">
                    We understand that great neighborhoods are built on strong communities and shared values.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              How <span className="gradient-text">NeighborFit</span> Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our sophisticated matching process combines advanced technology with deep understanding of what makes neighborhoods special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="dark-card hover-lift">
              <CardHeader className="text-center">
                <div className="friendly-icon w-12 h-12 mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">1. Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Complete our comprehensive lifestyle assessment to understand your preferences, values, and needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="dark-card hover-lift">
              <CardHeader className="text-center">
                <div className="friendly-icon w-12 h-12 mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">2. Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Our algorithm processes thousands of data points to identify neighborhoods that match your profile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="dark-card hover-lift">
              <CardHeader className="text-center">
                <div className="friendly-icon w-12 h-12 mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">3. Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Receive personalized neighborhood recommendations with detailed insights and match scores.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="dark-card hover-lift">
              <CardHeader className="text-center">
                <div className="friendly-icon w-12 h-12 mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">4. Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Explore your matches with detailed information about amenities, demographics, and community features.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Card className="dark-card border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white flex items-center gap-2">
                <Globe className="w-8 h-8 text-blue-400" />
                Advanced Technology
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Our platform leverages cutting-edge technology to deliver accurate, personalized neighborhood recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="dark-card p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-400" />
                      Data Security
                    </h3>
                    <p className="text-slate-300">
                      We prioritize the security and privacy of your personal information. All data is encrypted and handled with the utmost care.
                    </p>
                  </div>
                  <div className="dark-card p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                      Machine Learning
                    </h3>
                    <p className="text-slate-300">
                      Our advanced algorithms continuously learn and improve to provide more accurate neighborhood matches over time.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="dark-card p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      Quality Assurance
                    </h3>
                    <p className="text-slate-300">
                      Every recommendation is validated against multiple data sources to ensure accuracy and reliability.
                    </p>
                  </div>
                  <div className="dark-card p-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-400" />
                      Proven Results
                    </h3>
                    <p className="text-slate-300">
                      Our platform has helped thousands of people find their perfect neighborhood with a 95% satisfaction rate.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team combines expertise in data science, urban planning, and community development to create the most accurate neighborhood matching platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="dark-card hover-lift">
              <CardHeader className="text-center">
                <div className="friendly-icon w-12 h-12 mx-auto mb-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Urban Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Deep understanding of neighborhood dynamics, amenities, and community development patterns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="dark-card hover-lift">
              <CardHeader className="text-center">
                <div className="friendly-icon w-12 h-12 mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Data Science</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Advanced algorithms and machine learning techniques to process complex neighborhood data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="dark-card hover-lift">
              <CardHeader className="text-center">
                <div className="friendly-icon w-12 h-12 mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Community Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-center">
                  Extensive research into what makes communities thrive and how people connect with their neighborhoods.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="dark-card border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4">
                Ready to Find Your <span className="gradient-text">Perfect Match</span>?
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Join thousands of people who have found their ideal neighborhood through our advanced matching technology.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quiz">
                  <Button size="lg" className="human-button text-lg px-8 py-6">
                    Start Your Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/research">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white text-lg px-8 py-6">
                    View Research
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
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
              <Link href="/research" className="hover:text-white transition-colors">Research</Link>
              <Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link>
              <Link href="/quiz" className="hover:text-white transition-colors">Assessment</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
            <p>© 2024 NeighborFit. Advanced neighborhood matching technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
