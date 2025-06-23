
const Works = () => {
  const works = [
    {
      title: "Ceramic Crown Restoration",
      category: "Dental Prosthetics",
      description: "Custom ceramic crown with natural color matching and precise fit.",
      image: "https://www.fnu.edu/wp-content/uploads/2023/10/dental-laboratory-technician-small.jpg"
    },
    {
      title: "Artistic Porcelain Veneers",
      category: "Ceramic Artistry", 
      description: "Hand-crafted porcelain veneers with artistic glazing techniques.",
      image: "https://t3.ftcdn.net/jpg/03/32/24/28/360_F_332242804_WtVEjxWdZmEFHDw3E02pzJ6kUOkX0IwM.jpg"
    },
    {
      title: "Complete Bridge Work",
      category: "Dental Prosthetics",
      description: "Multi-unit bridge combining functionality with aesthetic excellence.",
      image: "https://aaoinfo.org/wp-content/uploads/2019/03/Orthodontic-Tools-For-Common-Bite-Problems-scaled.jpeg"
    },
    {
      title: "Digital Implant Restoration",
      category: "Digital Solutions",
      description: "CAD/CAM designed implant crown with perfect anatomical form.",
      image: "https://keltydental.co.uk/wp-content/uploads/2024/08/Dental-Bridges-in-Fife-Kelty-Kelty-Dental-Practice.jpg"
    },
    {
      title: "Artistic Ceramic Inlays",
      category: "Ceramic Artistry",
      description: "Precision ceramic inlays with hand-finished details.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
    },
    {
      title: "Full Denture Set",
      category: "Dental Prosthetics", 
      description: "Complete denture set with natural appearance and comfortable fit.",
      image: "https://marxdental.com/wp-content/uploads/2025/05/R5CV-1.jpg"
    }
  ];

  return (
    <section id="works" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-pink-200/20 to-orange-200/20 rounded-full animate-float blur-sm" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Featured Works
          </h2>
          <p className="font-helvetica text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of precision craftsmanship combining technical expertise with artistic excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div 
              key={work.title}
              className="group bg-glass backdrop-blur-md border-2 border-white/40 rounded-3xl overflow-hidden hover:bg-white/20 hover:border-purple-300/50 transition-all duration-500 hover:scale-105 shadow-lg h-[420px] flex flex-col"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full font-helvetica text-sm text-purple-700 border border-purple-200/30">
                    {work.category}
                  </span>
                </div>
                
                <h3 className="font-helvetica text-xl font-semibold text-gray-800 mb-3">
                  {work.title}
                </h3>
                
                <p className="font-helvetica text-gray-600 leading-relaxed flex-1">
                  {work.description}
                </p>
                
                <div className="mt-6">
                  <button className="w-full py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl font-helvetica hover:from-purple-500 hover:to-pink-500 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
