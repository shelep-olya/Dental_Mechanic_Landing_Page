
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="font-helvetica text-2xl font-semibold mb-4">
              Karina Sotnikova
            </h3>
            <p className="font-helvetica text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional dental mechanic and ceramic artist dedicated to creating 
              exceptional prosthetics with artistic excellence and technical precision.
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="font-helvetica text-gray-400">
              © 2024 Karina Sotnikova. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
