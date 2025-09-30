'use client';
import { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  Github, 
  MapPin, 
  Send, 
  User, 
  Phone,
  ExternalLink,
  Heart,
  Star,
  Zap
} from 'lucide-react';

const ContactSection = ({ 
  isDarkMode = false, 
  currentLanguage = 'id', 
  translations = {} 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  // Get current translation
  const t = (key) => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage].translations[key] || key;
  };

  // Intersection Observer untuk animasi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      id: 'email',
      icon: Mail,
      label: t('email'),
      value: 'rizkygalang729@gmail.com',
      link: 'mailto:rizkygalang729@gmail.com',
      color: 'from-red-500 to-red-600',
      description: t('dropMeALine')
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: t('whatsapp'),
      value: '+62 857-1460-8649',
      link: 'https://wa.me/6285714608649',
      color: 'from-green-500 to-green-600',
      description: t('letsChatInstantly')
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: t('instagram'),
      value: '@langnrxy',
      link: 'https://instagram.com/langnrxy',
      color: 'from-pink-500 to-purple-600',
      description: t('followMyJourney')
    },
    {
      id: 'github',
      icon: Github,
      label: t('github'),
      value: 'langskydev',
      link: 'https://github.com/langskydev',
      color: isDarkMode ? 'from-gray-600 to-gray-800' : 'from-gray-700 to-gray-900',
      description: t('checkOutMyCode')
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message in current language
    const successMessage = currentLanguage === 'id' ? 
      'Pesan berhasil dikirim! Terima kasih sudah menghubungi saya.' :
      currentLanguage === 'en' ? 
      'Message sent successfully! Thank you for contacting me.' :
      'メッセージが正常に送信されました！お問い合わせいただき、ありがとうございます。';
    
    alert(successMessage);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`relative py-20 overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50'
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full opacity-10 ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        } blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-10 ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
        } blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Elements */}
        <div className={`absolute top-40 left-10 w-4 h-4 rounded-full ${
          isDarkMode ? 'bg-cyan-400/30' : 'bg-cyan-400/40'
        } animate-bounce`}></div>
        <div className={`absolute top-60 right-1/4 w-3 h-3 rounded-full ${
          isDarkMode ? 'bg-purple-400/30' : 'bg-purple-400/40'
        } animate-bounce`} style={{ animationDelay: '0.5s' }}></div>
        <div className={`absolute bottom-40 right-10 w-2 h-2 rounded-full ${
          isDarkMode ? 'bg-pink-400/30' : 'bg-pink-400/40'
        } animate-bounce`} style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className={`w-12 h-0.5 ${
              isDarkMode ? 'bg-gradient-to-r from-transparent to-cyan-400' : 'bg-gradient-to-r from-transparent to-cyan-500'
            }`}></div>
            <Zap size={24} className={isDarkMode ? 'text-cyan-400' : 'text-cyan-500'} />
            <div className={`w-12 h-0.5 ${
              isDarkMode ? 'bg-gradient-to-l from-transparent to-purple-400' : 'bg-gradient-to-l from-transparent to-purple-500'
            }`}></div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          } ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            {t('letsConnect')}
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.2s' }}>
            {t('contactDescription')}
          </p>

          {/* Fun Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '0.4s' }}>
              <div className={`text-2xl font-bold ${
                isDarkMode ? 'text-green-400' : 'text-green-500'
              }`}>24/7</div>
              <div className="text-sm">{t('readyToChat')}</div>
            </div>
            <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '0.5s' }}>
              <div className={`text-2xl font-bold ${
                isDarkMode ? 'text-blue-400' : 'text-blue-500'
              }`}>&lt;1h</div>
              <div className="text-sm">{t('responseTime')}</div>
            </div>
            <div className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '0.6s' }}>
              <div className={`text-2xl font-bold ${
                isDarkMode ? 'text-purple-400' : 'text-purple-500'
              }`}>100%</div>
              <div className="text-sm">{t('friendly')}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: '0.3s' }}>
              {t('getInTouch')}
            </h3>

            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={contact.id}
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 transform cursor-pointer ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-8 opacity-0'
                  } ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600' 
                      : 'bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300'
                  } hover:scale-105 hover:shadow-xl`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(contact.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => window.open(contact.link, '_blank')}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${contact.color} transition-opacity duration-300 ${
                    hoveredCard === contact.id ? 'opacity-10' : ''
                  }`}></div>

                  <div className="relative flex items-center space-x-4">
                    {/* Icon */}
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${contact.color} shadow-lg transform transition-transform duration-300 ${
                      hoveredCard === contact.id ? 'scale-110 rotate-3' : ''
                    }`}>
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-lg font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {contact.label}
                        </h4>
                        <ExternalLink size={16} className={`${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        } transition-transform duration-300 ${
                          hoveredCard === contact.id ? 'translate-x-1 -translate-y-1' : ''
                        }`} />
                      </div>
                      <p className={`text-sm font-medium mb-1 ${
                        isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
                      }`}>
                        {contact.value}
                      </p>
                      <p className={`text-xs ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {contact.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${contact.color} mix-blend-overlay`}></div>
                </div>
              );
            })}

            {/* Location Card */}
            <div className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 transform ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-8 opacity-0'
            } ${
              isDarkMode 
                ? 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600' 
                : 'bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300'
            } hover:scale-105 hover:shadow-xl`}
            style={{ transitionDelay: '0.8s' }}
            >
              <div className="relative flex items-center space-x-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg`}>
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className={`text-lg font-semibold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {t('location')}
                  </h4>
                  <p className={`text-sm font-medium mb-1 ${
                    isDarkMode ? 'text-orange-400' : 'text-orange-600'
                  }`}>
                    {t('jakartaTimur')}
                  </p>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {t('availableForRemoteWork')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className={`rounded-2xl p-8 transition-all duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            } ${
              isDarkMode 
                ? 'bg-slate-800/50 border border-slate-700' 
                : 'bg-white/80 border border-gray-200'
            }`} style={{ transitionDelay: '0.5s' }}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('sendMessage')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-cyan-400 focus:border-cyan-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                    placeholder={t('yourName')}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-cyan-400 focus:border-cyan-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                    placeholder={t('yourEmail')}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 resize-none ${
                      isDarkMode
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-cyan-400 focus:border-cyan-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500'
                    }`}
                    placeholder={t('tellMeAboutProject')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isSubmitting
                      ? isDarkMode
                        ? 'bg-slate-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : isDarkMode
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-400'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-500'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>{t('sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('sendMessage')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className={`rounded-2xl overflow-hidden transition-all duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`} style={{ transitionDelay: '0.7s' }}>
              <div className={`p-4 ${
                isDarkMode ? 'bg-slate-800/50 border-b border-slate-700' : 'bg-white/80 border-b border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold flex items-center space-x-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <MapPin size={20} className={isDarkMode ? 'text-orange-400' : 'text-orange-500'} />
                  <span>{t('findMeHere')}</span>
                </h3>
              </div>
              <div className="relative h-64 bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4971547258137!2d106.89850891070525!3d-6.1979485606930504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4bafdf1c2f9%3A0x6800943841ce3600!2sJl.%20Poncol%20Atas%2C%20RW.6%2C%20Kec.%20Pulo%20Gadung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1758429822134!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: isDarkMode ? 'grayscale(1) invert(1)' : 'none' }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="My Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className={`text-center mt-16 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1s' }}>
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full backdrop-blur-sm ${
            isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white/70 border border-gray-200'
          }`}>
            <Heart size={16} className={isDarkMode ? 'text-red-400' : 'text-red-500'} />
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('lookingForwardToHearing')}
            </span>
            <Star size={16} className={isDarkMode ? 'text-yellow-400' : 'text-yellow-500'} />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-px ${
        isDarkMode
          ? 'bg-gradient-to-r from-transparent via-slate-600 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
      }`}></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;