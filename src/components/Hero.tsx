import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-xl animate-fade-in">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Rakshit Jayaswal"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white transition-colors animate-fade-in">
              Rakshit Jayaswal
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-8 transition-colors animate-slide-up">
              Backend Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed transition-colors animate-fade-in-delay">
              Computer Science graduate with two and a half years of professional experience in software development. 
              Specialized in building robust backend systems and APIs with Java, Spring Boot, and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <a 
                href="#experience" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                View Experience
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-gray-500 dark:text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;