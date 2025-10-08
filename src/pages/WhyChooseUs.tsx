import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CheckCircle, TrendingUp, Shield, Package, Clock, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Source of TMT Steel in India",
      description: "Years of proven track record delivering quality steel products to builders and contractors across the nation.",
    },
    {
      icon: Package,
      title: "Bulk Supplier – All Sizes Available",
      description: "Comprehensive inventory with all standard sizes from 8mm to 32mm, ready for immediate dispatch.",
    },
    {
      icon: CheckCircle,
      title: "High-Strength, Corrosion-Resistant Steel",
      description: "Premium quality TMT bars that meet IS 1786 standards, ensuring durability and structural integrity.",
    },
    {
      icon: Clock,
      title: "Faster, Ready-to-Build Solutions",
      description: "Pre-engineered steel frames and solutions that significantly reduce construction time and labor costs.",
    },
    {
      icon: TrendingUp,
      title: "Partnering for Growth & Progress",
      description: "We grow with your business, offering scalable solutions and consistent supply for projects of any size.",
    },
    {
      icon: Handshake,
      title: "Customer-First Service",
      description: "Dedicated support team ensuring smooth ordering, timely delivery, and after-sales assistance.",
    },
  ];

  const stats = [
    { number: "1000+", label: "Successful Projects" },
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Years Combined Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <>
      <SEO
        title="Why Choose Chunmun Trading Company | Best TMT Steel Supplier"
        description="Partner with Chunmun Trading Company for trusted TMT Steel supply. Bulk availability, precision steel, and customer-first service for stronger foundations."
        keywords="Best TMT Steel Supplier, Bulk Steel Supply, Quality TMT Bars, Trusted Steel Supplier India"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Choose Chunmun Trading Company?
              </h1>
              <p className="text-xl text-muted-foreground">
                Your partner in building stronger, safer, and more reliable structures
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border"
                  >
                    <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Guarantee</h3>
                  <p className="text-muted-foreground">
                    Every TMT bar undergoes rigorous quality testing. We ensure each product meets or exceeds 
                    industry standards for strength, ductility, and corrosion resistance.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Timely Delivery</h3>
                  <p className="text-muted-foreground">
                    We understand construction timelines are critical. Our efficient logistics network ensures 
                    your steel reaches the site on time, every time.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    Bulk supply capabilities and strong supplier relationships allow us to offer the best 
                    prices without compromising on quality.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Consultation</h3>
                  <p className="text-muted-foreground">
                    Our experienced team provides technical guidance to help you choose the right steel 
                    grade and specifications for your specific project needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-primary-foreground shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Join hundreds of satisfied builders and contractors who trust us for their steel needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Get Started Today
                  </Button>
                </Link>
                <a href="tel:+919350701974">
                  <Button variant="hero" size="lg">
                    Call +91 9350701974
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WhyChooseUs;
