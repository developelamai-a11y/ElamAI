
import React from 'react';
import HeroSection from '../components/HeroSection';
import AIAgentsSection from '../components/AgentSection';
import SolutionsSection from '../components/SolutionSection';
import MultiAgentSection from '../components/MultiAgentSection';

const Homepage = () => {
  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <HeroSection />
      <div id="ai-agents">
        <AIAgentsSection />
      </div>
      <div id="solutions">
        <SolutionsSection />
      </div>
      <div id="platform">
        <MultiAgentSection/>
      </div>
    </div>
  );
};

export default Homepage;
