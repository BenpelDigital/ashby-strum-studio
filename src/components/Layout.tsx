import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Guitar, Music, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Lessons", href: "/lessons" },
  { name: "Reviews", href: "/reviews" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Guitar className="h-6 w-6 sm:h-8 sm:w-8 text-guitar-wood" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-foreground">Ashby Guitar Tuition</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">with Gary Crosby</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-white">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={closeSheet}
                        className={`text-lg font-medium transition-colors hover:text-guitar-wood px-4 py-2 rounded-md ${
                          location.pathname === item.href
                            ? "text-guitar-wood bg-guitar-wood/10"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t pt-4 mt-4">
                      <div className="space-y-2 text-sm text-muted-foreground px-4">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>01530 457659</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Music className="h-4 w-4" />
                          <span>Professional Guitar Lessons</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>01530 457659</span>
              </div>
              <div className="flex items-center space-x-1">
                <Music className="h-4 w-4" />
                <span>Professional Guitar Lessons</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-guitar-wood ${
                  location.pathname === item.href
                    ? "text-guitar-wood border-b-2 border-guitar-wood pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer */}
      <footer className="bg-guitar-wood text-primary-foreground">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Guitar className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Ashby Guitar Tuition</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm sm:text-base">
                Professional guitar lessons with Gary Crosby in Ashby de la Zouch, 
                serving Leicestershire and Derbyshire.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-primary-foreground/80 text-sm sm:text-base">
                <p>Tel: 01530 457659</p>
                <p>Mob: 07877 606771</p>
                <p className="break-all">garydean777@yahoo.co.uk</p>
                <p className="mt-3">
                  Oakham Grove<br />
                  Ashby de la Zouch<br />
                  Leicestershire LE65 2QP
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-1 text-primary-foreground/80 text-sm sm:text-base">
                <li>Electric & Acoustic Guitar</li>
                <li>Bass Guitar Lessons</li>
                <li>All Styles & Levels</li>
                <li>Music Theory</li>
                <li>Ages 9 to 90</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-primary-foreground/60 text-sm">
            <p>&copy; 2024 Ashby Guitar Tuition. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}