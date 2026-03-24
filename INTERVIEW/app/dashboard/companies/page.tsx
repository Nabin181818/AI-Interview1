'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { companies } from '@/lib/constants'
import { Search, Filter } from 'lucide-react'

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  // Get all unique skills for filtering
  const allSkills = useMemo(() => {
    const skillSet = new Set<string>()
    companies.forEach(company => {
      company.skills.forEach(skill => skillSet.add(skill))
    })
    return Array.from(skillSet)
  }, [])

  // Filter companies based on search and skills
  const filteredCompanies = useMemo(() => {
    return companies.filter(company => {
      const matchesSearch = 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.role.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesSkill = !selectedSkill || company.skills.includes(selectedSkill)
      
      return matchesSearch && matchesSkill
    })
  }, [searchQuery, selectedSkill])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Companies</h1>
        <p className="text-foreground/70">Browse and prepare for interviews at top tech companies</p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-foreground/50" />
          <Input
            placeholder="Search companies or roles..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Skills Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedSkill === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedSkill(null)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            All Skills
          </Button>
          {allSkills.map((skill) => (
            <Button
              key={skill}
              variant={selectedSkill === skill ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedSkill(skill)}
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCompanies.map((company) => (
          <Link key={company.id} href={`/dashboard/companies/${company.id}`}>
            <Card className="p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer h-full group">
              <div className="space-y-4">
                {/* Company Header */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-sm text-foreground/70">{company.role}</p>
                </div>

                {/* Package */}
                <div>
                  <p className="text-2xl font-bold text-primary">{company.package}</p>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <p className="text-xs text-foreground/60 font-semibold">Required Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {company.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Hiring Process Info */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold text-foreground">{company.hiringProcess.length}</span> rounds • 
                    <span className="font-semibold text-foreground ml-1">{company.interviewQuestions.length}</span> questions
                  </p>
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-foreground/60">No companies found matching your criteria.</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery('')
              setSelectedSkill(null)
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
