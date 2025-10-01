'use client';
import React, { useState } from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Users, Globe, Shield, ArrowLeft, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsOfService() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  const lastUpdated = "October 1, 2025";

  const sections = [
    {
      id: 'acceptance',
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
      list: [
        'These Terms constitute a legally binding agreement between you and us',
        'Your continued use of the website constitutes acceptance of these Terms',
        'We reserve the right to modify these Terms at any time',
        'You are responsible for reviewing these Terms periodically'
      ]
    },
    {
      id: 'use-license',
      icon: Scale,
      title: 'Use License',
      content: `Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only.`,
      list: [
        'This is the grant of a license, not a transfer of title',
        'You may not modify or copy the materials',
        'You may not use the materials for commercial purposes',
        'You may not attempt to decompile or reverse engineer any software',
        'You may not remove any copyright or proprietary notations',
        'This license shall automatically terminate if you violate any restrictions'
      ]
    },
    {
      id: 'user-responsibilities',
      icon: Users,
      title: 'User Responsibilities',
      content: `As a user of this website, you agree to use the service responsibly and in accordance with all applicable laws.`,
      list: [
        'Provide accurate and complete information when required',
        'Maintain the security of your account credentials',
        'Not engage in any activity that disrupts or interferes with the website',
        'Not use the website for any illegal or unauthorized purpose',
        'Not transmit any malicious code or harmful content',
        'Respect intellectual property rights of others',
        'Not impersonate any person or entity'
      ]
    },
    {
      id: 'intellectual-property',
      icon: Briefcase,
      title: 'Intellectual Property',
      content: `All content included on this website, such as text, graphics, logos, images, and software, is the property of the website owner or its content suppliers.`,
      list: [
        'All website content is protected by copyright laws',
        'Trademarks and logos are protected marks',
        'Unauthorized use of website content is prohibited',
        'User-generated content remains the property of the user',
        'By posting content, you grant us a license to use, modify, and display it',
        'You represent that you own or have rights to any content you post'
      ]
    },
    {
      id: 'disclaimer',
      icon: AlertTriangle,
      title: 'Disclaimer',
      content: `The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.`,
      list: [
        'We do not warrant that the website will be uninterrupted or error-free',
        'We do not warrant the accuracy or reliability of materials',
        'We do not guarantee that defects will be corrected',
        'We do not warrant that the website is free of viruses or harmful components',
        'Use of the website is at your own risk',
        'We are not responsible for any damages resulting from use of the website'
      ]
    },
    {
      id: 'limitations',
      icon: XCircle,
      title: 'Limitations of Liability',
      content: `In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the website.`,
      list: [
        'We are not liable for any direct, indirect, or consequential damages',
        'We are not liable for any loss of profits or business opportunities',
        'We are not liable for any data loss or corruption',
        'Our total liability shall not exceed the amount you paid to access the service',
        'Some jurisdictions do not allow limitations on liability',
        'These limitations apply to the fullest extent permitted by law'
      ]
    },
    {
      id: 'third-party-links',
      icon: Globe,
      title: 'Third-Party Links',
      content: `Our website may contain links to third-party websites or services that are not owned or controlled by us.`,
      list: [
        'We have no control over third-party websites',
        'We are not responsible for the content of external sites',
        'We do not endorse or assume responsibility for third-party content',
        'You access third-party links at your own risk',
        'Third-party websites have their own terms and privacy policies',
        'We encourage you to review the terms of any third-party website you visit'
      ]
    },
    {
      id: 'termination',
      icon: XCircle,
      title: 'Termination',
      content: `We may terminate or suspend your access to our website immediately, without prior notice, for any reason whatsoever.`,
      list: [
        'We reserve the right to refuse service to anyone',
        'We may terminate access for violations of these Terms',
        'All provisions of the Terms survive termination',
        'Upon termination, your right to use the website ceases immediately',
        'We are not liable for any termination of your access',
        'You may terminate your use at any time by discontinuing access'
      ]
    },
    {
      id: 'governing-law',
      icon: Scale,
      title: 'Governing Law',
      content: `These Terms shall be governed and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.`,
      list: [
        'Indonesian law governs these Terms',
        'Any disputes shall be resolved in Indonesian courts',
        'If any provision is invalid, the remaining provisions remain in effect',
        'Our failure to enforce any right does not constitute a waiver',
        'These Terms constitute the entire agreement between you and us',
        'No third party beneficiaries are created by these Terms'
      ]
    },
    {
      id: 'changes',
      icon: FileText,
      title: 'Changes to Terms',
      content: `We reserve the right to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.`,
      list: [
        'We will notify users of any material changes',
        'Changes become effective immediately upon posting',
        'Your continued use after changes constitutes acceptance',
        'We may update these Terms to reflect changes in our practices',
        'The "Last Updated" date indicates when changes were made',
        'We encourage you to review these Terms regularly'
      ]
    },
    {
      id: 'contact',
      icon: Shield,
      title: 'Contact Information',
      content: `If you have any questions about these Terms of Service, please contact us:`,
      contact: {
        email: 'rizkygalang729@gmail.com',
        location: 'Jakarta, Indonesia'
      }
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'
    } transition-colors duration-300`}>
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-20 w-96 h-96 ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
        } rounded-full blur-3xl animate-pulse delay-1000`}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Back Button & Theme Toggle */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.back()}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              isDarkMode 
                ? 'bg-slate-800 hover:bg-slate-700 text-gray-300' 
                : 'bg-white hover:bg-gray-100 text-gray-700'
            } transition-all duration-300 shadow-lg hover:scale-105`}
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-full ${
              isDarkMode 
                ? 'bg-slate-800 hover:bg-slate-700' 
                : 'bg-white hover:bg-gray-100'
            } transition-all duration-300 shadow-lg hover:scale-110`}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mb-6 shadow-2xl">
            <FileText size={40} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            Please read these terms carefully before using our website
          </p>
          
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
            isDarkMode ? 'bg-slate-800/50' : 'bg-gray-100'
          }`}>
            <CheckCircle size={16} className="text-green-400" />
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Last Updated: {lastUpdated}
            </span>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <div
                key={section.id}
                className={`${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-700' 
                    : 'bg-white border-gray-200'
                } border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  isActive ? 'shadow-2xl' : 'shadow-lg'
                }`}
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-opacity-80 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                        : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    } shadow-lg`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-left">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className={`transform transition-transform duration-300 ${
                    isActive ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  isActive ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <p className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } leading-relaxed mb-4`}>
                      {section.content}
                    </p>

                    {section.list && (
                      <ul className="space-y-3">
                        {section.list.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contact && (
                      <div className={`mt-6 p-4 rounded-xl ${
                        isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'
                      }`}>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Shield size={16} className="text-purple-400" />
                            <a 
                              href={`mailto:${section.contact.email}`}
                              className="text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              {section.contact.email}
                            </a>
                          </div>
                          <div className={`flex items-center space-x-2 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <span>📍</span>
                            <span>{section.contact.location}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Notice */}
        <div className={`mt-12 p-6 rounded-2xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-800/30' 
            : 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200'
        }`}>
          <div className="flex items-start space-x-4">
            <AlertTriangle size={24} className="text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
                By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use this website. We reserve the right to update these terms at any time, and your continued use of the website constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2025 Made with ❤️ by Langnrxy
          </p>
        </div>
      </div>
    </div>
  );
}