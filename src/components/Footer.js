import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Footer = ({
  isDarkMode = false,
  currentLanguage = 'id',
  translations = {}
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Get current translation
  const t = (key) => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage].translations[key] || key;
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/langskydev', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rizkygalang729@gmail.com', label: 'Email' },
  ];

  // Dynamic quick links based on translations
  const quickLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('skills'), href: '#skills' },
    { name: t('experience'), href: '#experience' },
    { name: t('contact'), href: '#contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+62 857-1460-8649' },
    { icon: Mail, text: 'rizkygalang729@gmail.com' },
    { icon: MapPin, text: 'Jakarta, Indonesia' },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 transform ${showScrollTop
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-16 opacity-0 scale-0'
          } ${isDarkMode
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
          } hover:scale-110 group`}
      >
        <ArrowUp size={24} className="transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Ripple effect */}
        <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isDarkMode
          ? 'bg-gradient-to-r from-blue-600 to-purple-600'
          : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}></div>
      </button>

      {/* Footer */}
      <footer className="relative mt-20">
        {/* Wave Animation */}
        <div className="relative">
          {/* Animated Wave SVG */}
          <div className="absolute inset-x-0 top-0 transform -translate-y-1">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className={`w-full h-20 md:h-32 ${isDarkMode ? 'text-slate-900' : 'text-gray-900'
                }`}
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={isDarkMode ? '#1e293b' : '#111827'} />
                  <stop offset="50%" stopColor={isDarkMode ? '#0f172a' : '#1f2937'} />
                  <stop offset="100%" stopColor={isDarkMode ? '#1e293b' : '#111827'} />
                </linearGradient>
              </defs>

              {/* Multiple wave layers for depth */}
              <path
                fill="url(#waveGradient)"
                fillOpacity="0.3"
                d="M0,60 Q300,120 600,60 T1200,60 V120 H0 Z"
              >
                <animate
                  attributeName="d"
                  values="M0,60 Q300,120 600,60 T1200,60 V120 H0 Z;M0,80 Q300,40 600,80 T1200,80 V120 H0 Z;M0,60 Q300,120 600,60 T1200,60 V120 H0 Z"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                fill="url(#waveGradient)"
                fillOpacity="0.5"
                d="M0,80 Q300,40 600,80 T1200,80 V120 H0 Z"
              >
                <animate
                  attributeName="d"
                  values="M0,80 Q300,40 600,80 T1200,80 V120 H0 Z;M0,100 Q300,60 600,100 T1200,100 V120 H0 Z;M0,80 Q300,40 600,80 T1200,80 V120 H0 Z"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>

              <path
                fill="currentColor"
                d="M0,100 Q300,60 600,100 T1200,100 V120 H0 Z"
              >
                <animate
                  attributeName="d"
                  values="M0,100 Q300,60 600,100 T1200,100 V120 H0 Z;M0,60 Q300,100 600,60 T1200,60 V120 H0 Z;M0,100 Q300,60 600,100 T1200,100 V120 H0 Z"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>

        {/* Footer Content */}
        <div className={`${isDarkMode
          ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900'
          : 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900'
          } text-white relative`}>

          {/* Decorative dots */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-32 right-32 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

              {/* About Section */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {t('letsCreateSomethingAmazing')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t('footerDescription')}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="group relative p-3 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                      >
                        <social.icon size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />

                        {/* Tooltip */}
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {social.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">{t('quickLinks')}</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors duration-300 mr-3"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">{t('getInTouchFooter')}</h4>
                <ul className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <li key={index} className="flex items-center text-gray-400 group">
                      <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 mr-3">
                        <contact.icon size={16} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="group-hover:text-blue-400 transition-colors duration-300">
                        {contact.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Current Status */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-700">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></div>
                    <span className="text-sm text-gray-300">{t('availableForWork')}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar size={12} className="mr-1" />
                    <span>Updated {currentYear}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="px-4 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                  <span>© {currentYear} {t('madeWithLove')}</span>
                  <Heart size={14} className="mx-1 text-red-400 animate-pulse" />
                  <span>{t('byLangnrxy')}</span>
                </p>
              </div>

              {/* Additional Links */}
              <div className="flex space-x-6 text-sm">
                <a href="/privacy-policy" className="text-gray-400 hover:text-blue-400...">
                  {t('privacyPolicy')}
                </a>
                <a href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  {t('termsOfService')}
                </a>
              </div>
            </div>

            {/* Back to top hint */}
            <div className="text-center mt-8">
              <p className="text-gray-500 text-xs">
                {t('scrollToTopToExplore')}
              </p>
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;