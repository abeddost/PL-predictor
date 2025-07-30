import React from 'react';
import { Zap, Target, Activity, Shield } from 'lucide-react';

const ResearchQuestion = () => {
  return (
    <section id="research-question" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-110 hover:rotate-3">
              <Zap className="w-12 h-12 text-blue-600 hover:text-purple-600 transition-colors duration-300" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The Big Question
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12 mb-12">
            <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 italic mb-6">
              "Will this player succeed in the Premier League?"
            </blockquote>
            <p className="text-lg text-gray-600 leading-relaxed">
              When top-tier clubs scout players from lower leagues, they face this crucial decision. 
              Our study used data analysis and machine learning to understand which player attributes 
              best predict Premier League success—and how this varies by position.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="rounded-2xl p-4 w-fit mx-auto mb-4 bg-gradient-to-br from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Target className="w-10 h-10 text-red-600 group-hover:text-orange-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Attackers</h3>
              <p className="text-gray-600 mb-4">50 players analyzed</p>
              <p className="text-sm text-gray-500">Forwards and wingers focused on scoring and creating goals</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="rounded-2xl p-4 w-fit mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Activity className="w-10 h-10 text-emerald-600 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Midfielders</h3>
              <p className="text-gray-600 mb-4">43 players analyzed</p>
              <p className="text-sm text-gray-500">Central and wide midfielders who control the game</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="rounded-2xl p-4 w-fit mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Shield className="w-10 h-10 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Defenders</h3>
              <p className="text-gray-600 mb-4">56 players analyzed</p>
              <p className="text-sm text-gray-500">Center-backs and fullbacks focused on preventing goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchQuestion;
