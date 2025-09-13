import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Mail, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';


// Mock BlurText component since it's not available
const BlurText = ({ text, className, onAnimationComplete, ...props }) => {
  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0, filter: 'blur(4px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
      {...props}
    >
      {text}
    </motion.span>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleAnimationComplete = () => {
    console.log('Heading animation completed');
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const automationServices = [
    {
      icon: MessageSquare,
      title: "Chat Automation",
      description: "Intelligent customer support across all platforms",
    },
    {
      icon: Mail,
      title: "Email Management", 
      description: "Smart email routing and automated responses",
    },
    {
      icon: Settings,
      title: "Custom AI Agents",
      description: "Tailored automation solutions for your business needs",
    }
  ];

  if (!isVisible) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" />;
  }

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden font-sans"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none"
              animate={{
                x: mousePosition.x * 0.2,
                y: mousePosition.y * 0.2,
              }}
              transition={{ type: "spring", stiffness: 30, damping: 60 }}
              style={{ left: "20%", top: "20%", willChange: "transform" }}
            />
            <motion.div
              className="absolute w-80 h-80 bg-purple-500/6 rounded-full blur-3xl pointer-events-none"
              animate={{
                x: mousePosition.x * 0.15,
                y: mousePosition.y * 0.15,
              }}
              transition={{ type: "spring", stiffness: 20, damping: 70 }}
              style={{ right: "15%", bottom: "30%", willChange: "transform" }}
            />
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="pt-20 sm:pt-32 lg:pt-40 pb-12">
        <div className="text-center max-w-4xl mx-auto">
              {/* Headline */}
              <motion.div className="mb-6" variants={itemVariants}>
                <BlurText
                  text="Enterprise AI Automation Solutions"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-tight"
                />
              </motion.div>

              {/* Subtitle */}
              <motion.div className="mb-8" variants={itemVariants}>
                <BlurText
                  text="Deploy intelligent automation agents that streamline customer service, sales processes, and business operations with precision and reliability."
                  className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light"
                />
              </motion.div>

              {/* Benefits - Responsive Layout */}
              <motion.div className="mb-8 sm:mb-10 border-b-0" variants={itemVariants}>
                {/* Mobile Layout: 2 items first row, 1 item second row */}
                <div className="flex flex-col sm:hidden space-y-3">
                  <div className="flex justify-center items-center gap-6">
                    <div className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="font-light text-sm">
                        24/7 Automation
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="font-light text-sm">
                        Instant Responses
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center space-x-2 text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="font-light text-sm">Multi-Platform</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout: All items in one row */}
                <div className="hidden sm:flex justify-center items-center gap-8">
                  <div className="flex items-center space-x-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-light">24/7 Automation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-light">Instant Responses</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-light">Multi-Platform</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div className="mb-16 sm:mb-20" variants={itemVariants}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Link
                    to="/platform/ai-agent-platform"
                    className="inline-flex items-center justify-center bg-white/95 text-black px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl group hover:bg-white/90"
                  >
                    <span>Explore Platform</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.div>
  );
};

export default HeroSection;