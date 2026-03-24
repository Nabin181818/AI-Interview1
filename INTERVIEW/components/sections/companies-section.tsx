import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { companies } from '@/lib/constants'

export function CompaniesSection() {
  return (
    <section id="companies" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Prepare for top companies</h2>
          <p className="text-lg text-foreground/70">Get company-specific interview questions and preparation plans</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.slice(0, 6).map((company, idx) => (
            <Card key={company.id} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{company.name}</h3>
                <p className="text-sm text-foreground/70">{company.role}</p>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-primary mb-3">{company.package}</p>
                <div className="flex flex-wrap gap-2">
                  {company.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-sm text-foreground/60">
                <p>{company.hiringProcess.length} rounds</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
