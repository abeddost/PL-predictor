import React from 'react';
import { Lightbulb, TrendingUp, AlertTriangle, Target } from 'lucide-react';

const KeyInsights = () => {
  const insights = [
    {
      title: "Position Matters Significantly",
      description: "Attackers show clear predictable patterns (83% accuracy), while midfielders and defenders are more complex to predict (~62% accuracy).",
      icon: Target,
      type: "confident"
    },
    {
      title: "Modern Football Rewards Versatility", 
      description: "Creative attackers outperform pure scorers, and attack-minded defenders thrive more than traditional stoppers.",
      icon: TrendingUp,
      type: "confident"
    },
    {
      title: "Technical Skills Trump Traditional Metrics",
      description: "Chances created, ball touches, and offensive contribution are better predictors than goals, tackles, or clearances.",
      icon: Lightbulb,
      type: "moderate"
    },
    {
      title: "Sample Size Limitations",
      description: "Small test groups (13-17 players) mean results should be interpreted cautiously and validated with larger datasets.",
      icon: AlertTriangle,
      type: "caution"
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'confident':
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          iconBg: 'bg-emerald-100',
          iconColor: 'text-emerald-600',
          accent: 'text-emerald-700'
        };
      case 'moderate':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200', 
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600',
          accent: 'text-blue-700'
        };
      case 'caution':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          iconBg: 'bg-amber-100', 
          iconColor: 'text-amber-600',
          accent: 'text-amber-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          iconBg: 'bg-gray-100',
          iconColor: 'text-gray-600',
          accent: 'text-gray-700'
        };
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-2xl p-6 hover:from-emerald-200 hover:to-yellow-200 transition-all duration-300 hover:scale-110 hover:rotate-3">
                <Lightbulb className="w-12 h-12 text-emerald-600 hover:text-yellow-600 transition-colors duration-300" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our analysis reveals important patterns for scouts, analysts, and clubs 
              looking to identify Premier League-ready talent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {insights.map((insight, index) => {
              const styles = getTypeStyles(insight.type);
              return (
                <div
                  key={index}
                  className={`${styles.bg} ${styles.border} border rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`rounded-2xl p-4 w-fit mb-6 bg-gradient-to-br ${
                    insight.type === 'confident' ? 'from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200' :
                    insight.type === 'moderate' ? 'from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200' :
                    'from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200'
                  } transition-all duration-300 hover:scale-110 hover:rotate-6 group`}>
                    <insight.icon className={`w-8 h-8 ${
                      insight.type === 'confident' ? 'text-emerald-600 group-hover:text-teal-600' :
                      insight.type === 'moderate' ? 'text-blue-600 group-hover:text-indigo-600' :
                      'text-amber-600 group-hover:text-orange-600'
                    } transition-colors duration-300`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${styles.accent}`}>
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Recommendations for Clubs */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                What This Means for Clubs
              </h3>
              <p className="text-blue-100 text-lg">
                Actionable insights for modern recruitment strategies
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-3 w-fit mb-4 hover:from-emerald-200 hover:to-teal-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                  <Target className="w-6 h-6 text-emerald-600 group-hover:text-teal-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold mb-3">Recruitment Strategy</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Use data modeling for attacker scouting</li>
                  <li>• Combine stats with scouting for other positions</li>
                  <li>• Prioritize technical versatility</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-3 w-fit mb-4 hover:from-amber-200 hover:to-orange-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                  <TrendingUp className="w-6 h-6 text-amber-600 group-hover:text-orange-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold mb-3">Rethink Metrics</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Pure goals/tackles aren't enough</li>
                  <li>• Creative players offer more upside</li>
                  <li>• High-involvement players adapt better</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-3 w-fit mb-4 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 hover:scale-110 hover:rotate-6 group">
                  <Lightbulb className="w-6 h-6 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold mb-3">Future Approach</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Larger datasets for validation</li>
                  <li>• Include advanced metrics (xG, etc.)</li>
                  <li>• Combine with qualitative scouting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInsights;
