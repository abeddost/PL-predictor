import React from 'react';
import { ChevronDown, BarChart3, Target, Users } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('research-question')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-6 hover:from-emerald-200 hover:to-blue-200 transition-all duration-300 hover:scale-110 hover:rotate-3" role="img" aria-label="Analytics chart icon">
              <BarChart3 className="w-12 h-12 text-emerald-600 hover:text-blue-600 transition-colors duration-300" alt="Data analytics and machine learning visualization" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" itemProp="headline">
            Predicting
            <span className="text-emerald-400 block">Premier League</span>
            Success
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed" itemProp="description">
            Using machine learning to identify which players from lower-tier European leagues 
            are most likely to thrive in England's top flight
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3" role="img" aria-label="149 players analyzed statistic">
              <Target className="w-6 h-6 text-emerald-400" alt="Target icon representing analyzed players" />
              <span className="text-lg font-semibold">149 Players Analyzed</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3" role="img" aria-label="3 positions studied statistic">
              <Users className="w-6 h-6 text-amber-400" alt="Users icon representing different player positions" />
              <span className="text-lg font-semibold">3 Positions Studied</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3" role="img" aria-label="Up to 83% accuracy statistic">
              <BarChart3 className="w-6 h-6 text-blue-400" alt="Bar chart icon representing model accuracy" />
              <span className="text-lg font-semibold">Up to 83% Accuracy</span>
            </div>
          </div>
          
          <button
            onClick={scrollToNext}
            className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Explore Our Findings
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  )
};

export default Hero;
