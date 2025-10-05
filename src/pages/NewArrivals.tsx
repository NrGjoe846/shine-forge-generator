import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const NewArrivals = () => {
  const products = [
    {
      name: "Celestial Moon Earrings",
      price: 699,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      badge: "New"
    },
    {
      name: "Layered Chain Necklace",
      price: 899,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      badge: "New"
    },
    {
      name: "Pearl Statement Ring",
      price: 549,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      badge: "New"
    },
    {
      name: "Geometric Dangle Earrings",
      price: 649,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      badge: "New"
    },
    {
      name: "Infinity Bracelet Set",
      price: 799,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      badge: "New"
    },
    {
      name: "Crystal Butterfly Pendant",
      price: 849,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
      badge: "New"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold mb-4">New Arrivals</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest jewelry designs, fresh from our collections
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewArrivals;
