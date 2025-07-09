import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, FileText, Users, LineChart } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Research Findings</h1>
        <p className="text-muted-foreground">
          Explore the research that informs NeighborFit's approach to neighborhood-lifestyle matching.
        </p>
      </div>

      <Tabs defaultValue="interviews">
        <TabsList className="mb-8">
          <TabsTrigger value="interviews">User Interviews</TabsTrigger>
          <TabsTrigger value="surveys">Survey Data</TabsTrigger>
          <TabsTrigger value="patterns">Lifestyle Patterns</TabsTrigger>
          <TabsTrigger value="insights">Key Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="interviews" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Interview Methodology</CardTitle>
              <CardDescription>How we gathered qualitative insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Participant Demographics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>50 participants who moved within the last 12 months</li>
                    <li>Age range: 22-65 years old</li>
                    <li>Diverse household compositions (singles, couples, families)</li>
                    <li>Various income brackets and occupations</li>
                    <li>Mix of urban, suburban, and rural movers</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Interview Structure</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>60-90 minute semi-structured interviews</li>
                    <li>Pre-move decision-making process exploration</li>
                    <li>Post-move satisfaction assessment</li>
                    <li>Neighborhood expectation vs. reality comparison</li>
                    <li>Lifestyle compatibility reflection</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Analysis Approach</h3>
                <p>
                  Interview transcripts were analyzed using thematic coding to identify recurring patterns and insights.
                  We used a grounded theory approach, allowing themes to emerge from the data rather than testing
                  predetermined hypotheses.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Interview Findings</CardTitle>
              <CardDescription>What we learned from movers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Finding 1: Information Gaps</h3>
                <p className="mb-2">
                  Most participants reported making neighborhood decisions with significant information gaps, often
                  relying on limited visits and second-hand information.
                </p>
                <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground">
                  "I visited on a Saturday afternoon and it seemed perfect. I had no idea how noisy it would be on
                  weeknights when the bars let out. I would have chosen differently if I'd known."
                  <footer className="mt-1 text-sm not-italic">— Interview Participant #14</footer>
                </blockquote>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Finding 2: Lifestyle Mismatch</h3>
                <p className="mb-2">
                  73% of dissatisfied movers cited lifestyle incompatibility rather than housing issues as their primary
                  source of dissatisfaction.
                </p>
                <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground">
                  "The house is exactly what we wanted, but the neighborhood just doesn't fit our lifestyle. Everything
                  closes early, there's nowhere to meet people our age, and we feel isolated."
                  <footer className="mt-1 text-sm not-italic">— Interview Participant #29</footer>
                </blockquote>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Finding 3: Evolving Priorities</h3>
                <p className="mb-2">
                  Participants frequently described how their neighborhood priorities had evolved over time, often in
                  ways they hadn't anticipated.
                </p>
                <blockquote className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground">
                  "I used to think I wanted the busiest, most central location possible. But as I've gotten older, I
                  realize I value quiet streets and green space much more than being near nightlife."
                  <footer className="mt-1 text-sm not-italic">— Interview Participant #8</footer>
                </blockquote>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Finding 4: Hidden Factors</h3>
                <p className="mb-2">
                  Many participants identified "hidden factors" that significantly impacted their satisfaction but
                  weren't considered during their search.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Street parking availability and regulations</li>
                  <li>Neighborhood social dynamics and community events</li>
                  <li>Seasonal changes in neighborhood character</li>
                  <li>Micro-climate variations (sun exposure, wind patterns)</li>
                  <li>Noise patterns at different times of day/week</li>
                </ul>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Research Insight</AlertTitle>
                <AlertDescription>
                  The most satisfied residents were those who had previously lived in a similar neighborhood type,
                  suggesting that people often don't know their true preferences until they've experienced different
                  neighborhood styles.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="surveys" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Survey Methodology</CardTitle>
              <CardDescription>Quantitative data collection approach</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Survey Design</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>42-question online survey</li>
                    <li>Mix of Likert scale, multiple choice, and open-ended questions</li>
                    <li>Focused on neighborhood preferences, actual choices, and satisfaction</li>
                    <li>Demographic and lifestyle information collection</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Participant Demographics</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>1,250 respondents across 15 metropolitan areas</li>
                    <li>Stratified sampling to ensure demographic representation</li>
                    <li>Mix of recent movers (within 2 years) and established residents</li>
                    <li>Residents from 85 distinct neighborhoods</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Analysis Methods</h3>
                <p>
                  Survey data was analyzed using statistical methods including factor analysis, cluster analysis, and
                  regression modeling to identify patterns and correlations between preferences, neighborhood
                  characteristics, and satisfaction levels.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Survey Results</CardTitle>
              <CardDescription>Key quantitative findings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Neighborhood Satisfaction Factors</h3>
                <p className="mb-4">
                  Factor analysis revealed that neighborhood satisfaction was most strongly correlated with these
                  factors (in order of importance):
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Lifestyle Compatibility</span>
                      <span>32% of variance</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "32%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Safety & Security</span>
                      <span>24% of variance</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Convenience & Accessibility</span>
                      <span>19% of variance</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "19%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Community & Social Fit</span>
                      <span>15% of variance</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Housing Quality</span>
                      <span>10% of variance</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Preference vs. Reality Gap</h3>
                <p className="mb-4">
                  We measured the gap between what people said they wanted and what they actually chose:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Walkability:</strong> 78% rated walkability as "very important," but only 34% chose highly
                    walkable neighborhoods
                  </li>
                  <li>
                    <strong>Public Transit:</strong> 65% wanted good transit access, but 52% chose car-dependent
                    neighborhoods
                  </li>
                  <li>
                    <strong>Nightlife:</strong> 41% wanted vibrant nightlife, but 67% chose quiet residential areas
                  </li>
                  <li>
                    <strong>Green Space:</strong> 89% wanted access to parks, and 71% achieved this (smallest gap)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Demographic Preference Patterns</h3>
                <p className="mb-4">Clear patterns emerged when analyzing preferences by demographic groups:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Young Professionals (22-32)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Prioritize nightlife and social opportunities</li>
                      <li>• Value walkability and public transit</li>
                      <li>• Less concerned with schools and family amenities</li>
                      <li>• Willing to trade space for location</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Families with Children (28-45)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• School quality is top priority</li>
                      <li>• Safety concerns significantly elevated</li>
                      <li>• Need for parks and family-friendly amenities</li>
                      <li>• Prefer quieter, residential neighborhoods</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Empty Nesters (45-65)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Value community engagement opportunities</li>
                      <li>• Healthcare access becomes important</li>
                      <li>• Appreciate cultural amenities</li>
                      <li>• Seek balance between activity and tranquility</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Seniors (65+)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Prioritize healthcare and services</li>
                      <li>• Value walkability for daily needs</li>
                      <li>• Prefer established, stable communities</li>
                      <li>• Safety and accessibility are crucial</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Survey Insight</AlertTitle>
                <AlertDescription>
                  The strongest predictor of neighborhood satisfaction wasn't any single factor, but rather the
                  alignment between a person's stated priorities and their neighborhood's characteristics. This finding
                  directly informed our matching algorithm design.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Lifestyle Pattern Analysis</CardTitle>
              <CardDescription>Identifying distinct lifestyle clusters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Through cluster analysis of survey responses, we identified five distinct lifestyle patterns that
                strongly predict neighborhood preferences and satisfaction:
              </p>

              <div className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-blue-600">The Urban Explorer (22% of respondents)</h3>
                  <p className="mb-3">
                    Values variety, stimulation, and cultural opportunities. Thrives in dynamic environments with lots
                    of options.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Preferences:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• High walkability and public transit</li>
                        <li>• Diverse dining and entertainment options</li>
                        <li>• Cultural amenities (museums, theaters)</li>
                        <li>• Diverse, multicultural communities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ideal Neighborhoods:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Dense urban cores</li>
                        <li>• Arts districts</li>
                        <li>• Transit-oriented developments</li>
                        <li>• Mixed-use neighborhoods</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-green-600">The Family Nester (28% of respondents)</h3>
                  <p className="mb-3">
                    Prioritizes safety, stability, and family-friendly amenities. Seeks community and long-term roots.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Preferences:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Excellent schools and child safety</li>
                        <li>• Parks and recreational facilities</li>
                        <li>• Family-oriented community events</li>
                        <li>• Quiet, residential streets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ideal Neighborhoods:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Suburban family neighborhoods</li>
                        <li>• Planned communities</li>
                        <li>• School district-focused areas</li>
                        <li>• Family-friendly suburbs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-purple-600">
                    The Balanced Connector (19% of respondents)
                  </h3>
                  <p className="mb-3">
                    Seeks a middle ground between urban excitement and suburban tranquility. Values both convenience and
                    community.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Preferences:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Moderate walkability with parking</li>
                        <li>• Mix of dining and quiet spaces</li>
                        <li>• Community engagement opportunities</li>
                        <li>• Reasonable commute to work</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ideal Neighborhoods:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Inner-ring suburbs</li>
                        <li>• Walkable suburban centers</li>
                        <li>• Mixed-density neighborhoods</li>
                        <li>• Transit-accessible suburbs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-orange-600">
                    The Peaceful Retreater (18% of respondents)
                  </h3>
                  <p className="mb-3">
                    Values tranquility, nature, and privacy. Prefers slower pace and natural surroundings over urban
                    conveniences.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Preferences:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Low noise and traffic</li>
                        <li>• Access to nature and green space</li>
                        <li>• Privacy and larger living spaces</li>
                        <li>• Minimal commercial activity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ideal Neighborhoods:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Rural and semi-rural areas</li>
                        <li>• Quiet residential suburbs</li>
                        <li>• Neighborhoods near parks/nature</li>
                        <li>• Low-density communities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-red-600">
                    The Convenience Optimizer (13% of respondents)
                  </h3>
                  <p className="mb-3">
                    Prioritizes efficiency and convenience above all else. Values short commutes and easy access to
                    services.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Preferences:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Minimal commute time</li>
                        <li>• Easy access to shopping and services</li>
                        <li>• Efficient transportation options</li>
                        <li>• Practical over aesthetic considerations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ideal Neighborhoods:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Business district adjacent areas</li>
                        <li>• Transit hubs</li>
                        <li>• Service-rich corridors</li>
                        <li>• Commuter-friendly locations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Pattern Insight</AlertTitle>
                <AlertDescription>
                  These lifestyle patterns were validated across different cities and demographic groups, suggesting
                  they represent fundamental approaches to neighborhood living rather than location-specific
                  preferences. Understanding which pattern a user fits helps predict their satisfaction with different
                  neighborhood types.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Key Research Insights</CardTitle>
              <CardDescription>What our research revealed about neighborhood matching</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Insight 1: The Lifestyle-First Principle</h3>
                <p className="mb-3">
                  Our research revealed that lifestyle compatibility is the strongest predictor of neighborhood
                  satisfaction, more important than housing characteristics, price, or even commute time.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Implications for Matching:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lifestyle preferences should be weighted more heavily than practical considerations</li>
                    <li>Users should be educated about the importance of lifestyle fit</li>
                    <li>Matching algorithms should prioritize lifestyle compatibility over convenience factors</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Insight 2: The Information Gap Problem</h3>
                <p className="mb-3">
                  Most people make neighborhood decisions with significant information gaps, particularly about
                  lifestyle factors that only become apparent through extended residence.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Implications for Matching:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Matching systems should surface "hidden" neighborhood characteristics</li>
                    <li>Temporal data (how neighborhoods change throughout the day/week/season) is crucial</li>
                    <li>User education about what to consider is as important as the matching itself</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Insight 3: The Preference Evolution Effect</h3>
                <p className="mb-3">
                  People's neighborhood preferences evolve significantly over time, often in predictable patterns based
                  on life stage and experience.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Implications for Matching:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Matching should consider both current and likely future preferences</li>
                    <li>Life stage transitions are key moments for preference shifts</li>
                    <li>Systems should help users understand how their preferences might evolve</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Insight 4: The Community Connection Factor</h3>
                <p className="mb-3">
                  Social fit and community connection emerged as critical but often overlooked factors in neighborhood
                  satisfaction, particularly for long-term happiness.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Implications for Matching:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Demographics and community culture should be factored into matching</li>
                    <li>Social opportunities and community engagement should be highlighted</li>
                    <li>Matching should consider personality fit with neighborhood culture</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Insight 5: The Aspiration vs. Reality Tension</h3>
                <p className="mb-3">
                  There's often a significant gap between what people say they want and what they actually choose,
                  usually due to practical constraints or unrealistic expectations.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Implications for Matching:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Matching systems should help calibrate expectations with reality</li>
                    <li>Trade-offs should be made explicit and transparent</li>
                    <li>Systems should distinguish between "must-haves" and "nice-to-haves"</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Research Impact</AlertTitle>
                <AlertDescription>
                  These insights directly shaped NeighborFit's approach, leading to our lifestyle-first matching
                  algorithm, comprehensive neighborhood profiling, and emphasis on helping users understand both their
                  current preferences and how they might evolve over time.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Future Research Directions</CardTitle>
              <CardDescription>Areas for continued investigation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our research has opened several avenues for future investigation:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Longitudinal satisfaction tracking:</strong> Following users over multiple years to understand
                  how satisfaction changes and what factors predict long-term happiness
                </li>
                <li>
                  <strong>Cultural and regional variations:</strong> Investigating how neighborhood preferences vary
                  across different cultural backgrounds and geographic regions
                </li>
                <li>
                  <strong>Climate and seasonal factors:</strong> Understanding how weather patterns and seasonal changes
                  affect neighborhood satisfaction
                </li>
                <li>
                  <strong>Remote work impact:</strong> Studying how the shift to remote work has changed neighborhood
                  priorities and preferences
                </li>
                <li>
                  <strong>Micro-neighborhood analysis:</strong> Developing more granular understanding of how
                  neighborhood characteristics vary within small geographic areas
                </li>
                <li>
                  <strong>Social network effects:</strong> Investigating how existing social connections influence
                  neighborhood choice and satisfaction
                </li>
              </ul>
              <p className="mt-4">
                These research directions will help us continue improving the accuracy and relevance of our matching
                system while contributing to the broader understanding of residential choice and satisfaction.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
