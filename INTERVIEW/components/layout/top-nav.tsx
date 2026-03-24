'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun, LogOut, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export function TopNav() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-16 bg-background border-b border-border z-30 flex items-center justify-between px-6">
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-foreground hover:bg-secondary"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-10 w-10 rounded-full bg-secondary text-foreground hover:bg-secondary/80 font-semibold"
            >
              JD
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile" className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
