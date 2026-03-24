'use client'

import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mentors } from '@/lib/constants'
import { Search, Linkedin, MessageSquare, Star } from 'lucide-react'
import Image from 'next/image'

export default function MentorshipPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)

  // Get all unique companies
  const allCompanies = useMemo(() => {
    const companies = new Set<string>()
    mentors.forEach(mentor => companies.add(mentor.company))
    return Array.from(companies).sort()
  }, [])

  // Filter mentors
  const filteredMentors = useMemo(() => {
    return mentors.filter(mentor => {
      const matchesSearch = 
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCompany = !selectedCompany || mentor.company === selectedCompany
      
      return matchesSearch && matchesCompany
    })
  }, [searchQuery, selectedCompany])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Mentorship</h1>
        <p className="text-foreground/70">Connect with experienced engineers from top companies and get personalized guidance</p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
          <Input
            placeholder="Search by name, role, or expertise..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Company Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCompany === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCompany(null)}
          >
            All Companies
          </Button>
          {allCompanies.map((company) => (
            <Button
              key={company}
              variant={selectedCompany === company ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCompany(company)}
            >
              {company}
            </Button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="p-6 border border-border hover:border-primary/50 transition-all">
            <div className="space-y-4">
              {/* Avatar and Name */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">{mentor.name}</h3>
              </div>

              {/* Company and Role */}
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    {mentor.company}
                  </Badge>
                </div>
                <p className="text-sm text-foreground/70">{mentor.role}</p>
              </div>

              {/* Expertise */}
              <div>
                <p className="text-xs text-foreground/60 mb-2 font-semibold">Expertise</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {mentor.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < 4 ? '#6366f1' : '#888'}
                    stroke={i < 4 ? '#6366f1' : '#888'}
                  />
                ))}
                <span className="text-xs text-foreground/60 ml-1">4.0</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90 gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </Button>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href={mentor.linkedIn} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              {/* Availability */}
              <div className="text-center text-xs text-foreground/60 bg-secondary/50 rounded-lg p-2">
                Available for 1-on-1 sessions
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredMentors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-foreground/60">No mentors found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery('')
              setSelectedCompany(null)
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Info Section */}
      <Card className="p-8 border border-primary/20 bg-primary/5">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How Mentorship Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-lg font-semibold text-primary mb-2">1. Connect</p>
              <p className="text-foreground/70">Browse through our network of experienced mentors and find the right match for your needs.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-primary mb-2">2. Learn</p>
              <p className="text-foreground/70">Get personalized guidance on interview preparation, technical skills, and career development.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-primary mb-2">3. Succeed</p>
              <p className="text-foreground/70">Apply your learnings to ace your interviews and land your dream job at top companies.</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
