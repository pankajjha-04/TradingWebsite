import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Award } from "lucide-react"

interface TestimonialCardProps {
  content: string
  author: string
  position: string
  initials: string
  tradingStats?: {
    profit?: string
    winRate?: string
    period?: string
  }
  verified?: boolean
}

export default function TestimonialCard({
  content,
  author,
  position,
  initials,
  tradingStats,
  verified = false,
}: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        {verified && (
          <div className="mb-3 flex items-center gap-1 text-xs font-medium text-green-600">
            <Award className="h-3 w-3" />
            Verified Trader
          </div>
        )}

        <div className="relative mb-6 text-sm italic text-muted-foreground">
          <svg
            className="absolute -left-2 -top-2 h-6 w-6 text-muted-foreground/20"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          {content}
        </div>

        {tradingStats && (
          <div className="mb-4 rounded-md bg-muted p-3">
            <div className="flex items-center gap-2 text-xs font-medium text-green-600">
              <TrendingUp className="h-3 w-3" />
              Trading Performance
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              {tradingStats.profit && (
                <div>
                  <div className="text-sm font-bold">{tradingStats.profit}</div>
                  <div className="text-xs text-muted-foreground">Profit</div>
                </div>
              )}
              {tradingStats.winRate && (
                <div>
                  <div className="text-sm font-bold">{tradingStats.winRate}</div>
                  <div className="text-xs text-muted-foreground">Win Rate</div>
                </div>
              )}
              {tradingStats.period && (
                <div>
                  <div className="text-sm font-bold">{tradingStats.period}</div>
                  <div className="text-xs text-muted-foreground">Period</div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            {initials}
          </div>
          <div>
            <div className="font-medium">{author}</div>
            <div className="text-xs text-muted-foreground">{position}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

