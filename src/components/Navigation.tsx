import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart items

  const navLinks = [
    { name: "Women", href: "/women" },
    { name: "Men", href: "/men" },
    { name: "Kids", href: "/kids" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              StyleHub
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="scale-hover">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="scale-hover">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="scale-hover relative">
              <ShoppingBag className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs cart-badge"
                >
                  {cartItems}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="scale-hover"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-soft">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary-soft rounded-md transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-around pt-4 border-t border-border mt-4">
              <Button variant="ghost" size="icon" className="scale-hover">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="scale-hover">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="scale-hover relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs cart-badge"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;