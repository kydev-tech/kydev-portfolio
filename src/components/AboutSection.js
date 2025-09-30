'use client';
import { useState, useEffect, useRef } from 'react';
import { Code2, Palette, Coffee, Music, Camera, Gamepad2, Heart, Star, Award, Target, ChevronRight, Circle } from 'lucide-react';
import Image from 'next/image';

const AboutSection = ({ isDarkMode, currentLanguage, translations }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('about');
    const sectionRef = useRef(null);

    // Translation helper function
    const t = (key) => {
        if (!translations[currentLanguage]) return key;
        return translations[currentLanguage].translations[key] || key;
    };

    // Intersection Observer for visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Dynamic about data with translations
    const aboutData = {
        intro: currentLanguage === 'id' 
            ? "Passionate tentang pengembangan web, pembuatan bot WhatsApp, dan bisnis digital. Saya suka mengubah ide menjadi solusi praktis yang berpusat pada pengguna dan membuat perbedaan."
            : currentLanguage === 'ja'
            ? "ウェブ開発、WhatsAppボット作成、デジタルビジネスに情熱を注いでいます。アイデアを実用的で、ユーザー重心の解決策に変換することが大好きで、それが違いを生み出します。"
            : "Passionate about web development, WhatsApp bot creation, and digital business. I love transforming ideas into practical, user-focused solutions that make a difference.",
        
        mission: currentLanguage === 'id'
            ? "Misi saya adalah menciptakan solusi web dan digital yang sederhana, berguna, dan menyenangkan untuk semua orang."
            : currentLanguage === 'ja'
            ? "私のミッションは、シンプルで、有用で、すべての人にとって楽しいウェブおよびデジタルソリューションを作ることです。"
            : "My mission is to create web and digital solutions that are simple, useful, and enjoyable for everyone.",
        
        values: translations[currentLanguage] && translations[currentLanguage].translations.coreValuesItems
            ? translations[currentLanguage].translations.coreValuesItems
            : ["Innovation", "Quality", "User-Centric", "Entrepreneurship", "Continuous Learning"]
    };

    const hobbies = [
        {
            icon: <Code2 size={24} />,
            title: t('coding') || 'Coding',
            description: t('codingDesc') || 'Exploring new technologies and building side projects',
            color: "from-slate-600 to-slate-700",
            isCustomIcon: false
        },
        {
            icon: "/assets/icon/badminton.png",
            title: t('badminton') || 'Badminton',
            description: t('badmintonDesc') || 'Smash, rally, and passion for the game on the court',
            color: "from-slate-600 to-slate-700",
            isCustomIcon: true
        },
        {
            icon: <Circle size={24} />,
            title: t('futsal') || 'Futsal',
            description: t('futsalDesc') || 'Enjoying fast-paced games, teamwork, and strategy on the court',
            color: "from-slate-600 to-slate-700",
            isCustomIcon: false
        },
        {
            icon: <Gamepad2 size={24} />,
            title: t('gaming') || 'Gaming',
            description: t('gamingDesc') || 'Playing games for fun, relaxation, and exploring virtual worlds with friends',
            color: "from-slate-600 to-slate-700",
            isCustomIcon: false
        }
    ];

    const stats = [
        { 
            number: "3+", 
            label: t('yearsExperience') || 'Years Experience', 
            icon: <Award size={20} /> 
        },
        { 
            number: "50+", 
            label: t('projectsCompleted') || 'Projects Completed', 
            icon: <Target size={20} /> 
        },
        { 
            number: "100%", 
            label: t('clientSatisfaction') || 'Client Satisfaction', 
            icon: <Heart size={20} /> 
        },
        { 
            number: "24/7", 
            label: t('availability') || 'Availability', 
            icon: <Star size={20} /> 
        }
    ];

    const AnimatedNumber = ({ number, delay = 0 }) => {
        const [displayNumber, setDisplayNumber] = useState('0');

        useEffect(() => {
            let timer;
            let interval;
            
            if (isVisible) {
                timer = setTimeout(() => {
                    if (number.includes('+')) {
                        const targetNum = parseInt(number.replace('+', ''));
                        let current = 0;
                        const increment = targetNum / 30;

                        interval = setInterval(() => {
                            current += increment;
                            if (current >= targetNum) {
                                setDisplayNumber(number);
                                clearInterval(interval);
                            } else {
                                setDisplayNumber(Math.floor(current) + '+');
                            }
                        }, 50);
                    } else {
                        setDisplayNumber(number);
                    }
                }, delay);
            }
            
            return () => {
                if (timer) clearTimeout(timer);
                if (interval) clearInterval(interval);
            };
        }, [number, delay]);

        return displayNumber;
    };

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-20 md:py-32 relative overflow-hidden"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className={`absolute top-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-20 transition-colors duration-300 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-300'}`}
                ></div>
                <div 
                    className={`absolute bottom-32 left-10 w-32 h-32 rounded-full blur-2xl opacity-15 transition-colors duration-300 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-300'}`}
                ></div>

                {/* Geometric shapes */}
                <div 
                    className={`absolute top-1/3 left-1/4 w-2 h-20 rounded-full transform rotate-45 opacity-30 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-b from-blue-500 to-cyan-500' : 'bg-gradient-to-b from-blue-400 to-cyan-400'}`}
                ></div>
                <div 
                    className={`absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full opacity-40 transition-colors duration-300 ${isDarkMode ? 'bg-purple-500' : 'bg-purple-400'}`}
                ></div>
                <div 
                    className={`absolute top-1/2 right-1/4 w-1 h-16 rounded-full transform -rotate-12 opacity-25 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-b from-green-500 to-emerald-500' : 'bg-gradient-to-b from-green-400 to-emerald-400'}`}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div 
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-300 ${isDarkMode ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}
                    >
                        <Heart size={16} className="mr-2" />
                        {t('getToKnowMe') || 'Get to know me'}
                    </div>
                    <h2 
                        className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        {t('about') || 'About'}{' '}
                        <span className={`bg-clip-text text-transparent transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
                            {currentLanguage === 'id' ? 'Saya' : currentLanguage === 'ja' ? '私' : 'Me'}
                        </span>
                    </h2>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className={`flex rounded-2xl p-1 transition-colors duration-300 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-gray-100 border border-gray-200'}`}>
                        {[
                            { id: 'about', label: t('aboutMe') || 'About Me' },
                            { id: 'hobbies', label: t('hobbies') || 'Hobbies' },
                            { id: 'stats', label: t('statistics') || 'Statistics' }
                        ].map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? isDarkMode
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : isDarkMode
                                        ? 'text-gray-400 hover:text-white hover:bg-slate-700'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="max-w-6xl mx-auto">
                    {/* About Tab */}
                    {activeTab === 'about' && (
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="space-y-8">
                                <div 
                                    className={`p-8 rounded-3xl backdrop-blur-sm border transition-colors duration-300 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-gray-200'} shadow-xl`}
                                >
                                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {t('helloBrother') || 'Hello there! 👋'}
                                    </h3>
                                    <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {aboutData.intro}
                                    </p>

                                    <div 
                                        className={`p-4 rounded-2xl transition-colors duration-300 ${isDarkMode ? 'bg-slate-700/50' : 'bg-blue-50'}`}
                                    >
                                        <h4 className={`font-semibold mb-2 flex items-center transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                            <Target size={18} className="mr-2" />
                                            {t('myMission') || 'My Mission'}
                                        </h4>
                                        <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {aboutData.mission}
                                        </p>
                                    </div>
                                </div>

                                {/* Values */}
                                <div 
                                    className={`p-8 rounded-3xl backdrop-blur-sm border transition-colors duration-300 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/70 border-gray-200'} shadow-xl`}
                                >
                                    <h4 className={`text-xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {t('coreValues') || 'Core Values'}
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {aboutData.values.map((value, index) => (
                                            <div
                                                key={value}
                                                className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-600/50' : 'bg-gray-50 hover:bg-gray-100'}`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}></div>
                                                    <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        {value}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Visual Element */}
                            <div className="relative">
                                <div 
                                    className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/80 to-blue-900/50 border-slate-700' : 'bg-gradient-to-br from-white/80 to-blue-50/80 border-gray-200'} shadow-xl`}
                                >
                                    <div className="text-center">
                                        <div 
                                            className={`w-32 h-32 mx-auto mb-6 rounded-3xl transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'} flex items-center justify-center transform hover:rotate-6 transition-transform duration-300`}
                                        >
                                            <Code2 size={48} className="text-white" />
                                        </div>
                                        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {t('passionateDeveloper') || 'Passionate Developer'}
                                        </h3>
                                        <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {t('turningIdeasToReality') || 'Turning ideas into reality through code, one project at a time.'}
                                        </p>
                                    </div>

                                    {/* Floating elements */}
                                    <div 
                                        className={`absolute -top-3 -right-3 w-6 h-6 rounded-full animate-bounce transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`}
                                    ></div>
                                    <div 
                                        className={`absolute -bottom-3 -left-3 w-4 h-4 rounded-full animate-bounce transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}
                                        style={{ animationDelay: '0.5s' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Hobbies Tab */}
                    {activeTab === 'hobbies' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {hobbies.map((hobby, index) => (
                                <div
                                    key={hobby.title}
                                    className={`group p-6 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50' : 'bg-white/70 border-gray-200 hover:bg-white'} shadow-xl hover:shadow-2xl`}
                                >
                                    <div 
                                        className={`w-16 h-16 rounded-2xl transition-colors duration-300 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {hobby.isCustomIcon ? (
                                            <Image
                                                src={hobby.icon}
                                                alt={`${hobby.title} icon`}
                                                width={24}
                                                height={24}
                                                className="object-contain"
                                            />
                                        ) : (
                                            <div className={`transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                                {hobby.icon}
                                            </div>
                                        )}
                                    </div>
                                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {hobby.title}
                                    </h3>
                                    <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {hobby.description}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className={`mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {t('learnMore') || 'Learn more'} <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Stats Tab */}
                    {activeTab === 'stats' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`group text-center p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-700/50' : 'bg-white/70 border-gray-200 hover:bg-white'} shadow-xl hover:shadow-2xl`}
                                >
                                    <div 
                                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <div className="text-white">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <h3 
                                        className={`text-4xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}`}
                                    >
                                        <AnimatedNumber number={stat.number} delay={index * 200} />
                                    </h3>
                                    <p className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;