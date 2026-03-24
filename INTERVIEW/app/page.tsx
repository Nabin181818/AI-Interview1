import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Zap, Users, BookOpen } from 'lucide-react'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { CompaniesSection } from '@/components/sections/companies-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">IP</span>
            </div>
            <span className="font-bold text-foreground">Interview Prep Pro</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">Features</Link>
            <Link href="#companies" className="text-foreground/70 hover:text-foreground transition-colors">Companies</Link>
            <Link href="#testimonials" className="text-foreground/70 hover:text-foreground transition-colors">Success Stories</Link>
          </div>

          <Link href="/dashboard">
            <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Companies Section */}
      <CompaniesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to ace your interviews?</h2>
          <p className="text-lg text-foreground/70 mb-8">Join thousands of students who landed their dream jobs with Interview Prep Pro</p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Docs</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Guides</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex items-center justify-between text-foreground/60 text-sm">
            <p>&copy; 2024 Interview Prep Pro. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
