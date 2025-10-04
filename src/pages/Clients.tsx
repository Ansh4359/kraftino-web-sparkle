import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShoppingBag, Factory, BookOpen, Utensils, Boxes } from "lucide-react";

const Clients = () => {
  const industries = [
    {
      icon: ShoppingBag,
      name: "Retail & E-commerce",
      description: "Packaging solutions for online and offline retail businesses",
      clients: ["Major retail chains", "E-commerce platforms", "Boutique stores"],
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Industrial packaging and specialty papers for manufacturing",
      clients: ["Automotive parts", "Electronics", "Consumer goods"],
    },
    {
      icon: Utensils,
      name: "Food & Beverage",
      description: "Food-grade packaging materials for the food industry",
      clients: ["Restaurant chains", "Food manufacturers", "Bakeries & cafes"],
    },
    {
      icon: BookOpen,
      name: "Publishing & Print",
      description: "High-quality paper for printing and publishing needs",
      clients: ["Publishing houses", "Print media", "Educational institutions"],
    },
    {
      icon: Building2,
      name: "Corporate",
      description: "Office supplies and custom stationery solutions",
      clients: ["Fortune 500 companies", "SMEs", "Government offices"],
    },
    {
      icon: Boxes,
      name: "Logistics & Shipping",
      description: "Durable packaging for shipping and logistics",
      clients: ["Courier services", "Warehousing companies", "Export businesses"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Companies We Serve</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies across diverse industries worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-primary/5 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Active Clients</div>
          </div>
          <div className="text-center p-6 bg-secondary/5 rounded-xl">
            <div className="text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div className="text-center p-6 bg-accent/5 rounded-xl">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {industries.map((industry, index) => (
            <Card key={index} className="border-2 hover-lift transition-all duration-300 hover:border-primary">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold">Our Clients Include:</div>
                  <ul className="space-y-1">
                    {industry.clients.map((client, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-md">
              <p className="text-lg italic mb-4">
                "Kraftino has been our trusted paper supplier for over 10 years. Their consistent quality
                and reliable service make them an invaluable partner."
              </p>
              <div className="font-semibold">— Global Retail Chain CEO</div>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-md">
              <p className="text-lg italic mb-4">
                "The sustainability initiatives and quality standards at Kraftino align perfectly with
                our company values. Highly recommended!"
              </p>
              <div className="font-semibold">— Food Manufacturing Director</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
