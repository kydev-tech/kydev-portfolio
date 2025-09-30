// src/app/api/language/route.js
import { NextResponse } from 'next/server';

// Comprehensive language data structure for all components
const languages = {
  id: {
    code: 'id',
    name: 'Indonesia',
    nativeName: 'Bahasa Indonesia',
    translations: {
      // Navigation
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      contact: 'Kontak',
      
      // Hero Section
      availableForProjects: 'Tersedia untuk proyek',
      viewMyWork: 'Lihat Karya Saya',
      downloadCV: 'Unduh CV',
      
      // About Section
      getToKnowMe: 'Mari Mengenal Saya',
      aboutMe: 'Tentang Saya',
      hobbies: 'Hobi',
      statistics: 'Statistik',
      helloBrother: 'Halo! 👋',
      myMission: 'Misi Saya',
      coreValues: 'Nilai Inti',
      passionateDeveloper: 'Developer Berpengalaman',
      turningIdeasToReality: 'Mengubah ide menjadi kenyataan melalui kode, satu proyek di satu waktu.',
      learnMore: 'Pelajari lebih lanjut',
      yearsExperience: 'Tahun Pengalaman',
      projectsCompleted: 'Proyek Selesai',
      clientSatisfaction: 'Kepuasan Klien',
      availability: 'Ketersediaan',
      coding: 'Coding',
      codingDesc: 'Menjelajahi teknologi baru dan membangun proyek sampingan',
      badminton: 'Badminton',
      badmintonDesc: 'Smash, rally, dan passion untuk permainan di lapangan',
      futsal: 'Futsal',
      futsalDesc: 'Menikmati permainan cepat, kerjasama tim, dan strategi di lapangan',
      gaming: 'Gaming',
      gamingDesc: 'Bermain game untuk bersenang-senang, relaksasi, dan menjelajahi dunia virtual bersama teman',
      coreValuesItems: ['Inovasi', 'Kualitas', 'Berpusat pada Pengguna', 'Kewirausahaan', 'Belajar Berkelanjutan'],
      
      // Projects Section
      featuredProjects: 'Proyek Unggulan',
      allProjects: 'Semua Proyek',
      webApps: 'Aplikasi Web',
      botAI: 'Bot & AI',
      comingSoon: 'Segera Hadir',
      greatProjectsComingSoon: 'Proyek-proyek hebat akan segera hadir',
      projectsDescription: 'Koleksi proyek yang mencerminkan perjalanan dan dedikasi saya dalam mengembangkan solusi digital yang inovatif dan bermakna',
      workingOnExcitingProjects: 'Saya sedang mengerjakan beberapa proyek menarik yang akan segera dipublikasikan. Stay tuned untuk melihat karya-karya terbaru!',
      webApplications: 'Aplikasi Web',
      webAppsDesc: 'Aplikasi web modern dengan teknologi terdepan',
      aiAutomation: 'AI & Otomatisasi',
      aiAutomationDesc: 'Bot dan sistem otomasi cerdas',
      creativeSolutions: 'Solusi Kreatif',
      creativeSolutionsDesc: 'Solusi kreatif untuk kebutuhan digital',
      projectsWillBePublished: 'Proyek akan dipublikasikan secara bertahap',
      subscribeForUpdates: 'Berlangganan untuk Update',
      viewProgress: 'Lihat Progress',
      inDevelopment: 'Dalam Pengembangan',
      inDevelopmentDesc: 'Sedang fokus mengembangkan berbagai project dengan kualitas terbaik. Setiap detail diperhatikan untuk menghadirkan solusi yang optimal.',
      qualityFirst: 'Kualitas Pertama',
      qualityFirstDesc: 'Mengutamakan kualitas daripada kuantitas. Setiap project dibuat dengan standar tinggi dan testing yang menyeluruh.',
      
      // Skills Section
      technicalSkills: 'Keahlian Teknis',
      skillsDescription: 'Kumpulan teknologi dan tools yang saya kuasai untuk mengembangkan solusi digital yang inovatif dan efektif',
      technologies: 'Teknologi',
      alwaysLearning: 'Selalu belajar dan mengikuti perkembangan teknologi terbaru',
      
      // Skills Categories
      frontendFramework: 'Frontend Framework',
      backendFramework: 'Backend Framework',
      cssFramework: 'CSS Framework',
      programmingLanguage: 'Bahasa Pemrograman',
      database: 'Database',
      productivityTool: 'Alat Produktivitas',
      dataAnalysis: 'Analisis Data',
      
      // Skill Descriptions
      nextjsDesc: 'Framework React full-stack untuk aplikasi web modern',
      laravelDesc: 'Framework PHP untuk pengembangan web yang elegan',
      tailwindDesc: 'CSS framework utility-first untuk desain yang fleksibel',
      javascriptDesc: 'Bahasa pemrograman untuk pengembangan web interaktif',
      mysqlDesc: 'Sistem manajemen database relasional',
      wordDesc: 'Pengolah kata untuk dokumentasi profesional',
      excelDesc: 'Spreadsheet untuk analisis data dan perhitungan',
      
      // Skill Levels
      expert: 'Ahli',
      advanced: 'Lanjutan',
      intermediate: 'Menengah',
      beginner: 'Pemula',
      
      // Experience Section
      experienceEducation: 'Pengalaman & Pendidikan',
      experienceDescription: 'Perjalanan karir dan pendidikan yang membentuk skill dan pengalaman saya dalam dunia teknologi',
      all: 'Semua',
      internship: 'Magang',
      education: 'Pendidikan',
      current: 'Saat Ini',
      completed: 'Selesai',
      responsibilities: 'Tanggung Jawab',
      achievements: 'Pencapaian',
      capabilities: 'Kemampuan',
      technologiesTools: 'Teknologi & Tools',
      findMeHere: 'Temukan Saya Di Sini',
      monthsExperience: 'Bulan Pengalaman',
      companies: 'Perusahaan',
      yearsEducation: 'Tahun Pendidikan',
      
      // Experience Data
      cvMandiri: 'CV MANDIRI TEKNISI',
      webDeveloperHelper: 'Web Developer & Helper',
      december2024March2025: 'Desember 2024 - Maret 2025',
      fourMonths: '4 bulan',
      jakarta: 'Jakarta',
      cvMandiriResponsibilities: [
        'Membantu pekerjaan karyawan sebagai helper',
        'Membantu pembuatan website menggunakan PHP',
        'Kolaborasi dalam pengembangan sistem internal',
        'Maintenance dan troubleshooting website'
      ],
      cvMandiriAchievements: [
        'Berhasil mengembangkan website company profile',
        'Meningkatkan efisiensi kerja tim melalui kolaborasi yang baik',
        'Mempelajari best practices dalam web development'
      ],
      
      ptInsvira: 'PT INSVIRA SOLUSI TEKNOLOGI',
      administrativeAssistantMachineOperator: 'Administrative Assistant & Machine Operator',
      december2023September2024: 'Desember 2023 - September 2024',
      tenMonths: '10 bulan',
      ptsviRAResponsibilities: [
        'Membantu pekerjaan karyawan sebagai helper',
        'Melakukan pembelian dan pengelolaan kebutuhan karyawan',
        'Mengelola dan mengatur stok barang',
        'Mengoperasikan mesin laser',
        'Membantu pengelolaan administrasi keuangan PT'
      ],
      ptInsviRAchievements: [
        'Berhasil mengelola inventory dengan akurasi 98%',
        'Meningkatkan efisiensi operasional mesin laser',
        'Mempelajari sistem administrasi perusahaan',
        'Berkontribusi dalam pengelolaan keuangan perusahaan'
      ],
      
      smkn5Jakarta: 'SMKN 5 JAKARTA',
      metalFabricationManufacturing: 'Teknik Fabrikasi Logam & Manufaktur',
      june2021June2025: 'Juni 2021 - Juni 2025',
      fourYears: '4 tahun',
      smkn5Achievements: [
        'Menguasai teknik dasar Microsoft Word dan Excel',
        'Memiliki kemampuan dasar menggunakan mesin laser',
        'Mempelajari dasar bahasa pemrograman JavaScript dan PHP',
        'Menguasai framework Laravel dan CodeIgniter',
        'Mengembangkan kemampuan kerja tim yang solid'
      ],
      
      // Contact Section
      letsConnect: 'Mari Terhubung',
      contactDescription: 'Punya ide menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk diskusi dan peluang baru.',
      readyToChat: '24/7 Siap Chat',
      responseTime: '<1j Waktu Respon',
      friendly: '100% Ramah',
      getInTouch: 'Hubungi Saya',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      github: 'GitHub',
      location: 'Lokasi',
      dropMeALine: 'Kirimkan pesan kapan saja!',
      letsChatInstantly: 'Mari ngobrol langsung!',
      followMyJourney: 'Ikuti perjalanan saya!',
      checkOutMyCode: 'Lihat kode saya!',
      jakartaTimur: 'Jakarta Timur, Indonesia',
      availableForRemoteWork: 'Tersedia untuk kerja remote di seluruh dunia',
      sendMessage: 'Kirim Pesan',
      name: 'Nama',
      message: 'Pesan',
      yourName: 'Nama Anda',
      yourEmail: 'email.anda@contoh.com',
      tellMeAboutProject: 'Ceritakan tentang proyek Anda atau sapa saya!',
      sending: 'Mengirim...',
      lookingForwardToHearing: 'Menantikan kabar dari Anda!',
      
      // Chat
      chatPlaceholder: 'Ketik pesan Anda...',
      chatGreeting: 'Hai! Saya {name}. Ada yang bisa saya bantu hari ini?',
      chatThinking: '{name} sedang berpikir...',
      chatError: '{name} akan bantu jawab ya! Waduh, ada masalah nih. Coba tanya lagi ya!',
      onlineReadyToHelp: 'Online • Siap membantu',
      
      // Quick actions
      quickActions: ['Tentang Saya', 'Keahlian', 'Proyek', 'Kontak'],
      quickActionMessages: {
        'Tentang Saya': 'Ceritakan tentang diri Anda',
        'Keahlian': 'Apa saja keahlian yang Anda miliki?',
        'Proyek': 'Proyek apa saja yang pernah Anda kerjakan?',
        'Kontak': 'Bagaimana cara menghubungi Anda?'
      },
      
      // Footer
      letsCreateSomethingAmazing: 'Mari Ciptakan Sesuatu yang Menakjubkan',
      footerDescription: 'Passionate about web development, WhatsApp bots, dan digital business. Saya suka menjelajahi ide-ide baru, memecahkan masalah, dan menciptakan pengalaman digital yang bermakna.',
      quickLinks: 'Tautan Cepat',
      getInTouchFooter: 'Hubungi Kami',
      availableForWork: 'Tersedia untuk bekerja',
      madeWithLove: 'Dibuat dengan',
      byLangnrxy: 'oleh langnrxy. Hak cipta dilindungi.',
      privacyPolicy: 'Kebijakan Privasi',
      termsOfService: 'Syarat Layanan',
      scrollToTopToExplore: 'Gulir ke atas untuk menjelajah lebih banyak ↗'
    }
  },
  
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    translations: {
      // Navigation
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      
      // Hero Section
      availableForProjects: 'Available for projects',
      viewMyWork: 'View My Work',
      downloadCV: 'Download CV',
      
      // About Section
      getToKnowMe: 'Get to know me',
      aboutMe: 'About Me',
      hobbies: 'Hobbies',
      statistics: 'Statistics',
      helloBrother: 'Hello there! 👋',
      myMission: 'My Mission',
      coreValues: 'Core Values',
      passionateDeveloper: 'Passionate Developer',
      turningIdeasToReality: 'Turning ideas into reality through code, one project at a time.',
      learnMore: 'Learn more',
      yearsExperience: 'Years Experience',
      projectsCompleted: 'Projects Completed',
      clientSatisfaction: 'Client Satisfaction',
      availability: 'Availability',
      coding: 'Coding',
      codingDesc: 'Exploring new technologies and building side projects',
      badminton: 'Badminton',
      badmintonDesc: 'Smash, rally, and passion for the game on the court',
      futsal: 'Futsal',
      futsalDesc: 'Enjoying fast-paced games, teamwork, and strategy on the court',
      gaming: 'Gaming',
      gamingDesc: 'Playing games for fun, relaxation, and exploring virtual worlds with friends',
      coreValuesItems: ['Innovation', 'Quality', 'User-Centric', 'Entrepreneurship', 'Continuous Learning'],
      
      // Projects Section
      featuredProjects: 'Featured Projects',
      allProjects: 'All Projects',
      webApps: 'Web Apps',
      botAI: 'Bot & AI',
      comingSoon: 'Coming Soon',
      greatProjectsComingSoon: 'Great projects are coming soon',
      projectsDescription: 'A collection of projects that reflect my journey and dedication in developing innovative and meaningful digital solutions',
      workingOnExcitingProjects: 'I am currently working on some exciting projects that will be published soon. Stay tuned for my latest works!',
      webApplications: 'Web Applications',
      webAppsDesc: 'Modern web apps with cutting-edge technology',
      aiAutomation: 'AI & Automation',
      aiAutomationDesc: 'Smart bots and automation systems',
      creativeSolutions: 'Creative Solutions',
      creativeSolutionsDesc: 'Creative solutions for digital needs',
      projectsWillBePublished: 'Projects will be published gradually',
      subscribeForUpdates: 'Subscribe for Updates',
      viewProgress: 'View Progress',
      inDevelopment: 'In Development',
      inDevelopmentDesc: 'Currently focused on developing various projects with the best quality. Every detail is considered to deliver optimal solutions.',
      qualityFirst: 'Quality First',
      qualityFirstDesc: 'Prioritizing quality over quantity. Every project is built with high standards and thorough testing.',
      
      // Skills Section
      technicalSkills: 'Technical Skills',
      skillsDescription: 'A collection of technologies and tools that I master to develop innovative and effective digital solutions',
      technologies: 'Technologies',
      alwaysLearning: 'Always learning and following the latest technology developments',
      
      // Skills Categories
      frontendFramework: 'Frontend Framework',
      backendFramework: 'Backend Framework',
      cssFramework: 'CSS Framework',
      programmingLanguage: 'Programming Language',
      database: 'Database',
      productivityTool: 'Productivity Tool',
      dataAnalysis: 'Data Analysis',
      
      // Skill Descriptions
      nextjsDesc: 'Full-stack React framework for modern web applications',
      laravelDesc: 'Elegant PHP framework for web development',
      tailwindDesc: 'Utility-first CSS framework for flexible design',
      javascriptDesc: 'Programming language for interactive web development',
      mysqlDesc: 'Relational database management system',
      wordDesc: 'Word processor for professional documentation',
      excelDesc: 'Spreadsheet for data analysis and calculations',
      
      // Skill Levels
      expert: 'Expert',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      beginner: 'Beginner',
      
      // Experience Section
      experienceEducation: 'Experience & Education',
      experienceDescription: 'Career and educational journey that shaped my skills and experience in the world of technology',
      all: 'All',
      internship: 'Internship',
      education: 'Education',
      current: 'Current',
      completed: 'Completed',
      responsibilities: 'Responsibilities',
      achievements: 'Achievements',
      capabilities: 'Capabilities',
      technologiesTools: 'Technologies & Tools',
      findMeHere: 'Find Me Here',
      monthsExperience: 'Months Experience',
      companies: 'Companies',
      yearsEducation: 'Years Education',
      
      // Experience Data
      cvMandiri: 'CV MANDIRI TEKNISI',
      webDeveloperHelper: 'Web Developer & Helper',
      december2024March2025: 'December 2024 - March 2025',
      fourMonths: '4 months',
      jakarta: 'Jakarta',
      cvMandiriResponsibilities: [
        'Assist employees as helper',
        'Help develop websites using PHP',
        'Collaborate in internal system development',
        'Website maintenance and troubleshooting'
      ],
      cvMandiriAchievements: [
        'Successfully developed company profile website',
        'Improved team work efficiency through good collaboration',
        'Learned web development best practices'
      ],
      
      ptInsvira: 'PT INSVIRA SOLUSI TEKNOLOGI',
      administrativeAssistantMachineOperator: 'Administrative Assistant & Machine Operator',
      december2023September2024: 'December 2023 - September 2024',
      tenMonths: '10 months',
      ptInsviRAResponsibilities: [
        'Assist employees as helper',
        'Purchase and manage employee needs',
        'Manage and organize inventory',
        'Operate laser machines',
        'Assist in company financial administration'
      ],
      ptInsviRAchievements: [
        'Successfully managed inventory with 98% accuracy',
        'Improved laser machine operational efficiency',
        'Learned company administration systems',
        'Contributed to company financial management'
      ],
      
      smkn5Jakarta: 'SMKN 5 JAKARTA',
      metalFabricationManufacturing: 'Metal Fabrication & Manufacturing Engineering',
      june2021June2025: 'June 2021 - June 2025',
      fourYears: '4 years',
      smkn5Achievements: [
        'Mastered basic Microsoft Word and Excel techniques',
        'Have basic laser machine operation skills',
        'Learned JavaScript and PHP programming basics',
        'Mastered Laravel and CodeIgniter frameworks',
        'Developed solid teamwork abilities'
      ],
      
      // Contact Section
      letsConnect: 'Let\'s Connect',
      contactDescription: 'Have an interesting idea or want to collaborate? Don\'t hesitate to contact me! I\'m always open for discussions and new opportunities.',
      readyToChat: '24/7 Ready to Chat',
      responseTime: '<1h Response Time',
      friendly: '100% Friendly',
      getInTouch: 'Get In Touch',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      github: 'GitHub',
      location: 'Location',
      dropMeALine: 'Drop me a line anytime!',
      letsChatInstantly: 'Let\'s chat instantly!',
      followMyJourney: 'Follow my journey!',
      checkOutMyCode: 'Check out my code!',
      jakartaTimur: 'East Jakarta, Indonesia',
      availableForRemoteWork: 'Available for remote work worldwide',
      sendMessage: 'Send Message',
      name: 'Name',
      message: 'Message',
      yourName: 'Your name',
      yourEmail: 'your.email@example.com',
      tellMeAboutProject: 'Tell me about your project or just say hi!',
      sending: 'Sending...',
      lookingForwardToHearing: 'Looking forward to hearing from you!',
      
      // Chat
      chatPlaceholder: 'Type your message...',
      chatGreeting: 'Hi! I\'m {name}. How can I help you today?',
      chatThinking: '{name} is thinking...',
      chatError: '{name} will help you! Oops, there\'s a problem. Please try asking again!',
      onlineReadyToHelp: 'Online • Ready to help',
      
      // Quick actions
      quickActions: ['About Me', 'Skills', 'Projects', 'Contact'],
      quickActionMessages: {
        'About Me': 'Tell me about yourself',
        'Skills': 'What skills do you have?',
        'Projects': 'What projects have you worked on?',
        'Contact': 'How can I contact you?'
      },
      
      // Footer
      letsCreateSomethingAmazing: 'Let\'s Create Something Amazing',
      footerDescription: 'Passionate about web development, WhatsApp bots, and digital business. I love exploring new ideas, solving problems, and creating meaningful digital experiences.',
      quickLinks: 'Quick Links',
      getInTouchFooter: 'Get In Touch',
      availableForWork: 'Available for work',
      madeWithLove: 'Made with',
      byLangnrxy: 'by langnrxy. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      scrollToTopToExplore: 'Scroll to top to explore more ↗'
    }
  },
  
  ja: {
    code: 'ja',
    name: '日本語',
    nativeName: '日本語',
    translations: {
      // Navigation
      home: 'ホーム',
      about: '私について',
      projects: 'プロジェクト',
      skills: 'スキル',
      experience: '経験',
      contact: '連絡先',
      
      // Hero Section
      availableForProjects: 'プロジェクト受付中',
      viewMyWork: '作品を見る',
      downloadCV: 'CVをダウンロード',
      
      // About Section
      getToKnowMe: '私を知ってください',
      aboutMe: '私について',
      hobbies: '趣味',
      statistics: '統計',
      helloBrother: 'こんにちは！👋',
      myMission: '私のミッション',
      coreValues: '核となる価値観',
      passionateDeveloper: '情熱的な開発者',
      turningIdeasToReality: 'アイデアをコードで現実に変える、一つのプロジェクトずつ。',
      learnMore: 'もっと詳しく',
      yearsExperience: '年の経験',
      projectsCompleted: '完了したプロジェクト',
      clientSatisfaction: 'クライアント満足度',
      availability: '対応可能性',
      coding: 'コーディング',
      codingDesc: '新しい技術を探求し、サイドプロジェクトを構築',
      badminton: 'バドミントン',
      badmintonDesc: 'コートでのスマッシュ、ラリー、そしてゲームへの情熱',
      futsal: 'フットサル',
      futsalDesc: 'ペースの速いゲーム、チームワーク、戦略をコートで楽しむ',
      gaming: 'ゲーミング',
      gamingDesc: '楽しみ、リラクゼーション、友達と一緒に仮想世界を探索するためのゲーム',
      coreValuesItems: ['イノベーション', '品質', 'ユーザー中心', '起業家精神', '継続的学習'],
      
      // Projects Section
      featuredProjects: '注目のプロジェクト',
      allProjects: 'すべてのプロジェクト',
      webApps: 'ウェブアプリ',
      botAI: 'ボット & AI',
      comingSoon: '近日公開',
      greatProjectsComingSoon: '素晴らしいプロジェクトが近日公開予定',
      projectsDescription: 'イノベーティブで意味のあるデジタルソリューションを開発する私の旅と献身を反映するプロジェクトのコレクション',
      workingOnExcitingProjects: '現在、いくつかのエキサイティングなプロジェクトに取り組んでおり、まもなく公開予定です。最新作品をお楽しみに！',
      webApplications: 'ウェブアプリケーション',
      webAppsDesc: '最先端技術を使用したモダンなウェブアプリ',
      aiAutomation: 'AI & オートメーション',
      aiAutomationDesc: 'スマートボットと自動化システム',
      creativeSolutions: 'クリエイティブソリューション',
      creativeSolutionsDesc: 'デジタルニーズのためのクリエイティブソリューション',
      projectsWillBePublished: 'プロジェクトは段階的に公開される予定',
      subscribeForUpdates: '更新情報を購読',
      viewProgress: '進捗を見る',
      inDevelopment: '開発中',
      inDevelopmentDesc: '現在、最高品質のさまざまなプロジェクト開発に注力しています。最適なソリューションを提供するため、すべての詳細が考慮されています。',
      qualityFirst: '品質第一',
      qualityFirstDesc: '量より質を優先。すべてのプロジェクトは高い基準と徹底したテストで構築されています。',
      
      // Skills Section
      technicalSkills: '技術スキル',
      skillsDescription: 'イノベーティブで効果的なデジタルソリューションを開発するために習得した技術とツールのコレクション',
      technologies: 'テクノロジー',
      alwaysLearning: '常に学習し、最新の技術開発に追従',
      
      // Skills Categories
      frontendFramework: 'フロントエンドフレームワーク',
      backendFramework: 'バックエンドフレームワーク',
      cssFramework: 'CSSフレームワーク',
      programmingLanguage: 'プログラミング言語',
      database: 'データベース',
      productivityTool: '生産性ツール',
      dataAnalysis: 'データ分析',
      
      // Skill Descriptions
      nextjsDesc: 'モダンなウェブアプリケーション用のフルスタックReactフレームワーク',
      laravelDesc: 'エレガントなウェブ開発用PHPフレームワーク',
      tailwindDesc: 'フレキシブルなデザインのためのユーティリティファーストCSSフレームワーク',
      javascriptDesc: 'インタラクティブなウェブ開発のためのプログラミング言語',
      mysqlDesc: 'リレーショナルデータベース管理システム',
      wordDesc: 'プロフェッショナルドキュメント作成のためのワードプロセッサ',
      excelDesc: 'データ分析と計算のためのスプレッドシート',
      
      // Skill Levels
      expert: 'エキスパート',
      advanced: '上級',
      intermediate: '中級',
      beginner: '初心者',
      
      // Experience Section
      experienceEducation: '経験と教育',
      experienceDescription: 'テクノロジー分野での私のスキルと経験を形成したキャリアと教育の旅',
      all: 'すべて',
      internship: 'インターンシップ',
      education: '教育',
      current: '現在',
      completed: '完了',
      responsibilities: '責任',
      achievements: '成果',
      capabilities: '能力',
      technologiesTools: 'テクノロジー & ツール',
      findMeHere: 'ここで私を見つけてください',
      monthsExperience: 'ヶ月の経験',
      companies: '企業',
      yearsEducation: '年の教育',
      
      // Experience Data
      cvMandiri: 'CV MANDIRI TEKNISI',
      webDeveloperHelper: 'ウェブ開発者 & ヘルパー',
      december2024March2025: '2024年12月 - 2025年3月',
      fourMonths: '4ヶ月',
      jakarta: '東京',
      cvMandiriResponsibilities: [
        '従業員のヘルパーとして支援',
        'PHPを使用したウェブサイト開発の支援',
        '内部システム開発での協力',
        'ウェブサイトのメンテナンスとトラブルシューティング'
      ],
      cvMandiriAchievements: [
        '会社プロフィールウェブサイトの開発に成功',
        '良好な協力によりチーム効率を改善',
        'ウェブ開発のベストプラクティスを学習'
      ],
      
      ptInsvira: 'PT INSVIRA SOLUSI TEKNOLOGI',
      administrativeAssistantMachineOperator: '事務アシスタント & 機械オペレーター',
      december2023September2024: '2023年12月 - 2024年9月',
      tenMonths: '10ヶ月',
      ptInsviRResponsibilities: [
        '従業員のヘルパーとして支援',
        '従業員のニーズの購入と管理',
        '在庫の管理と整理',
        'レーザー機械の操作',
        '会社の財務管理の支援'
      ],
      ptInsviRAchievements: [
        '98%の精度で在庫管理に成功',
        'レーザー機械の運用効率を改善',
        '会社管理システムを学習',
        '会社の財務管理に貢献'
      ],
      
      smkn5Jakarta: 'SMKN 5 JAKARTA',
      metalFabricationManufacturing: '金属加工・製造工学',
      june2021June2025: '2021年6月 - 2025年6月',
      fourYears: '4年',
      smkn5Achievements: [
        'Microsoft WordとExcelの基本技術を習得',
        'レーザー機械操作の基本スキルを保有',
        'JavaScriptとPHPプログラミングの基礎を学習',
        'LaravelとCodeIgniterフレームワークを習得',
        '堅実なチームワーク能力を開発'
      ],
      
      // Contact Section
      letsConnect: 'つながりましょう',
      contactDescription: '面白いアイデアがありますか、それとも協力したいですか？遠慮なくご連絡ください！議論と新しい機会には常にオープンです。',
      readyToChat: '24/7 チャット準備完了',
      responseTime: '<1時間 レスポンス時間',
      friendly: '100% フレンドリー',
      getInTouch: 'お問い合わせ',
      email: 'メール',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      github: 'GitHub',
      location: '場所',
      dropMeALine: 'いつでもメッセージをどうぞ！',
      letsChatInstantly: 'すぐにチャットしましょう！',
      followMyJourney: '私の旅をフォローしてください！',
      checkOutMyCode: '私のコードをチェックしてください！',
      jakartaTimur: '東ジャカルタ、インドネシア',
      availableForRemoteWork: '世界中でリモートワーク対応可能',
      sendMessage: 'メッセージを送信',
      name: '名前',
      message: 'メッセージ',
      yourName: 'お名前',
      yourEmail: 'your.email@example.com',
      tellMeAboutProject: 'プロジェクトについて教えてください！',
      sending: '送信中...',
      lookingForwardToHearing: 'ご連絡をお待ちしています！',
      
      // Chat
      chatPlaceholder: 'メッセージを入力してください...',
      chatGreeting: 'こんにちは！私は{name}です。今日は何かお手伝いできることはありますか？',
      chatThinking: '{name}が考えています...',
      chatError: '{name}がお手伝いします！おっと、問題が発生しました。もう一度お聞きください！',
      onlineReadyToHelp: 'オンライン • お手伝い準備完了',
      
      // Quick actions
      quickActions: ['私について', 'スキル', 'プロジェクト', '連絡先'],
      quickActionMessages: {
        '私について': 'あなたについて教えてください',
        'スキル': 'どのようなスキルをお持ちですか？',
        'プロジェクト': 'どのようなプロジェクトに取り組んでいますか？',
        '連絡先': 'どのように連絡を取ることができますか？'
      },
      
      // Footer
      letsCreateSomethingAmazing: '素晴らしいものを作りましょう',
      footerDescription: 'ウェブ開発、WhatsAppボット、デジタルビジネスに情熱を注いでいます。新しいアイデアを探求し、問題を解決し、意味のあるデジタル体験を創造することが大好きです。',
      quickLinks: 'クイックリンク',
      getInTouchFooter: 'お問い合わせ',
      availableForWork: '仕事対応可能',
      madeWithLove: 'で作られました',
      byLangnrxy: 'by langnrxy. 全著作権所有。',
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
      scrollToTopToExplore: 'トップにスクロールしてもっと探索 ↗'
    }
  }
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang');
    
    // If specific language requested
    if (lang && languages[lang]) {
      return NextResponse.json({
        success: true,
        language: languages[lang]
      });
    }
    
    // Return all languages if no specific language requested
    return NextResponse.json({
      success: true,
      languages: Object.keys(languages).map(code => ({
        code,
        name: languages[code].name,
        nativeName: languages[code].nativeName
      })),
      translations: languages
    });
    
  } catch (error) {
    console.error('Language API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch language data' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { language, key, value } = await request.json();
    
    // This would be where you'd update language translations
    // For now, just return success (in a real app, you'd save to database)
    return NextResponse.json({
      success: true,
      message: 'Language updated successfully'
    });
    
  } catch (error) {
    console.error('Language update error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update language' },
      { status: 500 }
    );
  }
}