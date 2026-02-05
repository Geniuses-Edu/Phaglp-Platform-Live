"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { navigation } from "@/config/site"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-primary/10 border border-primary/20 rounded-2xl shadow-lg shadow-primary/5">
            <div className="px-6 py-3">
              <div className="flex justify-between items-center h-14">
                <Logo size="lg" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-primary/10 border border-primary/20 rounded-2xl shadow-lg shadow-primary/5">
          <div className="px-6 py-3">
            <div className="flex justify-between items-center h-14">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Logo size="lg" />
              </div>

              {/* Desktop Navigation new */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  {navigation.map((item) => (
                    <div key={item.label} className="relative group">
                      <Link
                        href={item.href}
                        className="text-foreground/80 hover:text-foreground hover:bg-primary/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center"
                        onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.label}
                        {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                      </Link>

                      {item.children && (
                        <div
                          className={cn(
                            "absolute left-0 mt-2 w-48 backdrop-blur-md bg-card border border-border rounded-xl shadow-lg py-1 z-50 transition-all duration-200",
                            activeDropdown === item.label ? "opacity-100 visible" : "opacity-0 invisible",
                          )}
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors duration-200 mx-1 rounded-lg"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-3">
                <ThemeToggle />
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-secondary">
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg shadow-primary/25">
                  Get Started
                </Button>
              </div>

              {/* Mobile menu button and theme toggle */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="hover:bg-primary/10"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-4 pb-3 space-y-1 border-t border-border mt-3">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className="text-foreground/80 hover:text-foreground hover:bg-primary/10 block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="ml-4 space-y-1 mt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="text-foreground/70 hover:text-foreground hover:bg-primary/10 block px-4 py-2 rounded-lg text-sm transition-all duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full text-foreground/80 hover:text-foreground hover:bg-secondary"
                    >
                      Sign In
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg shadow-primary/25">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
