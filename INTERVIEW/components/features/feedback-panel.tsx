'use client'

import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Zap, MessageSquare, AlertCircle } from 'lucide-react'

interface FeedbackPanelProps {
  confidenceScore?: number
  communicationScore?: number
  technicalScore?: number
}

export function FeedbackPanel({
  confidenceScore = 75,
  communicationScore = 82,
  technicalScore = 68,
}: FeedbackPanelProps) {
  const improvements = [
    'Could have mentioned edge cases',
    'Explain trade-offs more clearly',
    'Practice time management',
  ]

  const strengths = [
    'Clear explanation',
    'Good coding structure',
  ]

  return (
    <div className="space-y-4">
      {/* Scores Section */}
      <Card className="p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Performance Metrics</h3>
        
        <div className="space-y-6">
          {/* Confidence Score */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Confidence</span>
              </div>
              <span className="text-sm font-bold text-primary">{confidenceScore}%</span>
            </div>
            <Progress value={confidenceScore} className="h-2" />
          </div>

          {/* Communication Score */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Communication</span>
              </div>
              <span className="text-sm font-bold text-primary">{communicationScore}%</span>
            </div>
            <Progress value={communicationScore} className="h-2" />
          </div>

          {/* Technical Score */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">Technical</span>
              </div>
              <span className="text-sm font-bold text-primary">{technicalScore}%</span>
            </div>
            <Progress value={technicalScore} className="h-2" />
          </div>
        </div>
      </Card>

      {/* Strengths */}
      <Card className="p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">What Went Well</h3>
        <div className="space-y-2">
          {strengths.map((strength, idx) => (
            <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-green-500/10 border border-green-500/20">
              <Badge variant="outline" className="text-green-600 border-green-500/50 mt-0.5 flex-shrink-0">✓</Badge>
              <span className="text-sm text-foreground">{strength}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Improvements */}
      <Card className="p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Areas for Improvement</h3>
        <div className="space-y-2">
          {improvements.map((improvement, idx) => (
            <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <Badge variant="outline" className="text-amber-600 border-amber-500/50 mt-0.5 flex-shrink-0">!</Badge>
              <span className="text-sm text-foreground">{improvement}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Overall Score */}
      <Card className="p-6 border border-border bg-primary/5">
        <div className="text-center">
          <p className="text-sm text-foreground/60 mb-2">Overall Score</p>
          <p className="text-4xl font-bold text-primary mb-2">
            {Math.round((confidenceScore + communicationScore + technicalScore) / 3)}%
          </p>
          <p className="text-sm text-foreground/70">
            {Math.round((confidenceScore + communicationScore + technicalScore) / 3) >= 80
              ? 'Great job! You\'re interview-ready!'
              : 'Keep practicing to improve your performance'}
          </p>
        </div>
      </Card>
    </div>
  )
}
