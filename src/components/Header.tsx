import { Search, ShoppingBag, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-soft">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p className="font-medium">Free Shipping on Orders Over ₹999 | 10% Off on First Order - Use Code: FIRST10</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-card">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-smooth">
                  Home
                </Link>
                <Link to="/shop" className="text-lg font-medium hover:text-primary transition-smooth">
                  Shop
                </Link>
                <Link to="/collections" className="text-lg font-medium hover:text-primary transition-smooth">
                  Collections
                </Link>
                <Link to="/new-arrivals" className="text-lg font-medium hover:text-primary transition-smooth">
                  New Arrivals
                </Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary transition-smooth">
                  About Us
                </Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary transition-smooth">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-heading font-bold text-primary">Twinkle Shine</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-smooth">
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Shop</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-popover">
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <Link to="/shop?category=earrings" className="block p-3 hover:bg-muted rounded-md transition-smooth">
                          <div className="font-medium">Earrings</div>
                          <div className="text-sm text-muted-foreground">Studs, Hoops, Jhumkas & More</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/shop?category=necklaces" className="block p-3 hover:bg-muted rounded-md transition-smooth">
                          <div className="font-medium">Necklaces</div>
                          <div className="text-sm text-muted-foreground">Pendants, Chains & Statement Pieces</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/shop?category=bracelets" className="block p-3 hover:bg-muted rounded-md transition-smooth">
                          <div className="font-medium">Bracelets & Bangles</div>
                          <div className="text-sm text-muted-foreground">Elegant Wrist Wear</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/shop?category=rings" className="block p-3 hover:bg-muted rounded-md transition-smooth">
                          <div className="font-medium">Rings</div>
                          <div className="text-sm text-muted-foreground">Delicate & Bold Designs</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/collections" className="text-sm font-medium hover:text-primary transition-smooth">
              Collections
            </Link>
            <Link to="/new-arrivals" className="text-sm font-medium hover:text-primary transition-smooth">
              New Arrivals
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-smooth">
              About Us
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-smooth">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
