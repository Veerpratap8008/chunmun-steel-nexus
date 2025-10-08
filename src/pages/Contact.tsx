import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  email: z.string().trim().email("Invalid email address").max(255),
  requirement: z.string().trim().min(10, "Please provide more details").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      requirement: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const whatsappNumber = "919350701974";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in TMT Steel Bars. Please share more details.");

  return (
    <>
      <SEO
        title="Contact Chunmun Trading Company | Bulk TMT Steel Supplier"
        description="Get in touch with Chunmun Trading Company for bulk orders of TMT Steel Bars & Construction Steel. Call +91 9350701974 or visit chunmuntrading.com."
        keywords="Contact TMT Steel Supplier, Bulk Steel Order, Steel Supplier Contact, Chunmun Trading Contact"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch for bulk TMT steel supply and construction solutions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXXXXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="requirement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Requirement *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project requirements, steel grade needed, quantity, etc."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                        <a 
                          href="tel:+919350701974" 
                          className="text-muted-foreground hover:text-primary transition-colors text-lg"
                        >
                          +91 9350701974
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                        <a 
                          href="mailto:info@chunmuntrading.com" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@chunmuntrading.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground">Location</h3>
                        <p className="text-muted-foreground">India</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" size="lg" className="w-full gap-2 border-2">
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>

                {/* Business Hours */}
                <div className="mt-8 bg-muted p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-foreground">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </p>
                  </div>
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

export default Contact;
