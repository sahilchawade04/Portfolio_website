import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedGradient } from '@/components/ui/animated-gradient-with-svg';

interface SkillCardProps {
  title: string;
  skills: string[];
  colors: string[];
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, colors, delay }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-background/40 backdrop-blur-md rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-6 text-foreground"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl font-semibold text-cyan-400 mb-6" 
          variants={item}
        >
          {title}
        </motion.h3>
        <motion.div className="space-y-3" variants={item}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="flex items-center justify-between p-3 bg-background/20 rounded-lg backdrop-blur-sm border border-cyan-500/10"
              variants={item}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
            >
              <span className="text-foreground/90 font-medium">{skill}</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < 4 ? 'bg-cyan-400' : 'bg-foreground/20'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: delay + index * 0.1 + i * 0.05 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C++ (OOPs)", "TypeScript"],
      colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
      delay: 0.2
    },
    {
      title: "Frontend Development",
      skills: ["ReactJS", "NextJS", "HTML", "CSS", "Tailwind CSS"],
      colors: ["#60A5FA", "#34D399", "#93C5FD"],
      delay: 0.4
    },
    {
      title: "Backend Development",
      skills: ["ExpressJS", "NodeJS", "EJS", "RESTful APIs"],
      colors: ["#F59E0B", "#A78BFA", "#FCD34D"],
      delay: 0.6
    },
    {
      title: "Real-Time Communication",
      skills: ["WebRTC", "PeerJS", "Socket.io", "UUID"],
      colors: ["#EC4899", "#F472B6", "#3B82F6"],
      delay: 0.8
    },
    {
      title: "Database & Tools",
      skills: ["MongoDB", "SQL", "Git", "VS Code"],
      colors: ["#3B82F6", "#A78BFA", "#FBCFE8"],
      delay: 1.0
    },
    {
      title: "Cloud & Technologies",
      skills: ["Docker", "AWS", "Google Earth Engine", "Leaflet.js"],
      colors: ["#10B981", "#06B6D4", "#8B5CF6"],
      delay: 1.2
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              colors={category.colors}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;