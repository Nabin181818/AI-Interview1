import { Sidebar } from './sidebar'
import { TopNav } from './top-nav'

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <TopNav />
        <main className="flex-1 pt-20 pb-8 px-6 md:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}
