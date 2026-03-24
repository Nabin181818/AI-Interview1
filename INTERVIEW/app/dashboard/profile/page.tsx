import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Mail, Phone, MapPin, Code, Clock } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Profile Settings</h1>
        <p className="text-foreground/70">Manage your account and interview preparation preferences</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* Personal Info Tab */}
        <TabsContent value="personal" className="space-y-6">
          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Personal Information</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <Input defaultValue="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <Input defaultValue="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" defaultValue="john@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input type="tel" defaultValue="+1 234 567 8900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                  <Input defaultValue="San Francisco, CA" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-secondary border border-border text-foreground"
                  rows={4}
                  defaultValue="Software engineer passionate about learning and growing. Currently preparing for tech interviews."
                />
              </div>

              <Button className="bg-primary hover:bg-primary/90">Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-6">
          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h2>
            
            <div className="space-y-6">
              {/* Current Skills */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Your Skills</label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'TypeScript', 'Python', 'SQL'].map((skill) => (
                    <Badge key={skill} variant="default" className="gap-2">
                      {skill}
                      <button className="hover:text-destructive">×</button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Add a new skill..." />
                  <Button variant="outline">Add</Button>
                </div>
              </div>

              {/* Skills to Learn */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Skills to Learn</label>
                <div className="space-y-2">
                  {['System Design', 'Kubernetes', 'AWS', 'GraphQL'].map((skill) => (
                    <div key={skill} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
                      <span className="text-foreground">{skill}</span>
                      <Button size="sm" variant="outline">Learn</Button>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">Save Skills</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences" className="space-y-6">
          <Card className="p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Preferences</h2>
            
            <div className="space-y-6">
              {/* Interview Preferences */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Interview Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Preferred Interview Type</p>
                        <p className="text-sm text-foreground/60">System Design</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Change</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Session Duration</p>
                        <p className="text-sm text-foreground/60">60 minutes</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">Change</Button>
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Notifications</h3>
                <div className="space-y-3">
                  {['Email reminders for scheduled interviews', 'Weekly progress reports', 'Mentor availability updates'].map((notification) => (
                    <label key={notification} className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-secondary/50">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-foreground">{notification}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">Save Preferences</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
