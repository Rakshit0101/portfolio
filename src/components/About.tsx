import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">
            About Me
          </h2>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 transition-colors">
            <p>
              I'm a Computer Science graduate with around two and a half years of professional experience in software development, 
              primarily focused on backend engineering.
            </p>
            
            <p>
              My journey in software engineering began at TheBay.com, Hudson's Bay Company's online marketplace, 
              where I gained valuable experience working with enterprise-grade systems and handling high-volume traffic. 
              This role exposed me to the complexities of e-commerce platforms and the importance of building scalable 
              and reliable backend services.
            </p>
            
            <p>
              Currently, I work at Certainti.AI, an AI-powered SaaS platform that automates R&D tax credit assessments for companies. 
              Here, I've been able to expand my expertise in cloud technologies, particularly Azure services, and contribute to 
              building intelligent systems that provide real business value.
            </p>
            
            <p>
              I'm passionate about creating efficient, maintainable, and scalable backend systems. 
              My experience spans across various technologies including Java, Spring Boot, and cloud services, 
              with a strong focus on best practices and clean code principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;