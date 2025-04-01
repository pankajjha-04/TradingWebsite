import Link from "next/link"
import {
  LineChartIcon as ChartLineUp,
  Medal,
  Zap,
  PieChartIcon as ChartPie,
  Briefcase,
  Globe,
  Calendar,
  UserIcon as UserSecret,
  AlertTriangle,
  TrendingUp,
  BarChart,
  Percent,
  Target,
  Clock,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CountdownTimer from "@/components/countdown-timer"
import MarketInsightCard from "@/components/market-insight-card"
import TestimonialCard from "@/components/testimonial-card"
import FeatureCard from "@/components/feature-card"
import StatCard from "@/components/stat-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-primary text-primary-foreground">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold">
            <ChartLineUp className="h-6 w-6 text-secondary" />
            <span className="text-xl">PRO TRADER HUB</span>
          </div>
          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            <Link href="#home" className="text-sm font-medium transition-colors hover:text-secondary">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-secondary">
              Features
            </Link>
            <Link href="#strategies" className="text-sm font-medium transition-colors hover:text-secondary">
              Strategies
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-secondary">
              Success Stories
            </Link>
            <Link href="#join" className="text-sm font-medium transition-colors hover:text-secondary">
              Join Now
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <section
        id="home"
        className="relative flex min-h-[600px] flex-col items-center justify-center bg-gradient-to-r from-primary to-primary-foreground py-20 text-center text-white"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 max-w-5xl space-y-6 px-4 md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Premium Trading Signals & Market Analysis
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl">
            Get daily high-probability trading calls for NIFTY, BANKNIFTY, and stocks with 98%+ accuracy. Join our
            exclusive Telegram channel with 15,000+ traders.
          </p>
          <Button asChild size="lg" className="mt-8 bg-secondary text-white hover:bg-secondary/90">
            <Link href="https://t.me/+0mlolh841rk4YjJl" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.815-.168.73-.313 1.356-.45 1.881-.139.525-.276.994-.42 1.414-.145.42-.302.705-.49.873-.19.168-.38.22-.57.18-.19-.04-.38-.18-.57-.4-.19-.22-.38-.52-.57-.9-.19-.38-.38-.86-.57-1.44-.19-.58-.38-1.24-.57-2-.19-.76-.38-1.58-.57-2.48-.19-.9-.38-1.88-.57-2.94-.19-1.06-.38-2.2-.57-3.4-.19-1.2-.38-2.5-.57-3.9-.19-1.4-.38-2.9-.57-4.5-.19-1.6-.38-3.3-.57-5.1h3.42c.19 1.8.38 3.5.57 5.1.19 1.6.38 3.1.57 4.5.19 1.4.38 2.7.57 3.9.19 1.2.38 2.3.57 3.3.19 1 .38 1.9.57 2.7.19.8.38 1.5.57 2.1.19.6.38 1.1.57 1.5.19.4.38.7.57.9.19.2.38.3.57.3.19 0 .38-.1.57-.3.19-.2.38-.5.57-.9.19-.4.38-.9.57-1.5.19-.6.38-1.3.57-2.1.19-.8.38-1.7.57-2.7.19-1 .38-2.1.57-3.3.19-1.2.38-2.5.57-3.9.19-1.4.38-2.9.57-4.5.19-1.6.38-3.3.57-5.1h3.42c-.19 1.8-.38 3.5-.57 5.1z" />
              </svg>
              JOIN TELEGRAM NOW
            </Link>
          </Button>
        </div>
      </section>

      <section className="container relative z-20 px-4 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <StatCard number="15K+" label="Active Traders" />
          <StatCard number="98%" label="Accuracy Rate" />
          <StatCard number="4-6" label="Daily Calls" />
          <StatCard number="24/7" label="Expert Support" />
        </div>
      </section>

      <section id="features" className="container space-y-12 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose PRO TRADER HUB?</h2>
          <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
            Join India's most trusted trading community with a proven track record of success. Our SEBI-certified
            analysts provide institutional-grade insights previously available only to hedge funds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<ChartPie className="h-6 w-6" />}
            title="Market Coverage"
            items={[
              "NIFTY & BANKNIFTY Options with 98% accuracy",
              "FINNIFTY & SENSEX Futures with precise entry/exit",
              "High-Probability Intraday Calls with risk management",
              "Swing Trading Opportunities with 3:1 risk-reward",
              "F&O Stock Recommendations with sector analysis",
            ]}
            stats={{
              value: "92% Win Rate",
              label: "Last 100 NIFTY Option Calls",
            }}
          />

          <FeatureCard
            icon={<Medal className="h-6 w-6" />}
            title="Premium Benefits"
            items={[
              "4-6 Accurate Calls Daily with detailed analysis",
              "SEBI Certified Analysts with 15+ years experience",
              "98%+ Accuracy Rate verified by third parties",
              "Dedicated Loss Recovery Plans with personalized support",
              "Free 800+ Page Trading Bible with proprietary strategies",
            ]}
            stats={{
              value: "₹1.2L Avg. Monthly Profit",
              label: "For members following our system",
            }}
          />

          <FeatureCard
            icon={<Zap className="h-6 w-6" />}
            title="Exclusive Tools"
            items={[
              "Real-time Market Alerts with instant notifications",
              "Technical Chart Analysis with proprietary indicators",
              "Option Chain Decoder with volatility insights",
              "Weekly Masterclass Webinars with live Q&A sessions",
              "Private Trading Community with mentor support",
            ]}
            stats={{
              value: "15 min Early Access",
              label: "To institutional-grade market data",
            }}
          />
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-lg border bg-muted/50 p-6">
          <div>
            <h3 className="text-xl font-bold text-primary">Exclusive Premium Membership</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our premium members receive priority access to all trading signals, personalized strategy sessions, 
              and exclusive webinars with market experts. Join the elite group of traders who consistently outperform the market.
            </p>
          </div>
        </div>
      </section>

      <section id="market-insights" className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Market Insights & Updates</h2>
            <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
            <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
              Our team of analysts provides comprehensive market insights across various trading styles and timeframes.
              These actionable insights help you make informed trading decisions in any market condition.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MarketInsightCard
              icon={<ChartLineUp className="h-6 w-6" />}
              title="Daily Market Pulse"
              description="Stay ahead with our pre-market analysis identifying key support/resistance levels and potential breakout opportunities in NIFTY and BANKNIFTY."
              features={[
                { label: "Focus", value: "NIFTY, BANKNIFTY, Key Stocks" },
                { label: "Highlights", value: "Support/Resistance, Volume Trends" },
                { label: "Frequency", value: "Daily Updates (8:30 AM)" },
                { label: "Recent Win", value: "NIFTY 21800 PUT +320% in 2 days" },
              ]}
            />

            <MarketInsightCard
              icon={<Briefcase className="h-6 w-6" />}
              title="Sector Spotlight"
              description="Our sector analysis identifies emerging trends before they become mainstream. Recent spotlight on PSU Banks delivered 45% returns in just 3 months."
              features={[
                { label: "Focus", value: "IT, Pharma, Banking, and more" },
                { label: "Analysis", value: "Technical & Fundamental" },
                { label: "Frequency", value: "Weekly Insights" },
                { label: "Recent Win", value: "Pharma sector rotation +28%" },
              ]}
            />

            <MarketInsightCard
              icon={<Globe className="h-6 w-6" />}
              title="Global Trends Watch"
              description="Our global market analysis predicted the recent tech rally based on US Fed policy shifts, helping members capitalize on the NASDAQ-linked opportunities."
              features={[
                { label: "Focus", value: "Global Indices, Currency Movements" },
                { label: "Analysis", value: "Geopolitical & Economic Factors" },
                { label: "Frequency", value: "Real-Time Updates" },
                { label: "Recent Win", value: "USD/INR strategy +15% in 2 weeks" },
              ]}
            />

            <MarketInsightCard
              icon={<BarChart className="h-6 w-6" />}
              title="Intraday Trading Strategies"
              description="Our proprietary intraday strategies combine price action, volume analysis, and market internals to identify high-probability setups with strict risk management."
              features={[
                { label: "Focus", value: "NIFTY, BANKNIFTY Options" },
                { label: "Timeframe", value: "Intraday (5-15 min charts)" },
                { label: "Risk:Reward", value: "Minimum 1:2 ratio" },
                { label: "Recent Win", value: "BANKNIFTY scalping strategy +45 points" },
              ]}
            />

            <MarketInsightCard
              icon={<Calendar className="h-6 w-6" />}
              title="Earnings Season Insight"
              description="Our earnings analysis correctly predicted the recent IT sector outperformance, allowing members to position ahead of the major moves in TCS, Infosys, and HCL Tech."
              features={[
                { label: "Focus", value: "Quarterly Earnings Reports" },
                { label: "Highlights", value: "Impact Analysis, Stock Price Movements" },
                { label: "Frequency", value: "Earnings Season Updates" },
                { label: "Recent Win", value: "Pre-earnings IT sector strategy +18%" },
              ]}
            />

            <MarketInsightCard
              icon={<UserSecret className="h-6 w-6" />}
              title="Swing Trading Opportunities"
              description="Our swing trading approach combines technical setups with fundamental catalysts, allowing traders to capture significant moves while maintaining day jobs."
              features={[
                { label: "Focus", value: "Multi-day to Multi-week Positions" },
                { label: "Analysis", value: "Chart Patterns, Sector Rotation" },
                { label: "Holding Period", value: "3-15 Trading Days" },
                { label: "Recent Win", value: "PSU Banking swing trade +32%" },
              ]}
            />

            <MarketInsightCard
              icon={<AlertTriangle className="h-6 w-6" />}
              title="Volatility Insights"
              description="Our volatility analysis correctly predicted the recent market correction, allowing members to hedge portfolios and even profit from the downside move."
              features={[
                { label: "Focus", value: "Volatility Events, Market Swings" },
                { label: "Analysis", value: "VIX, Option Chain Analysis" },
                { label: "Strategy", value: "Hedging, Volatility Trading" },
                { label: "Recent Win", value: "VIX spike prediction saved 15% drawdown" },
              ]}
            />

            <MarketInsightCard
              icon={<Target className="h-6 w-6" />}
              title="Options Strategies"
              description="Our options specialists design custom strategies for different market conditions, from directional plays to income generation through premium selling."
              features={[
                { label: "Focus", value: "Index & Stock Options" },
                { label: "Strategies", value: "Spreads, Iron Condors, Strangles" },
                { label: "Risk Profile", value: "Defined-Risk Strategies" },
                { label: "Recent Win", value: "NIFTY Iron Condor +12% in 5 days" },
              ]}
            />

            <MarketInsightCard
              icon={<Percent className="h-6 w-6" />}
              title="Positional Investment Ideas"
              description="Our fundamental research team identifies undervalued companies with strong growth potential, perfect for investors looking for medium to long-term capital appreciation."
              features={[
                { label: "Focus", value: "Fundamentally Strong Companies" },
                { label: "Timeframe", value: "3-12 Months" },
                { label: "Analysis", value: "Financial Metrics, Growth Catalysts" },
                { label: "Recent Win", value: "Small-cap portfolio +65% in 9 months" },
              ]}
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-12 md:py-16 lg:py-20">
        <div className="container space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Trader Success Stories</h2>
            <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
            <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
              Real results from real traders who have transformed their trading journey with our signals and education.
              These are verified members who consistently implement our strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              content="I went from losing ₹50,000 monthly to consistent ₹1.5L+ profits after joining PRO TRADER HUB. Their BANKNIFTY calls are phenomenally accurate - 18 winning trades in my last 20! The risk management guidelines completely changed my approach."
              author="Sanjay K."
              position="Options Trader, Mumbai"
              initials="SK"
              verified={true}
              tradingStats={{
                profit: "₹1.5L+/mo",
                winRate: "90%",
                period: "6 months",
              }}
            />

            <TestimonialCard
              content="The loss recovery team helped me turn around a disastrous month. Their special reversal signals helped recover my ₹75k loss and end up with ₹1.2L profit. Worth every penny! I now strictly follow their position sizing rules and never overtrade."
              author="Priya M."
              position="Swing Trader, Delhi"
              initials="PM"
              verified={true}
              tradingStats={{
                profit: "₹1.2L",
                winRate: "82%",
                period: "3 months",
              }}
            />

            <TestimonialCard
              content="As a beginner, I was nervous about options trading. The education materials and hand-holding from mentors gave me the confidence to grow my account from ₹25k to ₹2.8L in 7 months. Their step-by-step approach made complex strategies simple."
              author="Amit R."
              position="New Trader, Bangalore"
              initials="AR"
              tradingStats={{
                profit: "₹2.55L",
                winRate: "78%",
                period: "7 months",
              }}
            />

            <TestimonialCard
              content="I'm a full-time IT professional with limited time for trading. Their swing trading calls fit perfectly with my schedule. I just check signals in the evening, place orders, and let the trades work. Made ₹87,000 last month with just 30 minutes daily."
              author="Vikram S."
              position="IT Professional, Pune"
              initials="VS"
              verified={true}
              tradingStats={{
                profit: "₹87K/mo",
                winRate: "85%",
                period: "4 months",
              }}
            />

            <TestimonialCard
              content="Their option chain analysis is next level! I was skeptical at first, but their NIFTY option strategies have been consistently profitable. The weekly masterclass on advanced options helped me understand the Greeks and improve my trade selection."
              author="Neha T."
              position="Options Specialist, Chennai"
              initials="NT"
              tradingStats={{
                profit: "₹2.1L",
                winRate: "76%",
                period: "5 months",
              }}
            />

            <TestimonialCard
              content="After blowing two trading accounts, I was ready to quit. Their risk management system and psychology coaching changed everything. Now I'm consistently profitable and trading with discipline. The community support during drawdowns is invaluable."
              author="Rajesh G."
              position="Full-time Trader, Hyderabad"
              initials="RG"
              verified={true}
              tradingStats={{
                profit: "₹3.2L",
                winRate: "81%",
                period: "8 months",
              }}
            />
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-lg border bg-muted/50 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary">Join Our Success Stories</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  These results are from traders who consistently follow our system and implement proper risk
                  management. While individual results may vary, our proven strategies have helped thousands achieve
                  their trading goals.
                </p>
              </div>
              <Button asChild className="bg-primary text-white hover:bg-primary/90">
                <Link href="#join">Join Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="container space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Premium Trading Education</h2>
            <div className="mt-2 h-1 w-20 bg-secondary mx-auto"></div>
            <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
              Beyond signals, we provide comprehensive education to help you become a self-sufficient trader. Our
              structured learning path takes you from basics to advanced strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                  <BookOpen className="h-6 w-6" />
                  Trading Fundamentals
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Master the essentials of technical analysis, chart patterns, and market structure to build a solid
                  foundation.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Chart Reading</span>
                    <span className="font-medium text-green-600">12 Modules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Risk Management</span>
                    <span className="font-medium text-green-600">8 Modules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Trading Psychology</span>
                    <span className="font-medium text-green-600">10 Modules</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                  <TrendingUp className="h-6 w-6" />
                  Advanced Strategies
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Learn our proprietary trading systems that have consistently outperformed the market in all
                  conditions.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Price Action Mastery</span>
                    <span className="font-medium text-green-600">15 Modules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Options Strategies</span>
                    <span className="font-medium text-green-600">18 Modules</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Institutional Trading</span>
                    <span className="font-medium text-green-600">12 Modules</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                  <Clock className="h-6 w-6" />
                  Live Training
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Join our weekly live sessions where we analyze markets in real-time and answer your specific
                  questions.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Market Analysis</span>
                    <span className="font-medium text-green-600">Weekly</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Trade Reviews</span>
                    <span className="font-medium text-green-600">Bi-weekly</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Q&A Sessions</span>
                    <span className="font-medium text-green-600">Monthly</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="join" className="container py-12 md:py-16 lg:py-20">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Limited Free Access!</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg">
              We're opening just 100 spots for free access to our premium trading signals. Join now before we close
              registration!
            </p>
            <CountdownTimer initialSpots={100} />
          </CardContent>
        </Card>
      </section>

      <footer className="bg-gray-900 py-12 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary">PRO TRADER HUB</h3>
              <p className="mb-4 text-sm">
                India's most trusted trading signals provider since 2018. SEBI registered analysts delivering consistent
                results to 15,000+ traders.
              </p>
              <div className="flex space-x-4">
                <Link href="https://t.me/+0mlolh841rk4YjJl" className="rounded-full bg-gray-800 p-2 hover:bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.815-.168.73-.313 1.356-.45 1.881-.139.525-.276.994-.42 1.414-.145.42-.302.705-.49.873-.19.168-.38.22-.57.18-.19-.04-.38-.18-.57-.4-.19-.22-.38-.52-.57-.9-.19-.38-.38-.86-.57-1.44-.19-.58-.38-1.24-.57-2-.19-.76-.38-1.58-.57-2.48-.19-.9-.38-1.88-.57-2.94-.19-1.06-.38-2.2-.57-3.4-.19-1.2-.38-2.5-.57-3.9-.19-1.4-.38-2.9-.57-4.5-.19-1.6-.38-3.3-.57-5.1h3.42c.19 1.8.38 3.5.57 5.1.19 1.6.38 3.1.57 4.5.19 1.4.38 2.7.57 3.9.19 1.2.38 2.3.57 3.3.19 1 .38 1.9.57 2.7.19.8.38 1.5.57 2.1.19.6.38 1.1.57 1.5.19.4.38.7.57.9.19.2.38.3.57.3.19 0 .38-.1.57-.3.19-.2.38-.5.57-.9.19-.4.38-.9.57-1.5.19-.6.38-1.3.57-2.1.19-.8.38-1.7.57-2.7.19-1 .38-2.1.57-3.3.19-1.2.38-2.5.57-3.9.19-1.4.38-2.9.57-4.5.19-1.6.38-3.3.57-5.1h3.42c-.19 1.8-.38 3.5-.57 5.1z" />
                  </svg>
                </Link>
                <Link href="#" className="rounded-full bg-gray-800 p-2 hover:bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </Link>
                <Link href="#" className="rounded-full bg-gray-800 p-2 hover:bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </Link>
                <Link href="#" className="rounded-full bg-gray-800 p-2 hover:bg-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#home" className="flex items-center hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="flex items-center hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#strategies" className="flex items-center hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M3 3h18v18H3z" />
                      <path d="M9.5 9.5 21 21" />
                      <path d="M9.5 14.5 21 3" />
                      <path d="M4.5 4.5 16 16" />
                    </svg>
                    Trading Strategies
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="flex items-center hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#join" className="flex items-center hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Free Membership
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  support@tradingstrategies.store
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.815-.168.73-.313 1.356-.45 1.881-.139.525-.276.994-.42 1.414-.145.42-.302.705-.49.873-.19.168-.38.22-.57.18-.19-.04-.38-.18-.57-.4-.19-.22-.38-.52-.57-.9-.19-.38-.38-.86-.57-1.44-.19-.58-.38-1.24-.57-2-.19-.76-.38-1.58-.57-2.48-.19-.9-.38-1.88-.57-2.94-.19-1.06-.38-2.2-.57-3.4-.19-1.2-.38-2.5-.57-3.9-.19-1.4-.38-2.9-.57-4.5-.19-1.6-.38-3.3-.57-5.1h3.42c.19 1.8.38 3.5.57 5.1.19 1.6.38 3.1.57 4.5.19 1.4.38 2.7.57 3.9.19 1.2.38 2.3.57 3.3.19 1 .38 1.9.57 2.7.19.8.38 1.5.57 2.1.19.6.38 1.1.57 1.5.19.4.38.7.57.9.19.2.38.3.57.3.19 0 .38-.1.57-.3.19-.2.38-.5.57-.9.19-.4.38-.9.57-1.5.19-.6.38-1.3.57-2.1.19-.8.38-1.7.57-2.7.19-1 .38-2.1.57-3.3.19-1.2.38-2.5.57-3.9.19-1.4.38-2.9.57-4.5.19-1.6.38-3.3.57-5.1h3.42c-.19 1.8-.38 3.5-.57 5.1z" />
                  </svg>
                  t.me/protraderhub
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 9220991090 (10AM-6PM)
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 rounded-lg bg-gray-800 p-4 text-xs text-gray-400">
            <strong>Disclaimer:</strong> Trading in stock markets involves substantial risk of loss and is not suitable
            for every investor. The content provided is for educational purposes only. Past performance is not
            indicative of future results. PRO TRADER HUB and its analysts are not SEBI registered investment advisors.
            We do not provide personalized investment advice. Please consult with a certified financial planner before
            making any trading decisions.
          </div>
          <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 PRO TRADER HUB. All Rights Reserved. | tradingstrategies.store
          </div>
        </div>
      </footer>
    </div>
  )
}

