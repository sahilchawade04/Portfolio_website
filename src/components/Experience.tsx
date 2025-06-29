import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Maharashtra Remote Sensing Application Centre",
      location: "Nagpur",
      duration: "Jan 2025 – May 2025",
      responsibilities: [
        "Implemented a RESTful API integration within a React.js application, enhancing data flow and resulting in a 15% increase in real-time data processing",
        "Integrated interactive maps using Leaflet.js for real-time satellite image visualization",
        "Built dynamic image upload and result display components for user interaction",
        "Implemented React Router for smooth navigation and page transitions",
        "Collaborated with backend APIs to fetch and display model predictions efficiently",
        "Optimized UI performance for large satellite image rendering and ensured cross-device compatibility"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-20 top-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-background shadow-lg hidden md:block"></div>

              <div className="bg-background/40 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 flex items-center">
                      <Briefcase className="w-6 h-6 mr-2" />
                      {exp.title}
                    </h3>
                    <p className="text-xl text-foreground font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
                    <div className="flex items-center text-foreground/70">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-foreground/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities & Achievements:</h4>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-background/20 hover:bg-cyan-500/5 transition-colors duration-300"
                    >
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground/80 leading-relaxed">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;