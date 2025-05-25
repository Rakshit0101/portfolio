import React from 'react';
import { useQuery } from 'react-query';
import { skillsService } from '../services/api';

const Skills = () => {
  const { data: skillCategories, isLoading } = useQuery('skills', skillsService.getSkills);

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </section>
    );
  }

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-colors">
          Technical Skills
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories?.map((category) => (
              <div 
                key={category.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md transition-transform hover:transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white pb-2 border-b border-gray-200 dark:border-gray-600">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;