import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
      color: 'from-purple-600 to-pink-500'
    },
    {
      name: 'Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C'],
      color: 'from-amber-600 to-orange-500'
    },
    {
      name: 'Tools & Others',
      skills: ['GitHub', 'Git', 'DSA', 'Clean Code', 'Advanced Java'],
      color: 'from-green-600 to-teal-500'
    }
  ];

  const projects = [
    {
      title: 'Hum Chalein!',
      description: 'Full-stack MERN application with secure authentication, RESTful APIs, and responsive UI design.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      period: '09/2025 – 11/2025',
      link: 'https://github.com/rahulmishra30'
    },
    {
      title: 'Virtual Assistant',
      description: 'AI-powered web app integrating voice interaction, intelligent responses, and modern responsive interface.',
      tech: ['React', 'Node.js', 'AI/LLM', 'WebRTC'],
      period: '09/2025 – 10/2025',
      link: 'https://github.com/rahulmishra30'
    },
    {
      title: 'Donatify NGO Platform',
      description: 'Complete web platform enabling NGOs to manage campaigns, showcase services, and accept UPI donations.',
      tech: ['MERN', 'UPI Integration', 'Authentication', 'Responsive UI'],
      period: '02/2025 – 02/2025',
      link: 'https://github.com/rahulmishra30'
    }
  ];

  const NavLink = ({ href, label, onClick }) => (
    <button
      onClick={onClick}
      className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 px-3"
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      {/* Header/Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
              RM
            </div>
            <span className="font-bold text-xl hidden sm:block">Rahul Mishra</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink label="About" onClick={() => setActiveSection('about')} />
            <NavLink label="Skills" onClick={() => setActiveSection('skills')} />
            <NavLink label="Projects" onClick={() => setActiveSection('projects')} />
            <NavLink label="Contact" onClick={() => setActiveSection('contact')} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-b border-cyan-500/10">
            <div className="px-6 py-4 space-y-3">
              <NavLink label="About" onClick={() => { setActiveSection('about'); setMobileMenuOpen(false); }} />
              <NavLink label="Skills" onClick={() => { setActiveSection('skills'); setMobileMenuOpen(false); }} />
              <NavLink label="Projects" onClick={() => { setActiveSection('projects'); setMobileMenuOpen(false); }} />
              <NavLink label="Contact" onClick={() => { setActiveSection('contact'); setMobileMenuOpen(false); }} />
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <p className="text-cyan-400 text-sm font-semibold">FULL STACK DEVELOPER</p>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Crafting Digital <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Detail-oriented developer with hands-on experience building responsive, user-friendly applications using modern web technologies. Focused on clean code and efficient problem-solving.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 border border-cyan-500/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200">
              Get In Touch
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/rahulmishra30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-cyan-500/20 rounded-lg transition-all duration-200 border border-slate-700 hover:border-cyan-500/50"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-cyan-500/20 rounded-lg transition-all duration-200 border border-slate-700 hover:border-cyan-500/50"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rm8221519@gmail.com"
              className="p-3 bg-slate-800 hover:bg-cyan-500/20 rounded-lg transition-all duration-200 border border-slate-700 hover:border-cyan-500/50"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-slate-800/30 border-y border-slate-700/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate full-stack developer currently pursuing a Bachelor's Degree in Computer Application at the University of Lucknow. With a strong foundation in web development and a keen interest in building scalable applications, I combine technical expertise with creative problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My journey includes internship experience at Precursor Info Solutions, where I honed my skills in building responsive websites and applications. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-700/40 border border-slate-600/50 rounded-lg hover:border-cyan-500/30 transition-all duration-200">
                <p className="text-3xl font-bold text-cyan-400">5+</p>
                <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
              </div>
              <div className="p-6 bg-slate-700/40 border border-slate-600/50 rounded-lg hover:border-cyan-500/30 transition-all duration-200">
                <p className="text-3xl font-bold text-blue-400">15+</p>
                <p className="text-gray-400 text-sm mt-2">Skills Mastered</p>
              </div>
              <div className="p-6 bg-slate-700/40 border border-slate-600/50 rounded-lg hover:border-cyan-500/30 transition-all duration-200">
                <p className="text-3xl font-bold text-purple-400">100%</p>
                <p className="text-gray-400 text-sm mt-2">Commitment</p>
              </div>
              <div className="p-6 bg-slate-700/40 border border-slate-600/50 rounded-lg hover:border-cyan-500/30 transition-all duration-200">
                <p className="text-3xl font-bold text-pink-400">2026</p>
                <p className="text-gray-400 text-sm mt-2">Graduation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Technical Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-cyan-500/30 hover:text-cyan-300 transition-all duration-200 border border-slate-600/30 group-hover:border-cyan-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-slate-800/30 border-y border-slate-700/50">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>

                <div className="relative p-8 space-y-4 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{project.period}</span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        View <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded"></div>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Web Development Intern</h3>
                  <p className="text-cyan-400 font-semibold">Precursor Info Solutions PVT. LTD</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">06/2025 – 08/2025</span>
              </div>
              <p className="text-gray-300 mb-3">
                Worked on building responsive websites using HTML, CSS, JavaScript, MongoDB and React. Gained practical experience in full-stack web development and best practices.
              </p>
              <p className="text-gray-500 text-sm">📍 Gole Market, Mahanagar, Lucknow</p>
            </div>

            <div className="p-8 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Event Organizer</h3>
                  <p className="text-cyan-400 font-semibold">Youth Fest College</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Conducted a debugging competition for 1st-year and 2nd-year students</li>
                <li>• Designed 50 programming questions in C, Java, and Python</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-slate-800/30 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Get In Touch</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:rm8221519@gmail.com"
              className="p-6 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group text-center"
            >
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-400 text-sm break-all">rm8221519@gmail.com</p>
            </a>

            <a
              href="tel:+919305141851"
              className="p-6 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group text-center"
            >
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p className="text-gray-400 text-sm">+91 9305141851</p>
            </a>

            <div className="p-6 rounded-lg bg-slate-800/40 border border-slate-700/50 group text-center">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-gray-400 text-sm">Lucknow, Uttar Pradesh</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/rahulmishra30"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 hover:bg-cyan-500/20 rounded-lg transition-all duration-200 border border-slate-700 hover:border-cyan-500/50"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800 hover:bg-cyan-500/20 rounded-lg transition-all duration-200 border border-slate-700 hover:border-cyan-500/50"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Rahul Mishra. All rights reserved. | Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}