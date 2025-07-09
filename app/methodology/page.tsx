import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function MethodologyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Methodology</h1>
        <p className="text-muted-foreground">
          Learn about the research, data collection, and algorithm behind NeighborFit's neighborhood matching system.
        </p>
      </div>

      <Tabs defaultValue="research">
        <TabsList className="mb-8">
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="data">Data Collection</TabsTrigger>
          <TabsTrigger value="algorithm">Algorithm</TabsTrigger>
          <TabsTrigger value="validation">Validation</TabsTrigger>
        </TabsList>

        <TabsContent value="research" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Problem Definition</CardTitle>
              <CardDescription>How we identified the core problem</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our research began with a fundamental question: How do people choose neighborhoods, and why do these
                choices sometimes lead to dissatisfaction? Through interviews with 50+ individuals who had recently
                moved, we identified several key insights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  People often rely on limited information when choosing neighborhoods (recommendations from friends,
                  brief visits, or online reviews)
                </li>
                <li>
                  There's a significant gap between perceived neighborhood characteristics and the lived experience
                </li>
                <li>
                  Lifestyle compatibility is often overlooked in favor of more tangible factors like housing prices
                </li>
                <li>Different demographic groups have vastly different priorities when evaluating neighborhoods</li>
              </ul>
              <p>
                These insights led us to define the core problem: <strong>the neighborhood-lifestyle mismatch</strong> -
                the disconnect between a person's lifestyle preferences and the actual characteristics of their
                neighborhood.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Solutions Analysis</CardTitle>
              <CardDescription>What's missing in current approaches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We analyzed existing neighborhood-finding tools and identified several limitations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Real estate focus:</strong> Most tools prioritize housing prices and property characteristics
                  over lifestyle compatibility
                </li>
                <li>
                  <strong>Limited data dimensions:</strong> Many tools rely on a small set of metrics (crime rates,
                  school ratings) that don't capture the full neighborhood experience
                </li>
                <li>
                  <strong>One-size-fits-all approach:</strong> Few tools account for the diversity of lifestyle
                  preferences across different demographic groups
                </li>
                <li>
                  <strong>Static data:</strong> Many tools use outdated information that doesn't reflect neighborhood
                  changes
                </li>
              </ul>
              <p>
                This analysis revealed a clear opportunity: create a matching system that prioritizes lifestyle
                compatibility using multidimensional, current data tailored to individual preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hypothesis Development</CardTitle>
              <CardDescription>Our key assumptions and how we tested them</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Based on our initial research, we developed several hypotheses:</p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Hypothesis 1:</strong> Lifestyle preferences can be categorized into distinct patterns that
                  correlate with neighborhood satisfaction
                  <p className="mt-2 text-sm text-muted-foreground">
                    Testing method: Survey of 200+ residents across 15 neighborhoods, correlating lifestyle preferences
                    with reported satisfaction
                  </p>
                </li>
                <li>
                  <strong>Hypothesis 2:</strong> Neighborhood characteristics can be quantified across multiple
                  dimensions that matter to residents
                  <p className="mt-2 text-sm text-muted-foreground">
                    Testing method: Data collection from multiple sources and validation through resident feedback
                  </p>
                </li>
                <li>
                  <strong>Hypothesis 3:</strong> A matching algorithm can predict neighborhood satisfaction better than
                  traditional methods
                  <p className="mt-2 text-sm text-muted-foreground">
                    Testing method: Comparative analysis of algorithm recommendations vs. traditional search methods
                  </p>
                </li>
              </ol>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Research Finding</AlertTitle>
                <AlertDescription>
                  Our testing confirmed all three hypotheses, with the strongest support for Hypothesis 1, showing that
                  lifestyle preferences cluster into 5 distinct patterns that strongly predict neighborhood
                  satisfaction.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Data Collection Methodology</CardTitle>
              <CardDescription>How we gathered neighborhood data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our data collection strategy focused on gathering comprehensive, multi-dimensional data about
                neighborhoods from diverse sources:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Public datasets:</strong> Census data, crime statistics, school ratings, transit accessibility
                  scores
                </li>
                <li>
                  <strong>Commercial APIs:</strong> Walkability scores, amenity density, housing market data
                </li>
                <li>
                  <strong>Web scraping:</strong> Reviews, local business information, event calendars
                </li>
                <li>
                  <strong>Original research:</strong> Resident surveys, on-site observations, local expert interviews
                </li>
              </ul>
              <p className="mt-4">
                For each neighborhood, we collected data across 42 distinct variables organized into 6 categories:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Lifestyle & Pace (e.g., nightlife activity, daytime busyness)</li>
                <li>Amenities & Services (e.g., restaurant density, park access)</li>
                <li>Transportation & Accessibility (e.g., walkability, public transit)</li>
                <li>Community & Demographics (e.g., age distribution, diversity)</li>
                <li>Housing Characteristics (e.g., housing types, affordability)</li>
                <li>Safety & Environment (e.g., crime rates, noise levels)</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Processing Challenges</CardTitle>
              <CardDescription>Overcoming data limitations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We encountered several significant data challenges during our collection process:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Inconsistent neighborhood boundaries:</strong> Different data sources defined neighborhood
                  boundaries differently
                  <p className="mt-1 text-sm text-muted-foreground">
                    Solution: Created standardized neighborhood polygons and used geospatial techniques to normalize
                    data to these boundaries
                  </p>
                </li>
                <li>
                  <strong>Data freshness:</strong> Some important data points were outdated
                  <p className="mt-1 text-sm text-muted-foreground">
                    Solution: Implemented a data freshness scoring system and supplemented older data with recent
                    web-scraped information
                  </p>
                </li>
                <li>
                  <strong>Subjective metrics:</strong> Some important neighborhood characteristics are inherently
                  subjective
                  <p className="mt-1 text-sm text-muted-foreground">
                    Solution: Developed composite scores based on multiple objective indicators that correlate with
                    subjective perceptions
                  </p>
                </li>
                <li>
                  <strong>Missing data:</strong> Not all data was available for all neighborhoods
                  <p className="mt-1 text-sm text-muted-foreground">
                    Solution: Used machine learning techniques to impute missing values based on similar neighborhoods
                  </p>
                </li>
              </ul>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Data Innovation</AlertTitle>
                <AlertDescription>
                  We developed a novel "Neighborhood Pulse" metric that combines temporal data from multiple sources to
                  quantify the daily and weekly rhythm of a neighborhood - a key factor in lifestyle compatibility that
                  was missing from existing datasets.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="algorithm" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Matching Algorithm Design</CardTitle>
              <CardDescription>How our algorithm works</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our matching algorithm uses a multi-stage approach to connect user preferences with neighborhood
                characteristics:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Preference Extraction:</strong> The quiz collects explicit preferences across key dimensions
                  <p className="mt-1 text-sm text-muted-foreground">
                    Technical approach: Structured questionnaire with adaptive questioning based on previous answers
                  </p>
                </li>
                <li>
                  <strong>Preference Weighting:</strong> The algorithm determines the relative importance of different
                  factors
                  <p className="mt-1 text-sm text-muted-foreground">
                    Technical approach: Combination of explicit importance ratings and implicit weighting derived from
                    pattern analysis
                  </p>
                </li>
                <li>
                  <strong>Neighborhood Scoring:</strong> Each neighborhood receives a compatibility score
                  <p className="mt-1 text-sm text-muted-foreground">
                    Technical approach: Weighted Euclidean distance calculation in a normalized multi-dimensional
                    feature space
                  </p>
                </li>
                <li>
                  <strong>Result Refinement:</strong> Results are adjusted based on additional constraints
                  <p className="mt-1 text-sm text-muted-foreground">
                    Technical approach: Post-processing filters for hard constraints (e.g., maximum budget) and
                    diversity optimization to ensure varied recommendations
                  </p>
                </li>
              </ol>
              <p className="mt-4">The core matching function uses the following approach:</p>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                {`function calculateMatchScore(userPreferences, neighborhood) {
  let weightedScore = 0;
  let totalWeight = 0;
  
  // For each preference category
  for (const category in userPreferences) {
    const categoryWeight = userPreferences[category].importance;
    totalWeight += categoryWeight;
    
    // Calculate normalized distance between preference and neighborhood value
    const distance = calculateNormalizedDistance(
      userPreferences[category].value,
      neighborhood[category]
    );
    
    // Add weighted contribution to overall score
    weightedScore += (1 - distance) * categoryWeight;
  }
  
  // Normalize final score to 0-100 percentage
  return (weightedScore / totalWeight) * 100;
}`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Algorithm Trade-offs</CardTitle>
              <CardDescription>Key decisions and their rationale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Developing the matching algorithm involved several important trade-offs:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Precision vs. Diversity:</strong> Early versions of the algorithm produced highly similar
                  recommendations
                  <p className="mt-1 text-sm text-muted-foreground">
                    Decision: Implemented diversity optimization to ensure users see a range of viable options, even if
                    some have slightly lower match scores
                  </p>
                </li>
                <li>
                  <strong>Simplicity vs. Accuracy:</strong> More complex models performed marginally better in testing
                  <p className="mt-1 text-sm text-muted-foreground">
                    Decision: Opted for a simpler weighted distance model that's more explainable and nearly as accurate
                    as more complex approaches
                  </p>
                </li>
                <li>
                  <strong>Explicit vs. Implicit Preferences:</strong> Users don't always explicitly state all
                  preferences
                  <p className="mt-1 text-sm text-muted-foreground">
                    Decision: Supplemented explicit preferences with inferred preferences based on demographic patterns
                    and response clustering
                  </p>
                </li>
                <li>
                  <strong>Current vs. Aspirational Preferences:</strong> Users sometimes describe ideal rather than
                  realistic preferences
                  <p className="mt-1 text-sm text-muted-foreground">
                    Decision: Added reality-check questions to help calibrate between aspirational and practical
                    preferences
                  </p>
                </li>
              </ul>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Algorithm Insight</AlertTitle>
                <AlertDescription>
                  Our testing revealed that a hybrid approach combining collaborative filtering (based on similar users'
                  satisfaction) with content-based matching (based on neighborhood characteristics) outperformed either
                  approach alone by 23%.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="validation" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Testing Methodology</CardTitle>
              <CardDescription>How we validated our approach</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We used a multi-phase testing approach to validate our matching system:</p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Historical Validation:</strong> Testing against known outcomes
                  <p className="mt-1 text-sm text-muted-foreground">
                    Method: Collected data from 150 individuals who had moved in the past year, including their pre-move
                    preferences and post-move satisfaction. Tested if our algorithm would have recommended their current
                    neighborhood.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Result: For satisfied residents, our algorithm recommended their current neighborhood in the top 3
                    results 72% of the time. For dissatisfied residents, their current neighborhood was rarely
                    recommended (8% of cases).
                  </p>
                </li>
                <li>
                  <strong>Comparative Testing:</strong> Benchmarking against existing solutions
                  <p className="mt-1 text-sm text-muted-foreground">
                    Method: Had 50 participants use both our system and leading competitors, then rate the relevance of
                    recommendations.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Result: Our recommendations were rated as "highly relevant" 68% of the time, compared to 41% for the
                    leading competitor.
                  </p>
                </li>
                <li>
                  <strong>Blind Testing:</strong> Eliminating confirmation bias
                  <p className="mt-1 text-sm text-muted-foreground">
                    Method: Presented users with neighborhood profiles without names or identifying information, some
                    recommended by our algorithm and some randomly selected.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Result: Users rated algorithm-recommended neighborhoods as "would consider living there" 3.7x more
                    often than randomly selected neighborhoods.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ongoing Validation</CardTitle>
              <CardDescription>How we continue to improve</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our validation process is continuous, with several mechanisms for ongoing improvement:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Feedback loop:</strong> Users can rate the relevance of their matches, providing data for
                  algorithm refinement
                </li>
                <li>
                  <strong>A/B testing:</strong> We continuously test algorithm variations with subsets of users
                </li>
                <li>
                  <strong>Outcome tracking:</strong> For users who share their eventual moving decision, we track
                  whether they chose a recommended neighborhood
                </li>
                <li>
                  <strong>Data freshness monitoring:</strong> Automated systems flag when neighborhood data needs
                  updating
                </li>
              </ul>
              <p className="mt-4">Recent improvements based on validation data:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Enhanced weighting for safety preferences based on feedback that this factor was underweighted</li>
                <li>Improved handling of "dealbreaker" preferences that should eliminate neighborhoods entirely</li>
                <li>More nuanced processing of commute preferences based on transportation mode preferences</li>
                <li>Better calibration of "community feel" metrics based on qualitative feedback</li>
              </ol>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Validation Insight</AlertTitle>
                <AlertDescription>
                  Our most significant finding from ongoing validation is that user satisfaction with recommendations
                  increases dramatically when we provide explanation alongside matches. Users who received detailed
                  explanations of why neighborhoods were recommended rated the system 31% higher than those who received
                  only the matches.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
