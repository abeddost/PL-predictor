import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, BarChart3 } from 'lucide-react';

const PredictiveModels = () => {
  const [activePosition, setActivePosition] = useState('attackers');

  const modelData = {
    attackers: {
      accuracy: 83,
      correct: 11,
      total: 15,
      confusionMatrix: {
        truePositive: 4,
        falsePositive: 2,
        trueNegative: 7,
        falseNegative: 2
      },
      topFeatures: [
        { name: "Chances Created", importance: 0.23 },
        { name: "Accurate Crosses", importance: 0.19 },
        { name: "Key Passes", importance: 0.16 },
        { name: "Dribbles Completed", importance: 0.14 },
        { name: "Goals Scored", importance: 0.12 }
      ],
      color: "red"
    },
    midfielders: {
      accuracy: 62,
      correct: 8,
      total: 13,
      confusionMatrix: {
        truePositive: 3,
        falsePositive: 2,
        trueNegative: 5,
        falseNegative: 3
      },
      topFeatures: [
        { name: "Ball Touches", importance: 0.21 },
        { name: "Pass Success Rate", importance: 0.18 },
        { name: "Interceptions", importance: 0.15 },
        { name: "Progressive Passes", importance: 0.13 },
        { name: "Tackles Won", importance: 0.11 }
      ],
      color: "emerald"
    },
    defenders: {
      accuracy: 62,
      correct: 10,
      total: 17,
      confusionMatrix: {
        truePositive: 3,
        falsePositive: 3,
        trueNegative: 7,
        falseNegative: 4
      },
      topFeatures: [
        { name: "Goals Scored", importance: 0.20 },
        { name: "Shots Taken", importance: 0.17 },
        { name: "Aerial Duels Won", importance: 0.15 },
        { name: "Pass Accuracy", importance: 0.14 },
        { name: "Clearances", importance: 0.12 }
      ],
      color: "blue"
    }
  };

  const currentData = modelData[activePosition as keyof typeof modelData];

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' = 'bg') => {
    const colors = {
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200"
      },
      emerald: {
        bg: "bg-emerald-100", 
        text: "text-emerald-600",
        border: "border-emerald-200"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600", 
        border: "border-blue-200"
      }
    };
    return colors[color as keyof typeof colors][variant];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Brain className="w-12 h-12 text-blue-600 hover:text-purple-600 transition-colors duration-300" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Predictive Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Random Forest models revealed position-specific patterns and key predictors 
              of Premier League success.
            </p>
          </div>

          {/* Position Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(modelData).map(([position, data]) => (
              <button
                key={position}
                onClick={() => setActivePosition(position)}
                className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                  activePosition === position
                    ? `${data.color === 'red' ? 'bg-red-500 text-white' : data.color === 'emerald' ? 'bg-emerald-500 text-white' : 'bg-blue-500 text-white'} shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {position.charAt(0).toUpperCase() + position.slice(1)}
                <span className="ml-2 text-sm opacity-75">
                  {data.accuracy}%
                </span>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Model Performance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className={`rounded-2xl p-2 bg-gradient-to-br ${
                  currentData.color === 'red' ? 'from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200' :
                  currentData.color === 'emerald' ? 'from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200' :
                  'from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200'
                } transition-all duration-300 hover:scale-110 hover:rotate-6 group`}>
                  <BarChart3 className={`w-6 h-6 ${
                    currentData.color === 'red' ? 'text-red-600 group-hover:text-orange-600' :
                    currentData.color === 'emerald' ? 'text-emerald-600 group-hover:text-teal-600' :
                    'text-blue-600 group-hover:text-indigo-600'
                  } transition-colors duration-300`} />
                </div>
                Model Performance
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${getColorClasses(currentData.color, 'text')}`}>
                    {currentData.accuracy}%
                  </div>
                  <div className="text-gray-600">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {currentData.correct}/{currentData.total}
                  </div>
                  <div className="text-gray-600">Correct Predictions</div>
                </div>
              </div>

              {/* Confusion Matrix */}
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Confusion Matrix</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-700 mb-1">
                    {currentData.confusionMatrix.truePositive}
                  </div>
                  <div className="text-xs text-emerald-600">True Positive</div>
                </div>
                <div className="bg-red-100 border border-red-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-700 mb-1">
                    {currentData.confusionMatrix.falsePositive}
                  </div>
                  <div className="text-xs text-red-600">False Positive</div>
                </div>
                <div className="bg-red-100 border border-red-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-red-700 mb-1">
                    {currentData.confusionMatrix.falseNegative}
                  </div>
                  <div className="text-xs text-red-600">False Negative</div>
                </div>
                <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-700 mb-1">
                    {currentData.confusionMatrix.trueNegative}
                  </div>
                  <div className="text-xs text-emerald-600">True Negative</div>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 text-center">
                Predicted vs Actual Success Classification
              </div>
            </div>

            {/* Feature Importance */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Top Predictive Features
              </h3>
              
              <div className="space-y-4">
                {currentData.topFeatures.map((feature, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{feature.name}</span>
                      <span className="text-sm font-semibold text-gray-600">
                        {(feature.importance * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${
                          currentData.color === 'red' ? 'bg-red-500' : 
                          currentData.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${feature.importance * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`mt-8 p-4 rounded-lg ${getColorClasses(currentData.color)} ${getColorClasses(currentData.color, 'border')} border`}>
                <h4 className="font-semibold text-gray-900 mb-2">Key Insight:</h4>
                <p className="text-gray-700 text-sm">
                  {activePosition === 'attackers' && "Creativity metrics outweigh pure goal-scoring ability"}
                  {activePosition === 'midfielders' && "High involvement and passing accuracy are crucial"}
                  {activePosition === 'defenders' && "Offensive contribution surprisingly matters most"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictiveModels;
