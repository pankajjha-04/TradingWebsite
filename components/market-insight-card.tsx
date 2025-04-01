import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface Feature {
  label: string
  value: string
}

interface MarketInsightCardProps {
  icon: ReactNode
  title: string
  description: string
  features: Feature[]
}

export default function MarketInsightCard({ icon, title, description, features }: MarketInsightCardProps) {
  return (
    <Card className="h-full transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
          {icon}
          {title}
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm">
              <span className="font-semibold">{feature.label}:</span> {feature.value}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

