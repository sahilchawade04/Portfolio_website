import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9730890306",
      href: "tel:+919730890306"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "sahilchawade04@gmail.com",
      href: "mailto:sahilchawade04@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Nagpur, Maharashtra",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/sahilchawade04"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sahil-chawade/"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/sahilchaw4xup/"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/sahilchawade04/"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-background/40 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-background/20 hover:bg-cyan-500/5 transition-colors duration-300"
                  >
                    <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{info.label}</p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-cyan-400 transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background/40 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-4 rounded-lg bg-background/20 hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span className="text-foreground/80 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background/40 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send a Message</h3>
            <form
              action="https://formspree.io/f/mblywoez"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-background/20 border border-cyan-500/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-foreground"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-background/20 border border-cyan-500/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-foreground"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background/20 border border-cyan-500/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-background/20 border border-cyan-500/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-foreground"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-background/20 border border-cyan-500/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors duration-300 text-foreground resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 py-3 px-6 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-center md:text-left">
              © 2025 Sahil Chawade. All rights reserved.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="mt-4 md:mt-0 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
