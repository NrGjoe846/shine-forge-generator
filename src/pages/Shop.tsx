import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Filter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const products = [
    {
      name: "Elegant Pearl Drop Earrings",
      price: 599,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      badge: "Bestseller"
    },
    {
      name: "Oxidised Jhumka Earrings",
      price: 449,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      badge: "New"
    },
    {
      name: "Gold Plated Chain Bracelet",
      price: 799,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      badge: "Sale"
    },
    {
      name: "Delicate Ring Set (Set of 3)",
      price: 499,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400"
    },
    {
      name: "Statement Necklace",
      price: 1299,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400"
    },
    {
      name: "Minimalist Stud Earrings",
      price: 349,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400"
    },
  ];

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Category</h3>
        <div className="space-y-3">
          {["Earrings", "Necklaces", "Bracelets", "Rings", "Sets"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label htmlFor={category} className="text-sm cursor-pointer">{category}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Collection</h3>
        <div className="space-y-3">
          {["Oxidised", "Anti-Tarnish", "Everyday Essentials", "Watches"].map((collection) => (
            <div key={collection} className="flex items-center space-x-2">
              <Checkbox id={collection} />
              <label htmlFor={collection} className="text-sm cursor-pointer">{collection}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          step={100}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90">Apply Filters</Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-2">Shop All Jewelry</h1>
          <p className="text-muted-foreground">Discover our complete collection of premium jewelry</p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card p-6 rounded-lg shadow-soft">
              <h2 className="text-xl font-semibold mb-6">Filters</h2>
              <FilterSection />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter & Sort */}
            <div className="flex justify-between items-center mb-6 lg:justify-end">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-card overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSection />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select defaultValue="bestselling">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bestselling">Bestselling</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default" className="bg-primary">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
