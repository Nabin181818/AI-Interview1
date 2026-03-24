import { Card } from '@/components/ui/card'
import { Zap, Users, BarChart3, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'AI Mock Interviews',
    description: 'Practice with realistic AI-powered mock interviews that simulate real interview conditions and provide instant feedback.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Connect with experienced engineers from top tech companies who have successfully cleared interviews.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track your progress with detailed analytics, identify weak areas, and get personalized improvement suggestions.',
  },
  {
    icon: Lightbulb,
    title: 'Company Insights',
    description: 'Access curated interview questions, hiring process information, and preparation roadmaps for specific companies.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-foreground/70">Comprehensive tools designed to help you ace technical interviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
