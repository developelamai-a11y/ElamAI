import React from 'react';
import HeroSection from '../components/HeroSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionSection';
import MultiAgentSection from '../components/MultiAgentSection';
import BlogSection from '../components/BlogSection';

const Homepage = () => {
  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <HeroSection />
      <WhyUsSection />
      <div id="ai-agents">
        <ServicesSection />
      </div>
      <div id="solutions">
        <SolutionsSection />
      </div>
      <div id="platform">
        <MultiAgentSection/>
      </div>
      <div id="blog">
        <BlogSection />
      </div>
    </div>
  );
};

export default Homepage;
