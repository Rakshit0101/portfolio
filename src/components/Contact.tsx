import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 transition-colors">
            I'm currently open to new opportunities. Feel free to reach out if you'd like to connect or discuss potential collaborations.
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:example@example.com" 
              className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="mt-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-left mb-2 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left mb-2 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-left mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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