
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full animate-float blur-sm" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full animate-float blur-sm" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="font-helvetica text-5xl md:text-7xl font-light text-gray-800 mb-6">
            Karina Sotnikova
          </h1>
          <p className="font-helvetica text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Dental Mechanic & Ceramic Artist
          </p>
          <p className="font-helvetica text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting precision dental prosthetics with artistic excellence. 
            Combining technical expertise with ceramic artistry to create beautiful, functional solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-glass backdrop-blur-sm border border-white/30 rounded-2xl font-helvetica text-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              View Services
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl font-helvetica hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
