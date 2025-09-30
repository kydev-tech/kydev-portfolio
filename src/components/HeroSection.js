'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = ({ isDarkMode, name, paragraf, currentLanguage, translations }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Translation helper function
  const t = (key) => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage].translations[key] || key;
  };

  // Dynamic roles based on language
  const getRoles = () => {
    switch (currentLanguage) {
      case 'id':
        return [
          "Pengembang Bisnis Digital & Solusi Web",
          "Pengembang Bot WhatsApp",
          "Pengembang Web Full-Stack",
          "Produk Digital & Layanan Game"
        ];
      case 'ja':
        return [
          "デジタルビジネス＆ウェブソリューション開発者",
          "WhatsAppボット開発者",
          "フルスタックウェブ開発者",
          "デジタル製品＆ゲームサービス"
        ];
      default:
        return [
          "Digital Business & Web Solutions Developer",
          "WhatsApp Bot Developer",
          "Full-Stack Web Developer",
          "Digital Products & Game Services"
        ];
    }
  };

  // Dynamic paragraph based on language
  const getParagraph = () => {
    switch (currentLanguage) {
      case 'id':
        return "Passionate tentang membangun solusi web dan bisnis digital yang indah, fungsional, dan berpusat pada pengguna untuk memberikan dampak nyata.";
      case 'ja':
        return "美しく、機能的で、ユーザー中心のウェブおよびデジタルビジネスソリューションを構築し、実際のインパクトを提供することに情熱を注いでいます。";
      default:
        return paragraf || "Passionate about building beautiful, functional, and user-centric web and digital business solutions to deliver real impact.";
    }
  };

  const roles = getRoles();

  // Get greeting text based on language
  const getGreeting = () => {
    switch (currentLanguage) {
      case 'id':
        return 'Halo, saya';
      case 'ja':
        return 'こんにちは、私は';
      default:
        return 'Hello, I\'m';
    }
  };

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (typewriterIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(currentRole.slice(0, typewriterIndex + 1));
        setTypewriterIndex(typewriterIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      const timeout = setTimeout(() => {
        setIsTypingComplete(false);
        setTypewriterText('');
        setTypewriterIndex(0);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typewriterIndex, currentRoleIndex, roles]);

  // Reset typewriter when language changes
  useEffect(() => {
    setTypewriterText('');
    setTypewriterIndex(0);
    setCurrentRoleIndex(0);
    setIsTypingComplete(false);
  }, [currentLanguage]);

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Download CV function
  const downloadCV = () => {
    // You can implement CV download logic here
    // For example, different CV files for different languages
    const cvFiles = {
      id: '/cv/CV_Galang_Rizky_Arridho_ID.pdf',
      en: '/cv/CV_Galang_Rizky_Arridho_EN.pdf',
      ja: '/cv/CV_Galang_Rizky_Arridho_JP.pdf'
    };
    
    const cvFile = cvFiles[currentLanguage] || cvFiles.en;
    
    // Create download link
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = `CV_Galang_Rizky_Arridho_${currentLanguage.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-20 md:pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className={`absolute top-20 right-10 w-32 h-32 rounded-full blur-3xl animate-pulse ${
        isDarkMode ? 'bg-blue-800/30' : 'bg-blue-200/30'
      }`}></div>
      <div className={`absolute bottom-20 left-10 w-24 h-24 rounded-full blur-2xl animate-pulse ${
        isDarkMode ? 'bg-slate-700/20' : 'bg-gray-300/20'
      }`} style={{ animationDelay: '1s' }}></div>
      <div className={`absolute top-1/2 right-1/3 w-2 h-16 rounded-full transform rotate-12 ${
        isDarkMode ? 'bg-blue-600/50' : 'bg-blue-300/50'
      }`}></div>
      <div className={`absolute top-1/3 left-1/4 w-1 h-12 rounded-full transform -rotate-12 ${
        isDarkMode ? 'bg-slate-600/40' : 'bg-gray-400/40'
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 transform transition-all duration-1000">
            <div className="space-y-4">
              <div className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-slate-800 text-blue-400 border border-slate-700'
                  : 'bg-blue-100 text-blue-700 border border-blue-200'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-400'
                }`}></span>
                {t('availableForProjects') || 'Available for projects'}
              </div>
              <h1 className={`text-4xl md:text-6xl font-bold leading-tight transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {getGreeting()}{' '}
                <span className={`bg-clip-text text-transparent transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                }`}>
                  {name || 'Galang Rizky Arridho'}
                </span>
              </h1>
              <p className={`text-xl md:text-2xl font-light min-h-[2rem] transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {typewriterText}
                <span className={`inline-block w-0.5 h-6 ml-1 animate-pulse transition-colors duration-300 ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                } ${isTypingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
              </p>
              <p className={`text-lg max-w-lg transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {getParagraph()}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className={`group relative px-8 py-4 font-medium rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                }`}
              >
                <span className="relative z-10">
                  {t('viewMyWork') || 'View My Work'}
                </span>
                <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-700 to-cyan-700'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-700'
                }`}></div>
              </button>
              <button 
                onClick={downloadCV}
                className={`px-8 py-4 border-2 font-medium rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'border-slate-600 text-gray-300 hover:bg-slate-800 hover:border-slate-500'
                    : 'border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400'
                }`}
              >
                {t('downloadCV') || 'Download CV'}
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6 pt-4">
              <p className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {t('findMeHere') || 'Find me here'}:
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/KyDev1603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/langnrxy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-pink-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-pink-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/galang-rizky-9a06522a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/6285714608649"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-green-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-green-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Profile image with decorative background elements */}
              <div className={`absolute inset-0 rounded-3xl transform rotate-6 transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-slate-700 to-blue-800'
                  : 'bg-gradient-to-br from-blue-200 to-cyan-300'
              }`}></div>
              <div className={`absolute inset-0 rounded-3xl transform -rotate-3 transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-gradient-to-tr from-blue-800 to-cyan-800'
                  : 'bg-gradient-to-tr from-blue-300 to-cyan-400'
              }`}></div>
              
              {/* Main photo container */}
              <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-slate-800 to-blue-900'
                  : 'bg-gradient-to-br from-blue-100 to-cyan-200'
              }`}>
                <Image
                  src="/foto1.jpg"
                  alt="Profile Photo - Galang Rizky Arridho"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
                
                {/* Overlay gradient for better text readability if needed */}
                <div className={`absolute inset-0 transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-t from-slate-900/20 via-transparent to-transparent'
                    : 'bg-gradient-to-t from-gray-900/10 via-transparent to-transparent'
                }`}></div>
              </div>
              
              {/* Floating elements */}
              <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full animate-bounce transition-colors duration-300 ${
                isDarkMode ? 'bg-blue-500' : 'bg-blue-400'
              }`}></div>
              <div className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-bounce transition-colors duration-300 ${
                isDarkMode ? 'bg-cyan-500' : 'bg-cyan-400'
              }`} style={{ animationDelay: '0.5s' }}></div>
              <div className={`absolute top-1/4 -left-8 w-4 h-4 rounded-full animate-pulse transition-colors duration-300 ${
                isDarkMode ? 'bg-slate-600' : 'bg-blue-300'
              }`}></div>
              <div className={`absolute bottom-1/4 -right-8 w-5 h-5 rounded-full animate-pulse transition-colors duration-300 ${
                isDarkMode ? 'bg-blue-600' : 'bg-cyan-300'
              }`} style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;