import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, FileText, ExternalLink, ArrowRight,
  Eye, Heart, Star, Code, Palette, Database, Terminal,
  Award, Users, Target, ChevronDown, Menu, X
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.css';
import AIInterviewCoachImage from './assest/AI Interview Coach.png';
import MysticSandArtImage from './assest/Enhanced Magical Sand Art Creator-1.png';
import HealthGuardianImage from './assest/Health Guardian.png';
import TaskNinjaProImage from './assest/Task Ninja Pro.png';
import TripHelperImage from './assest/Trip Helper.png';
// import AnimeDuniaImage from './assest/anime dunia.png'; // Commented out with the project
import ReactApppdf from './assest/Anush_Gupta_Software_Engineering_Resume.pdf';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Simple Stars Animation Component (Lightweight)
const SimpleStarsAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.opacity = 0.2 + Math.sin(Date.now() * star.twinkleSpeed + star.phase) * 0.3;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.3, zIndex: 1 }}
    />
  );
};

// Simplified Loading Screen Component
const UniqueLoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20 + 10;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 flex items-center justify-center">
      {/* Loading Content */}
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-spin" />
            <div className="absolute inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-black text-white mb-2">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              ANUSH GUPTA
            </span>
          </h1>
          <p className="text-gray-400">Loading Portfolio...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-500 text-sm mt-2">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
};

// Removed SmoothCursor for better performance

// Enhanced Hero Section with Universe Animation
const ModernHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Simple Stars Animation */}
      <SimpleStarsAnimation />
      
      {/* Simplified Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-20 py-20">
        <div ref={titleRef} className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
            <span className="block text-white drop-shadow-2xl">ANUSH</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
              GUPTA
            </span>
          </h1>
        </div>

        <div ref={subtitleRef} className="mb-12">
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Full-Stack Developer & Product Manager crafting digital experiences
            that blend innovation with exceptional user design
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="flex items-center">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

         <a
  href="https://drive.google.com/file/d/18zozP6xXi940m8i99zVl4RNjaY051mlD/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="group px-8 py-4 border-2 border-slate-300/40 text-slate-200 font-semibold rounded-full hover:border-slate-200/60 hover:bg-slate-200/10 transition-all duration-300 backdrop-blur-sm shadow-lg"
>
  View Resume
</a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="flex flex-col items-center">
            <ChevronDown className="w-6 h-6 text-slate-300/80 mb-2" />
            <div className="w-px h-8 bg-gradient-to-b from-slate-300/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};



// Placeholder Image Component
const PlaceholderImage = ({ title, primaryColor = '#3B82F6', secondaryColor = '#1E40AF' }) => {
  const getProjectIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('ai')) return '🤖';
    if (lowerTitle.includes('game')) return '🎮';
    if (lowerTitle.includes('health')) return '🏥';
    if (lowerTitle.includes('trip') || lowerTitle.includes('travel')) return '✈️';
    if (lowerTitle.includes('ecommerce') || lowerTitle.includes('shop')) return '🛒';
    if (lowerTitle.includes('task') || lowerTitle.includes('manage')) return '📋';
    return '⚡';
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
      }}
    >
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 40 M 20 0 L 0 20 M 40 20 L 20 40" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Project Icon */}
      <div className="text-6xl mb-4 opacity-60">
        {getProjectIcon(title)}
      </div>

      {/* Project Title */}
      <div className="text-center px-4">
        <h3 className="text-lg md:text-xl font-bold leading-tight">
          {title}
        </h3>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-white opacity-30 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-white opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-white opacity-25 rounded-full"></div>
    </div>
  );
};

