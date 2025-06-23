
const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-100 to-transparent rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-100 to-transparent rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 p-1">
              <div className="w-full h-full rounded-3xl bg-glass backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <img 
                  src="/Karina_Sotnikova.png"
                  alt="Karina Sotnikova"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-glass backdrop-blur-md border border-white/30 rounded-2xl p-6">
              <div className="text-center">
                <div className="font-helvetica text-2xl font-semibold text-gray-800">10+</div>
                <div className="font-helvetica text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="font-helvetica text-4xl md:text-5xl font-light text-gray-800 mb-6">
                About Me
              </h2>
              <p className="font-helvetica text-lg text-gray-600 leading-relaxed mb-6">
                With over a decade of experience in dental mechanics and a background in ceramic artistry, 
                I bring a unique blend of technical precision and artistic vision to every project.
              </p>
              <p className="font-helvetica text-lg text-gray-600 leading-relaxed mb-6">
                My journey began in ceramic arts, where I developed an eye for detail and appreciation 
                for craftsmanship. This artistic foundation now enhances my work in dental prosthetics, 
                ensuring each piece is not only functional but beautifully crafted.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                'Dental Prosthetics',
                'Ceramic Artistry',
                'Crown & Bridge Work',
                'Digital Dentistry'
              ].map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-glass backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center hover:bg-white/20 hover:border-purple-300/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="font-helvetica text-gray-700 font-medium">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
