import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Kraftino</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A legacy of excellence in paper manufacturing, committed to sustainability and innovation
          </p>
        </div>

        {/* Image and Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <img
              src={aboutImage}
              alt="Kraftino Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 1990, Kraftino has grown from a small paper mill to one of the leading
              paper manufacturers in the region. Our journey has been marked by continuous
              innovation, unwavering commitment to quality, and a deep respect for the environment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we serve over 500 clients across 50 countries, producing over 1 million tons
              of premium paper products annually. Our state-of-the-art facilities and dedicated
              team ensure that every product meets the highest standards of quality and sustainability.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="border-2 hover-lift">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver high-quality, sustainable paper products that exceed customer expectations
                while minimizing environmental impact.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-lift">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in sustainable paper manufacturing, setting industry standards
                for quality and environmental responsibility.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover-lift">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, Innovation, Sustainability, Customer Focus, and Excellence in everything
                we do.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="text-center bg-muted/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8">Certifications & Standards</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-lg font-semibold">ISO 9001:2015</div>
            <div className="text-lg font-semibold">ISO 14001:2015</div>
            <div className="text-lg font-semibold">FSC Certified</div>
            <div className="text-lg font-semibold">PEFC Certified</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