// Modern Projects Section with Masonry Layout
const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "AI Resume Tailor",
      description: "An intelligent resume optimization tool powered by AI that analyzes job descriptions and tailors resumes accordingly. Features ATS optimization, keyword matching, and personalized suggestions for better job application success.",
      tech: ["Python", "AI/ML", "Natural Language Processing", "Flask", "OpenAI API"],
      link: "https://github.com/solmyst/ai-resume-tailor",
      github: "https://github.com/solmyst/ai-resume-tailor",
      views: "1.2K",
      likes: "89",
      rating: "4.6",
      hasImage: false,
      placeholderColors: ['#3B82F6', '#1E40AF'],
      category: "AI/ML"
    },
    {
      title: "AI Interview Coach",
      description: "An AI-powered interview preparation platform that provides personalized coaching, mock interviews, and real-time feedback. Helps candidates practice and improve their interview skills with intelligent analysis.",
      image: AIInterviewCoachImage,
      tech: ["Python", "Machine Learning", "Speech Recognition", "React", "AI Analytics"],
      link: "https://github.com/solmyst/AI-Powered-Interview-Coaching",
      github: "https://github.com/solmyst/AI-Powered-Interview-Coaching",
      views: "2.3K",
      likes: "167",
      rating: "4.8",
      hasImage: true,
      category: "AI/ML"
    },
    {
      title: "Mystic Sand Art",
      description: "An interactive particle physics playground where digital sand responds to your touch. Built with p5.js and advanced physics algorithms to create mesmerizing flowing patterns.",
      image: MysticSandArtImage,
      tech: ["p5.js", "JavaScript", "Physics Engine", "Canvas API"],
      link: "https://solmyst.github.io/Sand-falling-project/",
      github: "https://github.com/solmyst/Sand-falling-project",
      views: "2.1K",
      likes: "156",
      rating: "4.8",
      hasImage: true,
      category: "Creative"
    },
    {
      title: "Task Ninja Pro",
      description: "A powerful Kanban-style project management tool with drag-and-drop functionality, real-time collaboration, and intelligent task automation.",
      image: TaskNinjaProImage,
      tech: ["React", "Firebase", "Drag & Drop API", "Real-time DB"],
      link: "https://solmyst.github.io/task-managment/",
      github: "https://github.com/solmyst/task-managment",
      views: "3.4K",
      likes: "203",
      rating: "4.9",
      hasImage: true,
      category: "Web App"
    },
    {
      title: "Health Guardian",
      description: "A comprehensive healthcare management system designed to streamline medical record-keeping in India with secure data handling and intuitive interfaces.",
      image: HealthGuardianImage,
      tech: ["Django", "Python", "MySQL", "Healthcare APIs"],
      link: "https://friendly-bluebell-79c.notion.site/Wireframe-for-the-Health-I-d-Management-125a0fe59adb80689094f33db1f7b11b?pvs=4",
      github: "https://github.com/solmyst/Health-I-d-Managment",
      views: "1.8K",
      likes: "124",
      rating: "4.7",
      hasImage: true,
      category: "Healthcare"
    },
    // {
    //   title: "Anime Dunia",
    //   description: "A comprehensive anime discovery platform where users can explore, search, and track their favorite anime series. Features detailed anime information, ratings, reviews, and personalized recommendations.",
    //   image: AnimeDuniaImage,
    //   tech: ["React", "Anime API", "JavaScript", "CSS3", "Responsive Design"],
    //   link: "https://github.com/solmyst/anime-dunia",
    //   github: "https://github.com/solmyst/anime-dunia",
    //   views: "2.7K",
    //   likes: "189",
    //   rating: "4.7",
    //   hasImage: true,
    //   category: "Entertainment"
    // },
    {
      title: "Trip Helper",
      description: "A comprehensive travel planning application that helps users organize trips, find destinations, manage itineraries, and discover local attractions with smart recommendations.",
      image: TripHelperImage,
      tech: ["React", "Node.js", "MongoDB", "Travel APIs", "Geolocation"],
      link: "https://github.com/solmyst/Trip_Helper",
      github: "https://github.com/solmyst/Trip_Helper",
      views: "1.9K",
      likes: "112",
      rating: "4.6",
      hasImage: true,
      category: "Travel"
    },
    {
      title: "E-Commerce Platform",
      description: "A robust e-commerce backend built with Go, featuring user authentication, product management, order processing, and payment integration. Designed for high performance and scalability.",
      tech: ["Go", "PostgreSQL", "REST API", "JWT", "Docker"],
      link: "https://github.com/solmyst/ecommerce_golang",
      github: "https://github.com/solmyst/ecommerce_golang",
      views: "2.8K",
      likes: "145",
      rating: "4.7",
      hasImage: false,
      placeholderColors: ['#F59E0B', '#D97706'],
      category: "Backend"
    },
    {
      title: "Sudoku Game",
      description: "An interactive Sudoku puzzle game with multiple difficulty levels, hint system, and solution validation. Features clean UI design and smooth gameplay experience with timer and scoring system.",
      tech: ["JavaScript", "HTML5", "CSS3", "Game Logic", "DOM Manipulation"],
      link: "https://github.com/solmyst/Sudoku_Game",
      github: "https://github.com/solmyst/Sudoku_Game",
      views: "1.5K",
      likes: "98",
      rating: "4.5",
      hasImage: false,
      placeholderColors: ['#8B5CF6', '#7C3AED'],
      category: "Game"
    }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      }
    );

    // Animate project cards
    gsap.fromTo(".project-card",
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-pink-900/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full border border-cyan-500/20 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-300 text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            My
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions, creative experiments, and impactful applications 
            that demonstrate my passion for technology and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
            <div
              key={index}
              className="project-card group relative bg-gradient-to-br from-slate-800/80 via-slate-700/50 to-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-700 shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-cyan-300 text-xs font-semibold rounded-full border border-cyan-400/30">
                  {project.category}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                {project.hasImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
                    <PlaceholderImage 
                      title={project.title}
                      primaryColor={project.placeholderColors[0]}
                      secondaryColor={project.placeholderColors[1]}
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded-md text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3" />
                      <span>{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 border border-slate-500/50 text-slate-300 text-sm font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-700/30 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {!showAllProjects && projects.length > 6 && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowAllProjects(true)}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold rounded-full border border-slate-600/50 hover:border-cyan-400/50 hover:from-slate-700 hover:to-slate-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Projects ({projects.length})</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showAllProjects && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowAllProjects(false)}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-full border border-slate-500/50 hover:border-cyan-400/50 hover:from-slate-600 hover:to-slate-500 transition-all duration-300 transform hover:scale-105"
            >
              <span>Show Less</span>
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              {selectedProject.hasImage && (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
              )}
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 border-2 border-slate-500 text-slate-200 font-semibold rounded-full hover:border-slate-400 hover:bg-slate-700/50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      skills: ["Node.js", "Python", "Java", "Django", "Express", "MySQL"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Git", "Docker", "VS Code", "IntelliJ", "Postman", "Firebase"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Design & Product",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "UI/UX Design", "Wireframing", "Product Strategy", "User Research"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      }
    );

    // Animate skill cards
    gsap.fromTo(".skill-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-800 via-purple-900/20 to-slate-800">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Skills &
            <span className="block bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card group relative p-8 bg-gradient-to-br from-slate-800/60 via-slate-700/40 to-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-600/30 hover:border-cyan-400/40 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-200 transition-all duration-300 border border-slate-600/30 hover:border-cyan-400/30"
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
  );
};

