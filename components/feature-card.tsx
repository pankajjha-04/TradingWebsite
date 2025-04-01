import { Card, CardContent } from "@/components/ui/card"
import { Check, TrendingUp } from "lucide-react"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  items: string[]
  stats?: {
    value: string
    label: string
  }
}

export default function FeatureCard({ icon, title, items, stats }: FeatureCardProps) {
  return (
    <Card className="h-full transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
          {icon}
          {title}
        </div>

        {stats && (
          <div className="mb-4 flex items-center gap-2 rounded-md bg-muted p-3">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <div>
              <div className="font-bold text-green-600">{stats.value}</div>
              <div className="text-xs text-muted-foreground">{stats.label}</div>
            </div>
          </div>
        )}

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-xs text-muted-foreground">
          <span className="font-semibold text-primary">Premium Feature:</span> Exclusive access to our proprietary
          trading algorithms and expert analysis.
        </div>
      </CardContent>
    </Card>
  )
}

