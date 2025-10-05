import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-heading font-bold mb-6">Our Story</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born from a passion to make beautiful, high-quality jewelry accessible to every young woman in India,
                Twinkle Shine is more than just a brand—it's a celebration of your unique shine.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-4">Where It All Began</h2>
                <p className="text-muted-foreground mb-4">
                  Twinkle Shine was founded in Chennai with a simple yet powerful vision: to offer premium, trendy jewelry
                  that doesn't compromise on quality or break your budget. We noticed that young women were often forced
                  to choose between affordability and quality—and we decided to change that.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve thousands of customers across India, helping them express their style and
                  celebrate their special moments with jewelry that truly shines.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600"
                  alt="Jewelry craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  Every piece is carefully crafted and quality-checked
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Customer Love</h3>
                <p className="text-sm text-muted-foreground">
                  Your happiness is our top priority
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Anti-tarnish technology for lasting beauty
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a family of jewelry lovers
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
                To empower young women across India to express their unique style with jewelry that combines premium
                quality, timeless design, and affordability. We believe that every woman deserves to shine—every single day.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Unique Designs</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">4.8★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
