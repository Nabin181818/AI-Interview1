import { MockInterviewChat } from '@/components/features/mock-interview-chat'
import { FeedbackPanel } from '@/components/features/feedback-panel'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, RotateCcw } from 'lucide-react'

export default function MockInterviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Mock Interview</h1>
            <p className="text-foreground/70">Practice system design interview question</p>
          </div>
          <Button variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            New Interview
          </Button>
        </div>

        {/* Session Info */}
        <Card className="p-4 bg-primary/5 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-foreground/60 mb-1">Company</p>
              <p className="font-semibold text-foreground">Capgemini</p>
            </div>
            <div>
              <p className="text-xs text-foreground/60 mb-1">Question Type</p>
              <Badge variant="outline">System Design</Badge>
            </div>
            <div>
              <p className="text-xs text-foreground/60 mb-1">Difficulty</p>
              <Badge>Medium</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs text-foreground/60">Duration</p>
                <p className="font-semibold text-foreground">12:45</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px] lg:h-[700px]">
        {/* Chat Section - Takes 2/3 of space on desktop */}
        <div className="lg:col-span-2">
          <MockInterviewChat />
        </div>

        {/* Feedback Panel - Takes 1/3 of space on desktop */}
        <div className="overflow-y-auto">
          <FeedbackPanel
            confidenceScore={75}
            communicationScore={82}
            technicalScore={68}
          />
        </div>
      </div>

      {/* Tips Section */}
      <Card className="p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Interview Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="font-medium text-foreground">During the Interview:</p>
            <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
              <li>Think out loud and explain your approach</li>
              <li>Ask clarifying questions</li>
              <li>Start with a simple solution first</li>
              <li>Discuss trade-offs and optimizations</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-foreground">What Interviewers Look For:</p>
            <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
              <li>Problem-solving approach</li>
              <li>Communication skills</li>
              <li>Technical knowledge</li>
              <li>Ability to handle feedback</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
