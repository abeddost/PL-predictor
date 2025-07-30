import React from 'react';
import { Database, Brain, Target, BarChart3 } from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Analyzed 149 players who transferred from lower-tier leagues to the Premier League",
      color: "blue"
    },
    {
      icon: Target,
      title: "Position Segmentation",
      description: "Split players into three groups: Attackers, Midfielders, and Defenders",
      color: "emerald"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Built Random Forest models for each position using 70% training, 30% testing",
      color: "amber"
    },
    {
      icon: BarChart3,
      title: "Performance Analysis",
      description: "Evaluated model accuracy and identified key predictive features",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      emerald: "bg-emerald-100 text-emerald-600",
      amber: "bg-amber-100 text-amber-600",
      red: "bg-red-100 text-red-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combined comprehensive data analysis with machine learning to uncover 
              the patterns that predict Premier League success across different positions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`rounded-2xl p-4 w-fit mx-auto mb-6 bg-gradient-to-br ${
                  step.color === 'blue' ? 'from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200' :
                  step.color === 'emerald' ? 'from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200' :
                  step.color === 'amber' ? 'from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200' :
                  'from-red-100 to-pink-100 hover:from-red-200 hover:to-pink-200'
                } transition-all duration-300 hover:scale-110 hover:rotate-6 group`}>
                  <step.icon className={`w-8 h-8 ${
                    step.color === 'blue' ? 'text-blue-600 group-hover:text-indigo-600' :
                    step.color === 'emerald' ? 'text-emerald-600 group-hover:text-teal-600' :
                    step.color === 'amber' ? 'text-amber-600 group-hover:text-orange-600' :
                    'text-red-600 group-hover:text-pink-600'
                  } transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Success Definition
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We defined success as players who achieved both:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-100 rounded-full p-1">
                      <Target className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">Average rating ≥ 6.7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-emerald-100 rounded-full p-1">
                      <Target className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">Minimum 1,000 minutes played</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Dataset Split</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Training Data</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Testing Data</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
