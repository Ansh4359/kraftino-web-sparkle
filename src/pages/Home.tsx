import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Award, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-paper-mill.jpg";

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Eco-friendly production processes with minimal environmental impact",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "ISO certified products meeting international quality standards",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support team ensuring client satisfaction",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient logistics ensuring timely product delivery",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Quality Paper Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Leading the industry with sustainable, innovative paper products for over 30 years
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Explore Products <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Kraftino?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, sustainability, and quality to deliver exceptional paper products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift border-2 transition-all duration-300 hover:border-primary"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Tons Produced</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Quality?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with Kraftino for all your paper needs. Contact us today for a consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
