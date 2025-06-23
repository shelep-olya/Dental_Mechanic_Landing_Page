
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      'service_rm6vzl7',
      'template_si849pd',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'shelep.olya@gmail.com',
      },
      'yJt_L7cQoT2L_USZI'
    );

    toast({
      title: 'Message Sent!',
      description: "Thank you for your inquiry. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Something went wrong. Please try again later.',
      variant: 'destructive',
    });
    console.error('EmailJS Error:', error);
  }
}; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-transparent to-pink-50 opacity-50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-l from-purple-200 to-transparent rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-200 to-transparent rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-helvetica text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="font-helvetica text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your dental prosthetic needs? Let's create something beautiful together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="font-helvetica text-2xl font-semibold text-gray-800 mb-6">
                Let's Connect
              </h3>
              <p className="font-helvetica text-lg text-gray-600 leading-relaxed mb-8">
                Whether you're looking for custom dental prosthetics or have questions about my ceramic artistry background, 
                I'm here to help bring your vision to life with professional expertise and artistic touch.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  label: "Professional Consultation", 
                  value: "Available by appointment",
                  gradient: "from-purple-400 to-pink-400"
                },
                { 
                  label: "Response Time", 
                  value: "Within 24 hours",
                  gradient: "from-blue-400 to-purple-400"
                },
                { 
                  label: "Service Areas", 
                  value: "Local & Regional",
                  gradient: "from-pink-400 to-orange-400"
                }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="bg-glass backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full mt-2`}></div>
                    <div>
                      <div className="font-helvetica font-semibold text-gray-800">{item.label}</div>
                      <div className="font-helvetica text-gray-600">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-glass backdrop-blur-md border border-white/30 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-helvetica text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border-2 border-purple-200/50 rounded-xl font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-helvetica text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border-2 border-purple-200/50 rounded-xl font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-helvetica text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border-2 border-purple-200/50 rounded-xl font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block font-helvetica text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 border-2 border-purple-200/50 rounded-xl font-helvetica text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or questions..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl font-helvetica font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
