"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, BarChart3, Users, Home } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Team", href: "/dashboard/team", icon: BarChart3 },
  { name: "Users", href: "/dashboard/user", icon: Users }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
        <Home className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-bold">Dashboard</span>
      </div>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn("w-full justify-start gap-2", isActive && "bg-black text-white hover:bg-gray-800")}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-sm mb-2">Parallel Routes</h3>
        <p className="text-xs text-gray-600">
          This demo shows how parallel routes render multiple pages simultaneously in the same layout.
        </p>
      </div>
    </div>
  )
}
