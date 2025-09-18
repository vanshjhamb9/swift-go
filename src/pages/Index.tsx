import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FAQ from "@/components/FAQ";
import { 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  Smartphone, 
  Navigation,
  DollarSign,
  Leaf,
  Star,
  Download,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">SwiftGo</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary transition-smooth">Home</a>
            <a href="#about" className="hover:text-primary transition-smooth">About</a>
            <a href="#services" className="hover:text-primary transition-smooth">Services</a>
            <a href="#features" className="hover:text-primary transition-smooth">Features</a>
            <a href="#how-it-works" className="hover:text-primary transition-smooth">How It Works</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact</a>
          </div>
          <Button variant="default" size="sm">Download App</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="text-gradient">SwiftGo</span>
            <br />
            <span className="text-foreground">Smarter Shared Rides</span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl">Fixed and Reliable</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto slide-up">
            Affordable, reliable, and eco-friendly shuttle rides along fixed routes. 
            Join the future of sustainable urban mobility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scale-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Download className="mr-2" />
              Download App
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10">
              <MapPin className="mr-2" />
              Explore Routes
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About SwiftGo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionizing urban transportation with smart, sustainable, and shared mobility solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="slide-up">
              <h3 className="text-3xl font-bold mb-6">Who We Are</h3>
              <p className="text-lg text-muted-foreground mb-6">
                SwiftGo is a revolutionary ride-sharing platform that focuses on fixed routes, 
                providing predictable, reliable, and eco-friendly transportation solutions for urban commuters.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Leaf className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Vision</h4>
                    <p className="text-muted-foreground">To provide you quicker, reliable, comfortable and safe journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold">Mission</h4>
                    <p className="text-muted-foreground">Minimize carbon footprints through sustainable, innovative mobility solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scale-in">
              <img 
                src={appMockup} 
                alt="SwiftGo App Interface" 
                className="rounded-2xl shadow-soft w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest and transparent in all our dealings" },
              { icon: Smartphone, title: "Innovation", desc: "Cutting-edge technology for better experiences" },
              { icon: Star, title: "Excellence", desc: "Committed to the highest standards of service" },
              { icon: Users, title: "Customer-Centricity", desc: "Your needs are at the heart of everything we do" }
            ].map((value, index) => (
              <Card key={index} className="card-gradient shadow-soft hover:shadow-glow transition-smooth p-6 text-center">
                <CardContent className="p-0">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Members */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Our Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sumeet Raithatha", role: "CEO & Founder" },
                { name: "Bhushan Madane", role: "CTO & Co-Founder" },
                { name: "Parag Chatwani", role: "COO & Co-Founder" }
              ].map((member, index) => (
                <Card key={index} className="card-gradient shadow-soft hover:shadow-glow transition-smooth p-6">
                  <CardContent className="p-0 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mobility solutions designed for modern urban transportation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Carpooling & Ride-Sharing",
                desc: "Connect with commuters on similar routes for cost-effective and eco-friendly travel.",
                features: ["Fixed route optimization", "Real-time matching", "Flexible scheduling", "Cost savings up to 60%"]
              },
              {
                icon: Shield,
                title: "Corporate Mobility Solutions",
                desc: "Tailored transportation solutions for businesses and organizations.",
                features: ["Employee shuttle services", "Bulk booking discounts", "Corporate dashboards", "Expense management"]
              },
              {
                icon: Leaf,
                title: "Green Mobility Initiatives",
                desc: "Contributing to sustainable urban development through shared transportation.",
                features: ["Carbon footprint tracking", "Eco-friendly vehicle fleet", "Emission reduction reports", "Green incentives"]
              }
            ].map((service, index) => (
              <Card key={index} className="card-gradient shadow-soft hover:shadow-glow transition-smooth group">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-bounce" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section id="features" className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">App Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed for riders, drivers, and administrators.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* For Riders */}
            <Card className="card-gradient shadow-soft">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">For Riders</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "View available routes",
                    "Schedule rides in advance",
                    "Real-time tracking",
                    "Digital wallet & payments",
                    "Push notifications",
                    "Ride history & receipts"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* For Drivers */}
            <Card className="card-gradient shadow-soft">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Navigation className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">For Drivers</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Assigned route management",
                    "Passenger manifest",
                    "Built-in navigation",
                    "Status updates",
                    "Earnings tracking",
                    "Driver support system"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* For Admins */}
            <Card className="card-gradient shadow-soft">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Shield className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">For Admins</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Route management",
                    "Schedule control",
                    "Vehicle assignment",
                    "Analytics dashboard",
                    "Revenue tracking",
                    "Customer support tools"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to get you moving with SwiftGo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { icon: MapPin, title: "Select Route", desc: "Choose your preferred route" },
              { icon: Clock, title: "Choose Time", desc: "Pick your time slot" },
              { icon: Users, title: "Pick Stops", desc: "Select pickup and drop points" },
              { icon: DollarSign, title: "Confirm & Pay", desc: "Secure payment processing" },
              { icon: Smartphone, title: "Track", desc: "Real-time ride tracking" },
              { icon: CheckCircle, title: "Ride", desc: "Enjoy your journey" }
            ].map((step, index) => (
              <div key={index} className="text-center group scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center mx-auto shadow-glow group-hover:scale-110 transition-bounce">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {index < 5 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-12 h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Models Section */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Revenue Models</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options to suit every need and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Per Ride Fare", desc: "Pay as you go with competitive per-ride pricing", icon: DollarSign },
              { title: "Monthly Subscriptions", desc: "Unlimited rides with monthly subscription plans", icon: Clock },
              { title: "Corporate Contracts", desc: "Bulk discounts for business and organizations", icon: Shield },
              { title: "Ads & Promotions", desc: "Sponsored content and promotional partnerships", icon: Star }
            ].map((model, index) => (
              <Card key={index} className="card-gradient shadow-soft hover:shadow-glow transition-smooth text-center">
                <CardContent className="p-6">
                  <model.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{model.title}</h3>
                  <p className="text-muted-foreground text-sm">{model.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact & Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for support, partnerships, or general inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="slide-up">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <Button type="submit" size="lg" className="w-full">
                  <MessageCircle className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="scale-in">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-muted-foreground">support@swiftgo.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Phone Support</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <h4 className="font-semibold">Office Location</h4>
                    <p className="text-muted-foreground">123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 card-gradient rounded-lg shadow-soft">
                <h4 className="font-semibold mb-4">Download SwiftGo Today</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    iOS App Store
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-2">SwiftGo</h3>
            <p className="text-lg text-muted-foreground font-medium">
              Smarter Commutes. Greener Cities. Better Lives.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">iOS App</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Android App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Service Areas</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Partner With Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 SwiftGo. All rights reserved. Built for sustainable urban mobility.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;