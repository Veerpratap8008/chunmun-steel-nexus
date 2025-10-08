import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Target, Eye, Award, Users } from "lucide-react";
import constructionImage from "@/assets/construction-site.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower progress with reliable and cost-effective steel products that build strong foundations for the future.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be India's most trusted TMT steel supplier, known for quality, reliability, and customer-first service.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every steel bar meets stringent quality standards, ensuring strength, durability, and safety in construction.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting partnerships with builders and contractors through exceptional service and support.",
    },
  ];

  return (
    <>
      <SEO
        title="About Chunmun Trading Company | TMT Steel Supplier in India"
        description="Chunmun Trading Company is a leading supplier of TMT Steel Bars and construction steel in India. Delivering strength, precision, and reliability for decades."
        keywords="TMT Steel Supplier India, Construction Steel Company, About Chunmun Trading"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About Chunmun Trading Company
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Building Strong Foundations, Empowering Progress
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    At <strong className="text-foreground">Chunmun Trading Company</strong>, we believe strong foundations 
                    build strong futures. With years of expertise in the steel industry, we have established ourselves as 
                    a trusted partner for builders, contractors, and infrastructure developers across India.
                  </p>
                  <p>
                    We supply high-quality TMT steel bars and construction steel solutions that meet the highest standards 
                    of strength, durability, and safety. Our commitment to excellence has made us a preferred choice for 
                    projects of all scales.
                  </p>
                  <p>
                    From residential buildings to large infrastructure projects, our steel products have been the backbone 
                    of countless successful constructions. We take pride in contributing to India's growth story, one steel 
                    bar at a time.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={constructionImage} 
                  alt="Construction site with TMT steel structure" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Our Values & Commitment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                Why Builders Trust Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Decades of Experience</h3>
                  <p className="text-muted-foreground">
                    Years of industry expertise and deep understanding of construction requirements.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Quality First</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous quality checks to ensure structural integrity.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border-l-4 border-secondary">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Bulk Supply Capability</h3>
                  <p className="text-muted-foreground">
                    Large-scale inventory and efficient logistics for projects of any size.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Support</h3>
                  <p className="text-muted-foreground">
                    Dedicated team to assist you from inquiry to delivery and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
