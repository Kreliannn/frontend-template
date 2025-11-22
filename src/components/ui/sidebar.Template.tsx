"use client"
import Link from "next/link"
import { Calendar, Home, Building, Search, UserPlus2, User, FileText, BarChart3, Building2, LogOut, Menu, X, MenuIcon, Receipt, Recycle, Activity } from "lucide-react"
import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Dashboard", url: "/pages/admin/home", icon: Home },
  { title: "Employee", url: "/pages/admin/addEmployee", icon: UserPlus2 },
  { title: "Branch", url: "/pages/admin/addBranch", icon: Building },
  { title: "Products", url: "/pages/admin/products", icon: MenuIcon },
  { title: "Transactions", url: "/pages/admin/transactions", icon: Receipt },
  { title: "Activities", url: "/pages/admin/activities", icon: Activity },
  { title: "Waste", url: "/pages/admin/waste", icon: Recycle },
  { title: "Shift", url: "/pages/admin/shift", icon: Calendar },
]

const accountItems = [
  { title: "Logout", url: "/", icon: LogOut }
]

interface AppSidebarProps {
  className?: string
}

export function TestSideBar({ className }: AppSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden bg-white text-black p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 border-b">
        <div className="flex items-center gap-3">
          <div className="aspect-square size-8 overflow-hidden rounded-lg">
            <img src="/web/logo.jpg" alt="Logo" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">Admin</span>
            <span className="text-xs text-gray-500">xxxx</span>
          </div>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-20" onClick={closeMobileMenu}>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="pt-20 px-4">
              <div className="mb-6">
                <h3 className="text-gray-700 text-sm font-medium mb-3">Section</h3>
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="absolute bottom-6 left-4 right-4">
                {accountItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-3 py-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <Sidebar className={`hidden lg:flex bg-white border-r ${className}`}>
        {/* Header */}
        <SidebarHeader className="bg-white border-b">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="hover:bg-gray-100">
                <a href="/" className="font-semibold">
                  <div className="aspect-square size-8 overflow-hidden rounded-lg">
                    <img src="/web/logo.jpg" alt="Logo" className="object-cover w-full h-full rounded-lg" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-black">Admin</span>
                    <span className="truncate text-xs text-gray-500">xxxx</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* Navigation */}
        <SidebarContent className="bg-white">
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-700">Section</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="text-black hover:bg-gray-100">
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter className="bg-white border-t">
          <SidebarMenu>
            {accountItems.map((item) => (
              <SidebarMenuItem key={item.title} className="text-black">
                <SidebarMenuButton asChild className="hover:bg-gray-100">
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>
    </>
  )
}
