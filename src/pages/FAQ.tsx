import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our jewelry, shipping, and policies.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                What is anti-tarnish jewelry and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Anti-tarnish jewelry is coated with a special protective layer that prevents oxidation and keeps your
                jewelry looking new for longer. Our anti-tarnish pieces are designed to maintain their shine and color
                even with regular wear. With proper care, they can last for years without tarnishing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                What is your shipping policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer free shipping across India on all orders over ₹999. For orders below ₹999, a flat shipping fee
                of ₹99 applies. Most orders are processed within 1-2 business days and delivered within 5-7 business days.
                You'll receive a tracking number once your order ships.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                What is your return and exchange policy?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a 7-day easy return and exchange policy. If you're not completely satisfied with your purchase,
                you can return or exchange it within 7 days of delivery. The item must be unused, in its original
                packaging, and in the same condition as received. Please note that custom or personalized items cannot be
                returned.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                How do I care for my jewelry?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                To keep your jewelry looking beautiful: (1) Store pieces separately in soft pouches to prevent scratching,
                (2) Remove jewelry before showering, swimming, or exercising, (3) Apply perfumes and lotions before
                wearing your jewelry, (4) Clean gently with a soft, dry cloth after each wear, (5) Keep away from harsh
                chemicals and extreme temperatures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                Are your products nickel-free and hypoallergenic?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We understand that many people have sensitive skin. Most of our jewelry is nickel-free and
                hypoallergenic, making it safe for people with metal sensitivities. Product descriptions clearly indicate
                materials used. If you have specific allergies, please check the product details or contact us before
                purchasing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                Do you offer cash on delivery (COD)?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer cash on delivery for orders across India. A nominal COD fee of ₹50 applies. You can also
                pay online using credit/debit cards, UPI, net banking, or digital wallets for a seamless checkout
                experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                How can I track my order?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Once your order ships, you'll receive an email with a tracking number and a link to track your package.
                You can also track your order by logging into your account on our website and viewing your order history.
                If you face any issues, our customer support team is always here to help.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card px-6 rounded-lg shadow-soft border-0">
              <AccordionTrigger className="text-left font-semibold">
                Do you offer gift wrapping?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We offer complimentary gift wrapping on all orders. Simply select the gift wrapping option at
                checkout, and we'll beautifully package your jewelry with a personalized message card. Perfect for
                birthdays, anniversaries, or any special occasion.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-muted/50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-heading font-bold mb-3">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our customer support team is here to help you.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
