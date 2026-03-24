'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { dashboardStats, roadmapSteps } from '@/lib/constants'
import { CheckCircle2, TrendingUp, Clock, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-foreground/70">Welcome back! Here's your interview preparation progress.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Total Interviews</p>
              <p className="text-3xl font-bold text-foreground">{dashboardStats.totalInterviews}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">This month</p>
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Completed</p>
              <p className="text-3xl font-bold text-foreground">{dashboardStats.completedInterviews}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">Out of {dashboardStats.totalInterviews}</p>
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Companies</p>
              <p className="text-3xl font-bold text-foreground">{dashboardStats.companiesPrepared}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">Prepared for</p>
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Progress</p>
              <p className="text-3xl font-bold text-foreground">{dashboardStats.progressPercentage}%</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-xs text-foreground/50">Overall</p>
        </Card>
      </div>

      {/* Roadmap & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Preparation Roadmap</h2>
          <div className="space-y-4">
            {roadmapSteps.map((step) => (
              <div key={step.id}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-foreground">{step.title}</p>
                  <span className="text-sm text-foreground/60">{step.progress}%</span>
                </div>
                <Progress value={step.progress} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Upcoming Interviews</h2>
          <div className="space-y-3">
            {dashboardStats.upcomingInterviews.map((interview, idx) => (
              <div key={idx} className="flex items-start justify-between p-3 bg-secondary/50 rounded-lg border border-border/50">
                <div>
                  <p className="font-medium text-foreground">{interview.company}</p>
                  <p className="text-sm text-foreground/60">{interview.role}</p>
                  <p className="text-xs text-foreground/50 mt-1">{new Date(interview.date).toLocaleDateString()}</p>
                </div>
                <Link href="/dashboard/mock-interview">
                  <Button size="sm" variant="outline">Practice</Button>
                </Link>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
