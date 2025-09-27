import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tractor, Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/browse", label: "Browse Equipment" },
    { path: "/list", label: "List Equipment" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Tractor className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">KrishiRent</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="text-sm"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    className="w-full justify-start text-sm"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;