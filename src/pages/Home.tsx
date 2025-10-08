import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, Zap, Shield, Truck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-steel.jpg";

const Home = () => {
  const highlights = [
    { icon: Shield, text: "Premium Quality TMT Steel" },
    { icon: Building2, text: "Bulk Supplier – All Sizes Available" },
    { icon: Zap, text: "Fast Delivery & Reliable Service" },
    { icon: CheckCircle, text: "Trusted by Builders & Contractors" },
  ];

  return (
    <>
      <SEO
        title="Buy TMT Steel Bars in Bulk"
        description="Trusted supplier of high-quality TMT Steel Bars & Construction Steel Solutions. Bulk supply available in all sizes. Partner for strong foundations & faster construction."
        keywords="TMT Steel Bars, Bulk TMT Steel Supplier, Construction Steel, Buy TMT Bars, Steel for Construction"
        canonicalUrl="https://chunmuntrading.com"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})` }}
        >
          <div className="container mx-auto px-4 text-center text-white z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Your Trusted Partner in <br />TMT Steel Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Bulk Supplier of TMT Steel Bars & Construction Steel – All Sizes Available
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:+919350701974">
                <Button variant="hero" size="lg">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Building Strong Foundations for Tomorrow
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Chunmun Trading Company, we specialize in supplying high-quality TMT steel bars 
                and construction steel solutions. With years of expertise, we serve builders, contractors, 
                and infrastructure developers across India.
              </p>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get in touch today for bulk TMT steel supply at competitive prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="hero" size="lg">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
