'use client';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Code, 
  Wrench, 
  DollarSign, 
  Package,
  Users,
  Briefcase,
  Clock,
  Award
} from 'lucide-react';

const PengalamanSection = ({ isDarkMode = false, currentLanguage, translations }) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useRef(null);

  // Translation helper function
  const t = useCallback((key) => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage].translations[key] || key;
  }, [translations, currentLanguage]);

  // Helper function to ensure array format
  const ensureArray = useCallback((value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') return [value];
    return [];
  }, []);

  // Get dynamic tab labels
  const getTabLabels = useCallback(() => {
    switch (currentLanguage) {
      case 'id':
        return {
          all: 'Semua',
          internship: 'Magang',
          education: 'Pendidikan'
        };
      case 'ja':
        return {
          all: 'すべて',
          internship: 'インターンシップ',
          education: '教育'
        };
      default:
        return {
          all: 'All',
          internship: 'Internship',
          education: 'Education'
        };
    }
  }, [currentLanguage]);

  // Get main description based on language
  const getMainDescription = useCallback(() => {
    switch (currentLanguage) {
      case 'id':
        return "Perjalanan karir dan pendidikan yang membentuk skill dan pengalaman saya dalam dunia teknologi";
      case 'ja':
        return "テクノロジーの世界での私のスキルと経験を形成したキャリアと教育の旅";
      default:
        return "Career and educational journey that shaped my skills and experience in the world of technology";
    }
  }, [currentLanguage]);

  // Get status labels
  const getStatusLabels = useCallback(() => {
    switch (currentLanguage) {
      case 'id':
        return {
          current: 'Saat Ini',
          completed: 'Selesai'
        };
      case 'ja':
        return {
          current: '現在',
          completed: '完了'
        };
      default:
        return {
          current: 'Current',
          completed: 'Completed'
        };
    }
  }, [currentLanguage]);

  // Get section labels
  const getSectionLabels = useCallback(() => {
    switch (currentLanguage) {
      case 'id':
        return {
          responsibilities: 'Tanggung Jawab',
          achievements: 'Pencapaian',
          capabilities: 'Kemampuan',
          technologiesTools: 'Teknologi & Tools',
          responsibilitiesAchievements: 'Tanggung Jawab & Pencapaian',
          achievementsCapabilities: 'Pencapaian & Kemampuan'
        };
      case 'ja':
        return {
          responsibilities: '責任',
          achievements: '成果',
          capabilities: '能力',
          technologiesTools: 'テクノロジー & ツール',
          responsibilitiesAchievements: '責任 & 成果',
          achievementsCapabilities: '成果 & 能力'
        };
      default:
        return {
          responsibilities: 'Responsibilities',
          achievements: 'Achievements',
          capabilities: 'Capabilities',
          technologiesTools: 'Technologies & Tools',
          responsibilitiesAchievements: 'Responsibilities & Achievements',
          achievementsCapabilities: 'Achievements & Capabilities'
        };
    }
  }, [currentLanguage]);

  // Get stats labels
  const getStatsLabels = useCallback(() => {
    switch (currentLanguage) {
      case 'id':
        return {
          monthsExperience: 'Bulan Pengalaman',
          companies: 'Perusahaan',
          yearsEducation: 'Tahun Pendidikan'
        };
      case 'ja':
        return {
          monthsExperience: 'ヶ月の経験',
          companies: '企業',
          yearsEducation: '年の教育'
        };
      default:
        return {
          monthsExperience: 'Months Experience',
          companies: 'Companies',
          yearsEducation: 'Years Education'
        };
    }
  }, [currentLanguage]);

  const pengalaman = useMemo(() => [
    {
      id: 'cv-mandiri',
      company: t('cvMandiri') || 'CV MANDIRI TEKNISI',
      role: t('webDeveloperHelper') || 'Web Developer & Helper',
      period: t('december2024March2025') || 'Desember 2024 - Maret 2025',
      duration: t('fourMonths') || '4 bulan',
      type: 'internship',
      location: t('jakarta') || 'Jakarta',
      status: 'Current',
      responsibilities: ensureArray(t('cvMandiriResponsibilities') || [
        'Membantu pekerjaan karyawan sebagai helper',
        'Membantu pembuatan website menggunakan PHP',
        'Kolaborasi dalam pengembangan sistem internal',
        'Maintenance dan troubleshooting website'
      ]),
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      achievements: ensureArray(t('cvMandiriAchievements') || [
        'Berhasil mengembangkan website company profile',
        'Meningkatkan efisiensi kerja tim melalui kolaborasi yang baik',
        'Mempelajari best practices dalam web development'
      ]),
      icon: Code,
      color: isDarkMode ? 'from-green-400 to-emerald-600' : 'from-green-500 to-emerald-700'
    },
    {
      id: 'insvira',
      company: t('ptInsvira') || 'PT INSVIRA SOLUSI TEKNOLOGI',
      role: t('administrativeAssistantMachineOperator') || 'Administrative Assistant & Machine Operator',
      period: t('december2023September2024') || 'Desember 2023 - September 2024',
      duration: t('tenMonths') || '10 bulan',
      type: 'internship',
      location: t('jakarta') || 'Jakarta',
      status: 'Completed',
      responsibilities: ensureArray(t('ptInsviRResponsibilities') || [
        'Membantu pekerjaan karyawan sebagai helper',
        'Melakukan pembelian dan pengelolaan kebutuhan karyawan',
        'Mengelola dan mengatur stok barang',
        'Mengoperasikan mesin laser',
        'Membantu pengelolaan administrasi keuangan PT'
      ]),
      technologies: ['Laser Machine', 'Excel', 'Administrative Systems'],
      achievements: ensureArray(t('ptInsviRAchievements') || [
        'Berhasil mengelola inventory dengan akurasi 98%',
        'Meningkatkan efisiensi operasional mesin laser',
        'Mempelajari sistem administrasi perusahaan',
        'Berkontribusi dalam pengelolaan keuangan perusahaan'
      ]),
      icon: Wrench,
      color: isDarkMode ? 'from-blue-400 to-cyan-600' : 'from-blue-500 to-cyan-700'
    }
  ], [t, ensureArray, isDarkMode]);

  const education = useMemo(() => ({
    id: 'smkn5',
    school: t('smkn5Jakarta') || 'SMKN 5 JAKARTA',
    major: t('metalFabricationManufacturing') || 'Teknik Fabrikasi Logam & Manufaktur',
    period: t('june2021June2025') || 'Juni 2021 - Juni 2025',
    duration: t('fourYears') || '4 tahun',
    type: 'education',
    status: 'Completed',
    achievements: ensureArray(t('smkn5Achievements') || [
      'Menguasai teknik dasar Microsoft Word dan Excel',
      'Memiliki kemampuan dasar menggunakan mesin laser',
      'Mempelajari dasar bahasa pemrograman JavaScript dan PHP',
      'Menguasai framework Laravel dan CodeIgniter',
      'Mengembangkan kemampuan kerja tim yang solid'
    ]),
    icon: Award,
    color: isDarkMode ? 'from-purple-400 to-pink-600' : 'from-purple-500 to-pink-700'
  }), [t, ensureArray, isDarkMode]);

  const allExperience = useMemo(() => [...pengalaman, education], [pengalaman, education]);

  const tabLabels = getTabLabels();
  const statusLabels = getStatusLabels();
  const sectionLabels = getSectionLabels();
  const statsLabels = getStatsLabels();

  // Intersection Observer untuk animasi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            if (itemId) {
              const index = allExperience.findIndex(item => item.id === itemId);
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, itemId]));
              }, index * 200);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const experienceElements = sectionRef.current?.querySelectorAll('[data-item-id]');
    experienceElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [allExperience]);

  const filteredExperience = activeTab === 'all' 
    ? allExperience 
    : allExperience.filter(item => item.type === activeTab);

  const tabs = [
    { id: 'all', label: tabLabels.all, count: allExperience.length },
    { id: 'internship', label: tabLabels.internship, count: pengalaman.length },
    { id: 'education', label: tabLabels.education, count: 1 }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-16 w-2 h-32 rounded-full transform rotate-45 transition-colors duration-300 ${
          isDarkMode ? 'bg-purple-500/20' : 'bg-purple-300/30'
        }`}></div>
        <div className={`absolute top-40 left-10 w-1 h-24 rounded-full transform -rotate-12 transition-colors duration-300 ${
          isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-300/30'
        }`}></div>
        <div className={`absolute bottom-32 right-1/4 w-3 h-3 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-green-400/30' : 'bg-green-400/40'
        }`}></div>
        <div className={`absolute bottom-20 left-1/3 w-2 h-2 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-purple-400/30' : 'bg-purple-400/40'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className={`w-12 h-0.5 transition-colors duration-300 ${
              isDarkMode ? 'bg-gradient-to-r from-transparent to-cyan-400' : 'bg-gradient-to-r from-transparent to-cyan-500'
            }`}></div>
            <Briefcase size={24} className={`transition-colors duration-300 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
            <div className={`w-12 h-0.5 transition-colors duration-300 ${
              isDarkMode ? 'bg-gradient-to-l from-transparent to-purple-400' : 'bg-gradient-to-l from-transparent to-purple-500'
            }`}></div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('experienceEducation') || 'Experience &'}{' '}
            <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600'
            }`}>
              {currentLanguage === 'id' ? 'Pendidikan' : currentLanguage === 'ja' ? '教育' : 'Education'}
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('experienceDescription') || getMainDescription()}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex rounded-2xl p-1 backdrop-blur-sm transition-colors duration-300 ${
            isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-gray-200'
          }`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? isDarkMode
                      ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg'
                      : 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg'
                    : isDarkMode
                      ? 'text-gray-400 hover:text-white hover:bg-slate-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white'
                      : isDarkMode
                        ? 'bg-slate-600 text-gray-300'
                        : 'bg-gray-200 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 transition-colors duration-300 ${
            isDarkMode ? 'bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent' : 'bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent'
          }`}></div>

          <div className="space-y-12">
            {filteredExperience.map((item, index) => {
              const Icon = item.icon;
              const isVisible = visibleItems.has(item.id);
              const isEducation = item.type === 'education';

              // Safely get responsibilities and achievements as arrays
              const responsibilities = ensureArray(item.responsibilities);
              const achievements = ensureArray(item.achievements);

              return (
                <div
                  key={item.id}
                  data-item-id={item.id}
                  className={`relative flex items-start space-x-8 transition-all duration-700 transform ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="relative z-20 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                      <Icon size={24} className="text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                    </div>
                    
                    {/* Pulse Effect */}
                    {item.status === 'Current' && (
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} animate-ping opacity-20`}></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`group flex-1 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 hover:shadow-2xl' 
                      : 'bg-white/70 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-2xl'
                  }`}>
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {isEducation ? item.school : item.company}
                          </h3>
                          {item.status === 'Current' && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                              isDarkMode ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-200'
                            }`}>
                              {statusLabels.current}
                            </span>
                          )}
                        </div>
                        
                        <p className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                          {isEducation ? item.major : item.role}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>
                          
                          <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            <Clock size={16} />
                            <span>{item.duration}</span>
                          </div>
                          
                          {item.location && (
                            <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              <MapPin size={16} />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities/Achievements */}
                    {(responsibilities.length > 0 || achievements.length > 0) && (
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {isEducation ? sectionLabels.achievementsCapabilities : sectionLabels.responsibilitiesAchievements}
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          {responsibilities.length > 0 && (
                            <div>
                              <h5 className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                                isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                              }`}>
                                {sectionLabels.responsibilities}:
                              </h5>
                              <ul className="space-y-2">
                                {responsibilities.map((responsibility, idx) => (
                                  <li key={idx} className={`flex items-start space-x-2 text-sm transition-colors duration-300 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    <ChevronRight size={16} className={`flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                                      isDarkMode ? 'text-cyan-400' : 'text-cyan-500'
                                    }`} />
                                    <span>{responsibility}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {achievements.length > 0 && (
                            <div>
                              <h5 className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                                isDarkMode ? 'text-purple-400' : 'text-purple-600'
                              }`}>
                                {isEducation ? sectionLabels.capabilities : sectionLabels.achievements}:
                              </h5>
                              <ul className="space-y-2">
                                {achievements.map((achievement, idx) => (
                                  <li key={idx} className={`flex items-start space-x-2 text-sm transition-colors duration-300 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                  }`}>
                                    <ChevronRight size={16} className={`flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                                      isDarkMode ? 'text-purple-400' : 'text-purple-500'
                                    }`} />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {item.technologies && (
                      <div>
                        <h4 className={`text-sm font-medium mb-3 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {sectionLabels.technologiesTools}:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-200 ${
                                isDarkMode 
                                  ? 'bg-slate-700 text-gray-300 border border-slate-600 hover:bg-slate-600' 
                                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Background Gradient */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${item.color}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center justify-center space-x-8 px-8 py-4 rounded-2xl backdrop-blur-sm transition-colors duration-300 ${
            isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-gray-200'
          }`}>
            <div className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className={`text-3xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-cyan-400' : 'text-cyan-500'
              }`}>14+</div>
              <div className="text-sm">{statsLabels.monthsExperience}</div>
            </div>
            
            <div className={`w-px h-12 transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
            }`}></div>
            
            <div className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className={`text-3xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-purple-400' : 'text-purple-500'
              }`}>2+</div>
              <div className="text-sm">{statsLabels.companies}</div>
            </div>
            
            <div className={`w-px h-12 transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
            }`}></div>
            
            <div className={`text-center transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <div className={`text-3xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-green-400' : 'text-green-500'
              }`}>4</div>
              <div className="text-sm">{statsLabels.yearsEducation}</div>
            </div>
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

export default PengalamanSection;