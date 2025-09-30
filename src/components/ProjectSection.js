'use client';
import { useState, useRef } from 'react';
import { Code2, Layers, Globe, Zap, Rocket, Clock, Heart, ArrowRight, Plus, Calendar, Sparkles, ExternalLink, Github, Monitor, Smartphone, Lock, MessageCircle } from 'lucide-react';

const ProjectSection = ({ isDarkMode = false, currentLanguage, translations }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  // Translation helper function
  const t = (key) => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage].translations[key] || key;
  };

  // Dynamic categories based on language
  const categories = [
    { id: 'all', label: t('allProjects') || 'All Projects', icon: Layers },
    { id: 'web', label: t('webApps') || 'Web Apps', icon: Globe },
    { id: 'ai', label: t('botAI') || 'Bot & AI', icon: Zap }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'KyPayStore Pricelist',
      category: 'web',
      description: {
        en: 'Modern and responsive pricelist website built with React and Tailwind CSS. Features elegant design, smooth animations, and optimized performance for showcasing digital products.',
        id: 'Website pricelist modern dan responsif yang dibangun dengan React dan Tailwind CSS. Menampilkan desain elegan, animasi halus, dan performa optimal untuk menampilkan produk digital.',
        ja: 'ReactとTailwind CSSで構築されたモダンでレスポンシブな価格表ウェブサイト。エレガントなデザイン、スムーズなアニメーション、デジタル製品を紹介するための最適化されたパフォーマンスを特徴としています。'
      },
      image: '/assets/projek/website/image.png',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      liveUrl: 'https://kypaystore.my.id',
      githubUrl: 'https://github.com/KyDev1603/pricelist.git',
      highlights: {
        en: ['Responsive Design', 'Fast Loading', 'Modern UI/UX', 'SEO Optimized'],
        id: ['Desain Responsif', 'Loading Cepat', 'UI/UX Modern', 'SEO Optimal'],
        ja: ['レスポンシブデザイン', '高速読み込み', 'モダンUI/UX', 'SEO最適化']
      },
      isPrivate: false,
      isBot: false
    },
    {
      id: 2,
      title: 'PT. Dawu Ringkang Amanah',
      category: 'web',
      description: {
        en: 'Professional corporate website for PT. Dawu Ringkang Amanah showcasing company profile, services, and business solutions. Built with modern web technologies for optimal performance and user experience.',
        id: 'Website korporat profesional untuk PT. Dawu Ringkang Amanah yang menampilkan profil perusahaan, layanan, dan solusi bisnis. Dibangun dengan teknologi web modern untuk performa optimal dan pengalaman pengguna terbaik.',
        ja: 'PT. Dawu Ringkang Amanahのプロフェッショナルなコーポレートウェブサイト。会社プロフィール、サービス、ビジネスソリューションを紹介。最適なパフォーマンスとユーザーエクスペリエンスのためにモダンなウェブ技術で構築。'
      },
      image: '/assets/projek/website/image1.png',
      technologies: ['Laravel', 'MySql', 'Tailwind CSS'],
      liveUrl: 'https://dawu.co.id',
      githubUrl: null,
      highlights: {
        en: ['Corporate Design', 'Professional Layout', 'Business Solutions', 'Company Profile'],
        id: ['Desain Korporat', 'Layout Profesional', 'Solusi Bisnis', 'Profil Perusahaan'],
        ja: ['コーポレートデザイン', 'プロフェッショナルレイアウト', 'ビジネスソリューション', '会社プロフィール']
      },
      isPrivate: true,
      isBot: false
    },
    {
      id: 3,
      title: 'CakStore WhatsApp Bot',
      category: 'ai',
      description: {
        en: 'Intelligent WhatsApp bot for automated order processing at CakStore. Features interactive product catalog, automated order confirmation, and seamless customer service experience through WhatsApp messaging.',
        id: 'Bot WhatsApp pintar untuk pemrosesan order otomatis di CakStore. Fitur katalog produk interaktif, konfirmasi order otomatis, dan pengalaman layanan pelanggan yang seamless melalui pesan WhatsApp.',
        ja: 'CakStoreの自動注文処理のためのインテリジェントなWhatsAppボット。インタラクティブな製品カタログ、自動注文確認、WhatsAppメッセージングを通じたシームレスなカスタマーサービス体験を特徴としています。'
      },
      image: '/assets/projek/bot/image1.jpg',
      technologies: ['Node.js', 'WhatsApp API', 'JavaScript', 'Baileys'],
      liveUrl: 'https://wa.me/6281455124049',
      githubUrl: null,
      highlights: {
        en: ['Auto Order', '24/7 Available', 'Interactive Menu', 'Fast Response'],
        id: ['Order Otomatis', 'Tersedia 24/7', 'Menu Interaktif', 'Respon Cepat'],
        ja: ['自動注文', '24時間対応', 'インタラクティブメニュー', '高速応答']
      },
      isPrivate: true,
      isBot: true,
      whatsappNumber: '6281455124049'
    }
  ];

  // Filter projects
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  // Get dynamic content based on language
  const getProjectsDescription = () => {
    switch (currentLanguage) {
      case 'id':
        return "Koleksi proyek yang mencerminkan perjalanan dan dedikasi saya dalam mengembangkan solusi digital yang inovatif dan bermakna";
      case 'ja':
        return "革新的で意味のあるデジタルソリューションを開発する私の旅と献身を反映するプロジェクトのコレクション";
      default:
        return "A collection of projects that reflect my journey and dedication in developing innovative and meaningful digital solutions";
    }
  };

  const getComingSoonMessage = () => {
    switch (currentLanguage) {
      case 'id':
        return "Proyek-proyek baru akan segera hadir. Tetap ikuti perkembangan terbaru!";
      case 'ja':
        return "新しいプロジェクトが間もなく登場します。最新情報をお楽しみに!";
      default:
        return "More projects coming soon. Stay tuned for updates!";
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-2 h-32 rounded-full transform rotate-45 transition-colors duration-300 ${
          isDarkMode ? 'bg-blue-500/20' : 'bg-blue-300/30'
        }`}></div>
        <div className={`absolute top-40 right-20 w-1 h-24 rounded-full transform -rotate-12 transition-colors duration-300 ${
          isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-300/30'
        }`}></div>
        <div className={`absolute bottom-32 left-1/4 w-3 h-3 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-blue-400/30' : 'bg-blue-400/40'
        }`}></div>
        <div className={`absolute bottom-20 right-1/3 w-2 h-2 rounded-full transition-colors duration-300 ${
          isDarkMode ? 'bg-cyan-400/30' : 'bg-cyan-400/40'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className={`w-12 h-0.5 transition-colors duration-300 ${
              isDarkMode ? 'bg-gradient-to-r from-transparent to-blue-400' : 'bg-gradient-to-r from-transparent to-blue-500'
            }`}></div>
            <Code2 size={24} className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
            <div className={`w-12 h-0.5 transition-colors duration-300 ${
              isDarkMode ? 'bg-gradient-to-l from-transparent to-cyan-400' : 'bg-gradient-to-l from-transparent to-cyan-500'
            }`}></div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('featuredProjects') || 'Featured'}{' '}
            <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600'
            }`}>
              {currentLanguage === 'id' ? 'Proyek' : currentLanguage === 'ja' ? 'プロジェクト' : 'Projects'}
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t('projectsDescription') || getProjectsDescription()}
          </p>

          {/* Decorative Quote */}
          <div className="mt-8 relative">
            <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-sm transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-gray-200'
            }`}>
              <Heart size={16} className={`transition-colors duration-300 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
              <span className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                &ldquo;{t('builtWithPassion') || 'Built with passion and dedication'}&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeFilter === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                    : isDarkMode
                      ? 'bg-slate-800 text-gray-300 border border-slate-700 hover:bg-slate-700'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Icon size={16} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.02] ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl hover:shadow-blue-900/20'
                  : 'bg-white border border-gray-200 shadow-2xl hover:shadow-blue-200/50'
              }`}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden ${project.isBot ? 'h-80' : 'h-64'}`}>
                <div className={`absolute inset-0 transition-transform duration-700 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  } ${project.isBot ? 'flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`${project.isBot ? 'h-full w-auto max-w-none object-contain' : 'w-full h-full object-cover'}`}
                  />
                </div>
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                  isDarkMode 
                    ? 'from-slate-900 via-slate-900/80 to-transparent'
                    : 'from-white via-white/80 to-transparent'
                } ${hoveredProject === project.id ? 'opacity-90' : 'opacity-0'}`}>
                  <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-110 ${
                        isDarkMode
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {project.isBot ? <MessageCircle size={18} /> : <ExternalLink size={18} />}
                      <span>{project.isBot ? (currentLanguage === 'id' ? 'Chat' : currentLanguage === 'ja' ? 'チャット' : 'Chat') : (currentLanguage === 'id' ? 'Lihat' : currentLanguage === 'ja' ? '表示' : 'View')}</span>
                    </a>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-110 border ${
                          isDarkMode
                            ? 'border-slate-600 text-white hover:bg-slate-800'
                            : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                    ) : (
                      <div
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium border cursor-not-allowed opacity-60 ${
                          isDarkMode
                            ? 'border-slate-600 text-slate-400'
                            : 'border-gray-300 text-gray-400'
                        }`}
                      >
                        <Lock size={18} />
                        <span>{currentLanguage === 'id' ? 'Privat' : currentLanguage === 'ja' ? 'プライベート' : 'Private'}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md ${
                    isDarkMode
                      ? 'bg-slate-900/80 border border-slate-700'
                      : 'bg-white/80 border border-gray-200'
                  }`}>
                    {project.isBot ? (
                      <>
                        <Zap size={14} className={isDarkMode ? 'text-purple-400' : 'text-purple-500'} />
                        <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                          {currentLanguage === 'id' ? 'Bot AI' : currentLanguage === 'ja' ? 'ボットAI' : 'Bot AI'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Globe size={14} className={isDarkMode ? 'text-blue-400' : 'text-blue-500'} />
                        <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                          {currentLanguage === 'id' ? 'Web App' : currentLanguage === 'ja' ? 'ウェブアプリ' : 'Web App'}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Responsive Badge - Only for Web Apps */}
                {!project.isBot && (
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center space-x-1 px-3 py-2 rounded-full backdrop-blur-md ${
                      isDarkMode
                        ? 'bg-green-900/80 border border-green-700'
                        : 'bg-green-50/80 border border-green-200'
                    }`}>
                      <Monitor size={12} className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                      <Smartphone size={12} className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                    </div>
                  </div>
                )}

                {/* WhatsApp Badge - Only for Bot */}
                {project.isBot && (
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded-full backdrop-blur-md ${
                      isDarkMode
                        ? 'bg-green-900/80 border border-green-700'
                        : 'bg-green-50/80 border border-green-200'
                    }`}>
                      <MessageCircle size={12} className={isDarkMode ? 'text-green-400' : 'text-green-600'} />
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-green-300' : 'text-green-600'}`}>
                        WhatsApp
                      </span>
                    </div>
                  </div>
                )}

                {/* Private Badge for private projects */}
                {project.isPrivate && (
                  <div className="absolute bottom-4 right-4">
                    <div className={`flex items-center space-x-2 px-3 py-2 rounded-full backdrop-blur-md ${
                      isDarkMode
                        ? 'bg-amber-900/80 border border-amber-700'
                        : 'bg-amber-50/80 border border-amber-200'
                    }`}>
                      <Lock size={12} className={isDarkMode ? 'text-amber-400' : 'text-amber-600'} />
                      <span className={`text-xs font-medium ${isDarkMode ? 'text-amber-300' : 'text-amber-600'}`}>
                        {currentLanguage === 'id' ? 'Privat' : currentLanguage === 'ja' ? 'プライベート' : 'Private'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description[currentLanguage] || project.description.en}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(project.highlights[currentLanguage] || project.highlights.en).map((highlight, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                        isDarkMode
                          ? project.isBot 
                            ? 'bg-purple-900/30 text-purple-300 border border-purple-800'
                            : 'bg-blue-900/30 text-blue-300 border border-blue-800'
                          : project.isBot
                            ? 'bg-purple-50 text-purple-600 border border-purple-200'
                            : 'bg-blue-50 text-blue-600 border border-blue-200'
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-300 ${
                        isDarkMode
                          ? 'bg-slate-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 group ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    {project.isBot ? <MessageCircle size={16} /> : <ExternalLink size={16} />}
                    <span>{project.isBot ? (currentLanguage === 'id' ? 'Chat di WhatsApp' : currentLanguage === 'ja' ? 'WhatsAppでチャット' : 'Chat on WhatsApp') : (currentLanguage === 'id' ? 'Lihat Live' : currentLanguage === 'ja' ? 'ライブ表示' : 'View Live')}</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 group ${
                        isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                      }`}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <div className={`flex items-center space-x-2 text-sm font-medium opacity-60 cursor-not-allowed ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      <Lock size={16} />
                      <span>{currentLanguage === 'id' ? 'Repositori Privat' : currentLanguage === 'ja' ? 'プライベートリポジトリ' : 'Private Repository'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                hoveredProject === project.id
                  ? isDarkMode
                    ? project.isBot
                      ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600'
                      : 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600'
                    : project.isBot
                      ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
                      : 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500'
                  : 'bg-transparent'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl p-12 text-center transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl'
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl'
          }`}>
            
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute top-8 right-8 w-40 h-40 rounded-full blur-3xl transition-colors duration-300 ${
                isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
              }`}></div>
              <div className={`absolute bottom-8 left-8 w-32 h-32 rounded-full blur-2xl transition-colors duration-300 ${
                isDarkMode ? 'bg-cyan-400' : 'bg-cyan-500'
              }`}></div>
            </div>

            <div className="relative z-10">
              {/* Main Icon */}
              <div className="mb-8">
                <div className={`inline-flex p-6 rounded-full transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-600/30' 
                    : 'bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200'
                }`}>
                  <Rocket size={48} className={`animate-pulse transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-500'
                  }`} />
                </div>
              </div>

              {/* Coming Soon Text */}
              <h3 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {currentLanguage === 'id' ? 'Lebih Banyak' : currentLanguage === 'ja' ? 'もっと' : 'More'}{' '}
                <span className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-600'
                }`}>
                  {currentLanguage === 'id' ? 'Segera Hadir' : currentLanguage === 'ja' ? '近日公開' : 'Coming Soon'}
                </span>
              </h3>

              <p className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {getComingSoonMessage()}
              </p>

              {/* Timeline */}
              <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full transition-colors duration-300 ${
                isDarkMode ? 'bg-blue-900/30 border border-blue-700/50' : 'bg-blue-50 border border-blue-200'
              }`}>
                <Sparkles size={16} className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>
                  {currentLanguage === 'id' ? 'Proyek baru dalam pengembangan' : currentLanguage === 'ja' ? '新しいプロジェクトを開発中' : 'New projects in development'}
                </span>
              </div>
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

export default ProjectSection;