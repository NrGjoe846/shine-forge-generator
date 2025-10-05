import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollectionCard from "@/components/CollectionCard";
import oxidisedCollection from "@/assets/oxidised-collection.jpg";
import antiTarnishCollection from "@/assets/anti-tarnish-collection.jpg";
import everydayCollection from "@/assets/everyday-collection.jpg";

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold mb-4">Our Collections</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated jewelry collections, each designed to celebrate your unique style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <CollectionCard
              title="The Oxidised Collection"
              description="Traditional elegance meets modern design with our oxidised silver pieces"
              image={oxidisedCollection}
              link="/collections/oxidised"
            />
            <CollectionCard
              title="The Anti-Tarnish Collection"
              description="Premium quality jewelry that maintains its shine for years"
              image={antiTarnishCollection}
              link="/collections/anti-tarnish"
            />
            <CollectionCard
              title="Everyday Essentials"
              description="Minimalist, versatile pieces perfect for daily wear"
              image={everydayCollection}
              link="/collections/everyday"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
