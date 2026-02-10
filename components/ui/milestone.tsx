interface MilestoneProps {
  year: string
  title: string
  description: string
  isLast?: boolean
}

export function Milestone({ year, title, description, isLast = false }: MilestoneProps) {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && <div className="absolute left-3 top-0 bottom-0 w-px bg-primary/30" />}
      <div className="absolute left-0 top-0 h-6 w-6 rounded-full border-2 border-primary bg-background" />

      <div className="mb-2 flex items-baseline gap-4">
        <span className="text-lg font-bold text-primary">{year}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
