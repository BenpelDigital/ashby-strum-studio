import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Guitar, Music, Phone } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Guitar className="h-8 w-8 text-guitar-wood" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Ashby Guitar Tuition</h1>
                <p className="text-sm text-muted-foreground">with Gary Crosby</p>
              </div>
            </Link>

            {/* Contact Info */}
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

          {/* Navigation */}
          <nav className="flex space-x-8 pb-4">
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
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-guitar-wood text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Guitar className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Ashby Guitar Tuition</h3>
              </div>
              <p className="text-primary-foreground/80">
                Professional guitar lessons with Gary Crosby in Ashby de la Zouch, 
                serving Leicestershire and Derbyshire.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Tel: 01530 457659</p>
                <p>Mob: 07877 606771</p>
                <p>garydean777@yahoo.co.uk</p>
                <p className="mt-3">
                  Oakham Grove<br />
                  Ashby de la Zouch<br />
                  Leicestershire LE65 2QP
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-1 text-primary-foreground/80">
                <li>Electric & Acoustic Guitar</li>
                <li>Bass Guitar Lessons</li>
                <li>All Styles & Levels</li>
                <li>Music Theory</li>
                <li>Ages 9 to 90</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Ashby Guitar Tuition. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}