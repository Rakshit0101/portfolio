import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useQuery } from 'react-query';
import { profileService } from '../services/api';

const Hero = () => {
  const { data: profile, isLoading } = useQuery('profile', profileService.getProfile);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-xl animate-fade-in">
            <img
              src={profile?.imageUrl}
              alt={profile?.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white transition-colors animate-fade-in">
              {profile?.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-8 transition-colors animate-slide-up">
              {profile?.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl leading-relaxed transition-colors animate-fade-in-delay">
              {profile?.bio}
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