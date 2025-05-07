import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import { User, Code, Briefcase, FolderOpen, Mail, Linkedin, Github, Laptop } from 'lucide-react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-900 font-sans scroll-smooth">
      {/* Floating Navigation */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group"
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            >
              <span className="sr-only">{section}</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:bg-white transition-all"></div>
            </a>
          ))}
        </div>
      </nav>

      {/* Landing Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-100 to-white opacity-90 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy.dev/images/noise.png')] opacity-10 z-0"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-block bg-blue-100 rounded-full px-4 py-2 mb-6 text-blue-800 font-medium animate-bounce">
            <span className="relative flex h-3 w-3 float-left mr-2 mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
            </span>
            Available for opportunities
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 animate-fade-in-down">
            Ananth <span className="text-blue-600">Surampudi</span>
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed animate-fade-in-up">
            I architect <span className="font-semibold text-blue-600">scalable solutions</span> and craft <span className="font-semibold text-blue-600">intelligent applications</span> that bridge technology and human needs. Full-stack developer with expertise in cloud computing and AI.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 relative">
              <div className="w-64 h-64 bg-blue-100 rounded-full mx-auto overflow-hidden shadow-2xl border-4 border-white">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center text-4xl font-bold text-blue-800">
                  AS
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                <User className="w-5 h-5 inline mr-2" />
                About Me
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">Crafting</span> Digital Experiences
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  I'm a passionate software developer with a Master's in Computer Science from Auburn University at Montgomery. My journey in tech has been driven by curiosity and a relentless pursuit of elegant solutions to complex problems.
                </p>
                <p>
                  What sets me apart is my ability to bridge the gap between <span className="font-semibold">technical implementation</span> and <span className="font-semibold">user experience</span>. I don't just write code—I architect systems that are scalable, maintainable, and delightful to use.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest in AI advancements, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800">5+</h3>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800">2</h3>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-bold text-blue-800">AWS</h3>
                  <p className="text-sm text-gray-600">Cloud Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <Code className="w-10 h-10 inline-block mr-3 text-blue-600" />
              <span className="relative">
                Technical Expertise
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My toolkit for building exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
                icon: "💻"
              },
              {
                category: "Backend Development",
                skills: ["Node.js", "Spring Boot", "RESTful APIs", "Microservices", "GraphQL", "JWT"],
                icon: "⚙️"
              },
              {
                category: "Cloud & DevOps",
                skills: ["AWS", "S3", "Lambda", "EC2", "Docker", "CI/CD"],
                icon: "☁️"
              },
              {
                category: "Data & AI",
                skills: ["Python", "TensorFlow", "Machine Learning", "Pandas", "NumPy", "OpenCV"],
                icon: "🧠"
              },
              {
                category: "Databases",
                skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "ORM", "SQL"],
                icon: "🗄️"
              },
              {
                category: "Tools & Methods",
                skills: ["Git", "Agile", "Scrum", "Linux", "Jira", "VS Code"],
                icon: "🛠️"
              }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition"
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

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <Briefcase className="w-10 h-10 inline-block mr-3 text-blue-600" />
              <span className="relative">
                Professional Journey
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where I've worked and what I've accomplished
            </p>
          </div>

          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

            {/* Experience items */}
            {[
              {
                title: "Cloud Computing Trainee",
                company: "AWS re/Start Program, Conduira",
                duration: "2022 (3 Months)",
                description: [
                  "Completed intensive 12-week training on cloud computing fundamentals and AWS services",
                  "Hands-on experience with EC2, S3, IAM, RDS, and VPC",
                  "Earned AWS Certified Cloud Practitioner certification"
                ],
                side: "left"
              },
              {
                title: "Software Development Intern",
                company: "Coding Hub Innovations Pvt. Ltd.",
                duration: "2021 (2 Months)",
                description: [
                  "Trained in Core Java, MySQL, and web technologies",
                  "Built Java applications with MySQL backends",
                  "Implemented clean code principles and Git workflows"
                ],
                side: "right"
              }
            ].map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 w-full md:w-1/2 ${exp.side === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:ml-auto'}`}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                  <div className="absolute -top-4 -left-4 md:left-auto md:-right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                    {exp.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2 text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-600 before:rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <FolderOpen className="w-10 h-10 inline-block mr-3 text-blue-600" />
              <span className="relative">
                Featured Projects
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Weather Dashboard",
                description: "Interactive weather application with dynamic visualization of current and forecasted conditions using OpenWeatherMap API.",
                technologies: ["React", "Chart.js", "Geolocation API", "Tailwind CSS"],
                link: "#"
              },
              {
                title: "Instance Segmentation with Mask R-CNN",
                description: "Deep learning model for object detection on driving datasets with detailed performance analysis and visualization.",
                technologies: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
                link: "#"
              },
              {
                title: "AWS Static Website Hosting",
                description: "Highly available static website deployment with CI/CD pipeline, CDN distribution, and HTTPS security.",
                technologies: ["AWS S3", "CloudFront", "Route 53", "ACM"],
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg transform group-hover:-rotate-1 transition duration-300"></div>
                <div className="relative h-full bg-white rounded-xl shadow-md overflow-hidden group-hover:shadow-xl transition duration-300 border border-gray-100">
                  <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                    <div className="text-5xl font-bold text-blue-600 opacity-30">
                      {project.title.split(' ')[0].charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <Mail className="w-10 h-10 inline-block mr-3 text-blue-600" />
              <span className="relative">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to connect? I'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Email</h4>
                      <a href="mailto:ananth.surampudi123@gmail.com" className="text-blue-600 hover:underline">ananth.surampudi123@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Laptop className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                      <p className="text-gray-800">+1 (346) 634-6158</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/ananth-surampudi-4b27552b7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ananth-surampudi</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Github className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">GitHub</h4>
                      <a href="https://github.com/S-Ananth7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">S-Ananth7</a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Let's Collaborate</h3>
                  <p className="text-gray-600 mb-6">
                    I'm open to freelance opportunities, interesting project collaborations, or just a friendly tech discussion.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-.1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Ananth Surampudi. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/ananth-surampudi-4b27552b7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/S-Ananth7" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:ananth.surampudi123@gmail.com" className="hover:text-red-400 transition">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            Built with <span className="text-red-500">❤️</span> using React and Tailwind CSS. Deployed on Netlify.
          </div>
        </div>
      </footer>
      </div>
  );
}

export default App;