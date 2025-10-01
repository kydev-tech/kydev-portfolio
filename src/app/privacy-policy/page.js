'use client';
import React, { useState } from 'react';
import { Shield, Lock, Eye, Database, Cookie, Mail, FileText, AlertCircle, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicy() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  const lastUpdated = "October 1, 2025";

  const sections = [
    {
      id: 'introduction',
      icon: Shield,
      title: 'Introduction',
      content: `This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.`
    },
    {
      id: 'information-collection',
      icon: Database,
      title: 'Information We Collect',
      content: `We may collect information about you in a variety of ways. The information we may collect on the Site includes:`,
      list: [
        'Personal Data: Name, email address, and contact information you voluntarily provide',
        'Usage Data: Information about how you use our website, products and services',
        'Device Data: Information about your computer or mobile device',
        'Location Data: General location information based on your IP address'
      ]
    },
    {
      id: 'information-use',
      icon: Eye,
      title: 'How We Use Your Information',
      content: `We use the information we collect in the following ways:`,
      list: [
        'To provide, operate, and maintain our website',
        'To improve, personalize, and expand our website',
        'To understand and analyze how you use our website',
        'To develop new products, services, features, and functionality',
        'To communicate with you for customer service and support',
        'To send you updates and marketing communications',
        'To prevent fraud and enhance security'
      ]
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: 'Cookies and Tracking Technologies',
      content: `We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
      list: [
        'Essential Cookies: Required for basic website functionality',
        'Analytics Cookies: Help us understand how visitors interact with our website',
        'Preference Cookies: Remember your settings and preferences',
        'Marketing Cookies: Track your activity for advertising purposes'
      ]
    },
    {
      id: 'data-security',
      icon: Lock,
      title: 'Data Security',
      content: `We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
      list: [
        'Encryption of data in transit using SSL/TLS',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication measures',
        'Regular backups and disaster recovery procedures'
      ]
    },
    {
      id: 'third-party',
      icon: ExternalLink,
      title: 'Third-Party Services',
      content: `We may share your information with third parties in the following situations:`,
      list: [
        'Service Providers: Companies that provide services on our behalf',
        'Analytics Partners: To help us understand website usage',
        'Legal Requirements: When required by law or to protect our rights',
        'Business Transfers: In connection with a merger or acquisition'
      ]
    },
    {
      id: 'your-rights',
      icon: FileText,
      title: 'Your Privacy Rights',
      content: `Depending on your location, you may have certain rights regarding your personal information:`,
      list: [
        'Access: Request a copy of your personal data',
        'Correction: Request correction of inaccurate data',
        'Deletion: Request deletion of your personal data',
        'Opt-Out: Opt out of marketing communications',
        'Data Portability: Request transfer of your data',
        'Withdraw Consent: Withdraw consent at any time'
      ]
    },
    {
      id: 'children',
      icon: AlertCircle,
      title: "Children's Privacy",
      content: `Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`
    },
    {
      id: 'contact',
      icon: Mail,
      title: 'Contact Us',
      content: `If you have any questions or concerns about this Privacy Policy, please contact us at:`,
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
        <div className={`absolute top-20 left-20 w-96 h-96 ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-20 w-96 h-96 ${
          isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6 shadow-2xl">
            <Shield size={40} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            Your privacy is important to us
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

        {/* Privacy Sections */}
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
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
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
                            <Mail size={16} className="text-blue-400" />
                            <a 
                              href={`mailto:${section.contact.email}`}
                              className="text-blue-400 hover:text-blue-300 transition-colors"
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
            ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
        }`}>
          <div className="flex items-start space-x-4">
            <AlertCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Important Notice</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm leading-relaxed`}>
                We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
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