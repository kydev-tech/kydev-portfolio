'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Sun, Moon, MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import SkillsSection from '../components/SkillsSection';
import PengalamanSection from '../components/PengalamanSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import KydevLogo from '../components/KydevLogo';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [loadingAnimationData, setLoadingAnimationData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [nameKey, setNameKey] = useState('AI Assistant'); // Default fallback
  const [name, setName] = useState('Your Name'); // Default fallback for name
  const [paragraf, setParagraf] = useState('Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.'); // Default fallback for paragraf
  const [chatHistory, setChatHistory] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('id');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [translations, setTranslations] = useState({});
  const [isLoadingLanguages, setIsLoadingLanguages] = useState(true);
  
  // Loading states
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Load languages from API
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('/api/language');
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setLanguages(data.languages);
            setTranslations(data.translations);
          }
        }
      } catch (error) {
        console.error('Error fetching languages:', error);
        // Fallback to default languages if API fails
        setLanguages([
          { code: 'id', name: 'Indonesia', nativeName: 'Bahasa Indonesia' },
          { code: 'en', name: 'English', nativeName: 'English' },
          { code: 'ja', name: '日本語', nativeName: '日本語' }
        ]);
      } finally {
        setIsLoadingLanguages(false);
      }
    };

    fetchLanguages();
  }, []);

  // Language flag components
  const LanguageFlag = ({ languageCode }) => {
    const flagComponents = {
      id: () => (
        <div className="w-5 h-4 rounded-sm overflow-hidden border border-gray-200">
          <div className="h-1/2 bg-red-500"></div>
          <div className="h-1/2 bg-white"></div>
        </div>
      ),
      en: () => (
        <div className="w-5 h-4 rounded-sm overflow-hidden border border-gray-200 relative bg-blue-700">
          <div className="absolute inset-0 bg-blue-700"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute top-1 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute top-2 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
          <div className="absolute top-0.5 left-0 right-0 h-0.5 bg-red-600"></div>
          <div className="absolute top-1.5 left-0 right-0 h-0.5 bg-red-600"></div>
          <div className="absolute bottom-0.5 left-0 right-0 h-0.5 bg-red-600"></div>
          <div className="absolute top-0 left-0 w-2 h-2 bg-blue-900"></div>
        </div>
      ),
      ja: () => (
        <div className="w-5 h-4 rounded-sm overflow-hidden border border-gray-200 bg-white relative">
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )
    };

    const FlagComponent = flagComponents[languageCode];
    return FlagComponent ? <FlagComponent /> : <div className="w-5 h-4 bg-gray-300 rounded-sm"></div>;
  };

  // Get current translation
  const t = (key) => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage].translations[key] || key;
  };

  // Load nameKey, name, and paragraf from API on component mount
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/config');
        if (response.ok) {
          const data = await response.json();
          setNameKey(data.nameKey || 'AI Assistant');
          setName(data.name || 'Your Name');
          setParagraf(data.paragraf || 'Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.');
        }
      } catch (error) {
        console.error('Error fetching config:', error);
        setNameKey('AI Assistant');
        setName('Your Name');
        setParagraf('Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.');
      }
    };

    fetchConfig();
  }, []);

  // Initialize chat history when nameKey and translations are loaded
  useEffect(() => {
    if (nameKey && translations[currentLanguage]) {
      const greetingTemplate = translations[currentLanguage].translations.chatGreeting;
      const greeting = greetingTemplate ? greetingTemplate.replace('{name}', nameKey) : `Hi! I'm ${nameKey}. How can I help you today?`;

      setChatHistory([
        {
          id: 1,
          type: 'bot',
          message: greeting,
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [nameKey, currentLanguage, translations]);

  // Load theme and language from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }

    if (savedLanguage && ['id', 'en', 'ja'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save theme to localStorage when changed
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  // Load the Lottie animations
  useEffect(() => {
    const loadAnimations = async () => {
      try {
        // Load loading animation
        const loadingResponse = await fetch('/lottie/jKI3tSA67p.json');
        const loadingData = await loadingResponse.json();
        setLoadingAnimationData(loadingData);
        setLoadingProgress(100);

        // Simulate minimum loading time for better UX
        setTimeout(() => {
          setIsInitialLoading(false);
        }, 2000);

      } catch (error) {
        console.error('Error loading animations:', error);
        setLoadingProgress(100);
        setTimeout(() => {
          setIsInitialLoading(false);
        }, 1000);
      }
    };

    loadAnimations();
  }, []);

  // Update loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Scroll detection and section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageMenuOpen && !event.target.closest('.language-selector')) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageMenuOpen]);

  // Navigation items using translations
  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'projects', label: t('projects') },
    { id: 'skills', label: t('skills') },
    { id: 'experience', label: t('experience') },
    { id: 'contact', label: t('contact') }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  // Updated sendMessage function with Gemini AI integration
  const sendMessage = async () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        type: 'user',
        message: chatMessage,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, newMessage]);
      const currentMessage = chatMessage;
      setChatMessage('');

      // Add loading message with typing indicator
      const loadingMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: '',
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        isLoading: true
      };
      setChatHistory(prev => [...prev, loadingMessage]);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: currentMessage,
            language: currentLanguage
          }),
        });

        const data = await response.json();

        setChatHistory(prev => {
          const newHistory = prev.filter(msg => !msg.isLoading);
          return [...newHistory, {
            id: Date.now() + 2,
            type: 'bot',
            message: data.message,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
          }];
        });

      } catch (error) {
        console.error('Error sending message:', error);

        const errorTemplate = translations[currentLanguage]?.translations.chatError;
        const errorMessage = errorTemplate ? errorTemplate.replace('{name}', nameKey) : `${nameKey} will help you! Oops, there's a problem. Please try asking again!`;

        setChatHistory(prev => {
          const newHistory = prev.filter(msg => !msg.isLoading);
          return [...newHistory, {
            id: Date.now() + 3,
            type: 'bot',
            message: errorMessage,
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
          }];
        });
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage) || { code: currentLanguage, name: 'Loading...', nativeName: 'Loading...' };
  };

  // Show initial loading screen
  if (isInitialLoading) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
        <div className="w-32 h-32 md:w-40 md:h-40">
          {loadingAnimationData && (
            <Lottie
              animationData={loadingAnimationData}
              loop={true}
              autoplay={true}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          )}
        </div>
      </div>
    );
  }

  // Show loading state while languages are being fetched
  if (isLoadingLanguages) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkMode
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
        : 'bg-gradient-to-br from-gray-50 to-blue-50'
        }`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode
      ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'
      : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? isDarkMode
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-700'
          : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo with KYDEV */}
            <div className="flex-shrink-0">
              <KydevLogo isDarkMode={isDarkMode} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-25">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${activeSection === item.id
                      ? isDarkMode
                        ? 'text-blue-400 bg-slate-800'
                        : 'text-blue-600 bg-blue-100'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                  >
                    {item.label}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                      } ${activeSection === item.id ? 'w-6' : 'w-0 group-hover:w-4'
                      }`}></div>
                  </button>
                ))}
              </div>

              {/* Right side controls */}
              <div className="flex items-center space-x-3">
                {/* Language Selector */}
                <div className="relative language-selector">
                  <button
                    onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${isDarkMode
                      ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600'
                      }`}
                  >
                    <LanguageFlag languageCode={currentLanguage} />
                    <span className="text-sm font-medium hidden lg:block">{getCurrentLanguage().nativeName}</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''
                      }`} />
                  </button>

                  {/* Language Dropdown */}
                  {isLanguageMenuOpen && (
                    <div className={`absolute top-full right-0 mt-2 w-40 rounded-xl shadow-lg border overflow-hidden ${isDarkMode
                      ? 'bg-slate-800 border-slate-700'
                      : 'bg-white border-gray-200'
                      }`}>
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => changeLanguage(language.code)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors duration-200 ${currentLanguage === language.code
                            ? isDarkMode
                              ? 'bg-slate-700 text-blue-400'
                              : 'bg-blue-50 text-blue-600'
                            : isDarkMode
                              ? 'text-gray-300 hover:bg-slate-700 hover:text-blue-400'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                        >
                          <LanguageFlag languageCode={language.code} />
                          <span className="font-medium">{language.nativeName}</span>
                          {currentLanguage === language.code && (
                            <div className={`ml-auto w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                              }`}></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode
                    ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                    : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                    }`}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button & Controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Language Selector */}
              <div className="relative language-selector">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className={`flex items-center space-x-1 p-2 rounded-lg transition-all duration-300 ${isDarkMode
                    ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <LanguageFlag languageCode={currentLanguage} />
                  <ChevronDown size={12} className={`transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''
                    }`} />
                </button>

                {/* Mobile Language Dropdown */}
                {isLanguageMenuOpen && (
                  <div className={`absolute top-full right-0 mt-2 w-36 rounded-xl shadow-lg border overflow-hidden ${isDarkMode
                    ? 'bg-slate-800 border-slate-700'
                    : 'bg-white border-gray-200'
                    }`}>
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`w-full flex items-center space-x-2 px-3 py-2 text-sm transition-colors duration-200 ${currentLanguage === language.code
                          ? isDarkMode
                            ? 'bg-slate-700 text-blue-400'
                            : 'bg-blue-50 text-blue-600'
                          : isDarkMode
                            ? 'text-gray-300 hover:bg-slate-700'
                            : 'text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        <LanguageFlag languageCode={language.code} />
                        <span className="font-medium text-xs">{language.nativeName}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                  }`}
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative w-10 h-10 rounded-lg flex items-center justify-center focus:outline-none transition-colors duration-300 ${isDarkMode
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-blue-100 hover:bg-blue-200'
                  }`}
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span className={`block w-4 h-0.5 rounded-full transform transition-all duration-300 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                    }`}></span>
                  <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                  <span className={`block w-4 h-0.5 rounded-full transform transition-all duration-300 ${isDarkMode ? 'bg-blue-blue' : 'bg-blue-600'
                    } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                    }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className={`py-4 backdrop-blur-md rounded-2xl mx-4 mb-4 shadow-lg border ${isDarkMode
              ? 'bg-slate-900/95 border-slate-700'
              : 'bg-white/95 border-gray-100'
              }`}>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 transform hover:translate-x-2 ${activeSection === item.id
                    ? isDarkMode
                      ? 'text-blue-400 bg-slate-800 border-r-2 border-blue-400'
                      : 'text-blue-600 bg-blue-50 border-r-2 border-blue-400'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeSection === item.id
                      ? isDarkMode ? 'bg-blue-400' : 'bg-blue-400'
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                      }`}></div>
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className={`absolute bottom-0 left-0 right-0 h-px ${isDarkMode
          ? 'bg-gradient-to-r from-transparent via-slate-600 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
          }`}></div>
      </nav>

      {/* Hero Section - Now using the separate component */}
      <section id="home">
        <HeroSection
          isDarkMode={isDarkMode}
          name={name}
          paragraf={paragraf}
          currentLanguage={currentLanguage}
          translations={translations}
        />
      </section>

      {/* About Section */}
      <AboutSection
        isDarkMode={isDarkMode}
        currentLanguage={currentLanguage}
        translations={translations}
      />

      {/* Projects Section */}
      <ProjectSection
        isDarkMode={isDarkMode}
        currentLanguage={currentLanguage}
        translations={translations}
      />

      {/* Skills Section */}
      <SkillsSection
        isDarkMode={isDarkMode}
        currentLanguage={currentLanguage}
        translations={translations}
      />

      {/* Experience Section */}
      <PengalamanSection
        isDarkMode={isDarkMode}
        currentLanguage={currentLanguage}
        translations={translations}
      />

      {/* Contact Section */}
      <ContactSection
        isDarkMode={isDarkMode}
        currentLanguage={currentLanguage}
        translations={translations}
      />

      {/* Footer Section */}
      <Footer
        isDarkMode={isDarkMode}
        currentLanguage={currentLanguage}
        translations={translations}
      />

      {/* Chat Button - Fixed Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsChatOpen(true)}
          className={`group relative p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${isDarkMode
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
            : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
            }`}
        >
          <MessageCircle size={24} className="transition-transform duration-300 group-hover:rotate-12" />

          {/* Notification dot */}
          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse ${isDarkMode ? 'bg-cyan-400' : 'bg-cyan-300'
            }`}></div>

          {/* Ripple effect */}
          <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isDarkMode
            ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
            : 'bg-gradient-to-r from-blue-500 to-cyan-600'
            }`}></div>
        </button>
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-start p-4 md:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          ></div>

          {/* Chat Container */}
          <div className={`relative w-full max-w-md h-[600px] rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isDarkMode
            ? 'bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700'
            : 'bg-gradient-to-b from-white to-gray-50 border border-gray-200'
            }`}>

            {/* Header */}
            <div className={`flex items-center justify-between p-4 border-b ${isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-gray-200 bg-white/50'
              } backdrop-blur-sm`}>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${isDarkMode
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                  }`}>
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {nameKey}
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    Online • {t('readyToChat') || 'Ready to help'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsChatOpen(false)}
                className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode
                  ? 'hover:bg-slate-700 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                  }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[440px]">
              {chatHistory.map((chat) => (
                <div key={chat.id} className={`flex items-start space-x-3 ${chat.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 p-2 rounded-full ${chat.type === 'user'
                    ? isDarkMode
                      ? 'bg-slate-700'
                      : 'bg-gray-200'
                    : isDarkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-600'
                    }`}>
                    {chat.type === 'user' ? (
                      <User size={14} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
                    ) : (
                      <Bot size={14} className="text-white" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${chat.type === 'user'
                    ? isDarkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : isDarkMode
                      ? 'bg-slate-700 text-gray-100'
                      : 'bg-gray-100 text-gray-900'
                    }`}>
                    {chat.isLoading ? (
                      <div className="flex items-center space-x-1 py-1">
                        <div className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`} style={{ animationDelay: '0ms' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`} style={{ animationDelay: '150ms' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`} style={{ animationDelay: '300ms' }}></div>
                      </div>
                    ) : (
                      <>
                        <p className="text-sm leading-relaxed">{chat.message}</p>
                        <p className={`text-xs mt-1 opacity-70 ${chat.type === 'user' ? 'text-right' : 'text-left'
                          }`}>
                          {chat.timestamp}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t ${isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-gray-200 bg-white/50'
              } backdrop-blur-sm`}>
              <div className={`flex items-end space-x-2 p-3 rounded-xl border ${isDarkMode
                ? 'bg-slate-900 border-slate-600 focus-within:border-blue-500'
                : 'bg-white border-gray-300 focus-within:border-blue-400'
                } transition-colors duration-200`}>
                <textarea
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chatPlaceholder') || 'Type your message...'}
                  rows="1"
                  className={`flex-1 resize-none bg-transparent outline-none text-sm ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
                    }`}
                  style={{ minHeight: '20px', maxHeight: '80px' }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!chatMessage.trim()}
                  className={`p-2 rounded-lg transition-all duration-200 ${chatMessage.trim()
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : isDarkMode
                      ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  <Send size={16} />
                </button>
              </div>

              {/* Quick Actions with language-specific text */}
              <div className="flex flex-wrap gap-2 mt-3">
                {translations[currentLanguage] && translations[currentLanguage].translations.quickActions && translations[currentLanguage].translations.quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => {
                      const quickActionMessages = translations[currentLanguage].translations.quickActionMessages;
                      const message = quickActionMessages && quickActionMessages[action] ? quickActionMessages[action] : action;
                      setChatMessage(message);
                    }}
                    className={`px-3 py-1 text-xs rounded-full transition-colors duration-200 ${isDarkMode
                      ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


