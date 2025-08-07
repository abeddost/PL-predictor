import React from 'react';
import { Github, Users, ExternalLink, Award } from 'lucide-react';

const TeamCredits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-110 hover:rotate-3">
              <Users className="w-12 h-12 text-blue-600 hover:text-purple-600 transition-colors duration-300" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Team & Credits
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            This research was conducted as part of the MIT Emerging Talent Program, 
            combining data science expertise with passion for European football analytics.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-4 w-fit mx-auto mb-6 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Award className="w-8 h-8 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                MIT Emerging Talent Program
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Collaborative Data Science Project (Group 23) focused on applying 
                machine learning techniques to real-world football analytics challenges.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-4 w-fit mx-auto mb-6 hover:from-emerald-200 hover:to-teal-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                <Github className="w-8 h-8 text-emerald-600 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Open Source Research
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                All code, data analysis, and methodologies are available for review 
                and reproduction by the research community.
              </p>
              <a
                href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Research Components
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Data Exploration</h4>
                <p className="text-sm text-gray-600">
                  Player statistics and transfer dataset analysis
                </p>
                <div className="space-y-1">
                  <a
                    href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/3_data_exploration/Players_Stats_Dataset_Data_Exploration.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 block"
                  >
                    Player Stats Analysis →
                  </a>
                  <a
                    href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/3_data_exploration/transfer_dataset_data_exploration.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 block"
                  >
                    Transfer Dataset Analysis →
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Machine Learning</h4>
                <p className="text-sm text-gray-600">
                  Random Forest models by position
                </p>
                <div className="space-y-1">
                  <a
                    href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/4_data_analysis/rf_predicting_transfer_attackers.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 block"
                  >
                    Attackers Model →
                  </a>
                  <a
                    href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/4_data_analysis/rf_predicting_transfer_midfielders.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 block"
                  >
                    Midfielders Model →
                  </a>
                  <a
                    href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/4_data_analysis/rf_predicting_transfer_defenders.ipynb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 block"
                  >
                    Defenders Model →
                  </a>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Data Labeling</h4>
                <p className="text-sm text-gray-600">
                  Success criteria definition and validation
                </p>
                <a
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/4_data_analysis/labeling_data.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Labeling Notebook →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Technical Report</h4>
                <p className="text-sm text-gray-600">
                  Detailed methodology and results
                </p>
                <a
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/4_data_analysis/technical_report.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  View Technical Report →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Non-Technical Report</h4>
                <p className="text-sm text-gray-600">
                  Accessible findings and insights
                </p>
                <a
                  href="https://github.com/MIT-Emerging-Talent/ET6-CDSP-group-23-repo/blob/main/4_data_analysis/non_technical_report.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  View Non-Technical Report →
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Position Analysis</h4>
                <p className="text-sm text-gray-600">
                  Attackers, midfielders, and defenders
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              © 2025 MIT Emerging Talent Program • Data Science for Football Analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCredits;
