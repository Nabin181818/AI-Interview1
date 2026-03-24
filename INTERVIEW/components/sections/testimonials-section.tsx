import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Kumar',
    role: 'Software Engineer @ Google',
    content: 'Interview Prep Pro helped me crack Google\'s interview in just 3 months. The AI feedback was incredibly accurate!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sneha Sharma',
    role: 'Product Manager @ Amazon',
    content: 'The company-specific preparation roadmaps are game changers. I felt so confident walking into the interview.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Rahul Patel',
    role: 'SDE @ Microsoft',
    content: 'The mentorship feature connected me with actual engineers from top companies. Worth every penny!',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Success stories from our community</h2>
          <p className="text-lg text-foreground/70">See how our users landed jobs at their dream companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
