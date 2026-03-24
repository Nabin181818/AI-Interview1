import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { roadmapSteps } from '@/lib/constants'
import { CheckCircle2, Circle, Lock, Zap } from 'lucide-react'

const roadmapCategories = [
  {
    id: 1,
    title: 'Data Structures',
    description: 'Master fundamental data structures used in interviews',
    difficulty: 'Beginner',
    estimatedHours: 20,
    progress: 100,
    status: 'completed',
    topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Heaps'],
  },
  {
    id: 2,
    title: 'Algorithms',
    description: 'Learn essential algorithmic techniques and patterns',
    difficulty: 'Intermediate',
    estimatedHours: 30,
    progress: 100,
    status: 'completed',
    topics: ['Sorting', 'Searching', 'Dynamic Programming', 'Greedy', 'Recursion'],
  },
  {
    id: 3,
    title: 'System Design',
    description: 'Design scalable systems and services',
    difficulty: 'Advanced',
    estimatedHours: 40,
    progress: 60,
    status: 'in-progress',
    topics: ['Scalability', 'Load Balancing', 'Caching', 'Databases', 'Message Queues'],
  },
  {
    id: 4,
    title: 'Database Design',
    description: 'Learn SQL and NoSQL database design patterns',
    difficulty: 'Intermediate',
    estimatedHours: 25,
    progress: 40,
    status: 'in-progress',
    topics: ['SQL Basics', 'Indexing', 'Normalization', 'NoSQL', 'Sharding'],
  },
  {
    id: 5,
    title: 'Behavioral Questions',
    description: 'Master answers to common behavioral questions',
    difficulty: 'Beginner',
    estimatedHours: 10,
    progress: 20,
    status: 'locked',
    topics: ['STAR Method', 'Tell me about yourself', 'Conflict Resolution', 'Learning'],
  },
];

export default function RoadmapsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Learning Roadmap</h1>
        <p className="text-foreground/70">Follow our structured learning path to prepare for technical interviews</p>
      </div>

      {/* Overall Progress */}
      <Card className="p-6 border border-border">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-foreground">Overall Progress</h2>
              <span className="text-3xl font-bold text-primary">48%</span>
            </div>
            <Progress value={48} className="h-3" />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-500">2</p>
              <p className="text-sm text-foreground/60">Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-sm text-foreground/60">In Progress</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground/40">1</p>
              <p className="text-sm text-foreground/60">Locked</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Roadmap Steps */}
      <div className="space-y-4">
        {roadmapCategories.map((category, idx) => {
          const isCompleted = category.status === 'completed'
          const isInProgress = category.status === 'in-progress'
          const isLocked = category.status === 'locked'

          return (
            <Card
              key={category.id}
              className={`p-6 border ${
                isLocked
                  ? 'border-border/50 opacity-60'
                  : 'border-border hover:border-primary/50 transition-colors'
              } cursor-pointer group`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Status Icon */}
                    <div className="mt-1">
                      {isCompleted && (
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      )}
                      {isInProgress && (
                        <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                          <Zap className="w-3 h-3 text-primary" />
                        </div>
                      )}
                      {isLocked && <Lock className="w-6 h-6 text-foreground/40" />}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-foreground/70 mb-2">{category.description}</p>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge
                          variant="outline"
                          className={
                            category.difficulty === 'Beginner'
                              ? 'bg-green-500/10 text-green-600 border-green-500/50'
                              : category.difficulty === 'Intermediate'
                              ? 'bg-amber-500/10 text-amber-600 border-amber-500/50'
                              : 'bg-red-500/10 text-red-600 border-red-500/50'
                          }
                        >
                          {category.difficulty}
                        </Badge>
                        <Badge variant="secondary">
                          {category.estimatedHours}h
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Progress Display */}
                  <div className="text-right ml-4">
                    <p className="text-2xl font-bold text-primary">{category.progress}%</p>
                    <p className="text-xs text-foreground/60">complete</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <Progress value={category.progress} className="h-2" />
                </div>

                {/* Topics */}
                <div>
                  <p className="text-xs text-foreground/60 font-semibold mb-2">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-2 pt-2">
                  {!isLocked && (
                    <>
                      <Button
                        className="bg-primary hover:bg-primary/90"
                        disabled={isLocked}
                      >
                        {isCompleted ? 'Review' : isInProgress ? 'Continue' : 'Start'}
                      </Button>
                      {!isCompleted && (
                        <Button variant="outline">View Resources</Button>
                      )}
                    </>
                  )}
                  {isLocked && (
                    <Button variant="outline" disabled>
                      Unlock after previous modules
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Info Card */}
      <Card className="p-6 border border-primary/20 bg-primary/5">
        <h2 className="text-lg font-semibold text-foreground mb-3">How to Use This Roadmap</h2>
        <ul className="space-y-2 text-foreground/70 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">•</span>
            <span>Follow the modules in order - each builds on the previous</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">•</span>
            <span>Complete practice problems for each topic to reinforce learning</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">•</span>
            <span>Take mock interviews after completing each module</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold mt-0.5">•</span>
            <span>Track your progress and adjust pace as needed</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
