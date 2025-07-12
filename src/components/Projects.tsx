import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedGradient } from '@/components/ui/animated-gradient-with-svg';
import { ExternalLink, Github, Shield, Video, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
  colors: string[];
  delay: number;
  githubLink?: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  icon,
  colors,
  delay,
  githubLink,
  liveLink
}) => {
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
      className="relative overflow-hidden h-full bg-background/40 backdrop-blur-md rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotateY: 2 }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-6 h-full flex flex-col"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="flex items-center mb-4" variants={item}>
          <div className="p-3 bg-cyan-500/20 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
        </motion.div>

        <motion.div className="flex-grow space-y-4" variants={item}>
          <div className="space-y-2">
            {description.map((desc, index) => (
              <motion.p
                key={index}
                className="text-foreground/80 text-sm leading-relaxed"
                variants={item}
              >
                • {desc}
              </motion.p>
            ))}
          </div>

          <motion.div className="space-y-3" variants={item}>
            <h4 className="text-sm font-semibold text-cyan-400">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-background/30 rounded-full text-xs text-foreground/80 border border-cyan-500/20"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="flex gap-3 mt-6" variants={item}>
          {githubLink && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              onClick={() => window.open(githubLink, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {liveLink && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              onClick={() => window.open(liveLink, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Secure Pay",
      description: [
        "Developed a scalable banking application using the MERN stack with a responsive frontend built in React.js and Tailwind CSS",
        "Implemented secure user authentication using JWT and bcrypt to reduce unauthorized access",
        "Designed a password recovery system with OTP email functionality via NodeMailer",
        "Integrated Chart.js for visualizing credit and debit trends"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS", "Chart.js", "NodeMailer"],
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      colors: ["#3B82F6", "#60A5FA", "#93C5FD"],
      delay: 0.2,
      githubLink: "https://github.com/sahilchawade04",
      liveLink: "https://secure-pay.onrender.com/"
    },
    {
      title: "Video Conferencing App",
      description: [
        "Developed a real-time video conferencing app using Node.js, Express.js, and Socket.io",
        "Implemented WebRTC for peer-to-peer video and audio streaming",
        "Used EJS for dynamic HTML rendering",
        "Built frontend with HTML, CSS, JavaScript, and styled using Bootstrap",
        "Deployed the application on Vercel"
      ],
      technologies: ["Node.js", "Express.js", "Socket.io", "WebRTC", "EJS", "Bootstrap", "JavaScript", "Vercel"],
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      colors: ["#EC4899", "#F472B6", "#3B82F6"],
      delay: 0.4,
      githubLink: "https://github.com/sahilchawade04",
      liveLink: ""
    },
    {
      title: "Satellite Image Processing",
      description: [
        "Built dynamic image upload and result display components for satellite image analysis",
        "Integrated interactive maps using Leaflet.js for real-time visualization",
        "Implemented RESTful API integration for enhanced data processing",
        "Optimized UI performance for large satellite image rendering"
      ],
      technologies: ["React.js", "Leaflet.js", "RESTful APIs", "Google Earth Engine", "JavaScript"],
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      colors: ["#10B981", "#06B6D4", "#8B5CF6"],
      delay: 0.6,
      githubLink: "https://github.com/sahilchawade04"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and technical projects demonstrating full-stack development skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
              colors={project.colors}
              delay={project.delay}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
