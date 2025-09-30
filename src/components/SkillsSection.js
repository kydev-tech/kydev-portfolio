'use client';
import { useState, useRef, useEffect } from 'react';
import { Code, Database, FileText, BarChart3, Palette, Server, Globe, Zap } from 'lucide-react';

const SkillsSection = ({ isDarkMode = false, currentLanguage, translations }) => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const sectionRef = useRef(null);

  // Translation helper function
  const t = (key) => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage].translations[key] || key;
  };

  // Get skill level label based on language
  const getSkillLevelLabel = (level) => {
    if (level >= 90) return t('expert') || 'Expert';
    if (level >= 80) return t('advanced') || 'Advanced';
    if (level >= 70) return t('intermediate') || 'Intermediate';
    return t('beginner') || 'Beginner';
  };

  // Get dynamic category names
  const getCategoryName = (categoryKey) => {
    const categoryMap = {
      'Frontend Framework': t('frontendFramework') || 'Frontend Framework',
      'Backend Framework': t('backendFramework') || 'Backend Framework',
      'CSS Framework': t('cssFramework') || 'CSS Framework',
      'Programming Language': t('programmingLanguage') || 'Programming Language',
      'Database': t('database') || 'Database',
      'Productivity Tool': t('productivityTool') || 'Productivity Tool',
      'Data Analysis': t('dataAnalysis') || 'Data Analysis'
    };
    return categoryMap[categoryKey] || categoryKey;
  };

  // Get dynamic skill descriptions
  const getSkillDescription = (skillId) => {
    const descriptionMap = {
      'nextjs': t('nextjsDesc') || 'Full-stack React framework untuk aplikasi web modern',
      'laravel': t('laravelDesc') || 'PHP framework untuk pengembangan web yang elegan',
      'tailwind': t('tailwindDesc') || 'Utility-first CSS framework untuk desain yang fleksibel',
      'javascript': t('javascriptDesc') || 'Bahasa pemrograman untuk pengembangan web interaktif',
      'mysql': t('mysqlDesc') || 'Sistem manajemen database relasional',
      'word': t('wordDesc') || 'Pengolah kata untuk dokumentasi profesional',
      'excel': t('excelDesc') || 'Spreadsheet untuk analisis data dan perhitungan'
    };
    return descriptionMap[skillId];
  };

  // Get experience text based on language
  const getExperienceText = (years) => {
    switch (currentLanguage) {
      case 'id':
        return `${years} tahun`;
      case 'ja':
        return `${years}年`;
      default:
        return years;
    }
  };

  const skills = [
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'Frontend Framework',
      level: 80,
      icon: Globe,
      color: isDarkMode ? 'from-gray-400 to-gray-600' : 'from-gray-700 to-black',
      experience: '2+'
    },
    {
      id: 'laravel',
      name: 'Laravel',
      category: 'Backend Framework',
      level: 95,
      icon: Server,
      color: isDarkMode ? 'from-red-400 to-red-600' : 'from-red-500 to-red-700',
      experience: '2+'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'CSS Framework',
      level: 80,
      icon: Palette,
      color: isDarkMode ? 'from-cyan-400 to-blue-500' : 'from-cyan-500 to-blue-600',
      experience: '2+'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Programming Language',
      level: 95,
      icon: Code,
      color: isDarkMode ? 'from-yellow-400 to-yellow-600' : 'from-yellow-500 to-yellow-700',
      experience: '3+'
    },
    {
      id: 'mysql',
      name: 'MySQL Database',
      category: 'Database',
      level: 90,
      icon: Database,
      color: isDarkMode ? 'from-blue-400 to-indigo-500' : 'from-blue-500 to-indigo-600',
      experience: '2+'
    },
    {
      id: 'word',
      name: 'Microsoft Word',
      category: 'Productivity Tool',
      level: 92,
      icon: FileText,
      color: isDarkMode ? 'from-blue-400 to-blue-600' : 'from-blue-500 to-blue-700',
      experience: '5+'
    },
    {
      id: 'excel',
      name: 'Microsoft Excel',
      category: 'Data Analysis',
      level: 50,
      icon: BarChart3,
      color: isDarkMode ? 'from-green-400 to-green-600' : 'from-green-500 to-green-700',
      experience: '4+'
    }
  ];

  // Get main description based on language
  const getMainDescription = () => {
    switch (currentLanguage) {
      case 'id':
        return "Kumpulan teknologi dan tools yang saya kuasai untuk mengembangkan solusi digital yang inovatif dan efektif";
      case 'ja':
        return "革新的で効果的なデジタルソリューションを開発するために習得した技術とツールのコレクション";
      default:
        return "A collection of technologies and tools that I master to develop innovative and effective digital solutions";
    }
  };

  // Get stats labels based on language
  const getStatsLabels = () => {
    switch (currentLanguage) {
      case 'id':
        return {
          technologies: 'Teknologi',
          yearsExperience: 'Tahun Pengalaman',
          projectsCompleted: 'Proyek Selesai'
        };
      case 'ja':
        return {
          technologies: 'テクノロジー',
          yearsExperience: '年の経験',
          projectsCompleted: '完了プロジェクト'
        };
      default:
        return {
          technologies: 'Technologies',
          yearsExperience: 'Years Experience',
          projectsCompleted: 'Projects Completed'
        };
    }
  };

  // Get continuous learning text
  const getContinuousLearningText = () => {
    switch (currentLanguage) {
      case 'id':
        return "Selalu belajar dan mengikuti perkembangan teknologi terbaru";
      case 'ja':
        return "常に学習し、最新の技術開発に追従しています";
      default:
        return "Always learning and following the latest technology developments";
    }
  };

  // Intersection Observer untuk animasi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            if (skillId) {
              // Delay animasi berdasarkan index
              const index = skills.findIndex(skill => skill.id === skillId);
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, skillId]));
              }, index * 150);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    const skillElements = sectionRef.current?.querySelectorAll('[data-skill-id]');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getSkillLevel = (level) => {
    if (level >= 90) return { label: getSkillLevelLabel(level), color: isDarkMode ? 'text-green-400' : 'text-green-600' };
    if (level >= 80) return { label: getSkillLevelLabel(level), color: isDarkMode ? 'text-blue-400' : 'text-blue-600' };
    if (level >= 70) return { label: getSkillLevelLabel(level), color: isDarkMode ? 'text-yellow-400' : 'text-yellow-600' };
    return { label: getSkillLevelLabel(level), color: isDarkMode ? 'text-gray-400' : 'text-gray-600' };
  };

  const statsLabels = getStatsLabels();

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-32 right-10 w-2 h-40 rounded-full transform rotate-12 transition-colors duration-300 ${
          isDarkMode ? 'bg-blue-500/20' : 'bg-blue-300/30'
        }`}></div>
        <div className={`absolute top-20 left-20 w-1 h-32 rounded-full transform -rotate-45 transition-colors duration-300 ${
          isDarkMode ? 'bg-purple-500/20' : 'bg-purple-300/30'
        }`}></div>
        <div className={`absolute bottom-40 right-1/4 w-3 h-3 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-cyan-400/30' : 'bg-cyan-400/40'
        }`}></div>
        <div className={`absolute bottom-60 left-1/3 w-2 h-2 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-blue-400/30' : 'bg-blue-400/40'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className={`w-12 h-0.5 transition-colors duration-300 ${
              isDarkMode ? 'bg-gradient-to-r from-transparent to-purple-400' : 'bg-gradient-to-r from-transparent to-purple-500'
            }`}></div>
            <Zap size={24} className={`transition-colors duration-300 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`} />
            <div className={`w-12 h-0.5 transition-colors duration-300 ${
              isDarkMode ? 'bg-gradient-to-l from-transparent to-cyan-400' : 'bg-gradient-to-l from-transparent to-cyan-500'
            }`}></div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('technicalSkills') || 'Technical'}{' '}
            <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600'
            }`}>
              {currentLanguage === 'id' ? 'Keahlian' : currentLanguage === 'ja' ? 'スキル' : 'Skills'}
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('skillsDescription') || getMainDescription()}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-500'
              }`}>7+</div>
              <div className="text-sm">{statsLabels.technologies}</div>
            </div>
            <div className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-green-400' : 'text-green-500'
              }`}>3+</div>
              <div className="text-sm">{statsLabels.yearsExperience}</div>
            </div>
            <div className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-500'
              }`}>10+</div>
              <div className="text-sm">{statsLabels.projectsCompleted}</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isVisible = visibleSkills.has(skill.id);
            const skillLevelInfo = getSkillLevel(skill.level);

            return (
              <div
                key={skill.id}
                data-skill-id={skill.id}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-700 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                } ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600' 
                    : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                } hover:scale-105 hover:shadow-xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${skill.color}`}></div>

                {/* Skill Header */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                    isDarkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {getExperienceText(skill.experience)}
                  </div>
                </div>

                {/* Skill Info */}
                <div className="relative">
                  <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.name}
                  </h3>
                  <p className={`text-sm mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    {getCategoryName(skill.category)}
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {getSkillDescription(skill.id)}
                  </p>

                  {/* Skill Level */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${skillLevelInfo.color}`}>
                        {skillLevelInfo.label}
                      </span>
                      <span className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                      isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150 + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${skill.color} mix-blend-overlay`}></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-sm transition-colors duration-300 ${
            isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-gray-200'
          }`}>
            <Code size={16} className={`transition-colors duration-300 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('alwaysLearning') || getContinuousLearningText()}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-px transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-r from-transparent via-slate-600 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
      }`}></div>
    </section>
  );
};

export default SkillsSection;