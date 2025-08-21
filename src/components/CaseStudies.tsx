import React from 'react';
import { MessageCircle, Users, ShoppingCart, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      icon: MessageCircle,
      title: 'Customer Support Transformation',
      challenge: 'Startup X was overwhelmed by support tickets.',
      solution: 'Elam AI implemented a custom chatbot integrated with their CRM.',
      outcome: '60% faster responses, 24/7 support availability, happier customers.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'HR Workflow Automation',
      challenge: 'An SME spent 200+ hours monthly on employee onboarding.',
      solution: 'Intelligent workflows automated document approval & onboarding processes.',
      outcome: 'Saved over 150 hours monthly, reduced paperwork errors by 80%.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ShoppingCart,
      title: 'Smarter Retail Forecasting',
      challenge: 'A growing retailer struggled with inaccurate sales projections.',
      solution: 'Predictive analytics integrated with POS and ERP systems.',
      outcome: 'Forecast accuracy improved by 40%, leading to better inventory management.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from businesses that transformed their operations with our AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Flowing background gradient */}
                <div className="absolute inset-0 opacity-15">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${caseStudy.color} rounded-full filter blur-2xl transform translate-x-8 -translate-y-8`}></div>
                </div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${caseStudy.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                  {caseStudy.title}
                  </h3>

                  <div className="space-y-4 text-sm">
                  <div>
                      <span className="font-semibold text-red-400">Challenge:</span>
                      <p className="text-gray-300 mt-1">{caseStudy.challenge}</p>
                  </div>

                  <div>
                      <span className="font-semibold text-blue-400">Solution:</span>
                      <p className="text-gray-300 mt-1">{caseStudy.solution}</p>
                  </div>

                  <div>
                      <span className="font-semibold text-green-400">Outcome:</span>
                      <p className="text-gray-300 mt-1">{caseStudy.outcome}</p>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 mx-auto">
            <span>Explore More Success Stories</span>
            <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;