
const Services = () => {
  const services = [
    {
      title: "Dental Prosthetics",
      description: "Custom-made dental prosthetics including crowns, bridges, and dentures crafted with precision and attention to detail.",
      features: ["Custom Crowns", "Bridge Work", "Partial & Full Dentures", "Implant Restorations"]
    },
    {
      title: "Ceramic Artistry",
      description: "Artistic ceramic work that combines traditional techniques with modern innovations for beautiful, durable results.",
      features: ["Porcelain Veneers", "Ceramic Inlays", "Artistic Glazing", "Color Matching"]
    },
    {
      title: "Digital Solutions",
      description: "Modern digital workflow integration for precise measurements and optimal fit using the latest technology.",
      features: ["Digital Impressions", "CAD/CAM Design", "3D Modeling", "Precision Manufacturing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-200/15 to-pink-200/15 rounded-full opacity-30 animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-blue-200/15 to-purple-200/15 rounded-full opacity-30 animate-float blur-sm" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Professional Services
          </h2>
          <p className="font-helvetica text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive dental mechanic services combining technical expertise with artistic craftsmanship
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-glass backdrop-blur-md border-2 border-white/40 rounded-3xl p-8 hover:bg-white/20 hover:border-purple-300/50 transition-all duration-500 hover:scale-105 shadow-lg"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="mb-6">
                <h3 className="font-helvetica text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="font-helvetica text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="font-helvetica text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="w-full py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl font-helvetica hover:from-purple-500 hover:to-pink-500 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
