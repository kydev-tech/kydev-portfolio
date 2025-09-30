import React from 'react';

const KydevLogo = ({ isDarkMode = false }) => {
  return (
    <div className="relative group cursor-pointer">
      {/* Main Logo Container */}
      <div className="relative">
        {/* Background Glow Effect */}
        <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500' 
            : 'bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400'
        }`}></div>

        {/* Logo Text */}
        <div className="relative flex items-center space-x-0.5">
          {/* K Letter */}
          <div className="relative overflow-hidden">
            <span className={`text-3xl md:text-4xl font-black tracking-tight transform transition-all duration-300 group-hover:scale-110 inline-block ${
              isDarkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-600'
            }`}
            style={{
              animation: 'slideInLeft 0.6s ease-out',
              textShadow: isDarkMode ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 0 20px rgba(37, 99, 235, 0.3)'
            }}>
              K
            </span>
            {/* Animated underline for K */}
            <div className={`absolute bottom-0 left-0 h-1 rounded-full ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            style={{
              width: '0%',
              animation: 'expandWidth 0.8s ease-out 0.2s forwards'
            }}></div>
          </div>

          {/* Y Letter */}
          <div className="relative overflow-hidden">
            <span className={`text-3xl md:text-4xl font-black tracking-tight transform transition-all duration-300 group-hover:scale-110 inline-block ${
              isDarkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-400' 
                : 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600'
            }`}
            style={{
              animation: 'slideInLeft 0.6s ease-out 0.1s backwards',
              textShadow: isDarkMode ? '0 0 20px rgba(6, 182, 212, 0.5)' : '0 0 20px rgba(8, 145, 178, 0.3)'
            }}>
              Y
            </span>
          </div>

          {/* DEV Letters Container */}
          <div className="relative flex items-center">
            {/* D Letter */}
            <span className={`text-3xl md:text-4xl font-black tracking-tight transform transition-all duration-300 group-hover:scale-110 inline-block ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{
              animation: 'fadeInUp 0.6s ease-out 0.2s backwards'
            }}>
              D
            </span>

            {/* E Letter */}
            <span className={`text-3xl md:text-4xl font-black tracking-tight transform transition-all duration-300 group-hover:scale-110 inline-block ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{
              animation: 'fadeInUp 0.6s ease-out 0.3s backwards'
            }}>
              E
            </span>

            {/* V Letter */}
            <span className={`text-3xl md:text-4xl font-black tracking-tight transform transition-all duration-300 group-hover:scale-110 inline-block ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{
              animation: 'fadeInUp 0.6s ease-out 0.4s backwards'
            }}>
              V
            </span>

            {/* Animated dot after DEV */}
            <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ml-0.5 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                : 'bg-gradient-to-r from-blue-600 to-cyan-600'
            }`}
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}></div>
          </div>
        </div>

        {/* Animated line below logo */}
        <div className={`absolute -bottom-1 left-0 h-0.5 rounded-full ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-transparent' 
            : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-transparent'
        }`}
        style={{
          width: '0%',
          animation: 'expandWidth 1s ease-out 0.5s forwards'
        }}></div>
      </div>

      {/* Floating particles effect on hover */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode ? 'bg-cyan-400' : 'bg-cyan-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes expandWidth {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.5);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default KydevLogo;