// Experience Section
const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Park+",
      period: "June 2024 - July 2024",
      location: "Remote",
      description: "Developed key features for the Phonebook product, implementing contact synchronization functionality and collaborating with senior developers to deliver high-quality solutions.",
      achievements: [
        "Built contact synchronization features using Java and related technologies",
        "Collaborated with cross-functional teams to deliver product features",
        "Gained hands-on experience in enterprise-level software development",
        "Contributed to improving user experience for thousands of users"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Git"],
      type: "internship"
    },
    //   {
    //     title: "Competitive Programming",
    //     company: "Various Platforms",
    //     period: "2022 - Present",
    //     location: "Online",
    //     description: "Active participant in competitive programming contests on LeetCode, CodeChef, and Codeforces, developing strong problem-solving skills and algorithmic thinking.",
    //     achievements: [
    //       "Solved 200+ problems across multiple platforms",
    //       "Achieved consistent ratings improvement on CodeChef and Codeforces",
    //       "Participated in weekly contests and coding challenges",
    //       "Developed expertise in data structures and algorithms"
    //     ],
    //     technologies: ["C++", "Python", "Algorithms", "Data Structures"],
    //     type: "continuous"
    //   },
    //   {
    //     title: "Hackathon Participant",
    //     company: "Various Events",
    //     period: "2023 - 2024",
    //     location: "Multiple Venues",
    //     description: "Participated in multiple hackathons, securing runner-up position and demonstrating innovation and technical expertise under time constraints.",
    //     achievements: [
    //       "Secured 2nd place in major hackathon competition",
    //       "Built innovative solutions within 24-48 hour timeframes",
    //       "Collaborated with diverse teams to solve real-world problems",
    //       "Presented technical solutions to industry experts"
    //     ],
    //     technologies: ["React", "Node.js", "Python", "APIs", "Rapid Prototyping"],
    //     type: "achievement"
    //   }
  ];

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      }
    );

    // Animate experience cards
    gsap.fromTo(".experience-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'internship':
        return <Code className="w-6 h-6" />;
      case 'continuous':
        return <Target className="w-6 h-6" />;
      case 'achievement':
        return <Award className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'internship':
        return 'from-blue-500 to-cyan-500';
      case 'continuous':
        return 'from-green-500 to-emerald-500';
      case 'achievement':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey in software development, competitive programming, and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card group relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-purple-500 to-transparent opacity-30" />
              )}

              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon and Timeline */}
                <div className="flex-shrink-0">
                  <div className={`timeline-icon inline-flex p-4 rounded-2xl bg-gradient-to-r ${getTypeColor(exp.type)} shadow-lg transition-all duration-300`}>
                    {getTypeIcon(exp.type)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-purple-400 font-medium">{exp.period}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-400">
                      <span className="font-medium">{exp.company}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="achievement-list space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 cursor-default">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="tech-tag px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Open to new opportunities and collaborations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(contentRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(imageRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-800 via-indigo-900/20 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={contentRef}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              About
              <span className="block bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Computer Science student at JECRC University with a love for
                creating digital experiences that matter. My journey in tech spans full-stack
                development, product management, and everything in between.
              </p>

              <p>
                Currently working as a Software Engineering Intern at Park+, where I've
                contributed to key product features and learned from industry experts.
                I believe in the power of clean code, intuitive design, and user-centered thinking.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, participating
                in hackathons, or diving deep into the latest anime series for creative inspiration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 px-4 py-2 bg-purple-600/20 rounded-full">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">Hackathon Runner-up</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 rounded-full">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-medium">Team Leader</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-green-600/20 rounded-full">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-medium">Problem Solver</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10" />
              <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white text-xl font-semibold">Anush Gupta</p>
                  <p className="text-purple-300">Full-Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials/Visitor Feedback Section
// Testimonials Section - Disabled until real testimonials are available
// Contact Section
const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(formRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
      );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900/10 to-slate-900">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's
            <span className="block bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
        </div>

        <div ref={formRef} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:anushgupta105@gmail.com"
              className="group flex flex-col items-center p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500"
            >
              <Mail className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-center">anushgupta105@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/anush-gupta105/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500"
            >
              <Linkedin className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-center">Connect with me</p>
            </a>

            <a
              href="https://github.com/solmyst"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-500"
            >
              <Github className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-center">View my code</p>
            </a>
          </div>

          <div className="text-center">
            <a
              href={ReactApppdf}
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Navigation
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    // { name: 'Testimonials', href: '#testimonials' }, // TODO: Re-enable when real data is added
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-blur' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            AG
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-cyan-300 transition-colors font-medium relative group"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading - reduced time for better UX
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <UniqueLoadingScreen />;
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      <Navigation />
      <ModernHero />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />

      {/* Enhanced Footer */}
      <footer className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                Anush Gupta
              </h3>
              <p className="text-slate-400">Full-Stack Developer & Product Manager</p>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/solmyst" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/anush-gupta105/" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:anushgupta105@gmail.com"
                className="text-slate-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"></div>

            <p className="text-slate-500 text-sm">
              © 2024 Anush Gupta. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
