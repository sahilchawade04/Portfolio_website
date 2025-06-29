import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Objective Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background/40 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Objective</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Passionate Frontend Developer with expertise in React.js, Node.js, and modern web technologies. 
              Currently pursuing Electronics and Telecommunications Engineering while gaining hands-on experience 
              in full-stack development. Dedicated to creating exceptional user experiences and scalable web applications.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-background/40 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              Education
            </h3>
            
            <div className="space-y-6">
              {/* Degree Information */}
              <div className="border-l-4 border-cyan-400 pl-6">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-lg text-cyan-400 font-semibold mb-3">
                  Electronics and Telecommunications Engineering
                </p>
                
                {/* Institution */}
                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-foreground/90 mb-2">Institution:</h5>
                  <p className="text-foreground/80">
                    St. Vincent Pallotti College of Engineering and Technology
                  </p>
                </div>

                {/* Academic Details Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {/* Duration */}
                  <div className="bg-background/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-cyan-400">Duration</span>
                    </div>
                    <p className="text-foreground/80 font-medium">2021 - 2025</p>
                  </div>

                  {/* Location */}
                  <div className="bg-background/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-semibold text-cyan-400">Location</span>
                    </div>
                    <p className="text-foreground/80 font-medium">Nagpur, Maharashtra</p>
                  </div>
                </div>

                {/* CGPA */}
                <div className="bg-background/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-semibold text-cyan-400">Academic Performance</span>
                  </div>
                  <p className="text-foreground/80">
                    <span className="font-semibold">CGPA:</span> 
                    <span className="text-lg font-bold text-cyan-400 ml-2">7.29</span>
                    <span className="text-sm text-foreground/60 ml-1">(out of 10.0)</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;