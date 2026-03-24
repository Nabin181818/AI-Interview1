import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm text-primary">AI-Powered Interview Preparation</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-slide-up">
          Master Your Tech Interviews with <span className="text-primary">AI</span>
        </h1>
        
        <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
          Get real-time feedback on your interview performance, practice with actual company questions, and learn from expert mentors. Land your dream job at top tech companies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 w-full sm:w-auto">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-border/50">
          <div>
            <p className="text-3xl font-bold text-primary">10K+</p>
            <p className="text-sm text-foreground/60">Students Prepared</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">95%</p>
            <p className="text-sm text-foreground/60">Success Rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-foreground/60">Questions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
