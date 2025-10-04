import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Box, FileText, Sparkles } from "lucide-react";
import productsImage from "@/assets/products-display.jpg";

const Products = () => {
  const products = [
    {
      icon: Package,
      name: "Kraft Paper",
      description: "High-strength kraft paper ideal for packaging applications",
      features: ["Natural brown color", "100% recyclable", "Superior strength", "Multiple GSM options"],
      badge: "Best Seller",
    },
    {
      icon: Box,
      name: "Packaging Paper",
      description: "Versatile packaging solutions for various industries",
      features: ["Food-grade options", "Custom printing", "Moisture resistant", "Eco-friendly"],
      badge: "Eco-Friendly",
    },
    {
      icon: FileText,
      name: "Specialty Paper",
      description: "Premium specialty papers for specific applications",
      features: ["Custom specifications", "High quality finish", "Various textures", "Certified materials"],
      badge: "Premium",
    },
    {
      icon: Sparkles,
      name: "Custom Solutions",
      description: "Tailored paper products designed for your unique needs",
      features: ["Bespoke manufacturing", "Flexible quantities", "Technical support", "Quality assurance"],
      badge: "Popular",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality paper products designed to meet diverse industry needs
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-slide-up">
          <img
            src={productsImage}
            alt="Kraftino Products"
            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
          />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {products.map((product, index) => (
            <Card key={index} className="border-2 hover-lift transition-all duration-300 hover:border-primary">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Product Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">Recyclable</div>
              <p className="text-muted-foreground">All our products are fully recyclable and eco-friendly</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">ISO</div>
              <div className="text-lg font-semibold mb-2">Certified</div>
              <p className="text-muted-foreground">Meeting international quality standards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Support</div>
              <p className="text-muted-foreground">Dedicated customer service team always available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
