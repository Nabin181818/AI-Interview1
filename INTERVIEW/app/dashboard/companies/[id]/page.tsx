'use client'

import { companies } from '@/lib/constants'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2, Clock } from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'

export default function CompanyDetailPage() {
  const params = useParams()
  const companyId = parseInt(params.id as string)
  const company = companies.find(c => c.id === companyId)

  if (!company) {
    notFound()
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">{company.name}</h1>
        <p className="text-lg text-foreground/70">{company.role}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <p className="text-sm text-foreground/60 mb-1">Package</p>
            <p className="text-2xl font-bold text-primary">{company.package}</p>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <p className="text-sm text-foreground/60 mb-1">Rounds</p>
            <p className="text-2xl font-bold text-foreground">{company.hiringProcess.length}</p>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <p className="text-sm text-foreground/60 mb-1">Questions</p>
            <p className="text-2xl font-bold text-foreground">{company.interviewQuestions.length}</p>
          </div>
          <div className="p-4 bg-secondary/50 rounded-lg border border-border">
            <p className="text-sm text-foreground/60 mb-1">Skills Required</p>
            <p className="text-2xl font-bold text-foreground">{company.skills.length}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="process">Hiring Process</TabsTrigger>
          <TabsTrigger value="questions">Interview Questions</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {company.skills.map((skill) => (
                <Badge key={skill} variant="default" className="text-sm py-2 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Company Information</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                Prepare for {company.name}'s interview process with our comprehensive guide. This company is looking for candidates with strong expertise in {company.skills.join(', ')}.
              </p>
              <p>
                The interview process consists of {company.hiringProcess.length} rounds, testing your technical knowledge, problem-solving abilities, and cultural fit.
              </p>
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Next Steps</h2>
            <div className="space-y-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/dashboard/mock-interview">
                  Start Mock Interview
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard/roadmaps">
                  View Preparation Roadmap
                </Link>
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Hiring Process Tab */}
        <TabsContent value="process" className="space-y-6">
          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">Hiring Process Timeline</h2>
            <div className="space-y-6">
              {company.hiringProcess.map((step, idx) => (
                <div key={step.step} className="relative">
                  {/* Connector Line */}
                  {idx < company.hiringProcess.length - 1 && (
                    <div className="absolute left-5 top-12 w-0.5 h-8 bg-primary/20"></div>
                  )}

                  <div className="flex gap-4">
                    {/* Step Circle */}
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <div className="flex items-center gap-2 mt-2 text-foreground/60">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Tips for Success</h2>
            <ul className="space-y-3">
              {[
                'Practice time management - you have limited time for each round',
                'Focus on explaining your thought process clearly',
                'Prepare examples of your previous projects',
                'Research the company thoroughly before the interview',
                'Get a good sleep before the interview day',
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-3 text-foreground/70">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>

        {/* Interview Questions Tab */}
        <TabsContent value="questions" className="space-y-4">
          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Interview Questions</h2>
            <div className="space-y-4">
              {company.interviewQuestions.map((question, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                      <span className="text-sm font-bold text-primary">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {question}
                      </p>
                      <p className="text-xs text-foreground/60 mt-2">Click to view solutions →</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Practice with AI</h2>
            <p className="text-foreground/70 mb-6">
              Get real-time feedback on your answers by practicing these questions with our AI interviewer.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/dashboard/mock-interview">
                Start Practice Session
              </Link>
            </Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
