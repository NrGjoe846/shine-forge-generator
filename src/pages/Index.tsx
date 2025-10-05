import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Award, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CollectionCard from "@/components/CollectionCard";
import heroImage from "@/assets/hero-jewelry.jpg";
import oxidisedCollection from "@/assets/oxidised-collection.jpg";
import antiTarnishCollection from "@/assets/anti-tarnish-collection.jpg";
import everydayCollection from "@/assets/everyday-collection.jpg";

const Index = () => {
  // Mock product data
  const bestsellers = [
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
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={heroImage}
          alt="Jewelry Collection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6">
              Your Shine,<br />Your Story.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Discover curated collections of premium, anti-tarnish jewelry that won't break the bank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8">
                <Link to="/new-arrivals">Shop New Arrivals</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30">
                <Link to="/collections">Explore Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Handpicked designs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Anti-Tarnish</h3>
              <p className="text-sm text-muted-foreground">Long-lasting shine</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Budget-Friendly</h3>
              <p className="text-sm text-muted-foreground">Affordable luxury</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over ₹999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Featured Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every occasion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CollectionCard
            title="The Oxidised Collection"
            description="Traditional elegance meets modern design"
            image={oxidisedCollection}
            link="/collections/oxidised"
          />
          <CollectionCard
            title="The Anti-Tarnish Collection"
            description="Premium quality that lasts forever"
            image={antiTarnishCollection}
            link="/collections/anti-tarnish"
          />
          <CollectionCard
            title="Everyday Essentials"
            description="Minimalist pieces for daily wear"
            image={everydayCollection}
            link="/collections/everyday"
          />
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Bestsellers</h2>
            <p className="text-lg text-muted-foreground">
              Loved by thousands of customers across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">Real reviews from real customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-soft">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "The quality is amazing! I've been wearing my anti-tarnish earrings for months and they still look brand new. Highly recommended!"
            </p>
            <p className="font-semibold">Priya Sharma</p>
            <p className="text-sm text-muted-foreground">Mumbai</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-soft">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "Beautiful designs at such affordable prices! The oxidised collection is my favorite. Perfect for traditional occasions."
            </p>
            <p className="font-semibold">Ananya Reddy</p>
            <p className="text-sm text-muted-foreground">Bangalore</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-soft">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              "Fast delivery and excellent customer service. The packaging was beautiful too! Will definitely shop again."
            </p>
            <p className="font-semibold">Divya Iyer</p>
            <p className="text-sm text-muted-foreground">Chennai</p>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">#TwinkleShineJewelry</h2>
            <p className="text-lg text-muted-foreground">Join our community of jewelry lovers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-smooth cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-${1611591437281 + i}-460bfbe1220a?w=400`}
                  alt={`Instagram post ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-smooth"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Follow Us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
