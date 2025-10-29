import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import CartDrawer from "./CartDrawer";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-soft">
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p className="font-medium">Free Shipping on Orders Over ₹999 | 10% Off on First Order - Use Code: FIRST10</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-card">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-smooth">Home</Link>
                <Link to="/shop" className="text-lg font-medium hover:text-primary transition-smooth">Shop</Link>
                <Link to="/collections" className="text-lg font-medium hover:text-primary transition-smooth">Collections</Link>
                <Link to="/new-arrivals" className="text-lg font-medium hover:text-primary transition-smooth">New Arrivals</Link>
                <Link to="/about" className="text-lg font-medium hover:text-primary transition-smooth">About Us</Link>
                <Link to="/contact" className="text-lg font-medium hover:text-primary transition-smooth">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-heading font-bold text-primary">Twinkle Shine</h1>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-smooth">Home</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Shop</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-popover">
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <Link to="/shop?category=earrings" className="block p-3 hover:bg-muted rounded-md transition-smooth">
                          <div className="font-medium">Earrings</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/collections" className="text-sm font-medium hover:text-primary transition-smooth">Collections</Link>
            <Link to="/new-arrivals" className="text-sm font-medium hover:text-primary transition-smooth">New Arrivals</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-smooth">About Us</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-smooth">Contact</Link>
          </nav>

          <div className="flex items-center space-x-2">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40"
              />
            </form>
            <Link to="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <CartDrawer />
            {user ? (
              <>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="default" size="sm">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
