import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  number: string
  label: string
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <Card className="overflow-hidden bg-primary text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-4 text-center sm:p-6">
        <div className="text-2xl font-bold sm:text-3xl">{number}</div>
        <div className="mt-1 text-xs font-medium text-primary-foreground/80 sm:mt-2 sm:text-sm">{label}</div>
      </CardContent>
    </Card>
  )
}

