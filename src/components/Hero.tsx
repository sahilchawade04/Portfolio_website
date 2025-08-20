import { motion } from 'framer-motion';
import { SparklesCore } from '@/components/ui/sparkles';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00BFFF"
          speed={1}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />

      {/* Content */}
      <div className="relative z-20 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Sahil Chawade
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/80 font-light"
            >
              Frontend Developer & Full-Stack Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto lg:mx-0"
            >
              Crafting exceptional digital experiences with React, Node.js, and modern web technologies
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-foreground/70"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+91 9730890306</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>sahilchawade04@gmail.com</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
            >
              <a
                href="/Sahil_Chawade_Resumes.pdf"
                download="Sahil_Chawade_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                onClick={() => window.open('https://github.com/sahilchawade04', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/sahil-chawade/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full p-1">
                <div className="w-full h-full bg-background rounded-full p-2">
                  <motion.img
                    src="/Photo-1.jpg"
                    alt="Sahil Chawade"
                    className="w-full h-full object-cover rounded-full border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <motion.div 
                className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div 
                className="absolute top-1/4 -left-4 w-3 h-3 bg-purple-500 rounded-full opacity-70"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-1/4 -right-4 w-2 h-2 bg-cyan-300 rounded-full opacity-80"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Radial Gradient Mask */}
      <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </section>
  );
};

export default Hero;
