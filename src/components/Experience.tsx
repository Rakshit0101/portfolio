import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { experienceService } from '../services/api';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: experiences, isLoading } = useQuery('experiences', experienceService.getExperiences);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </section>
    );
  }

  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-colors">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Experience View */}
          <div className="hidden md:grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <div className="sticky top-24 space-y-2">
                {experiences?.map((exp, index) => (
                  <button
                    key={exp.company}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left px-4 py-3 border-l-2 transition-colors ${
                      activeIndex === index
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="font-medium">{exp.company}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="col-span-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {experiences?.[activeIndex].position}
                </h3>
                <h4 className="text-lg font-medium mb-4 text-blue-600 dark:text-blue-400">
                  {experiences?.[activeIndex].company}
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {experiences?.[activeIndex].period}
                </div>
                <ul className="space-y-3">
                  {experiences?.[activeIndex].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Mobile Experience View */}
          <div className="md:hidden space-y-8">
            {experiences?.map((exp, index) => (
              <div 
                key={exp.company}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all"
              >
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {exp.position}
                </h3>
                <h4 className="text-lg font-medium mb-4 text-blue-600 dark:text-blue-400">
                  {exp.company}
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.period}
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;