import React from 'react';
import { FileText, Link as LinkIcon } from 'lucide-react';
import { LEARNING_RESOURCES } from '../constants';

const LRC = () => {
  return (
    <section 
      id="lrc" 
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-colors">
          Learning Resources & Certifications
        </h2>
        
        <div className="max-w-4xl mx-auto grid gap-6">
          {LEARNING_RESOURCES.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all flex items-start gap-4"
            >
              {resource.type === 'pdf' ? (
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              ) : (
                <LinkIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {resource.description}
                </p>
                <span className="text-sm text-blue-600 dark:text-blue-400 mt-2 inline-block">
                  {resource.type === 'pdf' ? 'View PDF' : 'Visit Link'} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LRC;