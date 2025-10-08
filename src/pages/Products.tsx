import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction, Frame, Boxes, CheckCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Construction,
      title: "TMT Steel Bars",
      description: "Thermo Mechanically Treated (TMT) Steel Bars for high-strength construction.",
      features: [
        "Available in multiple grades & sizes (8mm to 32mm)",
        "Corrosion-resistant & earthquake-safe",
        "Superior bendability and strength",
        "Meets IS 1786 standards",
      ],
    },
    {
      icon: Frame,
      title: "Ready-to-Build Frames",
      description: "Precision-engineered steel frames for faster construction.",
      features: [
        "Saves time, labor, and costs",
        "Ensures structural safety",
        "Custom designs available",
        "Quick installation process",
      ],
    },
    {
      icon: Boxes,
      title: "Construction Steel Solutions",
      description: "Customized bulk steel supply for residential, commercial & infrastructure projects.",
      features: [
        "Comprehensive bulk supply",
        "Reliable delivery network",
        "Competitive pricing",
        "Technical support included",
      ],
    },
  ];

  const grades = ["Fe 415", "Fe 500", "Fe 550", "Fe 600"];
  const sizes = ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"];

  return (
    <>
      <SEO
        title="TMT Steel Bars & Construction Steel Supplier | Bulk Steel Supply"
        description="Explore Chunmun Trading Company's range of TMT Steel Bars, Ready-to-Build Frames, and Construction Steel Solutions. Bulk supply available at competitive prices."
        keywords="TMT Steel Bars, Ready-to-Build Frames, Construction Steel, Bulk Steel Supply, Steel Grades"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Products & Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete range of TMT steel bars and construction solutions for every project need
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="grid md:grid-cols-3 gap-6 p-8">
                      <div className="md:col-span-1 flex flex-col items-center md:items-start">
                        <div className="bg-primary/10 p-6 rounded-full mb-4">
                          <Icon className="h-12 w-12 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3 text-foreground">{product.title}</h2>
                        <p className="text-muted-foreground">{product.description}</p>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Key Features:</h3>
                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Available Grades & Sizes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-foreground">TMT Steel Grades</h3>
                <div className="grid grid-cols-2 gap-4">
                  {grades.map((grade, index) => (
                    <div 
                      key={index}
                      className="bg-primary/10 px-4 py-3 rounded-md text-center font-semibold text-primary"
                    >
                      {grade}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Available Sizes</h3>
                <div className="grid grid-cols-3 gap-3">
                  {sizes.map((size, index) => (
                    <div 
                      key={index}
                      className="bg-accent/10 px-3 py-3 rounded-md text-center font-semibold text-accent"
                    >
                      {size}
                    </div>
                  ))}
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
                Contact Us Today
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                For bulk TMT steel supply at the best prices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Request a Quote
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

export default Products;
