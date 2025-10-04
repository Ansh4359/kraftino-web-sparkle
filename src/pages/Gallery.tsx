import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, title: "Manufacturing Facility", description: "State-of-the-art production line" },
    { src: gallery2, title: "Product Quality", description: "Premium paper texture and finish" },
    { src: gallery3, title: "Sustainability", description: "Eco-friendly sourcing practices" },
    { src: gallery1, title: "Innovation Center", description: "Research and development" },
    { src: gallery2, title: "Quality Control", description: "Rigorous testing standards" },
    { src: gallery3, title: "Team Excellence", description: "Skilled professionals at work" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through our facilities, products, and commitment to excellence
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover-lift cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-muted/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Visit our facilities or schedule a virtual tour to experience our operations firsthand
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
